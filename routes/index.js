var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

/* TEST home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/sendmail", async (req, res, next) => {
  console.log("executig sendmail ");
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "efficomworkshop.emailtester@gmail.com",
      pass: "yhix2012",
    },
  });

  let info = await transporter.sendMail({
    from: req.body.email,
    to: destination_mail,
    subject: 'req.body.subject',
    text: 'req.body.message',
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.redirect(`${host}/contact`);
});

module.exports = router;
