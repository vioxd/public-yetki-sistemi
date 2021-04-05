const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    
   let başvurukanal = (client.ayarlar.basvurukanal)

   if(!başvurukanal) {
       return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("**:x: Başvuru Kanal Ayarlanmamış**"))
   }
   let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`Sunucuİsmi`, message.author.avatarURL()).setDescription(`**Gerekli Bilgiyi Yazmalısın**`))

    message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`Yetki İstek Sistemi`, message.author.avatarURL()).setDescription(`**Yetkili Olmak İstediğinize Emin Misiniz ? Lütfen __evet (e)__ veya __hayır (h)__ İle Cevap Verin.\n\n\`30\` Saniye İçerisinde İptal Edilcektir**`))
  let uwu = false; 
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 }); 
    const Mearly = response.first().content
    if (Mearly == 'hayır' || Mearly == 'h') return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("**İşlem İptal Edildi**"))
    if (Mearly !== 'evet' && Mearly !== 'e') { 
      message.channel.send(new Discord.MessageEmbed().setAuthor(`Yetki İstek Sistemi`, message.author.avatarURL()).setColor("BLACK").setDescription("**Lütfen Sadece (e) evet Veya (h) hayır İle Cevap Verin**"))
    } 
    if (Mearly == 'evet' || Mearly == 'e') uwu = true 
  } 

   let embed = new Discord.MessageEmbed()
   .setColor("BLACK")
   .setThumbnail(message.author.avatarURL())
   .setDescription(`**<@${message.author.id}> Başvurunuz <#${başvurukanal}> Kanalına Gönderilmiştir.\nYetkililer En Kısa Sürede Dönüş Yapacaktır**`)
   .setFooter(`${message.author.tag} Tarafından Kullanıldı`)
   .setTimestamp()
   message.channel.send(embed);
  
    message.guild.channels.cache.get(başvurukanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`**Yetki İsteyen Kişi : <@${message.author.id}>\nFormu : ${sebep}**`));
}


exports.conf = {
    aliases: ["yetkiste"]
};
exports.help = {
    name: 'yetki-iste'
};
