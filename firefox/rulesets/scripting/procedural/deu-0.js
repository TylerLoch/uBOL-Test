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

// ruleset: deu-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".block.medium\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://dt.sportradar.com/\\\"]\"}]]}"],["{\"selector\":\"div[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-test=\\\"mms-plp-sponsored\\\"]\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"div[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}]]}"],["{\"selector\":\".article-list-item.article-card.article-card-default\",\"tasks\":[[\"has\",{\"selector\":\".commercial-tag\"}]]}"],["{\"selector\":\".avgrid_1_of_1.viewlet-bottom\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Advertorials\"]]}]]}","{\"selector\":\".gridteaser.gridteaser-m\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .advert\"}]]}"],["{\"selector\":\".col4\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Unterstützt durch:\"]]}]]}"],["{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Native Advertising\"]]}","{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Publireportage\"]]}"],["{\"selector\":\".list_item\",\"tasks\":[[\"has\",{\"selector\":\".dachzeile\",\"tasks\":[[\"has-text\",\"Partnerzone\"]]}]]}"],["{\"selector\":\"div[id^=\\\"gridSuche_panRecord_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"gridSuche_lblUrl_\\\"]\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".v-A_-topteaser__article\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\".article-latest.article-layout-0 > .row\",\"tasks\":[[\"has\",{\"selector\":\".advertorial-icon\"}]]}"],["{\"selector\":\"div.post.hentry.ivycat-post\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://amzn.to/\\\"]\"}]]}","{\"selector\":\"div.post.hentry.ivycat-post\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.amazon.de/\\\"]\"}]]}"],["{\"selector\":\".custom\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".teaser_container.teaser-htmlcode.relative.row\",\"tasks\":[[\"has\",{\"selector\":\".f1de-container-title\",\"tasks\":[[\"has-text\",\"Die besten Leasing-Deals\"]]}]]}"],["{\"selector\":\".introa_news\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".v-A_-teaser__halfcol__listitem\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\".v-A_-topteaser__rotationbox__item\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\".v-A_-white__tile\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\".post-grid-item.grid-item\",\"tasks\":[[\"has\",{\"selector\":\".ad-badge\"}]]}"],["{\"selector\":\"article.o-CompactProductListItem\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://retail-api.sa-tech.de/api/\\\"]\"}]]}"],["{\"selector\":\".c-product-tile\",\"tasks\":[[\"has\",{\"selector\":\"div.c-product-tile__sponsored\"}]]}","{\"selector\":\".swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"div.c-product-tile__sponsored\"}]]}"],["{\"selector\":\".swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\".entry-adv\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> img[referrerpolicy=\\\"unsafe-url\\\"]\"}]]}"],["{\"selector\":\".row.mt-0.mb-3.d-print-none\",\"tasks\":[[\"has\",{\"selector\":\".fa-ad\"}]]}"],["{\"selector\":\"article[class^=\\\"teaser nummer-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span.specialfeature\"}]]}"],["{\"selector\":\".ce_topicbox\",\"tasks\":[[\"has\",{\"selector\":\".label-ad-highlight\"}]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has\",{\"selector\":\"h2.elementor-heading-title\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"span.username\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.wpb_text_column\",\"tasks\":[[\"has-text\",\"Werbung\"]]}"],["{\"selector\":\"a.background-red-bright\",\"tasks\":[[\"has\",{\"selector\":\"span.anzeige\"}]]}"],["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"//b.fr3.eu.criteo.com/rm?\\\"]\"}]]}","{\"selector\":\"div[data-testid=\\\"card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span.MuiCardHeader-title\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}]]}","{\"selector\":\"div[data-testid=\\\"reco-wrapper\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"indexesm__HeadlineElement-fragment-product-master__\\\"]\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://b.fr3.eu.criteo.com/rm?\\\"]\"}]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}"],["{\"selector\":\".eight.columns.alpha.content\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".m-teaser\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".m-article-teaser\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".a.block04\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.awin1.com/\\\"]\"}]]}","{\"selector\":\".row.block03\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}]]}","{\"selector\":\".wrap-col.box4\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.awin1.com/\\\"]\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZEIGE|Anzeige|Werbung|WERBUNG/\"]]}]]}"],["{\"selector\":\"#bnTickerContainer\",\"tasks\":[[\"has\",{\"selector\":\"#bnTickerAdNotice\"}]]}"],["{\"selector\":\"div.YzqVVZ\",\"tasks\":[[\"has\",{\"selector\":\"span.wixui-rich-text__text\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}"],["{\"selector\":\".Listing > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"path[d$=\\\"92.456,64.241 z\\\"]\"}]]}","{\"selector\":\".mt-md\",\"tasks\":[[\"has\",{\"selector\":\"path[d$=\\\"92.456,64.241 z\\\"]\"}]]}","{\"selector\":\"a.secondary\",\"tasks\":[[\"has\",{\"selector\":\".Badge__Content\",\"tasks\":[[\"has-text\",\"/anzeige|gesponsert/\"]]}]]}","{\"selector\":\"article.copy-sm\",\"tasks\":[[\"has\",{\"selector\":\"i\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\"section > header + a + div + div\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.text-asset.text-width\",\"tasks\":[[\"has\",{\"selector\":\"p.text-width\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.gridArea__teaserM\",\"tasks\":[[\"has\",{\"selector\":\"div.teaserBlock__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".teaser\",\"tasks\":[[\"has\",{\"selector\":\".teaser__promolabel\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Anzeige\"],[\"spath\",\" > strong > a[target=\\\"_blank\\\"][rel=\\\"noopener\\\"] > picture\"]]}"],["{\"selector\":\".previewtile.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://amzn.to/\\\"]\"}]]}"],["{\"selector\":\".node.teaser\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\".wbbXdLocationAfter1stPostAsPost\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\".wbbXdLocationPostList\"}]]}"],["{\"selector\":\"div.product-grid-column\",\"tasks\":[[\"has\",{\"selector\":\"span.product-tile__sponsored\"}]]}"],["{\"selector\":\".b-module\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}","{\"selector\":\".mfe-lex\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}"],["{\"selector\":\".node--article\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".v-A_-sidecol__list__item\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\".pm-items > [widget-child]\",\"tasks\":[[\"has\",{\"selector\":\"[ping^=\\\"//b.nl3.eu.criteo.com/rm?\\\"]\"}]]}","{\"selector\":\"[data-key-id]\",\"tasks\":[[\"has\",{\"selector\":\"[src^=\\\"//b.nl3.eu.criteo.com/rm?\\\"]\"}]]}"],["{\"selector\":\".c-sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-odd > div[class^=\\\"c-ad-exper-\\\"]\"}]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"ANZEIGEN\"]]}]]}"],["{\"selector\":\".owl-carousel.owl-loaded.owl-drag\",\"tasks\":[[\"has\",{\"selector\":\".label-ad-highlight\"}]]}"],["{\"selector\":\".excerpt-tile.cell.small-12.medium-6\",\"tasks\":[[\"has\",{\"selector\":\".advertorials\"}]]}"],["{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"span.sprite.h-w-c\"}]]}"],["{\"selector\":\"[data-product-list-id]\",\"tasks\":[[\"has\",{\"selector\":\"[data-badge-type=\\\"sponsored\\\"]\"}]]}"],["{\"selector\":\".teaser__item\",\"tasks\":[[\"has\",{\"selector\":\".teaser__adtype\"}]]}"],["{\"selector\":\"article[data-post-id]\",\"tasks\":[[\"has\",{\"selector\":\".sponsor-byline\"}]]}"],["{\"selector\":\".content-item-medium\",\"tasks\":[[\"has\",{\"selector\":\"data\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".content-item-small\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".contentnewsitem-box .box-reload .news-list\",\"tasks\":[[\"has\",{\"selector\":\"span.media-heading\",\"tasks\":[[\"has-text\",\"[Anzeige]\"]]}]]}","{\"selector\":\".contentnewsitem-box .box-reload > div\",\"tasks\":[[\"has\",{\"selector\":\".news-list span.media-heading\",\"tasks\":[[\"has-text\",\"[Anzeige]\"]]}],[\"spath\",\" + hr\"]]}"],["{\"selector\":\".wp-block-group\",\"tasks\":[[\"has\",{\"selector\":\".wp-block-button__link\"}]]}"],["{\"selector\":\".box.img_link\",\"tasks\":[[\"has\",{\"selector\":\".advertorial_hint\"}]]}"],["{\"selector\":\".alice-teaser-list-item\",\"tasks\":[[\"has\",{\"selector\":\".alice-teaser-meta-text\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}","{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}"],["{\"selector\":\"li[data-article-id]\",\"tasks\":[[\"has\",{\"selector\":\".icon-addy\"}]]}"],["{\"selector\":\".card-content > center\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\".productCard\",\"tasks\":[[\"has\",{\"selector\":\"div.premiumProductCaption\"}]]}"],["{\"selector\":\".bg-gray-light\",\"tasks\":[[\"has\",{\"selector\":\"div.text-right\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".p-3.-mx-3.bg-gray-50\",\"tasks\":[[\"has\",{\"selector\":\"a[data-component=\\\"TeaserLinkContainer\\\"]:not(a[href^=\\\"https://www.heise.de/api/accountservice/subscribe/\\\"])\"}]]}","{\"selector\":\".px-4.md\\\\:px-6.py-3.h-full.bg-gray-50\",\"tasks\":[[\"has\",{\"selector\":\".mb-3.text-xs.leading-none.text-center\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ende===\"]]}"],["{\"selector\":\".swiper\",\"tasks\":[[\"has\",{\"selector\":\".headline\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\".td_module_ih_current_news\",\"tasks\":[[\"has\",{\"selector\":\".spo\"}]]}"],["{\"selector\":\".ce_postlistbox\",\"tasks\":[[\"has\",{\"selector\":\".label-ad-highlight\"}]]}"],["{\"selector\":\".product--box\",\"tasks\":[[\"has\",{\"selector\":\".rm-sponso\"}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"[data-testid=\\\"advertisementSign-flag\\\"]\"}]]}"],["{\"selector\":\"div[data-widget_type=\\\"shortcode.default\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"div[style=\\\"text-align: center;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".product\",\"tasks\":[[\"has\",{\"selector\":\"div.product__sponsored-ad-label\"}]]}","{\"selector\":\".rd-recommender__tile\",\"tasks\":[[\"has\",{\"selector\":\"div.rd-product-tile__badge--ad\"}]]}","{\"selector\":\".recommender-wrapper\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".gb-container\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".small-12.column\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".appetizer\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\"[data-test=\\\"mms-search-flagship-sba\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}","{\"selector\":\"[data-test=\\\"mms-search-showcase\\\"] + div\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\"li.article\",\"tasks\":[[\"has\",{\"selector\":\"[data-type=\\\"sponsored\\\"]\"}]]}","{\"selector\":\"section.post\",\"tasks\":[[\"has\",{\"selector\":\"[data-type=\\\"sponsored\\\"]\"}]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has-text\",\"- Werbung -\"]]}"],["{\"selector\":\".result\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://metager.de/partner/r?\\\"]\"}]]}","{\"selector\":\".result\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://r.search.yahoo.com/\\\"]\"}]]}"],["{\"selector\":\".sp-module\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Kleinanzeigen\"]]}]]}"],["{\"selector\":\".mN_WC\",\"tasks\":[[\"has\",{\"selector\":\"[data-testid=\\\"sponsored-badge\\\"]\"}]]}","{\"selector\":\"div[style=\\\"min-height:250px\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"#SRP_BILLBOARD_ADSENSE\"}]]}"],["{\"selector\":\".main-preview\",\"tasks\":[[\"has\",{\"selector\":\".anzeige-label\"}]]}","{\"selector\":\".slider-preview\",\"tasks\":[[\"has\",{\"selector\":\".anzeige-label\"}]]}"],["{\"selector\":\".moduletable.text-center\",\"tasks\":[[\"has\",{\"selector\":\".bildunterschrift\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".card-body\",\"tasks\":[[\"has-text\",\"Sponsoren\"]]}"],["{\"selector\":\".inlinemod-item\",\"tasks\":[[\"has\",{\"selector\":\".on-ad\"}]]}"],["{\"selector\":\".flex-layout\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"ArticleTeaser_ov-article-teaser__onvistaCustomer_\\\"]\"}]]}","{\"selector\":\".outer-spacing--xxlarge-top\",\"tasks\":[[\"has-text\",\"Werbung von\"]]}","{\"selector\":\".ov-article-teaser\",\"tasks\":[[\"has\",{\"selector\":\".ov-article-teaser__onvistaCustomer\"}]]}","{\"selector\":\"a[class*=\\\"ArticleTeaserBox\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div.ov-subline\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has\",{\"selector\":\"span.banner-text + h4\",\"tasks\":[[\"has-text\",\"/Partner-Angebot|Angebote/\"]]}]]}"],["{\"selector\":\".post.type-post.status-publish\",\"tasks\":[[\"has\",{\"selector\":\".anzeige-box\"}]]}"],["{\"selector\":\".section\",\"tasks\":[[\"has\",{\"selector\":\".ad-container\"}]]}"],["{\"selector\":\".services-item\",\"tasks\":[[\"has-text\",\"bei Amazon\"]]}"],["{\"selector\":\".first-list > li\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://bit.ly/\\\"]\"}]]}","{\"selector\":\".first-list > li\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://tracking.s24.com/\\\"]\"}]]}","{\"selector\":\".pd-teaser\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://bit.ly/\\\"]\"}]]}","{\"selector\":\".second-list > li\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://amzn.to/\\\"]\"}]]}","{\"selector\":\".second-list > li\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://tracking.s24.com/\\\"]\"}]]}"],["{\"selector\":\".box.box-style1\",\"tasks\":[[\"has\",{\"selector\":\".notice\"}]]}"],["{\"selector\":\".excerpt-tile.cell\",\"tasks\":[[\"has\",{\"selector\":\".advertorials\"}]]}"],["{\"selector\":\".postlist-item\",\"tasks\":[[\"has\",{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".onlyDesktop\",\"tasks\":[[\"has\",{\"selector\":\"div.adContainer\"}]]}"],["{\"selector\":\".content-view-containerbox\",\"tasks\":[[\"has-text\",\"SONDER-VERÖFFENTLICHUNG\"]]}"],["{\"selector\":\".rs-qa-product\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".article-box\",\"tasks\":[[\"has\",{\"selector\":\"> .article-box__text > .article-box__info > span.article-badge--ad\"}]]}","{\"selector\":\".article-fill\",\"tasks\":[[\"has\",{\"selector\":\".article-badge.article-badge--ad\"}]]}"],["{\"selector\":\".fc_bloglist_item\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}","{\"selector\":\".mod_flexicontent_standard_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".moduletable\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-author-name\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"div[id^=\\\"T-\\\"][onfocus^=\\\"A('zid=\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.article-tile\",\"tasks\":[[\"has\",{\"selector\":\"span.article-tile__badge2\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".small-12.column.space\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"--Anzeige--\"]]}]]}"],["{\"selector\":\".artikel-preview-content\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"-ANZEIGE-\"]]}]]}"],["{\"selector\":\".breakingNewsOfferteBox\",\"tasks\":[[\"has\",{\"selector\":\"span.offerteFlag\"}]]}","{\"selector\":\".footnote\",\"tasks\":[[\"has\",{\"selector\":\".headline-box\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".module.c1.hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"span.issuerPromotionHint\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.suffix.wo-inline-block.pull-right\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.wo-inline-block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".sbteaser\",\"tasks\":[[\"has\",{\"selector\":\"span.generalAdTag\"}]]}","{\"selector\":\".similarNews\",\"tasks\":[[\"has\",{\"selector\":\"span[title=\\\"Anzeige\\\"]\"}]]}","{\"selector\":\".sliderItem.active\",\"tasks\":[[\"has\",{\"selector\":\"span.news-item\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"Anzeige\\\"]\"}]]}]]}","{\"selector\":\".teaser\",\"tasks\":[[\"has\",{\"selector\":\"span.generalAdTag\"}]]}","{\"selector\":\".teaser.objectfit\",\"tasks\":[[\"has\",{\"selector\":\"div.angebot\"}]]}","{\"selector\":\".teaser.objectfit\",\"tasks\":[[\"has\",{\"selector\":\"div.anzeige\"}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td > .float-end > span[title=\\\"Anzeige\\\"]\"}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td.right\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"Anzeige\\\"]\"}]]}]]}"],["{\"selector\":\"div[data-hb-id=\\\"Grid.Item\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"&sponsoredid=\\\"]\"}]]}"],["{\"selector\":\".c-inline-teaser__body.c-inline-teaser__body--is-standalone\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.financeads.net/tc.php?\\\"]\"}]]}","{\"selector\":\"div[id][data-qa]\",\"tasks\":[[\"has\",{\"selector\":\".c-buelent-linkbox__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".view-idcontent\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/sponsored/\\\"]\"}]]}","{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"a[onclick]\"}]]}"],["{\"selector\":\".news330.floatL.mr10\",\"tasks\":[[\"has\",{\"selector\":\".anzeige\"}]]}"],["{\"selector\":\"div.ExtraPostBlock\",\"tasks\":[[\"has\",{\"selector\":\"div.post_block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}],[\"spath\",\":not(.with_rep)\"]]}"],["{\"selector\":\".zett-teaser-trio\",\"tasks\":[[\"has\",{\"selector\":\".zett-teaser-trio__kicker--ad-anzeige\"}]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + button\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + div\"]]}"],["{\"selector\":\"article[class^=\\\"dvs-ad-tyblqtres-uno\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}","{\"selector\":\"div[class^=\\\"dvbloqbasic\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\"#ContainerFull\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".jeg_post.jeg_pl_md_2.pr.format-standard\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PR-INFO\"]]}]]}"],["{\"selector\":\".post-overview\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article[id^=\\\"post-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".sponsored-indicator\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"+ span\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"img[src*=\\\"/adverts/\\\"]\"}]]}"],["{\"selector\":\".mleft-10\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box\"]]}","{\"selector\":\".mleft-10.small-font.light-grey\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box + .border-blue-2\"]]}","{\"selector\":\".row.d-flex.align-items-center\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"http://g.finanzen.net/allvest-fonds-home-intelligent-invest\\\"]\"}]]}","{\"selector\":\".snapshot__trading\",\"tasks\":[[\"has\",{\"selector\":\".button-advertising-hint\"}]]}","{\"selector\":\"article.page-content__item\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"UBS\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> #nydus_org_970x300_billboard_responsive\"}]]}","{\"selector\":\"div.ui-tabs\",\"tasks\":[[\"has\",{\"selector\":\"#nydus_org_300x600_desktop_1\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"i.fa-cloud-download-alt\"}]]}","{\"selector\":\"form\",\"tasks\":[[\"has\",{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Download\"]]}]]}"],["{\"selector\":\".text-right.text-white.col-6\",\"tasks\":[[\"has-text\",\"präsentiert von\"]]}"]];

