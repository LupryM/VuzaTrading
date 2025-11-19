import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend client using your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Replace these with your actual emails
const SENDER_EMAIL = "onboarding@resend.dev"; // Must be verified in Resend
const RECIPIENT_EMAIL = "lm.studios.web@gmail.com";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const { error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `Quote Request from ${name}`,
      html: `
        <h2>Quote Request Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <hr>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}
