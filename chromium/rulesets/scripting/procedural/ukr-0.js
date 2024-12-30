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

// ruleset: ukr-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"script[onerror*=\\\"html-load.com\\\"]\",\"action\":[\"remove-attr\",\"onerror\"],\"tasks\":[[\"watch-attr\",[\"onerror\"]]]}"],["{\"selector\":\"article.article-card\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > div.article-card__title--toaster\",\"tasks\":[[\"has-text\",\"Партнерський матеріал\"]]}]]}"],["{\"selector\":\"table\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr > td.title\",\"tasks\":[[\"has-text\",\"Лічильники\"]]}]]}"],["{\"selector\":\"div[class^=\\\"advtext\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div.article_news\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"PROMOTED\"]]}]]}","{\"selector\":\"div.article_news\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"АНОНС\"]]}]]}","{\"selector\":\"div.article_news\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"СПЕЦПРОЄКТ\"]]}]]}"],["{\"selector\":\"div.news-tape-item\",\"tasks\":[[\"has\",{\"selector\":\"div.mark-block\",\"tasks\":[[\"has-text\",\"Партнерський матер��ал\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Новини партнерів\"]]}]]}"],["{\"selector\":\"div.view\",\"tasks\":[[\"has-text\",\"РЕКЛАМА\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\"span.c-post-author__link\",\"tasks\":[[\"has-text\",\"Партнерський матеріал\"]]}]]}"],["{\"selector\":\"section.c-news-section\",\"tasks\":[[\"has\",{\"selector\":\"h2.c-heading__title\",\"tasks\":[[\"has-text\",\"Партнерські матеріали\"]]}]]}"],["{\"selector\":\"div.carousel-block\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Огляди партнерів\"]]}]]}"],["{\"selector\":\"div.col-sm-6\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Реклама\"]]}]]}"],["{\"selector\":\"div.media-block-wrap\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"НОВИНИ ПАРТНЕРІВ\"]]}]]}"],["{\"selector\":\"div.section-title\",\"tasks\":[[\"has-text\",\"Sponsored content\"]]}","{\"selector\":\"div.section-wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div > a\",\"tasks\":[[\"has-text\",\"Спонсорований контент\"]]}]]}"],["{\"selector\":\"div.elementor-widget\",\"tasks\":[[\"has\",{\"selector\":\"h2 > span\",\"tasks\":[[\"has-text\",\"Новини України\"]]}]]}","{\"selector\":\"div.elementor-widget\",\"tasks\":[[\"has\",{\"selector\":\"h3, h4 > span\",\"tasks\":[[\"has-text\",\"Новини Партнерів\"]]}]]}","{\"selector\":\"div.elementor-widget\",\"tasks\":[[\"has\",{\"selector\":\"h4 > span\",\"tasks\":[[\"has-text\",\"Матеріали Спонсорів\"]]}],[\"spath\",\" + div.elementor-widget-foxiz-list-small-2\"]]}","{\"selector\":\"div.elementor-widget\",\"tasks\":[[\"has\",{\"selector\":\"h4 > span\",\"tasks\":[[\"has-text\",\"Матеріали Спонсорів\"]]}]]}"],["{\"selector\":\"div.news-item\",\"tasks\":[[\"has\",{\"selector\":\"a[rel=\\\"author\\\"]\",\"tasks\":[[\"has-text\",\"Promoted\"]]}]]}"],["{\"selector\":\".mfz-post\",\"tasks\":[[\"has\",{\"selector\":\"[data-link=\\\"rubric\\\"]\",\"tasks\":[[\"has-text\",\"Промо\"]]}]]}"],["{\"selector\":\"div.sticky-zone\",\"tasks\":[[\"has-text\",\"Блоги компаній\"]]}"],["{\"selector\":\"div.section9_thirdBlock\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Партнери\"]]}]]}"],["{\"selector\":\"div.inner-page-container\",\"tasks\":[[\"has\",{\"selector\":\"a.section_title\",\"tasks\":[[\"has-text\",\"Новини партнерів\"]]}]]}"],["{\"selector\":\"div.swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"span.talk-swiper__author\",\"tasks\":[[\"has-text\",\"Спекотне промо\"]]}]]}","{\"selector\":\"section.news-on-main > div.post-wrapper\",\"tasks\":[[\"has\",{\"selector\":\"span.news-item__author > span\",\"tasks\":[[\"has-text\",\"Спекотне промо\"]]}]]}"],["{\"selector\":\"div.item\",\"tasks\":[[\"has-text\",\"СТАВКА ДНЯ\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"> a[target=\\\"_blank\\\"] > em\",\"tasks\":[[\"has-text\",\"FAVBET\"]]}]]}"],["{\"selector\":\"div#news\",\"tasks\":[[\"has-text\",\"Картина дня\"]]}","{\"selector\":\"div.block\",\"tasks\":[[\"has-text\",\"Партнер\"]]}","{\"selector\":\"div.wblock\",\"tasks\":[[\"has-text\",\"Інші новини\"]]}"],["{\"selector\":\"div[style=\\\"display: inline-block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > h4 > a\",\"tasks\":[[\"has-text\",\"РЕКЛАМА\"]]}]]}"],["{\"selector\":\"aside.c-section\",\"tasks\":[[\"has\",{\"selector\":\"h2.c-section__title > a\",\"tasks\":[[\"has-text\",\"Пресрелізи\"]]}]]}","{\"selector\":\"aside.u-hide--sdmd\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"Реклама\"]]}]]}","{\"selector\":\"section.c-section\",\"tasks\":[[\"has\",{\"selector\":\"h2.c-section__title\",\"tasks\":[[\"has-text\",\"Новини партнерів\"]]}]]}"],["{\"selector\":\"div#container[data-detachable-player]\",\"tasks\":[[\"has-text\",\"Зараз дивляться\"]]}"],["{\"selector\":\"div.thebestofthebest\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"друзі та партнери\"]]}]]}"],["{\"selector\":\"li.newsfeed__item\",\"tasks\":[[\"has\",{\"selector\":\"span.blue-marker\",\"tasks\":[[\"has-text\",\"НК\"]]}]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"реклама\"],[\"spath\",\" + img\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"реклама\"]]}"],["{\"selector\":\".post-block.post-block-featured\",\"tasks\":[[\"has\",{\"selector\":\".g-sp-badge\",\"tasks\":[[\"has-text\",\"ПРОМО\"]]}]]}"],["{\"selector\":\"div.article-body > p\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Матеріал створено за підтримки\"]]}]]}"],["{\"selector\":\"p[align=\\\"center\\\"]\",\"tasks\":[[\"has-text\",\"Наші партнери\"]]}"],["{\"selector\":\"div.container\",\"tasks\":[[\"has\",{\"selector\":\"> small\",\"tasks\":[[\"has-text\",\"Реклама\"]]}]]}","{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"Реклама\"],[\"spath\",\" + a\"]]}","{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"Реклама\"]]}"],["{\"selector\":\"aside.widget_execphp\",\"tasks\":[[\"has\",{\"selector\":\"h1.widget-title\",\"tasks\":[[\"has-text\",\"Реклама\"]]}]]}"],["{\"selector\":\"div.elementor-element\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > h4\",\"tasks\":[[\"has-text\",\"Погода\"]]}]]}"]];

const hostnamesMap = new Map([["eurointegration.com.ua",[0,3]],["pravda.com.ua",[0,3,4]],["032.ua",1],["048.ua",1],["056.ua",1],["057.ua",1],["autoconsulting.com.ua",2],["epravda.com.ua",[3,4]],["espreso.tv",5],["fakty.ua",6],["football-ukraine.com",7],["forbes.ua",8],["hromadske.ua",9],["itc.ua",10],["ivona.ua",11],["krymr.com",12],["kyivpost.com",13],["malimista.in.ua",14],["mezha.media",15],["minfin.com.ua",16],["nachasi.com",17],["protocol.ua",18],["racurs.ua",19],["speka.media",20],["sport.ua",21],["sport24.ua",22],["sportanalytic.com",23],["thebuchacity.com",24],["tsn.ua",25],["ukranews.com",26],["ukrlib.com.ua",27],["unian.ua",28],["versii.if.ua",29],["village.com.ua",30],["viva.ua",31],["vseazs.com",32],["zmi.ck.ua",33],["zora-irpin.info",34],["brovary.net.ua",35]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
