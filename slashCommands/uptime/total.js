const UrlsConfig = require("./../../database/models/UrlsConfig");
const { Client, MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "total",
  description: "Shows all projects",
        ownerOnly: false,
  run: async (client, interaction, args) => {
    UrlsConfig.countDocuments(
      { authorID: interaction.member.user.id },
      async function (err, total) {        
        return interaction.followUp({ embeds: [new MessageEmbed().setTitle(`<a:badge:906786825044119582> Uptimer Bot Total Projects <a:badge:906786825044119582>`).setColor("RANDOM").addField("Total Projects: ", `${client.projectsSize}`, true).addField("Your Projects:", `${total}`, true).setThumbnail(client.user.displayAvatarURL()).setFooter(interaction.member.user.tag)] });
      }
    );
  },
};
