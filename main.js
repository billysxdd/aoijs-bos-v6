const {AoiClient, LoadCommands} = require("aoi.js");
const config = require('./config.json')
const bot = new AoiClient({
    token: config.token,
    prefix: config.prefix,
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences"],
    events: ["onMessage"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});


const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/") 

//----STATUS
bot.status({
    text: "Kaixers was here!",
    type: "PLAYING",
    time: 12
});

//----VERIABLES
bot.variables({
    test: "string"
});
