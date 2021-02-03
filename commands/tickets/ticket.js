module.exports = ({
name: "ticket",
code: `
$sendWebhook[$getChannelVar[webhook];{title:Ticket Information}{description:
Ticket Channel <#$channelID[]>

Ticket Owner: $replaceText[<@$getChannelVar[ticketowner]>;<@759066490317438978>;No Owner] $replaceText[($getChannelVar[ticketowner]);(759066490317438978);]

Ticket Number:  $replaceText[$channelName[$channelID[]];ticket-;]

Ticket Created: $creationDate[$channelID[]] ($creationTime[$channelID[]] ago)}{footer:Ticket Information}{color:RANDOM}]
$onlyIf[$channelID[]==$getUserVar[ticketchannel;$getChannelVar[ticketowner]];This isn't a ticket]

$suppressErrors[:x: An error occurred.]

$onlyIf[$getChannelVar[archived]==false;{execute:ticket-archive}]
$onlyIf[$getVar[blacklist;$authorID]==false;:x: You've been blacklisted from using QAZAЯ Ticket System!]
$onlyIf[$guildID==710550294588817509;]
`});