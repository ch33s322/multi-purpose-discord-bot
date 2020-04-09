//dakotas shity discord bot lmao

const Discord = require("discord.js"); //library for interacting with discord
const YTDL = require("YTDL-core"); //library for interacting with yt and playing music in vc
const fs = require("fs"); //library for file system in node js

const TOKEN = "NTQ2MTUxMTgxMDU2MDgxOTIw.Xl2RMg.9ZX0am87Q0V5txLQkPysUdWeVHU"; //bot token 

const PREFIX = "!"; //list of prefixes that get the bot's attention
const PREFIX2 = "&";
const ANIMEFIX = "?"
const DADFIX = "I'm";
const GN = "Goodnight";
const GM = "Good morning";

var servers = {};

var Bot = new Discord.Client();

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0]), { filter: "audioonly" });
    server.queue.shift();

    server.dispatcher.on("end", function() {
            if (server.queue[0]) play(connection, message);
            else message.guild.voiceConnection.dissconnect();
        }

    )
};
//all fortunes for the 8ball command
var fortunes = [
        "yes",
        "maybe",
        "possibly",
        "with out a doubt",
        "it is certain",
        "ask again",
        "no",
        "yee",
        "naw",
        "GeT oUt Of My RoOm I'm PlAyInG mInEcRaFt!!!!111!!!!"
    ]
    //meme links
var meme_links = [
        "https://i.imgur.com/1OfmEIq.png",
        "https://i.imgur.com/D5tW1m0.jpg",
        "https://i.imgur.com/rzGLR47.png",
        "https://i.imgur.com/cCyYkFO.png",
        "https://i.imgur.com/vTQCJmD.png",
        "https://i.imgur.com/VFv0IcJ.png",
        "https://i.imgur.com/nvHuSSL.png",
        "https://i.imgur.com/05eHLDe.png",
        "https://i.imgur.com/LcseHpR.jpg",
        "https://i.imgur.com/VGT7Qr5.jpg",
        "https://i.imgur.com/rKjNi1v.png",
        "https://i.imgur.com/eATCFWD.jpg",
        "https://i.imgur.com/6jSvPo4.png"
    ]
    //random descriptions for profile command
var descriptors = [
        "Certified hottie",
        "Might just be the thiccest one here",
        "In to furries",
        "Is mega short, like we talkin 4'3 and below",
        "All im sayin is micropeen",
        "Person of the day",
        "Qt 3.14",
        "Tonights biggest loser",
        "Sexually addicted to roblox",
        "On some hardcore drugs",
        "Likes long walks on the beach",
        "Is sensitive about thier kinks",
        "Might have a future in exotic dancing",
        "Plays fallout 76... *for fun*",
        "Has 6 fingers on each hand, and is still bad with women",
        "Is in the market for not 1 but 2 body pillows",
        "<insert degrading comment here>",
        "Was a mistake",
        "Still waiting for dad to come back from the store",
        "Liked the movie: cats",
        "Is mind numbingly boring",
        "I would be lying if i told you they had a personality",
        "lonely boi"
    ]
    //on sartup let me know that the bot is online

Bot.on('ready', () => {
    console.log("ready");
    Bot.user.setStatus('available')
    Bot.user.setPresence({
        game: {
            name: 'freakin jams',
            type: "LISTENING",
            url: ""
        }
    });
});
Bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " joined, freakin degenerate");

    member.addRole(member.guild.roles.find("name", "AnimeComunists"));
});














