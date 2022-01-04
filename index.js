const express = require("express");
const app = express();

app.listen(() => console.log("Bot created by ! ! Ad4m.#1458 / ID : 764447645673455616 "));

app.use('/ping', (req, res) => {
  res.send(new Date());
});



const Discord = require('v11-discord.js');
const myid = ['764447645673455616'];
const developers = ['764447645673455616'];
const prefix = ['+']
const cmd = require("node-cmd")
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot on');
});

////////////


client.on('message', message => {
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'test') {
        let letters = "AaBbCcDFfGgHh-MmNnOoP-pQqRrSsT-©LAVOCA-tUuVvWw-XxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)]; 
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 10000);
}
});


client.login(process.env.token)
