import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, budget, deadline, wordCount, message } = body;
    const requiredEnv = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USER",
      "SMTP_PASS",
    ] as const;
    const missingEnv = requiredEnv.filter((key) => !process.env[key]);

    if (missingEnv.length > 0) {
      throw new Error(
        `Missing SMTP environment variables: ${missingEnv.join(", ")}`,
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Locsmith Localization" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New inquiry from ${name}`,

      html: `
        <div style="font-family:Arial,sans-serif">
          <h2>New Project Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget || "-"}</p>
          <p><strong>Deadline:</strong> ${deadline || "-"}</p>
          <p><strong>Word Count:</strong> ${wordCount || "-"}</p>

          <hr>

          <h3>Project Description</h3>

          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Contact form email failed:", {
        message: error.message,
        code: "code" in error ? error.code : undefined,
        response: "response" in error ? error.response : undefined,
        responseCode: "responseCode" in error ? error.responseCode : undefined,
      });
    } else {
      console.error("Contact form email failed:", error);
    }

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
