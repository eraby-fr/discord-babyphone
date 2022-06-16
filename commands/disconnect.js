const { disconnectFromCurrentVoiceChannel } = require('../helpers/disconnect');

module.exports = {
  name: 'disco',
  description: 'Tell BabyMonitor to leave your voice channel',
  execute(message) {
    disconnectFromCurrentVoiceChannel(message);
  }
};
