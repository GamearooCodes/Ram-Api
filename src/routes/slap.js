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
    "Had slapped",
    "Had slapped",
    "Had slapped",
    "Had slapped",
    "Had slapped",
    "Had attempted to slap",
  ];

  const morninggifs = [
    "https://gamearoo.top/ram-api-img/slap.gif",
    "https://gamearoo.top/ram-api-img/slap.gif",
    "https://gamearoo.top/ram-api-img/slap2.gif",
    "https://gamearoo.top/ram-api-img/slap3.gif",
    "https://gamearoo.top/ram-api-img/slap4.gif",
    "https://gamearoo.top/ram-api-img/slap5.gif",
  ];
  let hi = "NULL";
  let hi2 = "NULL";
  let hi4 = "NULL";

  const index = Math.floor(Math.random() * (morningstrings.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  if (morningstrings[index] === "Had attempted to slap") hi = "but";
  if (morningstrings[index] === "Had attempted to slap") hi4 = "Slapped";
  if (morningstrings[index] === "Had attempted to slap") hi2 = "instead!";
  let hi3 = {
    url: morninggifs[index],
    text: morningstrings[index],
    text2: hi,
    text3: hi2,
    text4: hi4,
  };
  res.send(hi3);
});

module.exports = router;
