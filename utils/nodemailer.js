const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const pass = process.env.APP_PASS;
const email = process.env.MAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
  from: email,
});

const options = {
  from: "podiousplus@gmail.com",
  to: [
    "faithdimma2@gmail.com",
    "irufavour787@gmail.com",
    "devfavour100@gmail.com",
    "podiousplus@gmail.com",
  ],
  subject: "Congratulations! Urgent! and important!🎉🎉",
  html: "<h1>Welcome to NG-PaY</h1>",
};

const sendMail = async () => {
  transporter.sendMail(options, (err, result) => {
    if (err) {
      return console.log(err.message);
    }
    console.log(result);
  });
};
module.exports = sendMail;
