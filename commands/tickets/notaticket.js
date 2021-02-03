module.exports = ({
name: "notaticket",
aliases: ["nticket", "notatick", "noticket"],
code: `
$onlyIf[1==2;{execute:no-ticket}]

**Channel is no longer a ticket**

$setChannelVar[ticketowner;UndefinedUser#0000;$channelID[]]
$setUserVar[ticketchannel;Undefined;$getChannelVar[ticketowner]]

$suppressErrors[:x: An error occurred.]
$onlyForUsers[672215920558604332;:x: Sorry, This command **FORCES** the channel to no longer be a ticket. So only **$username[672215920558604332]#$discriminator[672215920558604332]** can use this command.]
`});