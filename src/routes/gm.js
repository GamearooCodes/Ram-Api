const router = require("express").Router();

const User = require("../database/schemas/User");
const prefixes = require("../database/schemas/prefix");

async function data(guildId) {
  let newData = new prefixes({
    Prefix: "r.",
    ChannelID: "mod-logs",
    MuteRole: "muted",
    GuildID: guildId,
  });
  newData.save();
  return newData;
}

router.get("/", async (req, res) => {
  const morningstrings = [
    "I hope your day be filled with countless moments of joy and surprises. Good morning!",
    "I hope your day be filled with countless moments of joy and surprises. Good morning!",
    "Enjoy the miracles of this beautiful morning and let them fill your heart with joy!",
    "A new day has come. It’s your time to rise and shine like a star!",
    "Good morning to you. May every step you make be filled with happiness, love, and peace.",
    "Life is full of uncertainties. But there will always be a sunrise after every sunset. Good morning!",
    "Life never gives you a second chance. So, enjoy every bit of it. Why not start with this beautiful morning. Good morning!",
  ];

  const morninggifs = [
    "https://gamearoo.top/ram-api-img/gm1.gif",
    "https://gamearoo.top/ram-api-img/gm1.gif",
    "https://gamearoo.top/ram-api-img/gm2.gif",
    "https://gamearoo.top/ram-api-img/gm3.gif",
    "https://gamearoo.top/ram-api-img/gm4.gif",
    "https://gamearoo.top/ram-api-img/gm5.gif",
    "https://gamearoo.top/ram-api-img/gm6.gif",
  ];

  const index = Math.floor(Math.random() * (morningstrings.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  const index2 = Math.floor(Math.random() * (morninggifs.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  let hi = {
    url: morninggifs[index2],
    text: morningstrings[index],
  };
  res.send(hi);
});

module.exports = router;
