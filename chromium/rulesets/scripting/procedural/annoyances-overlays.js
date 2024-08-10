/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"p > b\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"AdBlock\\\")]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"devtoolsDetector\"]]}"],["{\"selector\":\"#root > div > div\",\"tasks\":[[\"has-text\",\"Get one more story in your member\"]]}","{\"selector\":\".overlay\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Welcome back\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"write a response\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Publish now\"]]}]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select:\"]]}"],["{\"selector\":\"[id=\\\"toggle_notification_notification-ad-blocker\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".pull-right.inline-gallery-container\",\"tasks\":[[\"has-text\",\"Post this\"]]}"],["{\"selector\":\".size-full > .w-full > .flex-col > style + div\",\"tasks\":[[\"has-text\",\"/blocker|ブロッカー/\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"debugger\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".ct_warn\",\"tasks\":[[\"has-text\",\"adblock\"]]}"],["{\"selector\":\"div[style] > div > .userBanner--red\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".et_pb_row_1_tb_body\",\"tasks\":[[\"has-text\",\"Sign up for our weekly newsletter\"]]}","{\"selector\":\".et_pb_section\",\"tasks\":[[\"has-text\",\"Sign up for our weekly newsletter\"]]}"],["{\"selector\":\"div[class^=\\\"-_\\\"] > form\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"button[type=\\\"submit\\\"]\",\"action\":[\"remove-attr\",\"disabled\"]}"],["{\"selector\":\".js-dismissable-hero\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".bg-gray-50\",\"tasks\":[[\"has-text\",\"Fake news\"]]}","{\"selector\":\".hidden\",\"tasks\":[[\"has-text\",\"Fake news\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.onmousedown\"]]}"],["{\"selector\":\"div[oncopy]\",\"action\":[\"remove-attr\",\"/oncopy|oncut|onpaste/\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/addLinkToCopy/i\"]]}"],["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has-text\",\"Subscribe to our Newsletter\"]]}"],["{\"selector\":\"body[class^=\\\"scroll-block--is-blocked\\\"]\",\"action\":[\"remove-class\",\"/scroll-block--is-blocked/\"]}"],["{\"selector\":\".px20.pb32\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".section > .wrapper\",\"tasks\":[[\"has-text\",\"Newsletters\"]]}"],["{\"selector\":\"#modal_login\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[contains(text(),\\\"Adblock\\\")]/..\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Using an ad blocker?\"],[\"upward\",3]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/-moz-user-select:none|@media print/\"]]}"],["{\"selector\":\".ReactModalPortal\",\"tasks\":[[\"has-text\",\"mobile\"]]}"],["{\"selector\":\".forbidden_select\",\"action\":[\"remove-class\",\"forbidden_select\"]}"],["{\"selector\":\".swal2-shown\",\"action\":[\"remove-class\",\"swal2-shown\"]}"],["{\"selector\":\".fbUserStory\",\"tasks\":[[\"has-text\",\"Popular Across Facebook\"]]}","{\"selector\":\".userContentWrapper\",\"tasks\":[[\"has-text\",\"Popular Across Facebook\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"-moz-none\"]]}"],["{\"selector\":\"[oncontextmenu=\\\"return false;\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\".has-senary-background-color\",\"tasks\":[[\"has-text\",\"Email\"]]}","{\"selector\":\".has-tertiary-background-color\",\"tasks\":[[\"has-text\",\"Week\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"blocking software\\\")]/../../..\"]]}"],["{\"selector\":\"script[id=\\\"jquery-core-js-after\\\"]\",\"tasks\":[[\"has-text\",\"e.preventDefault();\"]]}"],["{\"selector\":\".w-full\",\"tasks\":[[\"has-text\",\"Mailing\"]]}"],["{\"selector\":\"h3.section_name\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\"html.no-scroll\",\"action\":[\"remove-class\",\"no-scroll\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}","{\"selector\":\"body > div[id]\",\"action\":[\"style\",\"visibility: hidden !important\"],\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"contextmenu\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"stopRefreshSite\"]]}"],["{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select: none;\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"unselectable\"]]}"],["{\"selector\":\"[data-pw-desk]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#MainModule + div[class] > div[style^=\\\"width\\\"] > div > i[data-icon-name=\\\"OutlookLogo\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}"],["{\"selector\":\".under-map-wrapper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body[oncontextmenu=\\\"return!1\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/media print|user-select:/\"]]}"],["{\"selector\":\".bg-gray-50\",\"tasks\":[[\"has-text\",\"Want to stay informed\"]]}"],["{\"selector\":\"div[class=\\\"container_box content_box\\\"] > div:only-child > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",4]]}","{\"selector\":\"div[class=\\\"container_box content_box\\\"] > div[id][class] > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\"div[id][class][style^=\\\"position:\\\"] > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"/oncopy|oncut|onpaste/\"]}"],["{\"selector\":\".confirm\",\"tasks\":[[\"has-text\",\"AdBlocker\"]]}"],["{\"selector\":\"[bundlename$=\\\"nsfw_blocking_modal\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"xpromo-nsfw-blocking-container\",\"tasks\":[[\"shadow\",\".prompt:has(> .viewInApp)\"]]}"],["{\"selector\":\"a:has(shreddit-player)\",\"action\":[\"remove-attr\",\"href\"]}","{\"selector\":\"shreddit-player\",\"action\":[\"remove-attr\",\"autoplay\"]}"],["{\"selector\":\".has-profile.post:first-child\",\"tasks\":[[\"has-text\",\"/adblock/i\"]]}"],["{\"selector\":\"form[id=\\\"tfnewsearch\\\"]\",\"action\":[\"remove-attr\",\"onsubmit\"]}"],["{\"selector\":\"[style=\\\"text-align:center\\\"]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".bg-light\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"contextmenu\"]]}"],["{\"selector\":\"[oncopy=\\\"return false\\\"]\",\"action\":[\"remove-attr\",\"oncopy\"]}"],["{\"selector\":\".wp-block-group__inner-container\",\"tasks\":[[\"has-text\",\"Discover\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"copyprotect\"]]}"],["{\"selector\":\"[data-text-as-pseudo-element*=\\\" push \\\"]\",\"tasks\":[[\"upward\",\"[role]\"],[\"upward\",\"[role]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\":not(input):not(textarea)\"]]}"],["{\"selector\":\".ReactModal__Overlay--after-open\",\"tasks\":[[\"has-text\",\"/Premium|Try 7 days/\"]]}","{\"selector\":\".ReactModal__Overlay--after-open:has(iframe[srcdoc], img)\",\"tasks\":[[\"has-text\",\"signing up\"]]}","{\"selector\":\"main > div[class*=\\\"-\\\"] > div[class^=\\\"_\\\"] > div[class^=\\\"_\\\"] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"_\\\"]\",\"tasks\":[[\"has-text\",\"Do your part to support us\"]]}]]}"],["{\"selector\":\".wp-block-group-is-layout-flow\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"/onselectstart|oncopy|oncontextmenu/\"]}"],["{\"selector\":\".wp-block-quote\",\"tasks\":[[\"has-text\",\"inbox daily\"]]}"],["{\"selector\":\"*\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"innerText\"]]}"],["{\"selector\":\".LostInventoryMessage_root__YllYq\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"[data-testid=\\\"contributions-liveblog-epic\\\"]\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"preventDefault\"]]}"],["{\"selector\":\".bg-soft-teal\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".dark-theme-dialog__dialogBody___106Di\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/debugger/i\"]]}"],["{\"selector\":\"div[tabindex=\\\"0\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"spath\",\":has([href=\\\"/signup\\\"])\"]]}"],["{\"selector\":\".no-select\",\"action\":[\"remove-class\",\"no-select\"]}"],["{\"selector\":\".mt-\\\\[2rem\\\\]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Winter-Update\"],[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"oncontextmenu\"]]}"],["{\"selector\":\"[href=\\\"/about#support\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"DisableDevtool\"]]}"],["{\"selector\":\".loading-text\",\"action\":[\"remove-class\",\"loading-text\"]}"],["{\"selector\":\".v-card.v-card--flat\",\"tasks\":[[\"has-text\",\"Sign up to receive\"]]}"],["{\"selector\":\".mx-auto.container\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"body > div:nth-of-type(1) > div\",\"tasks\":[[\"has-text\",\"adblocker\"]]}"],["{\"selector\":\".around-desktop-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.carbonLoaded\"]]}"],["{\"selector\":\".adbanner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#side > ins.adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.onkeydown\"]]}"],["{\"selector\":\".modal-content\",\"tasks\":[[\"has\",{\"selector\":\".text > b\",\"tasks\":[[\"has-text\",\"Privacy Policy\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/oncontextmenu|devtools|stateObject|debugger/\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/contextmenu|devtool/\"]]}"],["{\"selector\":\".elementor-top-column h6\",\"tasks\":[[\"has-text\",\"advertisement\"],[\"upward\",\".elementor-top-column\"]]}"],["{\"selector\":\".notificationsContainer\",\"tasks\":[[\"has-text\",\"whitelisten of beleef Tweakers\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"AdB\\\")]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/user-select|::selection/\"]]}"],["{\"selector\":\".has-background\",\"tasks\":[[\"has-text\",\"inbox\"]]}","{\"selector\":\".has-background\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".restricted-body.html-content\",\"tasks\":[[\"has-text\",\"Email us\"]]}","{\"selector\":\".restricted-body.html-content\",\"tasks\":[[\"has-text\",\"your inbox\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Adblock\"]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has-text\",\"Subscribe for\"]]}","{\"selector\":\".elementor-widget-container\",\"tasks\":[[\"has-text\",\"tired of censorship\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"Adblock\\\")]\"]]}"],["{\"selector\":\"p.t-links-underlinedy\",\"tasks\":[[\"has-text\",\"Sign up for The Brief\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"checkAdblockBait\"]]}"],["{\"selector\":\"html\",\"action\":[\"remove-class\",\"modal-open\"],\"tasks\":[[\"watch-attr\",[\"class\"]]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"nocontextmenu\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"blocker\\\")]\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"We think our Android\"]]}"],["{\"selector\":\"body[oncontextmenu=\\\"return false\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"_0x\"]]}"]];

