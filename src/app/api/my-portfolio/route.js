import { PrismaClient } from '@prisma/client';
import cloudinary from '@/lib/cloudinary';

const prisma = new PrismaClient();



export async function POST(req) {
  try {
    const body = await req.json();

    const { title, description, images } = body;

    // Validate input
    if (!title || !description || !images || !Array.isArray(images) || images.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Title, description, and images are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Helper function to upload images to Cloudinary
    const uploadToCloudinary = (base64Image) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          base64Image,
          { folder: 'portfolio_images' }, // Folder in Cloudinary
          (error, result) => {
            if (error) {
              console.error('Cloudinary Upload Error:', error.message);
              return reject(error);
            }
            resolve(result.secure_url); // Return the secure URL of the uploaded image
          }
        );
      });
    };

    // Upload all images to Cloudinary and get their URLs
    const uploadedImages = await Promise.all(images.map((image) => uploadToCloudinary(image)));

    // Create portfolio entry in the database
    const newPortfolio = await prisma.portfolio.create({
      data: {
        title,
        description,
        images: {
          create: uploadedImages.map((url) => ({
            url,
          })),
        },
      },
      include: { images: true }, // Include related images in the response
    });

    return new Response(
      JSON.stringify({
        message: 'Portfolio created successfully',
        data: newPortfolio,
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in POST /api/my-portfolio:', error.message);
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
    const portfolio = await prisma.portfolio.findFirst({
      include: {
        images: true,
      },
    });
    if (!portfolio) {
      return new Response(
        JSON.stringify({ error: 'Portfolio not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }
    return new Response(JSON.stringify(portfolio), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in GET /api/my-portfolio:', error.message);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}