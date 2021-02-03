module.exports =({
name: "verify",
code: `

:x: This command isn't available.
$onlyIf[$hasRole[$authorID;763278009984614411]==false;:x: **You are already verified.**]
`});