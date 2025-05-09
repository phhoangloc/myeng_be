require('dotenv').config()
import { createTransport } from "nodemailer";

const transporter = createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: "ph.hoangloc@gmail.com", // Email của bạn
        pass: process.env.email_password, // Mật khẩu hoặc mật khẩu ứng dụng
    },
});

export const sendMailToAcceptRegister = async (email: string) => {
    const mainOptions = {
        from: 'LOCAND (ph.hoangloc@gmail.com) <no-reply>',
        to: email,
        subject: 'Active your Account',
        html: `
        <p style="text-align:center">Thanks for you registering!<p>
        <p style="text-align:center">To active the account click <a style="font-weight:bold;color:green" href="${process.env.NODE_APP_URL}api/active?email=${email}">here</a>!<p>`
    }
    await transporter.sendMail(mainOptions)
}