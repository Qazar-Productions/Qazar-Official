module.exports = ({
name: "rules",
code: `
$sendWebhook[https://discord.com/api/webhooks/790652664475680818/G__J34pTyIHOLZZMLTWz4_szlaEKLON1jTcaPii4GzT-04aZcb0-vCkM1ZGWr2_fZ7A4;$replaceText[$message[];
;\n]]

$onlyIf[$message[1]!=;**Discord.js Error**: Failed to POST to WEBHOOK.]
$suppressErrors[**Discord.js Error**: Failed to POST to WEBHOOK.]
`});