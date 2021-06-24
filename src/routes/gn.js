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
    "May tomorrow be sunny and full of joy. Good night!",
    "May tomorrow be sunny and full of joy. Good night!",
    "Let the fairies make your sleep wonderful. Good night.",
    "I wish you have the sweetest dream of your life tonight. Goodnight.",
    "Good night, my friend! May you have a great day tomorrow.",
    "Sending warm hugs to help you sleep well, my friend! Sweet dreams!",
    "May the day’s tension disappears into the night’s quiet. Good night, friend!",
  ];

  const morninggifs = [
    "https://gamearoo.top/ram-api-img/gn1.gif",
    "https://gamearoo.top/ram-api-img/gn1.gif",
    "https://gamearoo.top/ram-api-img/gn2.gif",
    "https://gamearoo.top/ram-api-img/gn3.gif",
    "https://gamearoo.top/ram-api-img/gn4.gif",
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
