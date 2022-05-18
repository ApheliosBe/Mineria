module.exports = {
  name:"kke",
  prototype:"slash",
  type:"interaction",
  aliases:"kimkayıtetti",
  code:`
  $interactionReply[;{newEmbed:{author:$userTag[$slashOption[kullanıcı]]:$userAvatar[$slashOption[kullanıcı]]}{description:<@$slashOption[kullanıcı]> adlı üyeyi kaydeden yetkili: $replaceText[<@$getUserVar[kke;$slashOption[kullanıcı]]>;<@>;Bulunamadı]}{footer:Kayzer Bot}{color:ffffff}{thumbnail:$userAvatar[$slashOption[kullanıcı]]}};;;;;no]
  $onlyForRoles[$getServerVar[yetkili];{ "content":"$getServerVar[cross] Bunu Kullanamazsın", "ephemeral": true, "options":{ "interaction": true}}]
  `
  }
