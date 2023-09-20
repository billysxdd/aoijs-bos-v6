module.exports = [{
    name: "ping",
    aliases: ["gecikme"],
    code: `
    $messagePing
    $reply[$messageID;true]
    `
}];