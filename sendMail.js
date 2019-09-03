var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
	service: 'Gmail',
    auth: {
        user: "vrajesh.lucky@gmail.com",
        pass: "versumlat1234"
    }
});
var mailOptions = {
    from: 'vrajesh.lucky@gmail.com', // sender address
    to: 'rajesh240388@gmail.com', // list of receivers
    subject: 'Reporest Result', // Subject line
	//text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            'path': 'D:\JPPA_ONE\reports\JPPATestReport.html',
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
		response.send(err);
    } else {
        console.log("Message sent: " + info.response);
		response.send(info);
    }
});