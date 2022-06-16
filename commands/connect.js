const { getDefaultMicrophoneStream } = require('../helpers/microphone');
const { disconnectFromCurrentVoiceChannel } = require('../helpers/disconnect');

module.exports = {
  name: 'co',
  description: 'Tell BabyMonitor to join the configured voice channel',
  async execute(message, channel) {
    const {
      member,
      client
    } = message;

    if (!channel) {
      message.reply('Channel is not specified!');
    } else {
      message.reply(`Connecting to ${channel}`);
    }

    if (message.guild.channels) {
      // `connection` should be an instance of VoiceConnection
      let connection;

      message.guild.channels.forEach((value, key) => {
        if(value.name === channel) {
          try {
            connection = value.join();
          } catch (err) {
            console.error(err);
            return;
          }

          console.log('grabbing microphone stream');
          const micStream = getDefaultMicrophoneStream();

          console.log('playing microphone stream through bot')

          console.log(connection)

          const dispatch = connection.play(micStream, { type: 'converted' });

          // Destroy the stream when the bot leaves the channel
          dispatch.on('end', () => {
            console.log('stream ended. destroying microphone stream');
            micStream.destroy();
          });
        }
     });
    }
  }
}
