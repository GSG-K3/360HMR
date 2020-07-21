const nodemailer = require('nodemailer');

module.exports = async (emailinfo) => {
	try {
		console.log(emailinfo);
		const { to, subject, text, html } = emailinfo;

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: 'testemail1295@gmail.com',
				pass: 'testemail12345',
			},
			tls: {
				rejectUnauthorized: false,
			},
		});

		// send mail with defined transport object
		let info = await transporter.sendMail({
			from: ' "test email"<testemail1295.gmail.com>',

			to: to,
			subject: subject,
			text: text,
			html: html,
		});

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};
