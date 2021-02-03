const { Ricky, Yoshi, Arabia, Irian, Psifrx } = require('../../config/staff.json')


module.exports = ({
name: "staff",
code: `
$title[Qazar Staff]
$addField[Beta Testers;${Psifrx};no]
$addField[Moderators;${Irian};no]
$addField[Administators;${Arabia};no]
$addField[Owners;${Ricky}\n ${Yoshi};no]
`});