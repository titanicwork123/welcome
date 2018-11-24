const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const falsteni= member.guild.channels.get("514808324571529346");
if(!falsteni) return;
if(falsteni) {
setTimeout(() => falsteni.send(`**Welcome To __ # - Versé Server :rose: :heart: __ **`), 4000)        
}
});
   
client.login(process.env.BOT_TOKEN);
