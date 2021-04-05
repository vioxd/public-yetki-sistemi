const Discord = require("discord.js");
module.exports.execute = async (client, message, args) => {       

   var TotalMember = message.guild.memberCount
          var Taglı = message.guild.members.cache.filter(u => u.user.username.includes(client.ayarlar.tag)).size;
          var Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          var Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          const mearlyEmbed = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setDescription(`
\`•\` Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
\`•\` Aktif **${Online}** kullanıcı bulunmaktadır.
\`•\` Tagımızı alan **${Taglı}** kullanıcı bulunmaktadır.
\`•\` Ses Kanallarında **${Voice}** kullanıcı bulunmaktadır.`)
message.channel.send(mearlyEmbed).then(m => m.delete({ timeout: 7000 }));;
}
module.exports.configuration = {
  name: "say",
    aliases: ["say"],
    usage: "say",
    description: "Sunucu istatistikleri atar."
};