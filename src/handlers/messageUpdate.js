const { editColor } = require('../config');
const getDescription = require('../util/getDescription');
const getDiffString = require('../util/getDiffString');
const getElapsedTime = require('../util/getElapsedTime');
const getFooter = require('../util/getFooter');
const sendLog = require('../util/sendLog');

module.exports = (oldMessage, newMessage) => {
  if (newMessage.author.bot) return;
  if (oldMessage.content === newMessage.content) return;

  sendLog(newMessage.guild, {
    color: editColor,
    ...getDescription(
      `${newMessage.author} | ${newMessage.channel}`,
      getDiffString(oldMessage, newMessage)
    ),
    ...getFooter(
      newMessage.author,
      `Message edited after ${getElapsedTime(newMessage.createdTimestamp)}s`
    )
  });
};
