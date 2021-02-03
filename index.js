const Dlang = require('discordbot-script')
const discordScript = require("discordbot-script")
const bot = new discordScript({
  token: process.env.TOKEN,
  prefix: [process.env.PREFIX1, process.env.PREFIX2, process.env.PREFIX3]
});

    
bot.Variables({
    ticketnumber: "0",
	ticketchannel: "767488482238922782",
	ticketowner: "759066490317438978",
  blacklist: "false",
  reason: "N/A",
  archived: "false",
	archivechannel: "767488482238922782",
	archiveowner: "759066490317438978",
  tempvar1: "N/A",
  webhook: "N/A"
  })
bot.MessageEvent()
bot.MessageEditEvent()

const fs = require('fs');
const {
    notDeepEqual
} = require("assert");
const {
    time
} = require("console");
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command({
            name: command.name,
            aliases: command.aliases,
            description: command.description,
            api: command.api,
            code: command.code,
        })
    }
}

bot.Status({
        0: {
            description: `${process.env.PREFIX1}help for help!`, 
            type: "PLAYING" 
        }, 
        1: {
            description: "QAZAЯ Code me :)", 
            type: "WATCHING" 
        }
    }, 30000)
  
bot.ReadyCommand({
name: "763121787520811008",
code: `
$setStatus[dnd]
I'm Ready!
`})
let ticket = "https://discord.com/api/webhooks/790124121206816779/h6G-DrEbnOJkCBNfQZdcFx5N-dr72LNqSPCpJVe9jrDsCQBGX_8XkbCpYDeoGANkyWXQ";
//TICKET LOGS

bot.ExecutableCommand({
name: "blacklist",
code: `
$log[$username[$findUser[$message[2]]]#$discriminator[$findUser[$message[2]]] has been Blacklisted.]
$sendWebhook[${ticket};{title:$replaceText[$replaceText[$message[1];add;Blacklisted User];remove;Whitelisted User]}{description:** **}{field:User:$username[$findUser[$message[2]]]#$discriminator[$findUser[$message[2]]] ($findUser[$message[2]]):yes}{field:Moderator:$username[$authorID]#$discriminator[$authorID] ($authorID):yes}{footer:QAZAЯ Ticket System}{color:RANDOM}]
`})

bot.ExecutableCommand({
name: "no-ticket",
code: `
$sendWebhook[${ticket};{title:Ticket Un-Marked}{description:** **}{field:Channel:$channelID[]):yes}{field:Moderator:$username[$authorID]#$discriminator[$authorID] ($authorID):yes}{footer:QAZAЯ Ticket System}{color:RANDOM}]
`})

bot.ExecutableCommand({
name: "new-owner",
code: `
$sendWebhook[${ticket};{title:New Owner}{description:** **}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] ($findUser[$message[1]]):yes}{field:Moderator:$username[$authorID]#$discriminator[$authorID] ($authorID):yes}{footer:QAZAЯ Ticket System}{color:RANDOM}]
`})

bot.ExecutableCommand({
name: "new-ticket",
code: `
$onlyIf[1==2;{execute:new-log}]

$sendWebhook[${ticket};{title:New Ticket}{description:** **}{field:Owner:$username[]#$discriminator[] ($authorID):yes}{field:Channel:<#$getUserVar[ticketchannel]> ($getUserVar[ticketchannel]):yes}{footer:QAZAЯ Ticket System}{color:RANDOM}]
`})

bot.ExecutableCommand({
name: "f-owner",
code: `
$sendWebhook[${ticket};{title:Owner Forced}{description:** **}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] ($findUser[$message[1]]):yes}{field:Channel:<#$channelID[]> ($channelID[]):yes}{field:Moderator:$username[$authorID]#$discriminator[$authorID] ($authorID):yes}{footer:QAZAЯ Ticket System}{color:RANDOM}]
`})