//main commands
Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return; //dont let bots msg bots

    if (!message.content.startsWith(PREFIX)) return; //ignore if not start with prefix

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLocaleLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pc crashed. Going to try to go to bed again");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("you need to actually give me a fortune to tell");

            break;
        case "list":
            var embed = new Discord.RichEmbed()
                .addField("List of Commands", "!ping - pong\n!8ball - tells your fortune\n!profile - bassically either roasts you or gives you a half compliment\n!play - The ultimate weapon of mass destruction\n!stop - doesnt work( i wont shut up when you play music)\n!skip - doesnt work(nats 10 hour of poopty scoop is goin all the way)\n!meme - gives you a sick meme from a repository of cowbowser related content")
                .setColor(0x0fa567)
            message.channel.sendEmbed(embed);
            break;
        case "meme":
            var MEME = new Discord.RichEmbed()
                .setColor(0x0fa567)
                .setTitle('More cowbower content here')
                .setURL('https://www.reddit.com/r/CowBowser/')
                .setAuthor('~OwO~', 'https://i.imgur.com/v4Gz4b9.png', 'https://www.reddit.com/r/CowBowser/')
                .setDescription('The meme that you have called upon:')
                .setThumbnail('https://i.imgur.com/RJu2v72.png')
                .setImage((meme_links[Math.floor(Math.random() * meme_links.length)]))
                .setTimestamp()
                .setFooter('I take my leave', 'https://i.imgur.com/v4Gz4b9.png')
            message.channel.sendEmbed(MEME);
            break;

        case "profile":
            //either get specific user or assign a random profile
            switch (message.author.username.toString()) {
                case 'ch33s3': //ch33s3
                    var ch33s3 = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "They call him bot man...")
                        .addField("about:", "the one resposible for coding me and all my functions")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(ch33s3);

                    break;
                case 'Frogdunker': //nat
                    var ch33s3 = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "Cowbowsers #1 fan!")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(ch33s3);
                    break;
                case 163108529689853953: // luke
                    var luke = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "Designated commer via: mark")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(luke);
                    break;
                case 405896044870762507: // aiden
                    var aids = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "warlock boi")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(aids);
                    break;
                case 117081368919408641: // mark
                    var merk = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "certified coomer")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(merk);
                    break;
                case 'Amphitrite': // julia
                    var merk = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "wants to be known as 'lonely boi'")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(merk);
                    break;
                case 'Octoeyepie': // rachel
                    var rachel = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "short:  4'3")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(rachel);
                    break;
                    //random case if not recignised
                default:
                    var prof = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), (descriptors[Math.floor(Math.random() * descriptors.length)]))
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(prof);
                    break;
            }
            break;
        case "roleme":
            var role = message.guild.roles.find("name", "Froggychair");
            message.member.addRole(role);
            break;
        case "play":
            if (!args[1]) {
                message.channel.sendMessage("please provide a VALID yt link");
                return;
            }
            if (!message.member.voiceChannel) {
                message.member.sendMessage("please join a vc");
                return;
            }
            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []

            }
            var server = servers[message.guild.id];
            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });

            break;
            //doesnt work needs fixing
        case "skip":
            var server = servers[message.guild.id];
            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
            //doesnt work needs fixing
        case "stop":
            var server = servers[message.guild.id];
            if (message.guild.voiceConnection) {
                for (var i = server.queue.length - 1; i >= 0; i--) {
                    server.queue.splice(i, 1);
                }
                server.dispatcher.end();
                console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
            }
            break;

        case "d":
            var total = 1;
            for (x = 0; x < args[2]; x++) {
                total += Math.floor(Math.random() * Math.floor(args[1]));
            }
            message.channel.sendMessage(total);
            break;
        case "args":
            message.channel.sendMessage(args);
            break;
        default:
            message.channel.sendMessage("Invalid comand");

            break;

    }
});
//dad joke function
Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;

    if (!message.content.startsWith(DADFIX)) return;

    var args = message.content.substring(DADFIX.length);

    switch (args[0].toLocaleLowerCase()) {
        default: message.channel.sendMessage("hi, " + args + " im dad!");
        break;
    }
});
//goodnight function
Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;

    if (!message.content.startsWith(GN)) return;

    var args = message.content.substring(GN.length);

    switch (args[0].toLocaleLowerCase()) {
        default: message.channel.sendMessage("Goodnight, " + message.author.username);
        break;
    }
});
//goodmorning function
Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;

    if (!message.content.startsWith(GM)) return;

    var args = message.content.substring(GM.length);

    switch (args[0].toLocaleLowerCase()) {
        default: message.channel.sendMessage("Good morning, " + message.author.username);
        break;
    }
});
//write anime file
Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;
    if (!message.content.startsWith(PREFIX2)) return;
    var words = message.content.substring(PREFIX2.length).split(" ")
    var args = message.content.substring(PREFIX2.length);

    switch (args[0].toLocaleLowerCase()) {
        default: fs.writeFile(words[0].toLocaleLowerCase() + '.txt', args, (err) => {

            // In case of a error throw err. 
            if (err) throw err;
        })
    }
});


//read anime file
Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;
    if (!message.content.startsWith(ANIMEFIX)) return;
    var args = message.content.substring(ANIMEFIX.length);

    fs.readFile(args.toLocaleLowerCase() + ".txt", "utf8", function(err, data) {
        if (err) throw err;
        message.channel.sendMessage(data);

    });

});
//log everyonesmessages, ID and, name in console so i can add them to the profile list
Bot.on("message", function(message) {
    console.log(message.content + " " + message.author.id + " " + message.author.username);
});

Bot.login(TOKEN); //login (makes the bot actually come online)