module.exports = {
  name:"kız",
  type:"interaction",
  prototype:"slash",
  aliases:"k",
  description:"Üyeyi kız olarak kayıt eder",
  code:`
  $setUserVar[isimler;$getUserVar[isimler;$slashOption[kullanıcı]]\n$slashOption[isim] $getServerVar[sembol] $slashOption[yaş] ( <@&$getServerVar[kız]> );$slashOption[kullanıcı]]
  $setUserVar[kke;$authorID;$slashOption[kullanıcı]]
  $setUserVar[toplamk;$sum[$getUserVar[toplamk];1]]
  $setUserVar[kızk;$sum[$getUserVar[kızk];1]]
  $channelSendMessage[$getServerVar[chat];<@$slashOption[kullanıcı]> Aramıza yeni bir prenses katıldı.]
  $interactionReply[;{newEmbed:{author:Başarılı!:$userAvatar[$slashOption[kullanıcı]]}{description:<@$slashOption[kullanıcı]> adlı üye kız olarak kayıt edildi.}{footer:Kayzer Bot Kayıt Sistemi}{color:ffffff}{thumbnail:$userAvatar[$slashOption[kullanıcı]]}};;;;;yes]
  $giveRole[$guildID;$slashOption[kullanıcı];$getServerVar[kız]]
  $takeRole[$guildID;$slashOption[kullanıcı];$getServerVar[kayıtsız]]
  $changeNickname[$slashOption[kullanıcı];$getServerVar[tag] $slashOption[isim] $getServerVar[sembol] $slashOption[yaş]]
  $onlyIf[$isNumber[$slashOption[kullanıcı]]==true;$getServerVar[cross] <@$authorID>, Üyenin yaşını düzgün gir.]
  $onlyIf[$hasRoles[$guildID;$slashOption[kullanıcı];$getServerVar[kayıtsız]]==true;{ "content":"Üye Zaten Kayıt Olmuş ", "ephemeral": true, "options":{ "interaction": true}}]
  $onlyForRoles[$getServerVar[yetkili];{ "content":"$getServerVar[cross] Bunu Kullanamazsın", "ephemeral": true, "options":{ "interaction": true}}]
  `
  }
