const db = require('quick.db');
const Discord = require('discord.js');
const moment = require('moment')
moment.locale('tr')
exports.run = async (client, message, args) => {       
 let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#FFFFFF').setTimestamp()
        let embed2 = new Discord.MessageEmbed().setFooter(message.guild.name, message.guild.iconURL({ dynamic: true })).setColor('#000000')
        let channel = client.guilds.cache.get(client.ayarlar.guildID).channels.cache.find(c => c.name === "yetki-log")
        if (!message.member.roles.cache.some(r => [client.ayarlar.yetkilialim].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))  {return message.channel.send(embed.setDescription('Komutu kullanan kullanıcıda yetki bulunmamakta!')).then(x => x.delete({ timeout: 3000 }))} 
        if (!member) return message.channel.send(embed.setDescription("Kullanıcı etiketlenmedi veya bulunamadı!")).then(x => x.delete({ timeout: 5000 }))
        if (!member.user.username.includes(client.ayarlar.tag)) {return message.channel.send(embed.setDescription("Yetkili olucak kullanıcıda tag bulunması gerekir!")).then(x => x.delete({ timeout: 5000 }))}
        if (db.get(`staff_${member.id}`)) return message.channel.send(embed.setDescription("Belirtilen kullanıcı sunucuda zaten yetkili!").setFooter("Bir aksilik var ise üst yönetime ulaşınız!"))
                if(args[1] === "yetki1") {
                db.set(`staff_${member.id}`, true)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki1)
                message.channel.send(embed.setDescription(`Kullanıcı 1. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 1. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))          
          }
                if(args[1] === "yetki2") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki1)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki2)
                message.channel.send(embed.setDescription(`Kullanıcı 2. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 2. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
          }
                 if(args[1] === "yetki3") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki2)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki3)
                message.channel.send(embed.setDescription(`Kullanıcı 3. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 3. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
          }
                if(args[1] === "yetki4") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki3)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki4)
                message.channel.send(embed.setDescription(`Kullanıcı 4. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 4. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
      }
                if(args[1] === "yetki5") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki4)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki5)
                message.channel.send(embed.setDescription(`Kullanıcı 5. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 5. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
      }
                if(args[1] === "yetki6") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki5)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki6)
                message.channel.send(embed.setDescription(`Kullanıcı 6. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 6. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
      }
                if(args[1] === "yetki7") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki6)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki7)
                message.channel.send(embed.setDescription(`Kullanıcı 7. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 7. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
      }
                if(args[1] === "yetki8") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki7)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki8)
                message.channel.send(embed.setDescription(`Kullanıcı 8. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 8. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
      }
                if(args[1] === "yetki9") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki8)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki9)
                message.channel.send(embed.setDescription(`Kullanıcı 9. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 9. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
}
                if(args[1] === "yetki10") {
                await message.guild.members.cache.get(member.id).roles.remove(client.ayarlar.yetki9)
                await message.guild.members.cache.get(member.id).roles.add(client.ayarlar.yetki10)
                message.channel.send(embed.setDescription(`Kullanıcı 10. yetkiye yükseltildi. Kullanıcıya <@&yetkiid>, <@&yetkiid>, <@&yetkiid> rolleri verildi!`))
                channel.send(embed.setDescription(` ${member} adlı kullanıcı ${message.author}  tarafından 10. yetkiye \`${moment().format('LLL')}\` tarihinde yükseltildi`))
}
 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['staff', 'yt'],
  permLevel: 0
};

exports.help = {
  name: 'yetkilial',
  kategori: 'yetkili'
};
