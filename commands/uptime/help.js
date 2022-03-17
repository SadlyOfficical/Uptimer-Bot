const { Client, MessageEmbed, Message, MessageActionRow,MessageButton } = require("discord.js");
const { prefix, botid } = require("./../../config.json");

module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  ownerOnly: false,
  run: async (client, message, args) => {
    let youtube_sub = "https://www.youtube.com/channel/UCVdxuYAV_BtjJZhcSHtEcsg/videos";

    const commands = client.commands
      .filter((c) => c.ownerOnly === false)
      .map((cmd) => `**${prefix}${cmd.name}** - ${cmd.description}`);

    const contents =
      "Uptimer is a free discord bot that hosts projects 24/7 online.\n\n" +
      commands.sort().join("\n");

    let embed = new MessageEmbed()
      .setTitle("Here are my commands")
      .setDescription(contents)
      .setColor("RANDOM")
      .setFooter(`Prefix: "${prefix}"`)
      .setThumbnail(client.user.displayAvatarURL())      
      .setTimestamp();
          
          const row = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=8&scope=bot%20applications.commands`)
        .setLabel("Invite")
            .setStyle("LINK")
    )
          const row1 = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.gg/zp8nTQqD9h`)
        .setLabel("SUPPORT SERVER")
            .setStyle("LINK")
    )
          const row2 = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://www.youtube.com/channel/UCVdxuYAV_BtjJZhcSHtEcsg/videos`)
        .setLabel("Subscribe")
            .setStyle("LINK")
    )

    return message.channel.send({ embeds: [embed], components: [row, row1, row2] });
  },
};