bot.ExecutableCommand({
name: "close",
code: `
$title[Ticket Closed]
$description[** **]
$addField[Note;$replaceText[$replaceText[$checkCondition[$getVar[reason]==];true;\`No Note Was Provided\`];false;$getVar[reason]]]
$addField[Closed By;$username[$authorID]#$discriminator[$authorID] ($authorID);no]
$addField[Owner;$replaceText[<@$getChannelVar[ticketowner;$getUserVar[ticketchannel]]>;<@759066490317438978>;No Owner] $replaceText[($getChannelVar[ticketowner;$getUserVar[ticketchannel]]);(759066490317438978);];no]
$footer[QAZAЯ Ticket System]
$color[$random[00000;99999]]
$useChannel[${ticket}]

$onlyIf[1==2;]
$log[Ticket Closed, Couldn't send log.]
$setVar[reason;]
$deleteChannels[$channelID[]]
$replyIn[15s]
`})

bot.ExecutableCommand({
name: "new-log",
code: `
$sendWebhook[$getChannelVar[webhook;$channelID[ticket-$getVar[ticketnumber]]];<@$authorID>, Welcome to your ticket!
{title:Thanks for creating a ticket!}
{description:Make sure to follow these guidelines!

\`-\` Follow all the Rules
\`-\` Don't disrespect the staff
\`-\` Keep swear words to a minimum
\`-\` Describe your problem the best you can
\`-\` Don't leave out any details

**__Thanks for using the QAZAЯ Ticket System!__**}{footer:Welcome to your ticket!}{color:RANDOM} 
$setChannelVar[webhook;$createWebhook[$channelID[ticket-$getVar[ticketnumber]];QAZAЯ Ticket System;$userAvatar[759066490317438978]];$channelID[ticket-$getVar[ticketnumber]]]]
`})

bot.ExecutableCommand({
name: "archive",
code: `
$setVar[tempvar1;]
$sendWebhook[${ticket};{title:Ticket Achived.}{description:** **}{field:Channel:<#$channelID[]>:no}{field:Owner:$getVar[tempvar1]:no}{field:Archived By:<@$authorID> ($authorID)}{footer:QAZAЯ Ticket System}{color:RANDOM}]
`})

bot.ExecutableCommand({
name: "ticket-archive",
code: `
$title[Archived Ticket Information]
$description[
Ticket Channel: <#$channelID[]>

Ticket Owner: $replaceText[<@$getChannelVar[archiveowner]>;<@759066490317438978>;No Owner] $replaceText[($getChannelVar[archiveowner]);(759066490317438978);]

Ticket Number:  $replaceText[$channelName[$channelID[]];ticket-;]

Ticket Created: $creationDate[$channelID[]] ($creationTime[$channelID[]] ago)
]
$footer[Archived Ticket Information]
$color[$random[00000;99999]]
$suppressErrors[:x: An error occurred.]
`})


bot.ExecutableCommand({
name: "both-find",
code: `
$editIn[500ms;<a:loading:761828801356890143> Gathering Information;**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** has:
Open Ticket: <#$getUserVar[ticketchannel;$findUser[$message[1]]]>
Archived Ticket: <#$getUserVar[archivechannel;$findUser[$message[1]]]>]

<a:loading:761828801356890143> Searching...
`})


bot.ExecutableCommand({
name: "archive-find",
code: `
$editIn[500ms;<a:loading:761828801356890143> Gathering Information;$replaceText[$replaceText[$channelExists[$getUserVar[archivechannel;$findUser[$message[1]]]];true;**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** has an archived Ticket: <#$getUserVar[archivechannel;$findUser[$message[1]]]>];false;**$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]** doesn't have an open ticket.]]

<a:loading:761828801356890143> Searching...


$onlyIf[$channelExists[$getUserVar[ticketchannel;$findUser[$message[1]]]]==false;{execute:both-find}]
`})


//  PINGING SHIT 

const express = require('express')
const app = express()
app.listen(9000)
app.use(express.json())
app.use(express.static('./public'))

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/index.html')})