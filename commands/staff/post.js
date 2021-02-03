module.exports = ({
name: "post",
code: `
Posted the **$message[1]** Webhook! 
$sendWebhook[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];rules;https://discord.com/api/webhooks/790652664475680818/G__J34pTyIHOLZZMLTWz4_szlaEKLON1jTcaPii4GzT-04aZcb0-vCkM1ZGWr2_fZ7A4];verify;https://discord.com/api/webhooks/790646441764192256/lcnde2-ISgBKs8qfKBcP36RMUcjCdUyDUNdjLoLxSAww77NPjZ5iymnQA7JPu9EYu6gM];logs;https://discord.com/api/webhooks/790124121206816779/h6G-DrEbnOJkCBNfQZdcFx5N-dr72LNqSPCpJVe9jrDsCQBGX_8XkbCpYDeoGANkyWXQ];poll;https://discord.com/api/webhooks/791463391154667592/bvmgw7ngu0UWlEL2s1fvnTcSxhof-pDeeWF-nA8PJNF7ZTC2n2Yq-d16Pu1U2Qjrk5b9];$messageSlice[>1]]

$suppressErrors[**Discord.js Error**: Failed to POST to WEBHOOK.]

$onlyIf[$message[1]!=;**Discord.js Error**: Failed to find WEBHOOK.]
$onlyIf[$message[2]!=;**Discord.js Error**: Failed to POST to WEBHOOK.]

$onlyIfMessageContains[verify;poll;rules;logs;**Discord.js Error**: Provide place to POST to WEBHOOK]

`});