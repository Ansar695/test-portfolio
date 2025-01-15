import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export async function POST(req) {
  try {
    const body = await req.json();

    const { sectionTitle, sectionDesc, experiences } = body;

    // Validate required fields
    if (!sectionTitle || !sectionDesc || !Array.isArray(experiences)) {
      return new Response(
        JSON.stringify({
          error: "Section title, description, and experiences are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create "My Experience" section with related experiences
    const newSection = await prisma.myExperience.create({
      data: {
        sectionTitle,
        sectionDesc,
        experiences: {
          create: experiences.map((exp) => ({
            startDate: exp.startDate,
            endDate: exp.endDate,
            bigTitle: exp.bigTitle,
            smallTitle: exp.smallTitle,
            description: exp.description,
          })),
        },
      },
      include: { experiences: true }, // Include related experiences in the response
    });

    return new Response(
      JSON.stringify({
        message: "My Experience section added successfully",
        data: newSection,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in POST /api/my-experience:", error.message);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}


// GET: Retrieve the "My Experience" section with all experiences
export async function GET() {
  try {
    const myExperience = await prisma.myExperience.findFirst({
      include: { experiences: true }, // Include related experiences
    });

    if (!myExperience) {
      return new Response(
        JSON.stringify({ error: "My Experience section not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(myExperience), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET /api/my-experience:", error.message);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}
