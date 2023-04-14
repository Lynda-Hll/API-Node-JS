const nodemailer = require("nodemailer");

class TestMail {
  constructor(email, text) {
    this.email = email;
    this.text = text;
  }
  area() {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: false,
      auth: {
        // clientId: '507343062967-ach82gavjfilaia4115l6fj3cn3t960j.apps.googleusercontent.com',
        // clientSecret: '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',
        // refreshToken: 'your refresh token',
        user: "marzouksaibi002@gmail.com",
        pass: "lylfcyklctqaqwngcg",
      },
    });
    var mailOptions = {
      from: "marzouksaibi002@gmail.com",
      to: "marzouk.saibi@icdint.fr",
      subject: "Hello ✔",
      text: "Hello world ?",
      html: "<b>Hello world ?</b>",
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });
  }
}
module.exports = TestMail;
