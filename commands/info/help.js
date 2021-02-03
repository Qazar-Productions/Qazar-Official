module.exports = ({
name: "help",
code: `
$title[Help]
$description[Commands:]

$addField[Tickets;\`new\`, \`close\`, \`ticket\`, \`find\`, \`blacklist\`, \`set\`, \`owner\`;no]

$addField[Info;\`ping\`, \`help\`, \`staff\`;no]
$footer[More soon!]
$color[$random[00000;99999]]

$onlyIf[$hasRole[$authorID;763393282839019560]==true;{description:**Nothing here yet 😉 hehe**}{color:RANDOM}]

`});