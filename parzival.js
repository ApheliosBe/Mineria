const parzi = require("aoi.js")
const bot = new parzi.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
})

const loader = new parzi.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

////////// CALLBACKS \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()
bot.onInteractionCreate()

////////// STATUS \\\\\\\\\\
bot.status({
  text:"ParzivâL",
  type:"PLAYING",
  status:"dnd",
  time: 12
})

////////// VARİABLES \\\\\\\\\\
bot.variables({
  prefix:".",
  kayıtsız:"",//Kayıtsız rolü ID
  erkek:"",//Erkek rolü ID
  kız:"",//Kız rolü ID
  yetkili:"",//Yetkili rolü ID
  register:"",//Hoşgeldin kanalı ID
  chat:"",//Chat kanalı ID
  kke:"",//Elleme
  toplamk:"0",//Elleme
  kızk:"0",//Elleme
  erkekk:"0",//Elleme
  yhrol:"",//Yeni hesap rolü ID
  yhlog:"",//Yeni hesap logu ID
  tag:"",//Tag 
  isimler:"",
  tick:"<a:onaykayzer:971125838642839602>",//Onay emoji ID örn: ✅
  cross:"❌",//Red emoji ID örn: ❎
  sembol:"",//Sembol
  modlog:"0",
  kanal:"",
  hex:"RED",
  afk:"hayır",
  afks:"",
  afket:"0",
  afkmsj:"Etiketlenmemişsin",
  afksebep:"Belirtilmemiş"
})

////////// COMMANDS \\\\\\\\\\
bot.joinCommand({
  channel:"$getServerVar[register]",
  $if:"v4",
  code:`
$if[$sub[$datestamp;$creationdate[$authorID;ms]]<$multi[$multi[$multi[$multi[7;24];60];60];1000]]
$sendDM[**$serverName** sunucumuzda hesabın 7 günden önce açıldığı için cezalandırıldın.;$authorID;no]
$channelSendMessage[$getServerVar[yhlog];<@$authorID> Hesabın yeni olduğu için **$roleName[$getServerVar[yhrol]]** rolün verildi.]
$getServerVar[tick] \`$userTag\` adlı üyenin hesabı 7 günden önce açıldığı için cezalıya atıldı.
$changeNickname[$authorID;$getServerVar[tag] Yeni | Hesap]
$giveRoles[$guildID;$authorID;$getServerVar[yhrol]]

$else

**🎉 Aramıza hoşgeldin <@$authorID>.

Seninle beraber \`$membersCount\` üyeyiz.

Kayıt olmak için <@&$getServerVar[yetkili]> rolündeki üyeleri bekleyin.

Hesabın \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];and;ve];seconds;Saniye];minutes;Dakika];hours;Saat];days;Gün];months;Ay];weeks;Hafta];years;Yıl];second;Saniye];minute;Dakika];hour;Saat];month;Ay];year;Yıl];week;Hafta]\` önce kurulmuş.**


$changeNickname[$authorID;$getServerVar[tag] İsim | Yaş]
$endif
  `
})

//Ban log
bot.banAddCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$userTag;$authorAvatar]
  $description[1;🔒 <@$authorID> Sunucudan yasaklandı.
  
Sebep: **$getBanReason[$authorID]**]
  $footer[1;ID: $authorID $addTimestamp[1]]
  $thumbnail[1;$authorAvatar]
  $color[1;$getServerVar[hex]]
 $onlyIf[$getServerVar[modlog]==1;]
`
  })
bot.onBanAdd()

bot.banRemoveCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$userTag;$authorAvatar]
  $description[1;🔓 <@$authorID> Yasağı kaldırıldı.]
  $footer[1;ID: $authorID $addTimestamp[1]]
  $thumbnail[1;$authorAvatar]
  $color[1;$getServerVar[hex]]
  $onlyIf[$getServerVar[modlog]==1;] 
`
  })
bot.onBanRemove()

//Mesaj log
bot.deletedCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$userTag;$authorAvatar]
  $description[1;🗑️ <@$authorID> Bir mesaj sildi.
  
Silinen Mesaj: **$message**]
$footer[1;ID: $authorID $addTimestamp[1]]
$thumbnail[1;$authorAvatar]
$color[1;$getServerVar[hex]]
$onlyIf[$getServerVar[modlog]==1;]
`
  })
bot.onMessageDelete()

bot.updateCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$userTag;$authorAvatar]
  $description[1;✍🏻 <@$authorID> Bir mesajı düzenledi.
  
Eski mesaj: **$oldMessage**
Yeni Mesaj: **$message**]
$footer[1;ID: $authorID $addTimestamp[1]]
$thumbnail[1;$authorAvatar]
$color[1;$getServerVar[hex]]
$onlyIf[$getServerVar[modlog]==1;]
  `
  })
