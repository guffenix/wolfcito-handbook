const messages = [
  "gerrero",
  "camino",
  "justicia",
  "coraje",
  "benevolencia",
  "respeto",
  "cortesía",
  "honestidad",
  "sinceridad absoluta",
  "honor",
  "leatad",
  "bushido"
]

const messageOfTheDay = () => {
  const message = messages[Math.floor(Math.random()* messages.length)];
  console.log(message);
};

module.exports = { messageOfTheDay };