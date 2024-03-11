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

// ruleset: nor-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".teaser__native\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\".aside-image-with-link\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://www.whatsnxt.io/\\\"]\"}]]}"],["{\"selector\":\"#grtvbelt_Sponsored\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".ad_interscroller\",\"tasks\":[[\"upward\",\".wrapper\"]]}"],["{\"selector\":\".js-betting-widget.is-country-no\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/[kc]as\\\\ino/i\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"]]}"],["{\"selector\":\"#sidebar > li > .block\",\"tasks\":[[\"has\",{\"selector\":\"> .blocksubhead > span\",\"tasks\":[[\"has-text\",\"Noen sponsorer\"]]}]]}"],["{\"selector\":\"li.tv\",\"tasks\":[[\"has\",{\"selector\":\"> .do-link\"}]]}","{\"selector\":\"li[class^=\\\"tv\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"img:is([alt*=\\\"bet\\\" i], [alt*=\\\"tipping\\\" i])\"}]]}"],["{\"selector\":\"script[src^=\\\"//s1.adform.net\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has\",{\"selector\":\"+ p\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".wg-editorial\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"cx_\\\"]\"}]]}"],["{\"selector\":\"div[class*=\\\"col\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .native-teaser\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}]]}"],["{\"selector\":\".col-300 > .wrapper-sticky\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}","{\"selector\":\"a[href*=\\\".bedrageri.com/\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#dbashopping-widget\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"p1=sponsorclick\\\"]\"}]]}"],["{\"selector\":\".section-1-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".dre-container--margin-bottom\",\"tasks\":[[\"has\",{\"selector\":\".hydra-marketing-banner\"}]]}"],["{\"selector\":\"div[id^=\\\"leftAdSpotAdcontainer\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".fnSpaceManagement > div\",\"tasks\":[[\"has\",{\"selector\":\"> .widgetiframe\"}]]}"],["{\"selector\":\".bluebox\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"bet365\\\"]\"}]]}","{\"selector\":\".bluebox\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"cncpt-rec\\\"]\"}]]}","{\"selector\":\".bluebox_headlines\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"cncpt-rec\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"tmplNews_body_\\\"] > p:last-of-type\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\".post-content > p\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\".et_section_regular\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> .adblock\"}]]}","{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"jourbox\\\"] > iframe[src*=\\\"readpeak\\\"]\"}]]}"],["{\"selector\":\".panel-latest-forum-threads\",\"tasks\":[[\"has-text\",\" sponsor\"]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"betting\\\"]\"}]]}","{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}","{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"mr-green\\\"]\"}]]}","{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"online-spil\\\"]\"}]]}","{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"spillemaskin\\\"]\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"ins\"}]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}"],["{\"selector\":\".boxbanner\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#taboola-above-article-thumbnails\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".list-group\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".col-md-4\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"afkobling-hverdag\\\"]\"}]]}","{\"selector\":\".col-md-4\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}","{\"selector\":\".col-md-4\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"spil\\\"]\"}]]}"],["{\"selector\":\"div[class=\\\" margin-top-lg \\\"]\",\"tasks\":[[\"has\",{\"selector\":\".custom-ad-container\"}]]}"],["{\"selector\":\".adunit-lazy\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".newsbox\",\"tasks\":[[\"has\",{\"selector\":\".adunit-lazy\"}]]}"],["{\"selector\":\".elementor-widget-wrap > .elementor-section\",\"tasks\":[[\"has-text\",\"REKLAMER\"]]}"],["{\"selector\":\".uk-panel-box\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\".blog-post\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\"#header > div\",\"tasks\":[[\"has\",{\"selector\":\"div[id*=\\\"gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".clearfixP.columns[style] .clearfixP.box-no-border\",\"tasks\":[[\"has\",{\"selector\":\"> .narrow-banner\"}]]}","{\"selector\":\".color-scheme-1\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"],[\"spath\",\" + div\"]]}","{\"selector\":\".color-scheme-1\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}","{\"selector\":\"script[data-adfscript]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\"div[data-testid=\\\"richTextElement\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span[style=\\\"color:#A0A09F;\\\"]\"}]]}"],["{\"selector\":\".textwidget > div\",\"tasks\":[[\"has\",{\"selector\":\"script\"}]]}","{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"script\"}],[\"spath\",\":first-of-type\"]]}"],["{\"selector\":\".gridster_grid\",\"tasks\":[[\"has\",{\"selector\":\".adblock[style^=\\\"background:#32\\\"]\"}]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"a[id=\\\"Annoncer\\\"]\"}]]}"],["{\"selector\":\".row > div[class^=\\\"row-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"#\\\"] > .panel-ad\"}]]}","{\"selector\":\"div > .section\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\"-label\\\"]\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".o-deck\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"ad ad-wide\\\"]\"}]]}"],["{\"selector\":\".justify-center.flex\",\"tasks\":[[\"has\",{\"selector\":\"div[data-type]\"}]]}","{\"selector\":\"section[class^=\\\"bg-brown-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".text-center\"}]]}"],["{\"selector\":\".sidebar-widget-container\",\"tasks\":[[\"has\",{\"selector\":\"center > a\"}]]}","{\"selector\":\"div.sidebar-widget-container.widget_text\",\"tasks\":[[\"has\",{\"selector\":\":is(center > a, ins, div[class*=\\\"affiliate\\\"])\"}]]}","{\"selector\":\"div[class^=\\\"container-\\\"] > section\",\"tasks\":[[\"has\",{\"selector\":\":is(center, ins)\"}]]}","{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\":is(center > a, .strossle-widget)\"}]]}"],["{\"selector\":\".region-right > .block\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"clinicadentalescandinava\\\"]\"}]]}"],["{\"selector\":\"div[class*=\\\"advertisement-spot\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".ad-banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".tdc-row\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}","{\"selector\":\"aside.WP_Editor_Widget\",\"tasks\":[[\"has\",{\"selector\":\"script\"}]]}"],["{\"selector\":\".boxlist\",\"tasks\":[[\"has\",{\"selector\":\".adspot-article-wrapper\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".ads\"}]]}"],["{\"selector\":\".col-sm-6.col-12\",\"tasks\":[[\"has\",{\"selector\":\".augl\"}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".fluid\"}]]}]]}"],["{\"selector\":\".vc_column\",\"tasks\":[[\"has\",{\"selector\":\".mobile-ad\"}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}","{\"selector\":\".vc_column-inner\",\"tasks\":[[\"has\",{\"selector\":\".mobile-ad\"}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}"],["{\"selector\":\".tdc-row\",\"tasks\":[[\"has\",{\"selector\":\".td_block_text_with_title\"}]]}","{\"selector\":\".tdc-row\",\"tasks\":[[\"has\",{\"selector\":\".vc_column:only-of-type .augl-container:only-of-type\"}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"auglysing-\\\"]\"}]]}","{\"selector\":\".row div[class^=\\\"auglysing-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".mvp-flex-ad\",\"tasks\":[[\"has\",{\"selector\":\"img[width=\\\"300\\\"]\"}]]}","{\"selector\":\".mvp-widget-home\",\"tasks\":[[\"has-text\",\"/^Velun{2}arar/\"]]}"],["{\"selector\":\".platform-content\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"/pagead\\\"]\"}]]}","{\"selector\":\".platform-content\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"averoybrannvern.no\\\"]\"}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\".pxf.io/\\\"]\"}]]}","{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/sportspill/\\\"][href*=\\\"/x/\\\"]\"}]]}","{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/sportspill/\\\"][href*=\\\"million\\\"]\"}]]}","{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/sportspill/\\\"][href*=\\\"pott\\\"]\"}]]}"],["{\"selector\":\".g-10\",\"tasks\":[[\"has-text\",\"Artikkelen fortsetter \"]]}","{\"selector\":\".gofollow\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".sidebar__section\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"ad-unit\\\"]\"}]]}"],["{\"selector\":\".js-strossle-widget .o-grid__col\",\"tasks\":[[\"has\",{\"selector\":\"> article[id^=\\\"ad_native\\\"]\"}]]}","{\"selector\":\".o-grid__col\",\"tasks\":[[\"has\",{\"selector\":\".c-ad\"}]]}","{\"selector\":\".o-grid__col\",\"tasks\":[[\"has\",{\"selector\":\"> [id^=\\\"ad_native\\\"]\"}]]}"],["{\"selector\":\".gridUnit.span6\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"netboard_\\\"]\"}]]}"],["{\"selector\":\"#main > div\",\"tasks\":[[\"has\",{\"selector\":\"[data-ad-subtype^=\\\"skyscraper\\\"]\"}]]}"],["{\"selector\":\"#main > div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"skyscraper\\\"]\"}]]}","{\"selector\":\"div[class^=\\\"article-wrapper-\\\"] > div[class*=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[data-variants*=\\\"ssa-native-ad\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"hyperion-css-\\\"] > div[class^=\\\"hyperion-css-\\\"] > div[class^=\\\"hyperion-css-\\\"] > div[class^=\\\"hyperion-css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[for=\\\"login label\\\"]\"}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has-text\",\"/^An{2}onse:/\"]]}","{\"selector\":\"div[style^=\\\"font-size\\\"]\",\"tasks\":[[\"has-text\",\"/^An{2}onse:/\"]]}"],["{\"selector\":\".ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"Annonse:\"]]}]]}"],["{\"selector\":\"div[id=\\\"336x280-sidebar\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[data-variants*=\\\"article_netboard\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[data-ad-subtype=\\\"in-feed\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"p ~ div[class^=\\\"hyperion-css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id*=\\\"-ad-\\\" i]\"}]]}"],["{\"selector\":\".lenkeboks\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}"],["{\"selector\":\".wsite-multicol-col\",\"tasks\":[[\"has\",{\"selector\":\"> .wsite-spacer\"}]]}"],["{\"selector\":\".home-ads\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[nf-desk-widget=\\\"spot.content\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"div[class^=\\\"css\\\"]\",\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Annonse\\\"$\"}]]}","{\"selector\":\"div[class^=\\\"styles__StudioSpacer-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"AdWrapper__\\\"]\"}]]}"],["{\"selector\":\".adunit\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[data-cy=\\\"video-page-horisontal\\\"] > div\",\"tasks\":[[\"has-text\",\"Annonse\"]]}"],["{\"selector\":\"style + .container > .row\",\"tasks\":[[\"has\",{\"selector\":\"> .col-sm-12 > .dagsavisenDesktopAd\"}]]}"],["{\"selector\":\".container-footer-ad\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".sidebar-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".grid > div:not([class*=\\\" \\\"])\",\"tasks\":[[\"has\",{\"selector\":\"> div[class$=\\\" \\\"]\"}]]}","{\"selector\":\"article ~ div\",\"tasks\":[[\"has-text\",\"/^A[n|ĳ]n\\\\ons/i\"]]}"],["{\"selector\":\".grid > div:not([class*=\\\" \\\"])\",\"tasks\":[[\"has\",{\"selector\":\"> div:not([class*=\\\" \\\"])\"}]]}","{\"selector\":\"div[id^=\\\"row-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".banner\"}]]}"],["{\"selector\":\".col-span-12:not([class*=\\\" \\\"])\",\"tasks\":[[\"has\",{\"selector\":\"> :is([class$=\\\" \\\"], [class*=\\\"_class\\\"], :not([class*=\\\" \\\"]))\"}]]}","{\"selector\":\"div[id^=\\\"row-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".preamble-shadow\"}]]}"],["{\"selector\":\"div[data-placeholder=\\\"lantern_placeholder_ad\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".row-with-bottom-border\",\"tasks\":[[\"has\",{\"selector\":\".ad-wrap\"}]]}"],["{\"selector\":\".carousel-container + div:not(.carousel-container)\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"ad\\\"]\"}]]}","{\"selector\":\".preview\",\"tasks\":[[\"has\",{\"selector\":\".kicker\",\"tasks\":[[\"has-text\",\"/an{2}onse/i\"]]}]]}"],["{\"selector\":\".ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"amazonaws.com\\\"]\"}]]}","{\"selector\":\".ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"[style*=\\\"width:300px;height:90px\\\"]\"}]]}"],["{\"selector\":\".col-12\",\"tasks\":[[\"has\",{\"selector\":\"> betting-matchup\"}]]}","{\"selector\":\".col-lg-7\",\"tasks\":[[\"has\",{\"selector\":\"+ article\"}]]}","{\"selector\":\".column.one-half\",\"tasks\":[[\"has\",{\"selector\":\".promoted-offer\"}]]}","{\"selector\":\".entrance\",\"tasks\":[[\"has\",{\"selector\":\".entrance__mark__text\",\"tasks\":[[\"has-text\",\"Annonse:\"]]}]]}","{\"selector\":\"[class*=\\\"-artikkelboard\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/apx/\\\"]\"}]]}","{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\"+ main\"}]]}","{\"selector\":\"div[data-name=\\\"gamer_toppbanner\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"header ~ div\",\"tasks\":[[\"has\",{\"selector\":\"div[data-unit*=\\\"banner\\\"]\"}]]}"],["{\"selector\":\".bottomSmallSpaced.topMediumSpaced\",\"tasks\":[[\"has-text\",\"/^An{2}onse/\"]]}"],["{\"selector\":\".et_pb_text_align_left\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"downloadcentral\\\"]\"}]]}"],["{\"selector\":\".MuiContainer-root .MuiGrid-root + .MuiBox-root\",\"tasks\":[[\"has\",{\"selector\":\"div[id*=\\\"gpt\\\"]\"}]]}","{\"selector\":\".MuiListItem-root\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".nf-o-moduleblock\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> .block-content .sam_ad\"}]]}"],["{\"selector\":\".td-main-page-wrap .td-element-style + .tdc-row\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".comcontent\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".item\",\"tasks\":[[\"has\",{\"selector\":\".meta\",\"tasks\":[[\"has-text\",\"/^An{2}onse$/\"]]}]]}","{\"selector\":\".single-post .code-block\",\"tasks\":[[\"has\",{\"selector\":\"script\"}]]}","{\"selector\":\".spklw-post\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"smartadserver\\\"]\"}]]}","{\"selector\":\".td-c-loop-item\",\"tasks\":[[\"has\",{\"selector\":\".meta-info\",\"tasks\":[[\"has-text\",\"Annonse\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\" – annonse\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"/[?:;—]\\\\sannons[eø]r?$/\"]]}]]}","{\"selector\":\"article.clearfix\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/go/\\\"]\"}]]}"],["{\"selector\":\".ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"=advertisement\\\"]\"}]]}"],["{\"selector\":\"#g-aside .size-100\",\"tasks\":[[\"has\",{\"selector\":\".bannergroup\"}]]}","{\"selector\":\"#g-aside .size-100\",\"tasks\":[[\"has\",{\"selector\":\".sprocket-strips-s\"}]]}"],["{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"> script[src*=\\\"/www/delivery/\\\"]\"}]]}"],["{\"selector\":\".latestnews-box\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".td-pb-span8\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".overskrift_naeringsinnhold\",\"tasks\":[[\"has\",{\"selector\":\"> h3\"}]]}","{\"selector\":\".text-center\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}]]}"],["{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\"> .adnuntius-ad\"}]]}"],["{\"selector\":\"div[id^=\\\"advert-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".front optimus-element\",\"tasks\":[[\"has-text\",\"Eurojackpot\"]]}","{\"selector\":\".optimus-complex-front\",\"tasks\":[[\"has\",{\"selector\":\"amedia-include[manifest*=\\\".norkon.\\\"]\"}]]}","{\"selector\":\"amedia-frontpage > .optimus-complex-front\",\"tasks\":[[\"has\",{\"selector\":\"> header > h2\",\"tasks\":[[\"has-text\",\"/Reklame|REKLAME/\"]]}]]}","{\"selector\":\"amedia-include[param-editionid=\\\"reklame\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"article[data-lp-section=\\\"sportspill\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".slotHeader\"}],[\"has-text\",\"/lot{2}o/i\"]]}","{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"://norsk-tipping.\\\"], a[href^=\\\"/shoppingtips/\\\"]\"}]]}"],["{\"selector\":\"div.MuiContainer-root div[class^=\\\"mui-style-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-ad-unit-id]\"}]]}"],["{\"selector\":\"ul\",\"tasks\":[[\"has\",{\"selector\":\".columnLogo\"}]]}"],["{\"selector\":\"table[width^=\\\"7\\\"]:first-of-type\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"tradedoubler\\\"]\"}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"./index.html\\\"]\"}],[\"spath\",\" + tr + tr\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"ins[data-revive-zoneid]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".entry-content > h4\",\"tasks\":[[\"has\",{\"selector\":\"script[src$=\\\"/adsbygoogle.js\\\"]\"}]]}","{\"selector\":\".entry-content > h6\",\"tasks\":[[\"has\",{\"selector\":\"script[src$=\\\"/adsbygoogle.js\\\"]\"}]]}","{\"selector\":\".so-widget-sow-editor\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://online.adservicemedia.dk/\\\"]\"}]]}","{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Annonse\"]]}","{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Annonser\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Annonse\"]]}"],["{\"selector\":\".float-left\",\"tasks\":[[\"has\",{\"selector\":\"span[id^=\\\"ezoic-pub-ad-placeholder-\\\"]\"}]]}"],["{\"selector\":\".widget-goodpress-home-block-one\",\"tasks\":[[\"has-text\",\"Annonsørinnhold\"]]}"],["{\"selector\":\".has-text-align-center\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\".adservice\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Play-Asia\"]]}","{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reklame\"]]}"],["{\"selector\":\"iframe[src*=\\\"://ads.\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".xrow\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\" \\\"] > span[class]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Annonse\"]]}]]}"],["{\"selector\":\".small-6[class*=\\\"articleContainer_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"tradedoubler.com\\\"]\"}]]}","{\"selector\":\"div[data-ga-action$=\\\"_ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}","{\"selector\":\"section\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}"],["{\"selector\":\"#topboard\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"article > div\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}","{\"selector\":\"div\",\"tasks\":[[\"matches-css\",{\"name\":\"min-height\",\"value\":\"^165px$\"}]]}","{\"selector\":\"div.clearfix.col-full-width\",\"tasks\":[[\"has-text\",\"kommersielle partner\"]]}","{\"selector\":\"main > div > div\",\"tasks\":[[\"has-text\",\"kommersielle partner\"]]}","{\"selector\":\"main > section > section\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}","{\"selector\":\"section + div\",\"tasks\":[[\"has\",{\"selector\":\"span\"}]]}","{\"selector\":\"section > section\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}","{\"selector\":\"section > section:first-of-type + section:last-of-type\",\"action\":[\"style\",\"width: 100% !important; max-width: 675px !important\"],\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"  \\\"]\"}]]}","{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> div > div\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}]]}"],["{\"selector\":\".one-half\",\"tasks\":[[\"has-text\",\"/[kc]as\\\\ino/i\"]]}","{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",5]]}"],["{\"selector\":\"div[class*=\\\"View_has-space__\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .text-center\"}]]}"],["{\"selector\":\".pages-container__element\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"banner\\\"]\"}]]}","{\"selector\":\".pages-container__element\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"gpt\\\"]\"}]]}"],["{\"selector\":\"div.large-12.row\",\"tasks\":[[\"has-text\",\"MASCUS\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has-text\",\"/^ANNONSE/\"]]}"],["{\"selector\":\"div[id^=\\\"module-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-adslot^=\\\"fullscreen-\\\"]\"}]]}"],["{\"selector\":\".fl-visible-desktop-medium\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"ann-forside\\\"]\",\"tasks\":[[\"has-text\",\"/An{2}onse:/\"]]}]]}"],["{\"selector\":\".td-pb-span4\",\"tasks\":[[\"has-text\",\"ANNONSØRINNHOLD\"]]}"],["{\"selector\":\".bundle li[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-ad-subtype]\"}]]}","{\"selector\":\"aside[data-test-tag=\\\"factbox\\\" i] + div:not([class], [id])\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"adtraction\\\"]\"}]]}","{\"selector\":\"div[class^=\\\" hyperion-css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> [data-ad-subtype]\"}]]}"],["{\"selector\":\"div[id*=\\\"-feedAdvert\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"automat\\\"]\"}]]}","{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\"#dtnContainer\",\"tasks\":[[\"has\",{\"selector\":\".dtnad\"}]]}"],["{\"selector\":\"tr > td > div\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"clk.tradedoubler.\\\"]\"}]]}"],["{\"selector\":\".forside_adholder\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"> noscript\"}]]}","{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"img[src=\\\"gifs/1pix.gif\\\"]\"}]]}","{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}]]}"],["{\"selector\":\"div.container\",\"tasks\":[[\"has\",{\"selector\":\"#left_sticky\"}]]}"],["{\"selector\":\".col-md-3 .block\",\"tasks\":[[\"has-text\",\"ponsor\"]]}"]];

