import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, dealershipName, email, phone, message } = body;

    if (!fullName || !dealershipName || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "developer@innovativemojo.com",
        pass: "jpbm kont qejt cbfe",
      },
    });

    const mailOptionToYou = {
      from: normalizedEmail,
      to: "sales@dealerautopilot.com, developer@innovativemojo.com",
      subject: "Dealer AutoPilot Form Submission",
      html: `
        <h3>Dealer AutoPilot Contact Form Submission</h3>
        <ul>
          <li>Full Name: ${fullName}</li>
          <li>Dealership Name: ${dealershipName}</li>
          <li>Email: ${normalizedEmail}</li>
          <li>Phone: ${phone}</li>
          <li>Message: ${message}</li>
        </ul>
      `,
    };

    // const mailOptionToUser = {
    //   from: "EEE CORP GROUP <developer@innovativemojo.com>",
    //   to: normalizedEmail,
    //   subject: "Thank You for Contacting Us",
    //   html: `
    //     <h3>Dear ${fullName},</h3>
    //     <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
    //     <p>Best regards,</p>
    //     <p>EEE Corp,</p>
    //   `,
    // };

    await transporter.sendMail(mailOptionToYou);
    // await transporter.sendMail(mailOptionToUser);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        message: "An error occurred. Please try again later.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
