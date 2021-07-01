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
  const activities_list = [
    `https://gamearoo.top/ram-api-img/t1.gif`,
    `https://gamearoo.top/ram-api-img/t1.gif`,
    `https://gamearoo.top/ram-api-img/t2.gif`,
    "https://gamearoo.top/ram-api-img/t3.gif",
    "https://gamearoo.top/ram-api-img/t4.gif",
  ];
  const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  let hi = {
    url: activities_list[index],
  };
  res.send(hi);
});

module.exports = router;
