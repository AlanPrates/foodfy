const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0a9b84e7eef0fe",
        pass: "15a7a0d23307a0"
    }
});