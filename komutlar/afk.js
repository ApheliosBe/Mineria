module.exports = [{
  name:"afk",
  type:"interaction",
  prototype:"slash",
  code:`
  $interactionReply[<a:onaykayzer:971125838642839602> • Başarıyla Afk Oldun]
  $setGlobalUserVar[afksebep;$slashOption[reason]]
  $setGlobalUserVar[afk;evet]
  $setGlobalUserVar[afks;$dateStamp]
`},{
  name:"$alwaysExecute",
  code:`
$deleteIn[15s]
$setGlobalUserVar[afkmsj;$message;$mentioned[1]]
$setGlobalUserVar[afket;$sum[$getGlobalUserVar[afket;$mentioned[1]];1];$mentioned[1]]
$reply[$messageID;yes]
$description[1;🤨 • Etiketlediğiniz Kişi \`\$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$math[$dateStamp-$getglobaluservar[afks;$mentioned[1]]];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1]\`\ süredir afk.

    
🤨 • Etiketlediginiz Kişi $getGlobalUserVar[afksebep;$mentioned[1]] Sebebiyle afk.
]
$color[1;$getVar[hex]]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$addTimestamp[1]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1;no]]==evet;]
    
  
`},{
  name:"$alwaysExecute",
  code:`
  $color[1;$getVar[hex]]
  $thumbnail[1;$userAvatar[$authorID]]
  $addTimestamp[1]
  $resetGlobalUserVar[afk]
  $resetGlobalUserVar[afks]
  $resetGlobalUserVar[afkmsj]
  $setGlobalUserVar[afket;0]
   $description[1;🤨 • \`\$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$math[$dateStamp-$getglobaluservar[afks;$mentioned[1]]];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1]\`\ süredir afk idin .
    
🤨 •  $getGlobalUserVar[afksebep;$mentioned[1]] Sebebiyle afk idin.]
   $onlyIf[$getGlobalUserVar[afk]==evet]
  `
  }]