bot.onMessageUpdate()

//Kanal log
bot.channelCreateCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$newChannel[name];$serverIcon]
  $description[1;📌 <#$newChannel[id]> Adlı kanal oluşturuldu.]
  $footer[1;ID: $newChannel[id] $addTimestamp[1]]
  $thumbnail[1;$serverIcon]
  $color[1;$getServerVar[hex]]
$onlyIf[$getServerVar[modlog]==1;]
  `
  })
bot.onChannelCreate()

bot.channelDeleteCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$oldChannel[name];$serverIcon]
  $description[1;📌 **$newChannel[name]** Adlı kanal silindi.]
  $footer[1;$serverName $addTimestamp[1]]
  $thumbnail[1;$serverIcon]
  $color[1;$getServerVar[hex]]
 $onlyIf[$getServerVar[modlog]==1;]
  `
  })
bot.onChannelDelete()

//Rol log
bot.roleCreateCommand({
  channel:"$getServerVar[kanal]",
  code:`
$author[1;$newRole[name];$serverIcon]
  $description[1;📎 <@&$newRole[id]> Adlı rol oluşturuldu.
Rol rengi: **$newRole[hexColor]**
Rol izinleri: **$newRole[permissions]**]
  $footer[1;ID: $newRole[id] $addTimestamp[1]]
  $thumbnail[1;$serverIcon]
  $color[1;$getServerVar[hex]]
$onlyIf[$getServerVar[modlog]==1;]
  `
  })
bot.onRoleCreate()

bot.roleDeleteCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$oldRole[name];$serverIcon]
  $description[1;📎 **$oldRole[name]** adlı rol silindi.]
  $footer[1;$serverName $addTimestamp[1]]
  $thumbnail[1;$serverIcon]
  $color[1;$getServerVar[hex]] 
$onlyIf[$getServerVar[modlog]==1;]
  `
  })
bot.onRoleDelete()

//Emoji log
bot.emojiCreateCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$newEmoji[name];$newEmoji[url]]
  $description[1;$newEmoji[emoji] Emojisi eklendi.
  
Emoji adı: **$newEmoji[name]**
Emoji linki: **[Tıkla]($newEmoji[url])**]
  $footer[1;ID: $newEmoji[id] $addTimestamp[1]]
  $thumbnail[1;$newEmoji[url]]
  $color[1;$getServerVar[hex]]
$onlyIf[$getServerVar[modlog]==1;]
  `
  })
bot.onEmojiCreate()

bot.emojiDeleteCommand({
  channel:"$getServerVar[kanal]",
  code:`
  $author[1;$oldEmoji[name];$oldEmoji[url]]
  $description[1;**$oldEmoji[name]** Adlı emoji silindi.
Emoji linki: **[Tıkla]($oldEmoji[url])**]
  $footer[1;$serverName $addTimestamp[1]]
  $thumbnail[1;$oldEmoji[url]]
  $color[1;$getServerVar[hex]]
$onlyIf[$getServerVar[modlog]==1;]
  `
  })
bot.onEmojiDelete()

//Ses log
bot.voiceStateUpdateCommand({
  channel:"$getServerVar[kanal]",
  code:`
$author[1;$newState[id];$userAvatar[$newState[id]]]
$description[1;**$newState[id]** adlı kullanıcı <#$newState[channelID]> adlı ses kanalına giriş yaptı.]
$footer[1;ID: $newState[id] $addTimestamp[1]]
$thumbnail[1;$userAvatar[$newState[id]]]
$color[1;$getServerVar[hex]]
$onlyIf[$newState[channelID]!=;]
$onlyIf[$newState[channelID]==;]
$onlyIf[$getServerVar[modlog]==1;]
`
})

bot.voiceStateUpdateCommand({
  channel:"$getServerVar[kanal]",
  code:`
$author[1;$newState[id];$userAvatar[$newState[id]]]
$description[1;**$newState[id]** adlı kullanıcı <#$newState[channelID]> adlı ses kanalından çıkış yaptı.]
$footer[1;ID: $newState[id] $addTimestamp[1]]
$thumbnail[1;$userAvatar[$newState[id]]]
$color[1;$getServerVar[hex]]
$onlyIf[$newState[channelID]==;]
$onlyIf[$newState[channelID]!=;]
$onlyIf[$getServerVar[modlog]==1;]
`
})
bot.onVoiceStateUpdate()

bot.joinCommand({
channel: "",
code: `
$createApplicationCommand[$guildID;afk;Afk Kalırsınız;true;slash;reason:Bir Sebep Giriniz:false:3]
`
 
})