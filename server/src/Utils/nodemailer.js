import nodemailer from 'nodemailer'

export const sendEmail = async (url, email, message) => {
  const _testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  const _transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: _testAccount.user, // generated ethereal user
      pass: _testAccount.pass, // generated ethereal password
    },
  })

  const _options = {
    from: '"KuroNeko 👻" <foo@example.com>', // sender address
    to: `${email}`, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: `<html>
    <body>
    <p>Testing SparkPost - the world's most awesomest email service!</p>
    <a href="${url}">${message}</a>
    </body>
    </html>`,
  }

  // send mail with defined transport object
  await _transporter.sendMail(_options, (err, info) => {
    if (!err) {
      console.log('Message sent: %s', info.messageId)
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    }
    console.log('Error ocurred', +err.message)
  })
}
