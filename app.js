
require('dotenv').config();
const {Client, Intents} = require('discord.js');

const cliente = new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]});
const prefix = '.';

//CODIGO
cliente.once('ready', (bot)=>{
    console.log('**********************************');
    console.log(`Bot: ${bot.user.username}\n Status:${bot}`);
    console.log('**************** CONSOLE LOGS ******************');
});

cliente.on("messageCreate",(msg) =>{
    if (msg.author.bot) return console.log('Mensaje de un bot');

    if (msg.content.startsWith(prefix) && msg.channel.name === 'verificacion-torneo') {
        const argumentos = msg.content.slice(prefix.length).split(' ');
        console.log(argumentos);
        cliente.users.fetch('562483787074633728').then((user)=>{
            user.send(`USUARIO: ${msg.author.username} CORREO:${argumentos[1]} NOMBRE EQUIPO:${argumentos[2]}`);   
        });
        msg.author.send('Su correo fue registrado en nuestra base de datos, por favor espera a la verificacion :)');
        msg.delete();
    }
    
});


// -----------

cliente.login(process.env.DSTOKEN);