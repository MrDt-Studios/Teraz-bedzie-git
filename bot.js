const Discord = require("discord.js");
const auth = require("./auth.json");
const client = new Discord.Client();
const Words = ["kurwa", "Kurwa", "Ja pierdole", "ja pierdole", "jprdl",
 "Jprdl", "JAPIERDOLE", "KURWA", "JA PIERDOLE", "Jezus", "Maria", "jezus", "maria"];
client.on("ready", () => {
 console.log("I am ready!");
});
client.on("message", (message) => {
    if (Words.some(word => message.content.includes(word))) {
    message.reply("Nie używaj takich słów!");
    message.delete();
    }
   });
client.login(auth.token)