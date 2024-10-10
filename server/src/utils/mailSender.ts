import transporter from "../config/MailConnection";
import ejs from "ejs"
import path from "path";

const sendMail = async (sendMailTo: string, name: string, emailSubject: string) => {
    // const templatePath = path.join(__dirname, "temp.ejs");
    // const data = await ejs.renderFile(__dirname + "/test.ejs", { name: 'Stranger' });

    try {
        const htmlContent = await ejs.renderFile("src/utils/temp.ejs", { name });
        const info = await transporter.sendMail({
            from: "dipchip1702@gmail.com",
            to: sendMailTo,
            subject: emailSubject,
            html: htmlContent
        });
        
        console.log("Email sent: ", info.messageId);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
}

export default sendMail;

