module.exports = {
  name:"timeout",
  type:"interaction",
  prototype:"slash",
  code:`
  $interactionReply[;{newEmbed:{author:$userTag[$slashOption[kullanıcı]]:$userAvatar[$slashOption[kullanıcı]]}{description:$getServerVar[tick] <@$slashOption[kullanıcı]> adlı kullanıcı mutelendi.\n\nSebep: **$replaceText[$interactionData[options.data[2].value];undefined;Sebep belirtilmedi.]**\nSüre: **$slashOption[süre]**}{color:RANDOM}};;;;;no]
  $timeoutMember[$guildID;$slashOption[kullanıcı];$slashOption[süre];no;$replaceText[$interactionData[options.data[2].value];undefined;Sebep belirtilmedi.]]
  $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$slashOption[süre];s;];m;];h;];d;]]==true;{"content":"$getServerVar[cross] Düzgün bir süre gir.","options":{ "interaction": true }}]
  $onlyIf[$checkContains[$slashOption[süre];s;m;h;d]==true;{"content":"$getServerVar[cross] Düzgün bir süre gir.","options":{"interaction": true}}]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$slashOption[kullanıcı]]];{"content","$getServerVar[cross] Rolünden üstte/eşit birini muteleyemezsin.","options":{"interaction": true}}]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$slashOption[kullanıcı]]];{"content","$getServerVar[cross] Rolünden üstte/eşit birini muteleyemezsin.","options":{"interaction": true}}]
  $onlyIf[$slashOption[kullanıcı]!=$authorID;{"content":"$getServerVar[cross] Kendini muteleyemezsin.","options":{"interaction": true }}]
  $onlyIf[$djsEval[client.guilds.cache.get('$guildID').members.cache.get('$slashOption[kullanıcı]').isCommunicationDisabled()  ;yes]==false;{"content":"$getServerVar[cross] Kullanıcı zaten mutelenmiş.","options":{ "interaction": true}}]
  $onlyPerms[moderatemembers;{"content":"$getServerVar[cross] Bunun için **__Üyeleri Yönet__** iznin olmalı.","options":{"interaction": true }}]
  `
}