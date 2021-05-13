const prompt = require('prompt-sync')();
const qrcode = require('qrcode-terminal');
const link = prompt();
if (link== null) return console.error("Enter a link")
qrcode.generate(`${link}`,{small: true}, function (qrcode) {
    console.log(qrcode);
});
