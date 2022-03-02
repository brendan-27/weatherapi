const discord = require("discord.js");
const bot = new discord.Client({disableEveryone : true});
const botconfig = require("./botconfig.json");
const fetch = require("node-fetch");


bot.on("ready", async () => {
    console.log(`online`)
})


bot.on("message", async msg=>  {

    if(msg.author.bot || msg.channel.type == "dm") return;

    let prefix = botconfig.prefix;
    let msgArray = msg.content.split(" ");
    let cmd = msgArray[0];

    if(cmd == `${prefix}weather`)
    {
        
        // use for input to the api

        var newStr = "";

        var arg2 = msg.content.slice(prefix.length).split(' ');

        var argRep = arg2[1]

        //

        var website = "https://fcc-weather-api.glitch.me/api/current?lat=56.613701&lon=-134.190933";


        const response = await fetch(website);
        const data = await response.json();

        console.log(data.coord["lon"]);

        msg.channel.send("Coordinates of Weather are: " + data.coord["lon"] + " longitude and " + data.coord["lat"] + " latitude");
        msg.channel.send("Temperature (CELCIUS): " + data.main["temp"]);
        msg.channel.send("Wind Speed (MPH): " + data.wind["speed"]);
        msg.channel.send("Location Name (Verify): " + data.name);

    }

})

bot.login('');