module.exports = {
  name:"kayıtsayı",
  type:"interaction",
  prototype:"slash",
  aliases:["ks","kayıt-sayı","teyitsayı"],
  code:`
  $interactionReply[;{newEmbed:{author:$userTag[$slashOption[kullanıcı]]:$userAvatar[$slashOption[kullanıcı]]}
  {description:**➥ Toplam Kayıt Sayısı:** $getUserVar[toplamk;$slashOption[kullanıcı]]
  
**➥ Erkek Kayıt Sayısı:** $getUserVar[erkekk;$slashOption[kullanıcı]]

**➥ Kız Kayıt Sayısı:** $getUserVar[kızk;$slashOption[kullanıcı]]}
  {color:ffffff}{footer:Kayzer Bot}{thumbnail:$userAvatar[$slashOption[kullanıcı]]}};;;;;no]
  $onlyForRoles[$getServerVar[yetkili];{ "content":"<@$authorID> $getServerVar[cross] Bunu Kullanamazsın", "ephemeral": true, "options":{ "interaction": true}}]
  `
  }
