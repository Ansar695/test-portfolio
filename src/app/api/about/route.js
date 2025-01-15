import { PrismaClient } from '@prisma/client';
import cloudinary from '@/lib/cloudinary';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();

    const { title, description, images } = body;

    
    if (!title || !description || !images || !Array.isArray(images) || images.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Title, description, and images are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    
    const uploadToCloudinary = (base64Image) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          base64Image,
          { folder: 'about_images' },
          (error, result) => {
            if (error) {
              console.error('Cloudinary Upload Error:', error.message);
              return reject(error);
            }
            resolve(result.secure_url); 
          }
        );
      });
    };

    
    const uploadedImages = await Promise.all(
      images.map((image) => uploadToCloudinary(image))
    );

    
    const newAbout = await prisma.about.create({
      data: {
        title,
        description,
        images: {
          create: uploadedImages.map((url) => ({
            url,
          })),
        },
      },
      include: { images: true }, 
    });

    return new Response(
      JSON.stringify({
        message: 'About section created successfully',
        data: newAbout,
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in POST /api/about:', error.message);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}


export async function GET() {
  try {
    const about = await prisma.about.findFirst({
      include: { images: true }, 
    });

    if (!about) {
      return new Response(
        JSON.stringify({ error: 'About section not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify(about), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in GET /api/about:', error.message);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}
