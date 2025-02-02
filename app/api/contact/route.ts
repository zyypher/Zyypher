import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, companyName, jobTitle, phoneNumber, service, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ success: false, message: "All required fields must be filled" }, { status: 400 });
    }

    // Compose the email
    const msg = {
      to: "hello@zyypher.com", // Replace with your email address
      from: "hello@zyypher.com", // Authorized sender domain on SendGrid
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Service Required:</strong> ${service}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await sgMail.send(msg);

    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
