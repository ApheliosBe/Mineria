module.exports = [{
name:"kanal-ayarla",
 prototype:"slash",
 type:"interaction",
 code:`

$interactionReply[Başarıyla Ayarlar Kuruldu!]


$setServerVar[register;$slashOption[kayıt-kanal]]
$setServerVar[chat;$slashOption[chat]]
$setServerVar[yhlog;$slashOption[yhlog]]

$onlyPerms[admin;{"content":"Yönetici Değilsiniz", "ephemeral": true,"options":{"interaction": true}}]
      `
   }]
