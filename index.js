const { Client, Intents, Message, MessageActionRow, MessageButton } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
})

client.on('messageCreate', (message) => {
    if(message.author.id === client.user.id) return;

    if(message.content === 'bing bong') {
        message.reply('FUCK YO LIFE');
    }
})



// tic tac toe code
let EMPTY = Symbol("empty");

let tictactoe_state 
function makeGrid() {
    components = []

    messageButton = new MessageButton()
        .setCustomId('tictactoe')
        .setLabel('test')
        .setStyle('SECONDARY')

    actionRow = new MessageActionRow()
    actionRow.addComponents(messageButton)

    components.push(actionRow)
    return components
}


client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'tictactoe') {
        

        let tictactoe_state = [
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]
        ]
        await interaction.reply({ content: 'Playing a game of tic tac toe!', components: makeGrid()});
    }
})

client.login(token);