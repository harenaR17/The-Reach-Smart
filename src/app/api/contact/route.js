import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, website, processCategory, message, lang } = body;

    // Server-side validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn("WEBHOOK_URL environment variable is not defined.");
      // Fallback for development testing or if webhook is not set yet
      // In production it should fail or use a placeholder
      return NextResponse.json(
        { success: true, message: "Mock success (WEBHOOK_URL is not set)." },
        { status: 200 }
      );
    }

    // Proxy the request to the hidden webhook URL
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company: company || "N/A",
        website: website || "N/A",
        process_requested: processCategory || "N/A",
        message: message || "No message provided",
        language: lang || "bg",
        source: "Reach Smart Website Contact Form",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Webhook returned status ${response.status}: ${errorText}`);
      throw new Error(`Webhook responded with status ${response.status}`);
    }

    // Verify the webhook confirmed the lead was saved
    let webhookData;
    try {
      webhookData = await response.json();
    } catch {
      console.error("Webhook response was not valid JSON");
      return NextResponse.json(
        { error: "Unexpected response from the server. Please try again." },
        { status: 502 }
      );
    }

    if (webhookData?.status !== "submitted") {
      console.error("Webhook did not confirm submission:", webhookData);
      return NextResponse.json(
        { error: "The server could not confirm your submission. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
