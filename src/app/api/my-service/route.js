import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST: Create a new "My Service" section or add services
export async function POST(req) {
  try {
    const body = await req.json();

    const { sectionTitle, sectionDesc, services } = body;

    // Validate required fields
    if (!sectionTitle || !sectionDesc || !Array.isArray(services)) {
      return new Response(
        JSON.stringify({
          error: "Section title, description, and services are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create the "My Service" section and related services
    const newSection = await prisma.myService.create({
      data: {
        sectionTitle,
        sectionDesc,
        services: {
          create: services.map((service) => ({
            title: service.title,
            description: service.description,
          })),
        },
      },
      include: { services: true }, // Include related services in response
    });

    return new Response(
      JSON.stringify({
        message: "My Service section added successfully",
        data: newSection,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in POST /api/my-service:", error.message);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// GET: Retrieve the "My Service" section with all services
export async function GET() {
  try {
    const myService = await prisma.myService.findFirst({
      include: { services: true }, // Include related services
    });

    if (!myService) {
      return new Response(
        JSON.stringify({ error: "My Service section not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(myService), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET /api/my-service:", error.message);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}
