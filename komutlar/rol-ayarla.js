module.exports = [{
name:"rol-ayarla",
 prototype:"slash",
 type:"interaction",
 code:`

$interactionReply[Başarıyla Ayarlar Kuruldu!]

$setServerVar[kayıtsız;$slashOption[kayıtsız-rol]]
$setServerVar[erkek;$slashOption[erkek-rol]]
$setServerVar[kız;$slashOption[kız-rol]]
$setServerVar[yetkili;$slashOption[yetkili-rol]]
$setServerVar[yhrol;$slashOption[yhrol]]
$setServerVar[sembol;$slashOption[sembol]]
$setServerVar[tag;$slashOption[tag]]

$onlyPerms[admin;{"content":"Yönetici Değilsiniz", "ephemeral": true,"options":{"interaction": true}}]
      `
   }]
