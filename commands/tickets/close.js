module.exports = ({
name: "close",
code: `
$onlyIf[1==2;{execute:close}]
$channelSendMessage[$channelID[];{title:Closing Ticket}{description:This ticket will close in **15 seconds**.}{footer:QAZAЯ Ticket System}{color:RANDOM}]

$setVar[reason;$replaceText[$replaceText[$checkCondition[$message[]==];true;\`No Reason Provided\`];false;$message[]]]

$onlyIf[$channelID[]==$getUserVar[ticketchannel;$getChannelVar[ticketowner]];:x: This isn't a ticket]

$suppressErrors[:x: An error occurred.]
$onlyIf[$getChannelVar[archived]==false;:x: Ticket is archived and cannot be closed.]
$onlyIf[$getVar[blacklist;$authorID]==false;:x: You've been blacklisted from using QAZAЯ Ticket System!]


$onlyIf[$guildID==710550294588817509;]
`});