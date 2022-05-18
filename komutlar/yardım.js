module.exports =[{
name: "yardım",
type:"interaction",
prototype: "slash",
code:`
$interactionReply[;{newEmbed: {author:$userTag[$clientID]:$userAvatar[$clientID]} {description:*Aşağıdaki butonlara basarak komutlarım hakkında bilgi alabilirsin.*} {color:RANDOM} {thumbnail:$userAvatar[$clientID]}};{actionRow:{button:Eğlence Komutlarım:1:eğlence:no:🎉} {button:Moderasyon Komutlarım:2:mod:no:🔒} {button:Kayıt Komutlarım:3:kayıt:no:📃}} ;;;;;no] 
`
  },{
    name:"eğlence",
    type:"interaction",
    prototype:"button",
    code:` 
$interactionReply[;{newEmbed:} {author:Eğlence Komutlarım :$userAvatar[$clientID]} {description:*KOMUTLAR BURAYA .*} {color:RANDOM} {thumbnail:$userAvatar[$clientID]};;;;yes] 
`
  },{
    name:"mod",
    type:"interaction",
    prototype:"button",
    code:`$interactionReply[;{newEmbed:} {author:Moderasyon Komutlarım :$userAvatar[$clientID]} {description:*KOMUTLAR BURAYA .*} {color:RANDOM} {thumbnail:$userAvatar[$clientID]}} ;;;;yes]
`
  },{
    name:"kayıt",
    type:"interaction",
    prototype:"button",
    code:`
$interactionReply[;{newEmbed:} {author:Kayıt Komutlarım :$userAvatar[$clientID]} {description:*KOMUTLAR BURAYA .*} {color:RANDOM} {thumbnail:$userAvatar[$clientID]}};;;;yes]
`
}] 