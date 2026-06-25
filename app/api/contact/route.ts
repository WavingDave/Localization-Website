import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY fehlt");
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const { name, email, budget, deadline, wordCount, message } = body;

    await resend.emails.send({
      from: "Locsmith <contact@locsmith.de>",
      to: ["contact@locsmith.de"],
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Projektanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Deadline:</strong> ${deadline}</p>
        <p><strong>Wortanzahl:</strong> ${wordCount}</p>
        <h3>Projektbeschreibung</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Fehler beim Senden" }, { status: 500 });
  }
}
