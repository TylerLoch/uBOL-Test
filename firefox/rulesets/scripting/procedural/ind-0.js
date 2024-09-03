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

// ruleset: ind-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".hotwp-box.widget_black_studio_tinymce\",\"tasks\":[[\"has\",{\"selector\":\"> div > p > img:only-child\"}]]}","{\"selector\":\".hotwp-box.widget_black_studio_tinymce\",\"tasks\":[[\"has\",{\"selector\":\"> div > p > ins\"}]]}"],["{\"selector\":\".box_header\",\"tasks\":[[\"has-text\",\"Advertising\"]]}"],["{\"selector\":\".wpb_raw_html\",\"tasks\":[[\"has\",{\"selector\":\".adsbymahimeta\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".widget-title > span\",\"tasks\":[[\"has-text\",\"Advertising\"]]}]]}"],["{\"selector\":\".main-menu ~ .container div\",\"tasks\":[[\"has\",{\"selector\":\"> a > img[src*=\\\"/uploads/ads/\\\"]\"}]]}"],["{\"selector\":\".advertisement\",\"tasks\":[[\"has-text\",\"advertisement\"]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> h5\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\"div.colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\"}]]}","{\"selector\":\"div.colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h2 + h4\"}]]}"],["{\"selector\":\"div.col-lg-3\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\"[id^=\\\"custom\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"Government Ad\"]]}]]}","{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > span > a[rel*=\\\"sponsored\\\"]\"}]]}","{\"selector\":\"div[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has\",{\"selector\":\"> a > img[src*=\\\"/ads/\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id*=\\\"-ad-\\\"]\"}]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".adsection\",\"tasks\":[[\"has\",{\"selector\":\".ad-1\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > p > .adsbygoogle\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"paid.outbrain.com\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".gb-container\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"Ad--\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> p > img.wp-image-23118\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_1\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".widget_recent_entries\",\"tasks\":[[\"has-text\",\"ads\"]]}"],["{\"selector\":\".main--sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.ad--widget-no\"}]]}"],["{\"selector\":\"div[data-slot=\\\"460008\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h6\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .main-heading\",\"tasks\":[[\"has-text\",\"Advertizement\"]]}]]}"],["{\"selector\":\".td-block-title > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-body > p:only-child\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"> p > ins.adsbygoogle\"}]]}"],["{\"selector\":\".wpb_wrapper > p\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .w3-small\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div > div[id^=\\\"daini\\\"]\"}]]}"],["{\"selector\":\".add\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> .widget_area > h3\"}]]}]]}"],["{\"selector\":\".textwidget > p\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"ADV\"]]}]]}"],["{\"selector\":\".mb-3\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has\",{\"selector\":\"> div > .adunitContainer\"}]]}"],["{\"selector\":\".fourth_2_inner\",\"tasks\":[[\"has\",{\"selector\":\"> a > div > h1\",\"tasks\":[[\"has-text\",\"advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".mb-3\",\"tasks\":[[\"has\",{\"selector\":\"> div > ins.adsbygoogle\"}]]}"],["{\"selector\":\".khandakarit_widget\",\"tasks\":[[\"has\",{\"selector\":\"> div > p > ins.adsbygoogle\"}]]}"],["{\"selector\":\".HTML\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div.HTML\",\"tasks\":[[\"has\",{\"selector\":\"> div ins.adsbygoogle\"}]]}"],["{\"selector\":\".post-wrap\",\"tasks\":[[\"has\",{\"selector\":\"> .otw-sidebar .widget_text\"}]]}"],["{\"selector\":\"div > h2\",\"tasks\":[[\"has-text\",\"Google Ads\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"ABS Hospital\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Vijay Bakery\"]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"#sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\".banner\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".widget_block\",\"tasks\":[[\"has\",{\"selector\":\"> p > ins.adsbygoogle\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title > h4\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[data-native-ad]\"}]]}"],["{\"selector\":\".block-title span\",\"tasks\":[[\"has-text\",\"Sponsored Ads\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"ADVT\"]]}]]}"],["{\"selector\":\".e-con\",\"tasks\":[[\"has\",{\"selector\":\"> .e-con-inner > .elementor-widget-heading\"}]]}","{\"selector\":\".e-con\",\"tasks\":[[\"has\",{\"selector\":\"> .e-con-inner > .elementor-widget-html\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> ins\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_P_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}","{\"selector\":\"div[id^=\\\"AS_P_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"> div > h4 > span\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\".code-block figure\",\"tasks\":[[\"has\",{\"selector\":\"> figcaption\"}]]}"],["{\"selector\":\".desktopView\",\"tasks\":[[\"has\",{\"selector\":\"> [ad-position]\"}]]}"],["{\"selector\":\".single_sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> ul > div\"}]]}"],["{\"selector\":\".widget_block\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\".list-category-posts-half\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-title\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".add\",\"tasks\":[[\"has\",{\"selector\":\"> div[id$=\\\"advertisement\\\"]\"}]]}"],["{\"selector\":\".vc_row\",\"tasks\":[[\"has\",{\"selector\":\"> .vc_column > .wpb_wrapper > .td-a-rec:only-child\"}]]}"],["{\"selector\":\"div[name=\\\"ArticleShow-Organic-LHS-1\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > span + a\"}]]}"],["{\"selector\":\"aside.right_content div.single_sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> a[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> p > ins.adsbygoogle\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> div > h4\",\"tasks\":[[\"has-text\",\"adv\"]]}]]}"],["{\"selector\":\".add .widget_area\",\"tasks\":[[\"has\",{\"selector\":\"> img\"}]]}"],["{\"selector\":\".elementor-widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Adv.\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h2 + span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div.sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".HTML\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-title > .title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".td-main-content-wrap .td-a-rec\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > h4.block-title\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > span[name=\\\"adchoicehtml\\\"]\"}]]}"],["{\"selector\":\".themesBazar_widget\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"sonalilife.com\"]]}]]}"],["{\"selector\":\".mb-3\",\"tasks\":[[\"has\",{\"selector\":\".section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".article-tag-content\",\"tasks\":[[\"has\",{\"selector\":\"> .oiad\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\".adsbygoogle\"]]}"],["{\"selector\":\"div[class*=\\\"top_full_width_level_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> [class^=\\\"ad\\\"]\"}]]}"],["{\"selector\":\".widget--title .h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}","{\"selector\":\"div.ptop--30\",\"tasks\":[[\"has\",{\"selector\":\"> .ad--space\"}]]}"],["{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"> script\"}]]}"],["{\"selector\":\"#right div\",\"tasks\":[[\"has\",{\"selector\":\"> div.nw18-dfp-ad\"}]]}","{\"selector\":\".listview-story li\",\"tasks\":[[\"has\",{\"selector\":\"div[data-implementation]\"}]]}","{\"selector\":\".listview-story li\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"mobileAd\\\"]\"}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .myad\"}]]}"],["{\"selector\":\"figure\",\"tasks\":[[\"has\",{\"selector\":\"> figcaption\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar .widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"> :not(div)\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > span[name=\\\"adchoicehtml\\\"]\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h4\",\"tasks\":[[\"has-text\",\"Ad: \"]]}]]}","{\"selector\":\"div[id^=\\\"AS_O_RHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > p\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> small\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div.row\",\"tasks\":[[\"has\",{\"selector\":\"> .col-md12 > .margin-top > img.attachment-full\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> div > ins.adsbygoogle\"}]]}"],["{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"gpt_ads_\\\"]\"}]]}"],["{\"selector\":\".block-title-4\",\"tasks\":[[\"has\",{\"selector\":\"> h4 > span\",\"tasks\":[[\"has-text\",\"Advertisements\"]]}]]}"],["{\"selector\":\"div.primary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}","{\"selector\":\"div[data-adid]\",\"tasks\":[[\"has\",{\"selector\":\"> p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".safe_life\",\"tasks\":[[\"has\",{\"selector\":\"> .textwidget\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .dfp-ad-unit\"}]]}"],["{\"selector\":\"#side .widget\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".elementor-widget-wrap p\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".jeg_block_heading\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"ADVERTISEMENTS\"]]}]]}","{\"selector\":\".jeg_block_heading\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[class*=\\\"slide\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > .AdvtSample\"}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > p + h3\"}]]}"],["{\"selector\":\"div.sidebar h5\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\".app-news-section-div\",\"tasks\":[[\"has\",{\"selector\":\"> .adv\"}]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advt\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a > div > .pd_title\"}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"table\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr > td > a[href*=\\\"drkeshavjee.com\\\"]\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> .metaslider\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget--title > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .box_header\",\"tasks\":[[\"has-text\",\"Advertisements\"]]}]]}"],["{\"selector\":\".single_post_content\",\"tasks\":[[\"has\",{\"selector\":\"> h2 > span > a\",\"tasks\":[[\"has-text\",\"ADS\"]]}]]}"],["{\"selector\":\".a-wrap\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advt.\"]]}]]}"],["{\"selector\":\"div.wrapper-sticky div\",\"tasks\":[[\"has\",{\"selector\":\"> div.section-heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .adv\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .ad-div\"}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div p\",\"tasks\":[[\"has-text\",\"AD |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".single_sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> h2 > span\",\"tasks\":[[\"has-text\",\"advertisement\"]]}]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div h3 + p\"}]]}","{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"div-gpt-ad > div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"#sidebar-primary-sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\"div[data-adid]:not([data-type=\\\"custom_code\\\"])\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .ad\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"VTV_\\\"]\"}]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> pubguru\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > .dfp-ad-unit\"}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".primary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .section-heading > .h-text\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> h5 > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".pt-4\",\"tasks\":[[\"has\",{\"selector\":\"> .carousel\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\".main-box-inside\",\"tasks\":[[\"has\",{\"selector\":\"> p ins.adsbygoogle\"}]]}"],["{\"selector\":\"div.HTML\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-content\"}]]}"],["{\"selector\":\".my-4\",\"tasks\":[[\"has\",{\"selector\":\"> h5\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}]]}"],["{\"selector\":\"section.widget_block\",\"tasks\":[[\"has\",{\"selector\":\"> p > ins\"}]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\".sppb-column-addons > div\",\"tasks\":[[\"has\",{\"selector\":\".carouselbanner\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"ADS\"]]}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"taboola-mid\\\"]\"}]]}"],["{\"selector\":\".fashion_technology_area div\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2 span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".ad\",\"tasks\":[[\"has\",{\"selector\":\"> div:first-child\"}]]}"],["{\"selector\":\"section.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"div > h4.widget-title\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"figure\",\"tasks\":[[\"has\",{\"selector\":\"> figcaption\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}]]}"],["{\"selector\":\".wp-block-group\",\"tasks\":[[\"has\",{\"selector\":\"> div > .wp-block-heading\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sppb-addon\",\"tasks\":[[\"has\",{\"selector\":\".bannergroup\"}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[class$=\\\"-content\\\"] > [class*=\\\"banner\\\"]\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"#main-content .main-carousel\",\"tasks\":[[\"has\",{\"selector\":\"> .title-wrapper > h2 > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}","{\"selector\":\"#main-content .theiaStickySidebar\",\"tasks\":[[\"has\",{\"selector\":\"> div > .title-wrapper > h2 span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"> h3 > span\",\"tasks\":[[\"has-text\",\"Advt\"]]}]]}"],["{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".widget-header\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}"],["{\"selector\":\"h4.td-block-title\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div a p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > p + h3\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .nbs-flexisel-container\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .afw\"}]]}"],["{\"selector\":\".sidebar-widget > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h4 > span\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\"div[id*=\\\"_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".align_cent\",\"tasks\":[[\"has-text\",\"Advertise\"]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-body > p > img:only-child\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > h3\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sub_new b\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\".card\",\"tasks\":[[\"has\",{\"selector\":\"> .card-header\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}]]}"],["{\"selector\":\".colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h5\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\".colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div a > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"table[height=\\\"100\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr[bgcolor]\"}]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> div > .advimg\"}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div > .sc_item_title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"]];

