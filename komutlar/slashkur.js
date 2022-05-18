module.exports = {
  name:"slashkur",
  code:`
  31 güzeldir 
  $createApplicationCommand[global;erkek;Kişiyi Erkek Olarak Kayıt Edersiniz;true;slash;kullanıcı:Lütfen Birini Etiketleyin:true:6;isim:Lütfen Kullanıcının İsmini Giriniz:true:3;yaş:Lütfen Kullanıcının Yaşını Giriniz:true:3] 
  $createApplicationCommand[global;top;LeaderBoard'ı Sorgularsınız;true;slash]
  $createApplicationCommand[global;isimler; Kullanıcının İsimilerini Sorgularsınız;true;slash;kullanıcı: Lütfen Birini Etiketleyiniz:true:6] 
  $createApplicationCommand[global;kayıtsayı; Kullanıcının Kayıt Sayısını Sorgularsınız;true;slash;kullanıcı:Lütfen Birini Etiketleyin:true:6]
  $createApplicationCommand[global;kız;Kişiyi Kız Olarak Kayıt Edersiniz;true;slash;kullanıcı:Lütfen Birini Etiketleyin:true:6;isim:Lütfen Kullanıcının İsmini Giriniz:true:3;yaş:Lütfen Kullanıcının Yaşını Giriniz:true:3]
  $createApplicationCommand[global;kke; Kullanıcının Kimin Kayıt Ettiğine Bakarsınız;true;slash;kullanıcı:Lütfen Birini Etiketleyiniz:true:6]
  $createApplicationCommand[global;kayıtsız; Kullanıcıyı Kayıtsıza Atarsınız ;true;slash;kullanıcı:Lütfen Birini Etiketleyiniz:true:6]
  $createApplicationCommand[global;kanal-ayarla;Ayarla işte ae;true;slash;yhlog:Yeni Hesap Logu Ayarlarsiniz:true:3;chat:Chat Kanalını Ayarlarsiniz:true:3;kayıt-kanal:Kayıt Kanalını Ayarlarsiniz:true:3]
  $createApplicationCommand[global;rol-ayarla;Ayarla İste ae;true;slash;erkek-rol:Erkek Rolü Ayarlarsiniz.:true:3;kız-rol:Kız Rolunu Ayarlarsiniz:true:3;sembol:Isim Arasına Koyulacak  sembolü Ayarlarsiniz:true:3;tag:Isim Knune Koyulacak Tagi Ayarlarsiniz:true:3;yhrol:Yeni Hesap Rolü Ayarlarsiniz:true:3;yetkili-rol:Yetkili Rolünü Ayarlarsiniz:true:3;kayıtsız-rol:Kayıtsız Rolünü Ayarlarsiniz:true:3]
  $createApplicationCommand[global;isim;Kullanıcıların ismini değiştirmenizi sağlar.;true;slash;kullanıcı:Bir kullanıcı belirtin.:true:6;isim:Bir isim belirtin.:true:3]
  $createApplicationCommand[global;modlog;Moderasyon Log sistemini ayarlar.;true;slash;[{"name":"aç", "description":"Moderasyon Log sistemini açarsınız", "type":"SUB_COMMAND", "options":[{"name":"kanal", "description":"Sistemi aktif etmek için sunucuda geçerli bir kanal etiketle.","required":true, "type":"CHANNEL"}]},{"name":"kapat", "description":"Moderasyon Log sistemini kapatırsınız", "type":"SUB_COMMAND"}]]
  $createApplicationCommand[global;yardım;Botun yardım menüsünü gösterir.;true;slash]
  $createApplicationCommand[global;afk;Afk Kalırsınız;true;slash;reason:Bir Sebep Giriniz:false:3]
  $createApplicationCommand[$guildID;timeout;Kullanıcıya zaman aşımı uygulamanızı sağlar.;true;slash;kullanıcı:Bir kullanıcı belirtin.:true:6;süre:Bir süre belirtin.:true:3;sebep:Bir sebep belirtin.:false:3]
  $onlyPerms[admin;]
  `
  }