const hostnamesMap = new Map([["ferroviando.com.br",1],["jornaljoca.com.br",1],["visse.com.br",1],["javsubtitle.co",[1,9]],["afrikmag.com",1],["alphagirlreviews.com",1],["aprendeinglessila.com",1],["arcanescans.com",1],["bigdatauni.com",1],["bingotingo.com",1],["clockks.com",1],["codedosa.com",1],["counciloflove.com",1],["cracksone.com",1],["drkrok.com",1],["filmzone.com",1],["flashdumpfiles.com",1],["formatatmak.com",1],["getective.com",1],["globaldefensecorp.com",1],["gossipnextdoor.com",1],["guidingliterature.com",1],["hayatbilgileri.com",1],["hellokpop.com",1],["hiraethtranslation.com",1],["ieltsliz.com",1],["immobiliaremia.com",1],["infokik.com",1],["iptv4best.com",1],["jafekri.com",1],["jbjbgame.com",1],["joysound.com",1],["kapitalis.com",1],["kitchennovel.com",1],["koalasplayground.com",1],["learninsta.com",1],["liveyourmaths.com",1],["moneyexcel.com",1],["ncert-solutions.com",1],["home.novel-gate.com",1],["placementstore.com",1],["poolpiscina.com",1],["riwyat.com",1],["samsungtechwin.com",1],["secondlifetranslations.com",1],["selfstudyanthro.com",1],["selfstudyhistory.com",1],["tech-recipes.com",1],["tempatwisataseru.com",1],["theaircurrent.com",1],["tipssehatcantik.com",1],["truyenbanquyen.com",1],["viatasisanatate.com",1],["wikiofcelebs.com",1],["winmeen.com",1],["neuroteam-metz.de",1],["velicu.eu",1],["newspao.gr",1],["ncertsolutions.guru",1],["tiempo.hn",1],["rukim.id",1],["ibps.in",1],["colegiosconcertados.info",1],["coffeeapps.ir",1],["infodifesa.it",1],["gakki.me",1],["tunegate.me",1],["mediahiburan.my",1],["cours-de-droit.net",1],["ezmanga.net",1],["nocturnetls.net",1],["programasvirtualespc.net",1],["onlineonderdelenshop.nl",1],["day-hoc.org",1],["licensekeys.org",1],["sertracen.com.pa",1],["kulinarnastronamocy.pl",1],["blogvisaodemercado.pt",1],["ananda-yoga.ro",1],["anascrie.ro",1],["cabinetexpert.ro",1],["pitesti24.ro",1],["visefierbinti.ro",1],["voxvalachorum.ro",1],["ziarulargesul.ro",1],["kaystls.site",1],["kicknews.today",1],["primicia.com.ve",1],["maduras.vip",1],["media.framu.world",1],["animesaga.in",2],["fritz.ai",3],["blog.inkdrop.app",3],["blog.dp6.com.br",3],["uxdesign.cc",3],["atrium.co",3],["newco.co",3],["thecontrol.co",3],["unpatent.co",3],["backstage.1blocker.com",3],["500ish.com",3],["tech.ahrefs.com",3],["artplusmarketing.com",3],["backchannel.com",3],["badootech.badoo.com",3],["baharudinyusuf.com",3],["bitcointechtalk.com",3],["bitwarden.com",3],["bluerockpublicradio.com",3],["boomsupersonic.com",3],["bradfieldcs.com",3],["brightthemag.com",3],["tech.buzzfeed.com",3],["blog.canopas.com",3],["blog.coinbase.com",3],["blog.confiant.com",3],["dave-bailey.com",3],["discordapp.com",3],["doist.com",3],["doit-intl.com",3],["doublepulsar.com",3],["economist.com",3],["electricliterature.com",3],["elidourado.com",3],["getadblock.com",3],["levelup.gitconnected.com",3],["greylock.com",3],["blog.growthhackers.com",3],["headmelted.com",3],["helium.com",3],["blog.hiri.com",3],["howwegettonext.com",3],["iheart.com",3],["injusticetoday.com",3],["insightdatascience.com",3],["itsyourturnblog.com",3],["kiwi.com",3],["learngoprogramming.com",3],["learningbyshipping.com",3],["ledwards.com",3],["legalist.com",3],["broadcast.listennotes.com",3],["logrocket.com",3],["blog.ltse.com",3],["mapbox.com",3],["medium.com",3],["melmagazine.com",3],["mondaynote.com",3],["open.nytimes.com",3],["nyulocal.com",3],["ofdollarsanddata.com",3],["postlight.com",3],["proandroiddev.com",3],["signalvnoise.com",3],["slackhq.com",3],["news.smugmug.com",3],["springboard.com",3],["startupsventurecapital.com",3],["theawl.com",3],["thebigroundtable.com",3],["thebillfold.com",3],["thebolditalic.com",3],["theringer.com",3],["thriveglobal.com",3],["timeline.com",3],["towardsdatascience.com",3],["udacity.com",3],["usejournal.com",3],["warisboring.com",3],["wearemel.com",3],["whatahowler.com",3],["writingcooperative.com",3],["x.company",3],["slack.engineering",3],["blog.angular.io",3],["blog.bitsrc.io",3],["bolt.io",3],["codeburst.io",3],["fossa.io",3],["itnext.io",3],["okmeter.io",3],["javascript.plainenglish.io",3],["prototypr.io",3],["rainway.io",3],["stoplight.io",3],["theabacus.io",3],["blog.waffle.io",3],["coach.me",3],["citizen428.net",3],["dotandline.net",3],["keepingstock.net",3],["esciencecenter.nl",3],["thetaoist.online",3],["checkio.org",3],["blog.devcolor.org",3],["freecodecamp.org",3],["iota.org",3],["jupyter.org",3],["sagefy.org",3],["standardnotes.org",3],["blog.statebox.org",3],["thinkprogress.org",3],["uxplanet.org",3],["faun.pub",3],["blog.twitch.tv",3],["appd.at",4],["themosvagas.com.br",4],["hitproversion.com",4],["operatorsekolahdbn.com",4],["techsini.com",4],["9now.com.au",5],["newswire.ca",6],["raenonx.cc",7],["eplayer.click",8],["streamservicehd.click",8],["kooora4livs.com",[8,45]],["olacast.live",8],["kooora4lives.net",[8,45]],["librospreuniversitariospdf.blogspot.com",9],["lvturbo.com",9],["sbbrisk.com",9],["sbface.com",9],["sbspeed.com",9],["camcaps.io",9],["streamsb.net",9],["vtplayer.net",9],["weakstream.org",9],["camcaps.to",9],["apps.jeurissen.co",10],["1fichier.com",11],["8muses.com",12],["advancedsciencenews.com",13],["androidauthority.com",14],["apk1s.com",15],["dreamsfriend.com",15],["mercenaryenrollment.com",15],["xossipy.com",15],["appimagehub.com",16],["linux-apps.com",16],["pling.com",16],["gnome-look.org",16],["store.kde.org",16],["opendesktop.org",16],["xfce-look.org",16],["askubuntu.com",17],["serverfault.com",17],["stackapps.com",17],["stackexchange.com",17],["superuser.com",17],["mathoverflow.net",17],["babylonbee.com",18],["canalnatelinhaonline.blogspot.com",19],["mskmangaz.blogspot.com",20],["bloombergquint.com",21],["coder.com",22],["crunchyroll.com",23],["ctpost.com",24],["cultofmac.com",25],["deezer.com",26],["diffnow.com",27],["duolingo.com",28],["elektrikmen.com",29],["embibe.com",30],["esscctv.com",31],["expquebec.com",32],["facebook.com",33],["facebookcorewwwi.onion",33],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",33],["faloo.com",34],["financasdeouro.com",35],["verfutebol.net",35],["foxandbriar.com",36],["foxnews.com",37],["gdrivedescarga.com",38],["guitar.com",39],["heraldextra.com",40],["hket.com",41],["hotcleaner.com",42],["ipphone-warehouse.com",43],["jpost.com",44],["lazytranslations.com",46],["lightnovelpub.com",47],["outlook.live.com",48],["lokercirebon.com",49],["loginhit.com.ng",49],["marinetraffic.com",50],["myntra.com",51],["naaree.com",52],["notthebee.com",53],["online2pdf.com",54],["pendulumedu.com",55],["photopea.com",56],["reddit.com",57],["embed.reddit.com",58],["forum.release-apk.com",59],["safirsoft.com",60],["salon.com",61],["market.samm.com",62],["seriesperu.com",63],["shortform.com",64],["skepticalraptor.com",65],["skidrowreloaded.com",66],["web.skype.com",67],["snbc13.com",68],["watchmdh.to",68],["spanishdict.com",69],["stitchsnitches.com",70],["studiestoday.com",71],["taskandpurpose.com",72],["teachoo.com",73],["th-world.com",74],["theatlantic.com",75],["theguardian.com",76],["themeslide.com",77],["warungkomik.com",77],["theskimm.com",78],["tunein.com",79],["turkbettv154.com",80],["twitter.com",81],["x.com",81],["webnovel.com",82],["yourstory.com",83],["airbnb.de",84],["yoututosjeff.es",85],["gridcoinstats.eu",86],["jpopsingles.eu",87],["adslink.pw",87],["techcrunch-com.translate.goog",88],["gript.ie",89],["businessinsider.in",90],["ncrtsolutions.in",91],["hardware.info",92],["tarnkappe.info",93],["cssreference.io",94],["tileman.io",95],["bwitter.me",96],["allcryptoz.net",97],["crewbase.net",97],["crewus.net",97],["shinbhu.net",97],["shinchu.net",97],["thumb8.net",97],["thumb9.net",97],["topcryptoz.net",97],["ultraten.net",97],["uniqueten.net",97],["myanimelist.net",98],["phimlongtieng.net",99],["playertv.net",100],["streambuddy.net",101],["tweakers.net",102],["wotlabs.net",103],["janvissersweer.nl",104],["newsroom.co.nz",105],["stuff.co.nz",106],["nusantararom.org",107],["reclaimthenet.org",108],["sythe.org",109],["texastribune.org",110],["mgsm.pl",111],["surreyhillsgrocer.sg",112],["teamkong.tk",113],["mail.tm",114],["dailymail.co.uk",115],["ntuplay.xyz",116]]);

const entitiesMap = new Map([["extreme-down",0],["fmovies",1],["vidmoly",2]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