const hostnamesMap = new Map([["malayaleepathram.com.au",0],["suprovatsydney.com.au",1],["garavigujarat.biz",2],["uthayannews.ca",3],["tamilnews.cc",4],["bangla.24livenewspaper.com",5],["aadarshhimachal.com",6],["aajbikel.com",7],["aajkaaldaily.com",8],["aapkikhabar.com",9],["aayomail.com",10],["ajkalerkhobor.com",11],["cinemainbox.com",11],["marathiworld.com",11],["maxmaharashtra.com",11],["natunsylhet24.com",11],["nayanjagriti.com",[11,80]],["telugugateway.com",11],["teluguglobal.com",11],["doonhorizon.in",[11,144]],["maxwoman.in",11],["andhrajyothy.com",12],["angulonline.com",13],["asianetnews.com",14],["atalhind.com",15],["atalsamachar.com",16],["bdcrime24.com",17],["betulsamachar.com",18],["jankarido.com",18],["nation9network.com",18],["bhaskar.com",19],["bholanews.com",20],["blivenews.com",21],["dailyharyananews.com",21],["fashionnewsera.com",21],["chatonay71news.com",22],["chhattisgarhaaj.com",23],["cityandolan.com",24],["cityliveindia.com",25],["countrynewstoday.com",26],["crimediarybd.com",27],["dailybahadur.com",28],["dailypurbodesh.com",29],["dainikamadershomoy.com",30],["dainiklivenews24.com",31],["dainikparibarton.com",32],["dainiksylhet.com",33],["dakshinapath.com",34],["dhamaka36.com",35],["bharatiyadigitalnews.in",[35,133]],["dhinasari.com",36],["dinamalar.com",37],["entevarthakal.com",38],["etamilnews.com",39],["ghatail.com",40],["gmnewsbd.com",41],["gossiplanka.com",42],["gossiplankanews.com",43],["himalayapost.com",44],["horizonhind.com",45],["hrbreakingnews.com",46],["timeskerala.com",46],["iautoindia.com",47],["ibmnews24.com",48],["meranews.com",48],["tamizhakam.com",48],["tv20news.in",48],["iimtnews.com",49],["indiasamachar24.com",50],["indiatimes.com",51],["vijaykarnataka.com",51],["indocanadiantimes.com",52],["janamtv.com",53],["janbolnews.com",54],["janprahar.com",55],["jansandeshonline.com",56],["janwarta.com",57],["jhunjhununewz.com",58],["kalerkantho.com",59],["khabar7clive.com",60],["khabarcgnews.com",61],["timesofswaraj.com",61],["khabardev.com",62],["khabareast.com",63],["khaboriya24.com",64],["khabreelal.com",65],["khoborersomoy.com",66],["khulnagazette.com",67],["spnewsbd.com",67],["kirandoot.com",68],["kolomerbatra.com",69],["lnstarnews.com",70],["loginkerala.com",71],["loudspeakeronline.com",72],["madhepurakhabar.com",73],["manvadhikarabhivyakti.com",74],["momainews.com",75],["muktirlorai.com",76],["munaadi.com",77],["tamil.mykhel.com",78],["naya-alo.com",79],["neplays.com",81],["nettamil.com",82],["news18.com",83],["news24bite.com",84],["newsdesk24.com",85],["newspoint24.com",86],["newstodaynetwork.com",87],["nobat.com",88],["onstimes.com",89],["pagetamil.com",90],["patrika.com",91],["pingara.com",92],["pksnews24.com",93],["prabhatkhabar.com",94],["mumbaitak.in",94],["promisenews24.com",95],["prothomalo.com",96],["punjabikangaroo.com",97],["rajdhanidaily.com",98],["rochakkhabare.com",99],["utkalpratidin.com",[99,124]],["theonlinepost.in",[99,168]],["sabhavarthakal.com",100],["sachikalam.com",101],["saharasamachar.com",102],["samajkihalchal.com",103],["samakal.com",104],["samarthsahara.com",105],["varchasvnews.com",105],["samayduniya.com",106],["samaynews24.com",107],["satyamevtv.com",108],["satyavoice.com",109],["seithipunal.com",110],["khabaraaptak.net",110],["shikshabhartinetwork.com",111],["smtv24x7.com",112],["tarunbharat.com",113],["thedailycampus.com",114],["kathir.news",114],["thedesiawaaz.com",115],["theheadline24.com",116],["thesigmanews.com",117],["thuglak.com",118],["timesnowtamil.com",119],["ttncinema.com",120],["twentyfournews.com",121],["unitednewskannada.com",122],["upuklive.com",123],["veerdharanews.com",125],["vikatan.com",126],["vtvgujarati.com",127],["jalauntimessite.wordpress.com",128],["yugvartanews.com",129],["yuvaharyana.com",130],["zoombangla.com",131],["haal.fashion",132],["biharnation.in",134],["cg24news.in",135],["cgwebnews.in",136],["champarantoday.in",137],["aanmeegam.co.in",138],["asalbaat.co.in",139],["bhingatimes.co.in",140],["indiakhabar.co.in",141],["overlook.co.in",142],["deshkikhabar.in",143],["theexpose.in",[144,165]],["doonited.in",145],["editiontoday.in",146],["encounterindia.in",147],["tamil.goodreturns.in",148],["indianewscentre.in",149],["indiatv.in",150],["janadeshexpress.in",151],["lifestylenama.in",152],["madhubaninews.in",153],["magadhexpress.in",154],["namastepurvanchal.in",155],["newscreation.in",156],["newsmoments.in",157],["newstm.in",158],["pressnote.in",159],["rozanapost.in",160],["rozanaspokesman.in",161],["satyasandhana.in",162],["scgnews.in",163],["soochnanews.in",164],["thehindutimes.in",166],["thenewswords.in",167],["thevoices.in",169],["todaynewshindi.in",170],["urjanchaltiger.in",171],["visionnewsservice.in",172],["viznews.in",173],["odiascraps.info",174],["k9media.live",175],["news11.live",176],["pardaphashnews.live",177],["abcnews.media",178],["indiannewsservice.net",179],["satkhiraprobaho.net",180],["tutyonline.net",181],["asr24.news",182],["livevns.news",183],["voiceasian.news",184],["rajbirajdainik.com.np",185],["ammanealing.org",186],["thannambikkai.org",187]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