const hostnamesMap = new Map([["goal.com",3],["gunnarandreassen.com",4],["icelandreview.com",5],["knr.gl",5],["nutiminn.is",[5,58]],["bir.no",5],["medier24.no",5],["nakenprat.com",6],["tvkampen.com",7],["tvsporten.dk",7],["altomdata.dk",8],["anettelyskjaer.dk",[9,10]],["cuben-linedance.dk",9],["dreampapers.dk",[9,10]],["iphoneluppen.dk",[9,10]],["padleguide.dk",[9,40]],["polarmedia.dk",[9,41]],["nemsvar.nu",[9,10]],["bilgalleri.dk",11],["bilmagasinet.dk",12],["borsen.dk",13],["check-in.dk",14],["dagens.dk",15],["dba.dk",16],["dmi.dk",17],["dr.dk",18],["edbpriser.dk",19],["ekstrabladet.dk",20],["fcbarcelona.dk",21],["feltet.dk",22],["fodbold-transfers.dk",23],["fodboldspilleren.dk",24],["folketidende.dk",25],["gaming.dk",26],["holdsport.dk",27],["juicynet.dk",28],["jumpb.dk",29],["kanalfrederikshavn.dk",30],["kendte.dk",31],["kulturnet.dk",32],["lokalavisen.dk",33],["lydogbillede.dk",34],["lydogbilde.no",34],["lystfiskerguiden.dk",35],["madridista.dk",36],["margit-henriksen.dk",37],["thura.dk",37],["meremobil.dk",38],["ni.dk",39],["presse-fotos.dk",42],["recordere.dk",43],["skagensavis.dk",44],["startsiden.dk",45],["thelocal.dk",46],["thelocal.no",46],["tv2.dk",47],["udeoghjemme.dk",48],["vilgerneleve.dk",49],["spanienidag.es",50],["bilasolur.is",51],["eidfaxi.is",52],["hjartalif.is",53],["kjarninn.is",54],["lifdununa.is",55],["mbl.is",56],["menn.is",57],["sporttv.is",59],["veitingageirinn.is",60],["brunsvika.net",61],["sveip.net",62],["no",63],["730.no",[64,65]],["melkoghonning.no",65],["abcnyheter.no",66],["adressa.no",67],["aftenposten.no",[68,69]],["vg.no",[68,134]],["www.aftenposten.no",70],["arendalstidende.no",71],["baatplassen.no",72],["bilnorge.no",73],["bimmers.no",74],["bt.no",75],["butikkoversikten.no",76],["bvbnorge.no",77],["byggenytt.no",78],["cw.no",79],["dagbladet.no",[80,81,82]],["sol.no",[81,82,120]],["elbil24.no",[82,90]],["kk.no",82],["seher.no",82],["vi.no",82],["dagsavisen.no",83],["dfly.no",84],["digi.no",[85,86,87]],["tu.no",[85,86]],["dn.no",88],["e24.no",89],["fjellforum.no",91],["gamer.no",92],["glr.no",93],["godtnoe.no",94],["gulesider.no",95],["idag.no",96],["iform.no",97],["inyheter.no",98],["itavisen.no",99],["kammeret.no",100],["ksu.no",101],["kureren.no",102],["leinstrand-il.no",103],["malviknytt.no",104],["matoppskrift.no",105],["minervanett.no",106],["minmote.no",107],["nettavisen.no",108],["nhi.no",109],["nord-salten.no",110],["onlineaviser.no",111],["parcferme.no",112],["pengenytt.no",113],["politainment.no",114],["smis.no",114],["purehelp.no",115],["ranaposten.no",116],["xn--bodposten-n8a.no",116],["reiseliv.no",117],["retrospilling.no",118],["skolediskusjon.no",119],["sorlandsavisen.no",121],["startsiden.no",122],["sva.no",123],["tek.no",124],["teknologia.no",125],["thaiguiden.no",126],["tidensand.no",127],["travelmarket.no",128],["tungt.no",129],["tunnelsyn.no",130],["tv2.no",131],["united.no",132],["utrop.no",133],["direkte.vg.no",135],["viralefilmer.no",136],["visitnorway.no",137],["win-xp.no",138],["yrkesbil.no",139],["bornholm.nu",140],["ipmsnorge.org",141]]);

const entitiesMap = new Map([["costume",0],["ehandel",1],["gamereactor",2]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
