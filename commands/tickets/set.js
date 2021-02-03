module.exports = ({
name: "set",
code: `
**Ticket Number** has been set
$setVar[ticketnumber;$message[1]]
$onlyIf[$guildID==710550294588817509;This command may only be used in **$serverName[710550294588817509]**.]
$onlyIf[$isNumber[$message[1]]==true;use a number.]
$suppressErrors[:x: An error occurred.]
$onlyForRoles[764534854129156096;764535037239885835;763623264403718145;763393282839019560;:x: Access Denied!]
`});