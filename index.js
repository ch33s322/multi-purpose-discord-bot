//dakotas shitty discord bot lmao

const Discord = require("discord.js");
const YTDL = require("YTDL-core");

const TOKEN = "no token 4 u";

const PREFIX = "!";
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
            else connection.dissconnect();
        }

    )
};
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
var d20 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
]
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

Bot.on("ready", function() {
    console.log("ready");
});

Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

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
                .addField("List of Commands", "!ping - pong\n!8ball - tells your fortune\n!profile - bassically either roasts you or gives you a half compliment\n!play - The ultimate weapon of mass destruction\n!stop - doesnt work( i wont shut up when you play music)\n!skip - doesnt work(nats 10 hour of poopty scoop is goin all the way)")
                .setColor(0x0fa567)
            message.channel.sendEmbed(embed);
            break;

        case "profile":
            switch (message.author.id) {
                case 364133127238582273: //ch33s3
                    var prof = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "The one resposible for me, shoulda worn that condom!")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(prof);

                    break;
                case 163108529689853953: // luke
                    var prof = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "Designated commer via: mark")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(prof);
                    break;
                case 405896044870762507: // aiden
                    var prof = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "warlock boi")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(prof);
                    break;
                case 117081368919408641: // mark
                    var prof = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), "certified coomer")
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(prof);
                    break;
                default:
                    var prof = new Discord.RichEmbed()
                        .addField(message.author.username.toString(), (descriptors[Math.floor(Math.random() * descriptors.length)]))
                        .setColor(0x0fa655)
                        .setThumbnail(message.author.avatarURL)
                    message.channel.sendEmbed(prof);
                    break;
            }
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
        case "skip":
            var server = servers[message.guild.id];
            if (server.dispacher) server.dispacher.end();
            break;
        case "stop":
            var server = servers[message.guild.id];
            if (message.guild.voiceConnection) {
                message.guild.voiceConnection.disconnect;
            }
            break;
        case "d20":
            if (args[1]) {
                for (x = 0; x < args[1]; x++) {
                    message.channel.sendMessage(d20[Math.floor(Math.random() * d20.length)]);
                }
            } else {
                message.channel.sendMessage(d20[Math.floor(Math.random() * d20.length)]);
            }

            break;
        case "d4":
            var total = 0;
            if (args[1]) {
                for (x = 0; x < args[1]; x++) {
                    total += Math.floor((Math.random() * 4 % 4 + 1));
                }
                message.channel.sendMessage("total: " + total.toString());
            } else {
                total += Math.floor((Math.random() * 4 % 4 + 1));
                message.channel.sendMessage("total: " + total.toString());
            }
            break;
        case "d6":
            var total = 0;
            if (args[1]) {
                for (x = 0; x < args[1]; x++) {
                    total += Math.floor((Math.random() * 6 % 6 + 1));
                }
                message.channel.sendMessage("total: " + total.toString());
            } else {
                total += Math.floor((Math.random() * 6 % 6 + 1));
                message.channel.sendMessage("total: " + total.toString());
            }
            break;
        case "d8":
            var total = 0;
            if (args[1]) {
                for (x = 0; x < args[1]; x++) {
                    total += Math.floor((Math.random() * 8 % 8 + 1));
                }
                message.channel.sendMessage("total: " + total.toString());
            } else {
                total += Math.floor((Math.random() * 8 % 8 + 1));
                message.channel.sendMessage("total: " + total.toString());
            }
            break;
        case "d10":
            var total = 0;
            if (args[1]) {
                for (x = 0; x < args[1]; x++) {
                    total += Math.floor((Math.random() * 10 % 10 + 1));
                }
                message.channel.sendMessage("total: " + total.toString());
            } else {
                total += Math.floor((Math.random() * 10 % 10 + 1));
                message.channel.sendMessage("total: " + total.toString());
            }
            break;
        case "d12":
            var total = 0;
            if (args[1]) {
                for (x = 0; x < args[1]; x++) {
                    total += Math.floor((Math.random() * 12 % 12 + 1));
                }
                message.channel.sendMessage("total: " + total.toString());
            } else {
                total += Math.floor((Math.random() * 12 % 12 + 1));
                message.channel.sendMessage("total: " + total.toString());
            }
            break;

        default:
            message.channel.sendMessage("Invalid comand");

            break;

    }
});

Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;

    if (!message.content.startsWith(DADFIX)) return;

    var args = message.content.substring(DADFIX.length);

    switch (args[0].toLocaleLowerCase()) {
        default: message.channel.sendMessage("hi, " + args + " im dad!");
        break;
    }
});
Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;

    if (!message.content.startsWith(GN)) return;

    var args = message.content.substring(GN.length);

    switch (args[0].toLocaleLowerCase()) {
        default: message.channel.sendMessage("Goodnight, " + message.author.username);
        break;
    }
});
Bot.on("message", function(message) {
    if (message.author.equals(Bot.user)) return;

    if (!message.content.startsWith(GM)) return;

    var args = message.content.substring(GM.length);

    switch (args[0].toLocaleLowerCase()) {
        default: message.channel.sendMessage("Good morning, " + message.author.username);
        break;
    }
});






Bot.on("message", function(message) {
    console.log(message.content + " " + message.author.id + " " + message.author.username);
});

Bot.login(TOKEN);
