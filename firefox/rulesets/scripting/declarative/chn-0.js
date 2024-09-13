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

// ruleset: chn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#firstSingle\",\"action\":[\"style\",\"padding: 0 !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".q-body--prevent-scroll\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#ac-globalnav\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".ac-gn-blur\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"html #globalnav\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"[data-href*=\\\"://sax\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".finance_header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"#detect.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\".top_bg\",\"action\":[\"style\",\"height: 60px !important;\"]}"],["{\"selector\":\"#content_left > div[style*=\\\"display:block !important;\\\"]:not(.result)\",\"action\":[\"style\",\"position: absolute!important; left: -4000px!important;\"]}","{\"selector\":\".ec_wise_ad\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".special_conf_skin .wrap1\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\".sidebar > section#text-8[style*=\\\"bottom: 240px;\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#ADback\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"body[style*=\\\"overflow\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0!important;\"]}"],["{\"selector\":\"[data-spotim-module=\\\"recirculation\\\"][data-spotim-showing-slots~=\\\"1-start-300x250\\\"] .spotim-recirculation div[data-spotim-row] > div[data-spotim-slot-size=\\\"300x250\\\"] ~ .sprcRftoX\",\"action\":[\"style\",\"margin-left: 0!important;\"]}","{\"selector\":\"body [data-spotim-module=\\\"recirculation\\\"][data-spotim-showing-slots~=\\\"1-start-300x250\\\"] .sprc2PlxR [data-spotim-row=\\\"1\\\"]::before\",\"action\":[\"style\",\"left: 0!important;\"]}"],["{\"selector\":\"div[id^=\\\"gklobl\\\"]\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".wpcom_ad_wrap\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".wrapper > div[data-content-source] > .modalOpenWidth[style*=\\\"top:\\\"]\",\"action\":[\"style\",\"top: 80px !important;\"]}"],["{\"selector\":\".app.padding > .header\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".app.padding\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#comment\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#mainContent\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#j-topBgBox + .crumbs-nav.top-op\",\"action\":[\"style\",\"margin-bottom: 10px !important;\"]}"],["{\"selector\":\"body #aswift_1:not(#style_important)\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"padding-right: 0!important; overflow: visible!important;\"]}"],["{\"selector\":\"#SlashviewAdDetector\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sptable_do_not_remove\",\"action\":[\"style\",\"display: block !important; visibility: hidden !important;\"]}"],["{\"selector\":\".main-content\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#wrapfabtest\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".player-rm > a[target=\\\"_blank\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"a[href*=\\\".umtrack.com/\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#player_div\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"iframe[width=\\\"728\\\"][height=\\\"90\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"a[href*=\\\"/entry/register/?i_code=\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#acornerinner1122\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".app-container[aria-expanded=\\\"false\\\"] section.with-ad\",\"action\":[\"style\",\"width: calc(100% - 20px) !important;\"]}","{\"selector\":\".c-ad-103\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".main_ad_head_wide\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"] .main-header\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"][data-section-type=\\\"new-video\\\"] .content-wrap:nth-child(-1n+2)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[class*=\\\"-ad-sidebar-\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\".download .content-area > div[class]\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#m2\",\"action\":[\"style\",\"height: 5px!important;\"]}"],["{\"selector\":\"#video_player\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\".playmar > .playl\",\"action\":[\"style\",\"visibility: hidden!important;\"]}","{\"selector\":\".playmar > .playr\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\".bg-overlayer\",\"action\":[\"style\",\"pointer-events: unset !important;\"]}"],["{\"selector\":\".player-side > .block\",\"action\":[\"style\",\"visibility: hidden !important; min-height: 390px !important;\"]}"],["{\"selector\":\"#ypaad\",\"action\":[\"style\",\"height: 3px!important;\"]}"],["{\"selector\":\"img[width=\\\"960\\\"][height=\\\"90\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".fb_fanpage_inpage > .other_news_box_2\",\"action\":[\"style\",\"padding: 0 0px!important; margin: 26px 0!important;\"]}"],["{\"selector\":\"#BH-bigbanner\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"#flyRightBox\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"img[onload=\\\"AntiAd.check(this)\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#header > nav.floated-navbar\",\"action\":[\"style\",\"top: 0!important;\"]}"],["{\"selector\":\".whitecon > .related[data-desc=\\\"相關新聞\\\"] > li:nth-child(5)\",\"action\":[\"style\",\"margin-right: 0!important; margin-left: 20px!important;\"]}"],["{\"selector\":\"a[href*=\\\".11h5.\\\"] img\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body > article[class][style*=\\\"position: fixed;top: 0;z-index: 9999;display:block !important;\\\"]\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"]];

const hostnamesMap = new Map([["pansci.asia",0],["itshokunin.cc",1],["alotof.software",1],["theporn.cc",2],["69xx.one",2],["theav.xyz",2],["apple.com.cn",3],["sina.cn",4],["money.163.com",5],["h5.17k.com",[6,7]],["mobile01.com",6],["1keydata.com",8],["4399.com",9],["gameapps.hk",9],["51cto.com",10],["baidu.com",11],["tieba.baidu.com",12],["buzzorange.com",13],["colamanga.com",14],["ezneering.com",14],["csgoob.com",15],["dm5.com",16],["duodada.com",17],["m.lelekan.com",17],["chinese.engadget.com",18],["game735.com",19],["ghxi.com",20],["haoweichi.com",21],["ekamus.info",21],["huaban.com",22],["iqihang.com",23],["jieav.com",24],["linovelib.com",25],["yodu.org",25],["nxpaaq.com",26],["book.qidian.com",27],["rjno1.com",28],["slashlook.com",29],["slashview.com",30],["t66y.com",31],["udn.com",32],["v2rayssr.com",33],["waipian1.com",34],["waipian10.com",34],["waipian11.com",34],["waipian12.com",34],["waipian13.com",34],["waipian14.com",34],["waipian15.com",34],["waipian16.com",34],["waipian17.com",34],["waipian18.com",34],["waipian19.com",34],["waipian2.com",34],["waipian20.com",34],["waipian21.com",34],["waipian22.com",34],["waipian23.com",34],["waipian24.com",34],["waipian25.com",34],["waipian26.com",34],["waipian27.com",34],["waipian28.com",34],["waipian29.com",34],["waipian3.com",34],["waipian30.com",34],["waipian31.com",34],["waipian32.com",34],["waipian33.com",34],["waipian34.com",34],["waipian35.com",34],["waipian36.com",34],["waipian37.com",34],["waipian38.com",34],["waipian39.com",34],["waipian4.com",34],["waipian40.com",34],["waipian5.com",34],["waipian6.com",34],["waipian7.com",34],["waipian8.com",34],["waipian9.com",34],["weihemenye.com",35],["discuss.com.hk",36],["ulifestyle.com.hk",37],["applefans.today",37],["bde4.icu",38],["520cc.me",39],["liaoningmovie.net",40],["sutin0831.pixnet.net",41],["renfei.net",42],["xbgame.net",43],["macapp.so",44],["58b.tv",45],["aiyifan.tv",46],["iyf.tv",[46,47]],["yfsp.tv",46],["bingfeng.tw",48],["com.tw",49],["cna.com.tw",50],["gamer.com.tw",51],["kocpc.com.tw",52],["ltn.com.tw",53],["dilidili.wang",[54,55]]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["h5.dilidili.wang",[54]]]);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
