module.exports = {
  name:"isimler",
  prototype:"slash",
  type:"interaction",
  code:`
  $interactionReply[;{newEmbed:{author:$userTag[$slashOption[kullanıcı]]:$userAvatar[$slashOption[kullanıcı]]}{description:$getUserVar[isimler;$slashOption[kullanıcı]]}{color:ffffff}{thumbnail:$userAvatar[$slashOption[kullanıcı]]}{footer:Kayzer Bot}};;;;;no]
  $onlyIf[$getUserVar[isimler;$slashOption[kullanıcı]]!=;{ "content":"$getServerVar[cross] Bu Kullanıcının Önceki Bir İsmi Yok", "ephemeral": true, "options":{ "interaction": true}}]
  $onlyForRoles[$getServerVar[yetkili];{ "content":"$getServerVar[cross] Bunu Kullanamazsın", "ephemeral": true, "options":{ "interaction": true}}]
  `
  }
