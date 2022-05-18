module.exports = [{
  name: "modlog",
  type: "interaction",
  prototype: "slash",
  code: `
$setServerVar[modlog;1]
$setServerVar[kanal;$slashOption[kanal]]
$title[1;Moderasyon Log sistemi aktif edildi] 
$description[1;Moderasyon Log sistemi başarıyla aktif edildi.]
$footer[1;Log kanalı $channelName[$slashOption[kanal]] olarak seçildi]
$color[1;RANDOM] 
$thumbnail[1;$serverIcon]
$onlyIf[$getServerVar[modlog]==0;Zaten aktif]
$onlyIf[$interactionData[options._subcommand]==aç;]
`}, {
  name: "modlog",
  type: "interaction",
  prototype: "slash",
  code: `
$setServerVar[modlog;0]
$setServerVar[kanal;] 
$title[1;Moderasyon Log sistemi imaktif edildi] 
$description[1;Moderasyon Log sistemi başarıyla inaktif edildi.]
$color[1;RANDOM] 
$thumbnail[1;$serverIcon]
$onlyIf[$getServerVar[modlog]==1;Zaten inaktif]
$onlyIf[$interactionData[options._subcommand]==kapat;]
`}]