module.exports = ({
name: "new",
code: `
$onlyIf[1==2;{execute:new-ticket}]

$modifyChannelPerms[$channelID[ticket-$getVar[ticketnumber]];+viewchannel;+sendmessages;+readhistory;$authorID]
$channelSendMessage[$channelID[];{title:Ticket Created!}{description:Your ticket has been created: <#$channelID[ticket-$getVar[ticketnumber]]>!}{footer:Ticket Successfully Created!}{color:RANDOM}]
$setUserVar[ticketchannel;$channelID[ticket-$getVar[ticketnumber]];$authorID]
$setChannelVar[ticketowner;$authorID;$channelID[ticket-$getVar[ticketnumber]]]
$createChannel[ticket-$getVar[ticketnumber];text;767487550922686504]
$setVar[ticketnumber;$sum[$getVar[ticketnumber];1]]
$onlyIf[$channelExists[$getUserVar[ticketchannel]]!=true;:x: You already have a ticket open in <#$getUserVar[ticketchannel]>.]

$suppressErrors[:x: An error occurred.]

$onlyIf[$getVar[blacklist;$authorID]==false;:x: You've been blacklisted from using QAZAЯ Ticket System!]


$onlyIf[$guildID==710550294588817509;]
`});