module.exports = ({
name: "force-owner",
aliases: ["f-owner", "force-o" , "f-o"],
code: `
$onlyIf[1==2;{execute:f-owner}]

**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** is now the owner of this ticket!
$setChannelVar[ticketowner;$findUser[$message[1]];$getUserVar[ticketchannel;$findUser[$message[1]]]]
$setUserVar[ticketchannel;$channelID[];$findUser[$message[1]]]
$setUserVar[ticketchannel;767488482238922782;$getChannelVar[ticketowner]]
$onlyIf[$userExists[$findUser[$message[1]]]==true;:x: Not a valid user!]


$suppressErrors[:x: An error occurred.]
$onlyIf[$getChannelVar[archived]==false;:x: Ticket is archived and cannot recieve an owner.]
$onlyForUsers[672215920558604332;:x: Sorry, This command **FORCES** the user to be the owner, without limiters. This can cause a raid because of it having no limiters. So only **$username[672215920558604332]#$discriminator[672215920558604332]** can use this command.]

`});