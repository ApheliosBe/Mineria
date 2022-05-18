module.exports = {
  name:"top",
  aliases:"lb",
  prototype:"slash",
  type:"interaction",
  description:"",
  code:`
  $interactionReply[;{newEmbed:{author:Kayıt Sıralamalası:$authorAvatar}
  {description:**➥ Toplam Kayıt Sıralaması**
$userLeaderboard[$guildID;toplamk;asc;{top} - {username} - {value}]

**➥ Kız Kayıt Sıralaması**
$userLeaderboard[$guildID;kızk;asc;{top} - {username} - {value}]

**➥ Erkek Kayıt Sıralaması**
$userLeaderboard[$guildID;erkekk;asc;{top} - {username} - {value}]}{footer:Developed by ParzivâL}{color:ffffff}{thumbnail:$authorAvatar}};;;;;no]
  $onlyForRoles[$getServerVar[yetkili];{ "content":"$getServerVar[cross] Bunu kullanamazsın","ephemeral": true, "options":{ "interaction": true}}]
`
  }


//// { "content":"Buraya onlyIf yazısı", "ephemeral": true, "options":{ "interaction": true}}