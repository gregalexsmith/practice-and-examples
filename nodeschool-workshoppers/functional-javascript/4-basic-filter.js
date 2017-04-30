// take in an array of objects with a message property
// return an array of messages that are less than 50 characters long

function getShortMessages(messages) {
  return messages.filter(item => item.message.length < 50)
    .map(item => item.message);
}

module.exports = getShortMessages;
