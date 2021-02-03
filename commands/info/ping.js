const { ping } = require('../../config/other.json')

module.exports = ({
name: "ping",
code: `
Bot Ping: ${ping}
`});