module.exports = ({
name: "archive",
code: `
$onlyIf[1==2;{execute:archive}]

$channelSendMessage[$channelID[];{title:Channel has been archived!}{description:This channel has been archived by <@$authorID>. Archiving means the owner can no longer Read messages, however the channel will still exist for mods to see.}{footer:QAZAЯ Ticket System}{color:RANDOM}]

$setChannelVar[ticketowner;null;$channelID[]]
$setUserVar[ticketchannel;null;$getVar[tempvar1]]
$setChannelVar[archiveowner;$getChannelVar[ticketowner];$channelID[]]
$setUserVar[archivechannel;$channelID[];$getVar[tempvar1]]
$setChannelVar[archived;true;$channelID[]]

$modifyChannelPerms[$channelID[];-viewchannel;-sendmessages;-readhistory;$getVar[tempvar1]]
$setVar[tempvar1;$getChannelVar[ticketowner]]
$onlyIf[$channelID[]==$getUserVar[ticketchannel;$getChannelVar[ticketowner]];:x: This isn't a ticket]$suppressErrors[:x: An error occurred.]
$onlyIf[$getVar[blacklist;$authorID]==false;:x: You've been blacklisted from using QAZAЯ Ticket System!]$onlyIf[$guildID==710550294588817509;]
`});