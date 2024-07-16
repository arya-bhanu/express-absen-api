import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import dotenv from 'dotenv';
dotenv.config();
export default (
	{
		from,
		to,
		subject,
		text,
	}: {
		from: string;
		to: string;
		subject: string;
		text: string;
	},
	cb: (err: Error | null, info: SMTPTransport.SentMessageInfo) => void
) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'putuaryabhanu03@gmail.com',
			pass: `${process.env.EMAIL_PASS}`,
		},
	});
	const mailOptions = {
		from,
		to,
		subject,
		text,
	};
	transporter.sendMail({ ...mailOptions, replyTo: undefined }, cb);
};
