import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function POST(req) {
  try {
    const body = await req.json();

    const { title, description, address, phone, email, website, name, message } = body;

    if (name && message) {
      
      const contactSection = await prisma.contactMe.findFirst();

      if (!contactSection) {
        return new Response(
          JSON.stringify({ error: "Contact section not found" }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }

      const newMessage = await prisma.message.create({
        data: {
          name,
          message,
          contactMeId: contactSection.id,
        },
      });

      return new Response(
        JSON.stringify({
          message: "User message saved successfully",
          data: newMessage,
        }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } else if (title && description && address && phone && email && website) {
    
      const newContactMe = await prisma.contactMe.create({
        data: {
          title,
          description,
          address,
          phone,
          email,
          website,
        },
      });

      return new Response(
        JSON.stringify({
          message: "Contact Me section added successfully",
          data: newContactMe,
        }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: "Invalid input. Provide either section fields or user inputs.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error in POST /api/contact-me:", error.message);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const contactMe = await prisma.contactMe.findFirst({
      include: { messages: true },
    });

    if (!contactMe) {
      return new Response(
        JSON.stringify({ error: "Contact Me section not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(contactMe), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET /api/contact-me:", error.message);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}
