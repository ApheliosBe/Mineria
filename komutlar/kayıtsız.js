module.exports = {
  name:"kayıtsız",
  prototype:"slash",
  type:"interaction",
  aliases:"unreg",
  description:"Üyeyi kayıtsıza geri atar",
  code:`
  $interactionReply[;{newEmbed:{author:Başarılı!:$userAvatar[$slashOption[kullanıcı]]}{description:<@$slashOption[kullanıcı]> adlı üye kayıtsıza atıldı.}{footer:Kayzer Bot}{color:ffffff}{thumbnail:$userAvatar[$slashOption[kullanıcı]]}};;;;;yes]
  $setRoles[$guildID;$slashOption[kullanıcı];$getServerVar[kayıtsız]]
  $changeNickname[$slashOption[kullanıcı];$getServerVar[tag] İsim | Yaş]
  $onlyIf[$hasRoles[$guildID;$slashOption[kullanıcı];$getServerVar[kayıtsız]]==false;{ "content":"$getServerVar[cross] Üye Zaten Kayıtsız", "ephemeral": true, "options":{ "interaction": true}}]
  $onlyForRoles[$getServerVar[yetkili];{ "content":"$getServerVar[cross] Bunu Kullanamazsın", "ephemeral": true, "options":{ "interaction": true}}]
`
}

 