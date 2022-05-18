module.exports = {
  name:"erkek",
  aliases:"e",
  type:"interaction",
  prototype:"slash",
  description:"Üyeyi erkek olarak kayıt eder",
  code:`
  $setUserVar[isimler;$getUserVar[isimler;$slashOption[kullanıcı]]\n$slashOption[isim] $getServerVar[sembol] $slashOption[yaş] ( <@&$getServerVar[erkek]> );$slashOption[kullanıcı]]
  $setUserVar[kke;$authorID;$slashOption[kullanıcı]]
  $setUserVar[toplamk;$sum[$getUserVar[toplamk];1]]
  $setUserVar[erkekk;$sum[$getUserVar[erkekk];1]]
  $channelSendMessage[$getServerVar[chat];<@$slashOption[kullanıcı]> Aramıza yeni bir prens katıldı.]
  $interactionReply[;{newEmbed:{author:Başarılı!:$userAvatar[$slashOption[kullanıcı]]}{description:<@$slashOption[kullanıcı]> adlı üye erkek olarak kayıt edildi.}{footer:Kayzer Kayıt Sistemi}{color:ffffff}{thumbnail:$userAvatar[$slashOption[kullanıcı]]}};;;;;yes]
  $giveRole[$guildID;$slashOption[kullanıcı];$getServerVar[erkek]]
  $takeRole[$guildID;$slashOption[kullanıcı];$getServerVar[kayıtsız]]
  $changeNickname[$slashOption[kullanıcı];$getServerVar[tag] $slashOption[isim] $getServerVar[sembol] $slashOption[yaş]]
  $onlyIf[$isNumber[$slashOption[kullanıcı]]==true;$getServerVar[cross] <@$authorID>, Üyenin yaşını düzgün gir.]
  $onlyIf[$hasRoles[$guildID;$slashOption[kullanıcı];$getServerVar[kayıtsız]]==true;{ "content":"Üye Zaten Kayıt Olmuş", "ephemeral": true, "options":{ "interaction": true}}]
  $onlyForRoles[$getServerVar[yetkili];{ "content":"<@$authorID> $getServerVar[cross] Bunu Kullanamazsın", "ephemeral": true, "options":{ "interaction": true}}]
  `
  }
