import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_TO = process.env.CONTACT_RECIPIENT || "atharvaenergies@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER || "";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "";

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, interest, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !interest || !message) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const interestLabels: Record<string, string> = {
      solar: "Solar Panels",
      battery: "Battery Packs",
      system: "Custom System",
      partnership: "Partnership",
      other: "Other",
    };

    const interestLabel = interestLabels[interest] || interest;
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1A1A2E; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #F5A623; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
          <p style="color: #9ca3af; margin: 4px 0 0 0; font-size: 13px;">Received on ${timestamp} (IST)</p>
        </div>
        <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 130px; vertical-align: top;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #1f2937;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;"><a href="mailto:${email}" style="color: #0066CC;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;"><a href="tel:${phone}" style="color: #0066CC;">${phone}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${company || "—"}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; vertical-align: top;">Interest</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><span style="background: #F5A623; color: white; padding: 2px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">${interestLabel}</span></td></tr>
          </table>
          <div style="margin-top: 16px; background: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px;">
            <p style="color: #6b7280; font-size: 12px; margin: 0 0 8px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="color: #1f2937; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin: 20px 0 0 0; font-size: 12px; color: #9ca3af;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `;

    // Check if env vars are configured
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      // Log for development, but still return success to avoid breaking the UX
      console.log("📧 Contact Form Submission (email not configured):", {
        name, email, phone, company, interest: interestLabel, message, timestamp,
      });
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Atharva Energy Website" <${GMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Enquiry: ${interestLabel} — ${name}`,
      html: htmlBody,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || "—"}\nInterest: ${interestLabel}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {
        message:
          "Something went wrong. Please try again or email us directly at atharvaenergies@gmail.com",
      },
      { status: 500 }
    );
  }
}
