const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setStatus("idle");
  client.user.setActivity(`Mearly Sıfır Moderasyon`)
  console.log(`[MEARLY] Mearly Moderasyon Botu Aktif Edildi. `);
}