const hostnamesMap = new Map([["laola1.at",0],["mediamarkt.at",1],["mediamarkt.de",[1,80]],["saturn.de",1],["meinbezirk.at",2],["avguide.ch",3],["bauernzeitung.ch",4],["games.ch",5],["handelszeitung.ch",6],["pctipp.ch",7],["tiger.ch",8],["elektrobike-online.com",9],["roadbike.de",[9,18]],["gewinn.com",10],["hornoxe.com",11],["kajak-magazin.com",12],["linkedin.com",13],["motorsport-total.com",14],["notebookcheck.com",15],["outdoor-magazin.com",[16,17,18]],["caravaning.de",16],["motorradonline.de",[16,17]],["promobil.de",16],["mountainbike-magazin.de",18],["running-magazin.com",19],["shop-apotheke.com",20],["sportscheck.com",21],["szene-hamburg.com",22],["weihnachts-filme.com",23],["froheweihnachten.info",23],["weihnachten.me",23],["weihnachts-bilder.org",23],["zwischengas.com",24],["abendzeitung-muenchen.de",25],["all-electronics.de",26],["produktion.de",[26,72,98]],["automotiveit.eu",[26,72]],["alles-mahlsdorf.de",27],["android-hilfe.de",28],["apfeltalk.de",29],["ariva.de",30],["baur.de",31],["bergsteiger.de",32],["berliner-kurier.de",33],["berliner-zeitung.de",34],["berlinstadtservice.de",35],["bitreporter.de",36],["boersennews.de",37],["celleheute.de",38],["chip.de",39],["computerbase.de",40],["computerbild.de",41],["connect.de",42],["pc-magazin.de",42],["cyclingmagazine.de",43],["dashcamtest.de",44],["dkamera.de",45],["dogforum.de",46],["douglas.de",47],["ebay.de",48],["emotion.de",49],["eurotransport.de",50],["expert.de",51],["experten.de",52],["fazemag.de",53],["fertigung.de",54],["feuerwehrmagazin.de",55],["finanznachrichten.de",56],["flaconi.de",57],["fuersie.de",58],["futurezone.de",59],["gamestar.de",60],["gebrauchtwagenberater.de",61],["gesundheit.de",62],["giga.de",63],["gofeminin.de",64],["golem.de",65],["googlewatchblog.de",66],["guenstiger.de",67],["hardwareluxx.de",68],["heise.de",69],["imsueden.de",70],["inside-digital.de",71],["instandhaltung.de",72],["technik-einkauf.de",72],["intersport.de",73],["jameda.de",74],["jungefreiheit.de",75],["kaufland.de",76],["koeln.de",77],["lausitz-tv.de",78],["marbacher-zeitung.de",79],["mein-mmo.de",81],["meissen-fernsehen.de",82],["metager.de",83],["mmnews.de",84],["mobile.de",85],["mopo.de",86],["nur-positive-nachrichten.de",87],["o-sport.de",88],["onmeda.de",89],["onvista.de",90],["pcwelt.de",91],["photographie.de",92],["podcast.de",93],["pollenflug.de",94],["prad.de",95],["preis24.de",96],["print.de",97],["promiflash.de",99],["report-d.de",100],["rewe.de",101],["saechsische.de",102],["satvision.de",103],["seo-suedwest.de",104],["skodacommunity.de",105],["smartphonemag.de",106],["t-online.de",107],["www-t--online-de.cdn.ampproject.org",107],["tag24.de",108],["tonight.de",109],["um-tv.de",110],["unicum.de",111],["wallstreet-online.de",112],["wayfair.de",113],["welt.de",114],["windowspro.de",115],["winfuture.de",116],["winfuture-forum.de",117],["zeit.de",118],["zentrum-der-gesundheit.de",119],["la-palma24.info",120],["stol.it",121],["swz.it",122],["carpediem.life",123],["diegrenzgaenger.lu",124],["lessentiel.lu",125],["az.com.na",126],["finanzen.net",127],["nydus.org",128],["ibooks.to",129],["sportdeutschland.tv",130]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
