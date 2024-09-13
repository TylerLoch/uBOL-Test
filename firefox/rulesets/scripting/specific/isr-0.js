/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: isr-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["*",".ad",".Banner,\ndiv[style=\"height: 78px; overflow: hidden; width: 510px;\"],\ndiv[style=\"height: 78px; padding-right: 10px; margin-bottom: 20px;\"]",".adsbygoogle",".desk_mode.adsgoogle","a[target=\"_blank\"][href*=\"/urvd/4-\"]","#popupContainer,\n.widget-area.sidebar-primary.sidebar,\ndiv[style$=\"display: block; overflow: auto;\"]",".zad",".adcontainer","#connect,\na[href*=\"campaigns.layer.co.il/\"]","#backgroundPopup,\n#popupContact,\ndiv[style=\"position: absolute; left: 40px; top: 200px; z-index: 0;\"],\ndiv[style=\"position: absolute; right: 40px; top: 200px; z-index: 0; width:154px;\"]","a[href*=\"://paid.outbrain.com/network/redir?\"][target=\"_blank\"],\na[href*=\"gampad/clk\"],\na[onmousedown*=\"://paid.outbrain.com/network/redir?\"][target=\"_blank\"]","[href*=\"PromotedContent\"]","[href^=\"https://supermarker.themarker.com/\"],\n[href^=\"https://www.haaretz.co.il/labels/\"],\n[href^=\"https://www.themarker.com/labels/\"]","#header_banner_wrapper","#sideban","td[background^=\"/images/commercials\"]",".banner_ads,\n.sidebannerads",".show.youMightAlsoLike,\n.taboola-wrapper,\n[class^=\"TimeLinestyles__StyledAdWrap\"],\n[class^=\"TopBannerstyles_\"],\ndiv.dxZevu.frjHsE.NewsFlahesPagestyles__NewsFlashSpecialWidget-sc-1zhe9e-9.NewsFlahesPagestyles__NewsFlashItem-sc-1zhe9e-8",".tbl-feed-container,\n.trc_rbox_container",".across-google-ad.across-google-wide-ad",".TopBanner",".centerParnasa",".advertizement",".arti-banners",".banner",".actua-sticky.actua-footer-bar,\n.banner-header.banner_ad","[class*=\"banner\"]",".bigbnr","img[src^=\"VIRARTICLES/shadv/\"]",".banner-placeholder,\n.sb-show.sticky-banner,\n.show.sticky_footer-container,\n.under-header.bunner-top.banner",".WidgetHidden.article-aside,\n.WidgetHidden_false.article-aside","#lg-atf-300-250,\n#lg-bottom-300-250,\n.ad-300-250,\n.ad-700-156,\n.ad-970-250,\n.dynAds,\n.sticky-ad",".fade,\n.frmCapsuleBlock.tblFulWidth.color-04.info-block","#LeftBanner,\n.HotBannerDiv,\n.TopBannerDiv",".adv-article-left-kubia,\n.bottom-banner.row,\n.bottom-sticky-strip","#ads\\.top","a[href*=\"goodluckblockingthis.com\"],\na[onmousedown*=\"goodluckblockingthis.com\"]","#ArticleBanner,\n#ads\\.premium,\n#carouselAdLi,\n#old_Arts_Ad,\n#relevanti_area,\n.SetArtWidth[style=\"margin-top:7px;\"] > table[width=\"478\"][height=\"174\"],\n.banner.new > .no-print,\n.banner.new.layoutItem,\n[height=\"7\"] + [valign=\"top\"] + tr[height=\"7\"],\n[src=\"http://partner.googleadservices.com/gpt/pubads_impl_86.js\"] + *,\n[valign=\"top\"] + [valign=\"top\"] + tr[height=\"7\"]",".c-article__ad","#closeMobileBanner,\n#top-banner,\n.article-content-banner,\n.bannerWrap,\n.bannerWrapMobile,\n.bannerWrapMobileBottom,\n.middle-banner","#arti-banner-popup,\n#stSegmentFrame,\n.contento_Container,\n.rt-banners",".banner-article-top-wrap,\n.banner-top-wrap",".pirsomet-header",".sticky-banner.banner-con","#bottom-ad-stick-container,\n#towerBanner.left-banner,\n#towerBanner.right-banner,\n.gpt-ad-container",".adbox",".OUTBRAIN","#adfxp","#taboola-left-rail-thumbnails,\n.desktop-ad-720-90,\n.gadgety-ad-wrapper,\n.vertical-ad","#area-taboola-after-content,\n#area-taboola-top-content",".banner.row,\n.hide-text.text-center.py-5.col-12","#Globes_Displays,\n.Banner_in_Content,\n.spAr","#jumbo_container.nocontent.topBanner,\n.bannerCenter.gr,\n.kidum","a[href*=\"theadblockerproject.org\"]","div[onclick*=\"countAdClick\"]",".container-fluid.styles_commentWrapper__Ggo7W,\n.container-fluid.styles_mainWrapper__kR3CG,\n.styles_nativeFeed__I_3Qr,\n[class^=\"styles_bannerWrapper\"]",".banner-placeholder-hashulchan","#banner_desktop_left_div,\n#banner_desktop_right_div,\n#sticky_banner_bottom_desktop,\n#sticky_banner_bottom_mobile","#board_middle_advert,\n#plasma_container,\n.boardfooter_tr,\n.plasma,\ndiv[style=\"clear:both; float:none; height:40px;\"],\ndiv[style=\"width:641px; height:129px; clear:both; float:none;\"],\ntd[style=\"width:200px; text-align:left; vertical-align:top;\"],\nth[colspan=\"20\"]","#black-studio-tinymce-43,\n.header_banner,\na img[width=\"300\"][height=\"250\"]",".clearfix.block-da-post_before_content.block-da.block-da-1 > .div-hwad-300x250,\n.clearfix.da-style-2.block-da-post_middle_content.block-da.block-da-1,\n.clearfix.tipi-flex-right.block-da-header.block-da.block-da-1,\n.div-hwad-970x250,\n[id^=\"div-hwad-300x\"]","#ads\\.strip\\.1","#banner-sticky,\n#intext-1.sideInf,\n#intext-2.sideInf,\n#intext-3.sideInf,\n#intext-4.sideInf,\n.article-taboola,\n.banner-BTF_LB.banner,\n.banner-BTF_MPU.banner,\n.banner-BTF_MPU_1.banner,\n.banner-story.banner,\n.banner-top,\n.banner.forecast-aside-banner,\n.taboola,\n[id^=\"banner_\"]","[href=\"https://www.bankhapoalim.co.il/he/loans/postpone-loan\"]","#fakeimage,\n.adunit.ih-adunit,\n.ih-marketing-info-container,\n.ih-marketing-item-container,\n.link-list-item-commercial,\n.marketing-article,\n.marketing_section,\n.pane-ih-marketing-bxslider,\n.pane-ih-marketing-nice-to-know,\n.single-post-inner-aside__col.col,\n.top-adunit-section","#weekFlashes","#bannerDiv,\n#leftBanner,\n#rightBanner",".plasma_banner,\ndiv[id^=\"banner\"]","#innerMoodaa2,\n#mekodam,\n.Ozen300,\n.mood.hidden-sm.hidden-md.hidden-xs,\n.mood1240-100,\n.mood_desktop.mood1280-100.mood,\n.mood_desktop.mood1280-250.mood,\n.mood_desktop.mood300-250.mood,\n.mood_desktop.mood300-600.mood,\n.mood_mobileweb.mood300-250.mood,\n.mood_native.mood300-250.mood,\n.sargelWarp,\n[href^=\"https://moodaot.kipa.co.il/gomodaa.php\"],\n[id^=\"p__\"][id$=\"_Kipa_Native_kipa_native_1\"],\n[id^=\"p__\"][id$=\"_Kipa_Native_kipa_native_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_1280x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_300x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_300x250_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_Article_300x600_sidebar_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_3\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x100_4\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_HP_1280x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_ROS_1280x100_2\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_ROS_1280x250_1\"],\n[id^=\"p__\"][id$=\"_kipa_desktop_ROS_300x600_sidebar_1\"],\n[id^=\"p__\"][id$=\"_kipa_mobileweb_Article_320x50_sticky\"],\n[id^=\"p__\"][id$=\"_kipa_mobileweb_Article_king_top\"],\n[id^=\"p__\"][id$=\"_kipa_mobileweb_HP_320x50_sticky\"],\n[id^=\"p__\"][id$=\"_kipa_mobileweb_HP_king_top\"],\ndiv.textim > div > .mood > .moodiframe.oneMood,\ndiv.textim > div > .mood > .moodiframe.oneMood > div","#ad_Footer,\n.post_ad_box",".textlinks_wide.textlinks",".overflow-hidden.mx-auto.banner-outer-wrapper,\n.w-full.header-banner-wrapper","a[target=\"_blank\"]","#link_banner,\n.banner_300x224,\n.banner_main",".HorizontalCategoryArticleAndBannerFloor,\n.TwoBannersFloor,\n.article-5-outbrain-script,\n.article-9-outbrain-script,\n.article-bottom-banner,\n.article-box-banner-wrap,\n.article-details-banner,\n.article-left-side-banner,\n.article-left-side-outbrain,\n.article-top-banner,\n.banner-left-home,\n.box-banner-wrap,\n.cls_970x350_1st_top.one-row,\n.horizontal-banner-wrap,\n.may-interest-you,\n.news-feed-banner,\n.right-side-outbrain,\n.xl-banner-wrap","#a_sticky_test,\n.banner-div-gpt-250,\n.cls300x250.mm-banner-container,\n.cls393x163.mm-banner-container,\n.mm-promo-content-active",".king-banner",".header-div-banner",".AdvertisingNew,\n.cls970x250-1st.tmi-banner-container","#CloseshellAds",".leftBanner,\n.midBanner,\n.rightBanner","#ZA_CAMP_BG,\n#ZA_CAMP_CONTAINER,\n#ZA_CAMP_SLIDEIN_CONTAINER,\n#hp_bottom_strip,\n#mysupermarketcontainer,\n#neoTopStrip,\n.bannerClose,\n.mako_main_portlet_container > a[target=\"_blank\"] > img,\n.pzm_banners,\n.sidebar_pic,\n[class^=\"Ad_root_\"],\n[class^=\"Layout_premiumWrapperElement_\"],\n[href^=\"https://adclick.g.doubleclick.net/\"],\n[src=\"https://img.mako.co.il/2023/03/12/rosh.gif\"],\ndiv[class*=\"mainRoot\"] > div:nth-child(4) > div[class*=\"ordering\"] > div:nth-child(6),\ndiv[id^=\"top-strip\"]","iframe[src*=\"javascript:document.write('\"]",".adArticle,\n.adv","#playerAdArea",".clearer.scale_image.mako_feed_neo.ver2.part2,\n.h033Desktop_root__UovNL,\n.v025Desktop_root__bxIn4,\n[box-title=\"Xtra Secret\"],\n[box-title=\"Xtra בריאות \"],\n[data-items=\"holidayFinderOrdering\"],\n[href^=\"/health-special/xtra_atopic_dermatitis/\"],\n[href^=\"https://abbvie.mako.co.il/?\"],\n[href^=\"https://www.holidayfinder.co.il/\"][href*=\"?utm_source=mako&utm_medium=affiliate&utm_campaign=component\"],\n[style=\"background-image:url('https://img.mako.co.il/2022/07/10/skinholidayfinder.png')\"]","#bLColumnText.small,\n#bRColumnText.small,\n.spacer.leftBox:nth-of-type(2),\n.tallBanner.spacer",".google-ad-links-wrapper,\n.top-firsomet",".adv160_600,\n.adv300_250,\n.adv300_600,\n.banner-wrapper,\n.pirsumba,\n.pirsumbaTop",".mai-aec-header-after.mai-aec",".TopLeftRadvertisement_translation,\n.result_adv,\n.top_line_ad,\n.top_line_ad_translation","[box-title=\"חוק ומשפט\"],\n[href=\"https://www.mako.co.il/news-law_guide\"],\n[href^=\"/news-law_guide/\"],\n[src^=\"https://www.duns100.co.il/frame/hp3?\"]",".with-bg.sponsor","#CM8ShowAd_MOBILE_MONSTER1_300X250,\n#CM8ShowAd_MOBILE_MONSTER2_300X250,\n#CM8ShowAd_MOBILE_MONSTER3_300X250,\n#MEDIUM_BANNER,\n.advertisingitem,\n.textadvertisingitem,\n[src=\"https://img.mako.co.il/2024/02/13/NEWPOSTER.jpg\"]",".banner.b160x600","#PlazmaDiv,\n#TopBanner,\n#UcInsideRight_1_1_tblWidth,\n#divBanner,\n#divBannerRight,\ntable[bgcolor=\"#eeeeee\"][height=\"150\"],\ntable[width=\"100%\"][border=\"0\"][bgcolor=\"#EEEEEE\"][height=\"160\"],\ntd[width=\"237\"][style=\"background-color: #EEEEEE;\"]",".text-center.adv_mevzakim.adv.callout,\n.text-center.adv_posts_top.adv.callout",".trc_related_container.tbl-feed-card","#content3d > [href^=\"http://pubads.g.doubleclick.net/gampad/clk\"],\n.ad-container-bottom-jumbo.ad-container.ad-bg,\n.vod-player-sponsor-image-bottom,\na[class*=\"one-article-strip\"]","[id*=\"_ucAdArticleAfterCategory_\"],\n[id*=\"_ucAdMiddleArticle_\"]","#cj_taboola_widget-2,\n.bottom-50.cj_above_team_banner_desktop,\n.cj_new_widget_banners_left_long,\n.cj_taboola,\n.persumi-text","#banners-after-flashes,\n#banners-below-menu,\n#fixed-right.margin-fixed.banners-area,\n.group-731.single-onsidebar.banners-area,\n.group-749.home-line.banners-area,\n.group-752.home-line.banners-area,\n.slick-slider.slick-initialized.vertical-fade","#bnrTop",".ad-100-300,\n.ad-300-600,\n.ad-flat.ad",".ad-container-row,\n.adv-placeholder,\n.adv.anchor,\n.is-only-desktop.ad-container,\n.station-middle-ad",".ads","#jumbobannercontainer","[href^=\"https://tld.walla.co.il/item/\"],\n[href^=\"https://tmirecycle.walla.co.il/item/\"]",".aside-desktop iframe,\n.noprint-hidden.wide,\n.section-text-more-box,\n.with-margin-bottom.only-desktop.wide.css-13oxhn3.css-1m8p2t9.slot",".desktop-display > .maavaron","[class^=\"banner\"]",".banner-full-width,\n.banner-sticky-right,\n.dialog-lightbox-close-button.dialog-close-button,\n.elementor-column-gap-no.elementor-container",".viv","#unit_300x250_bottom,\n#unit_300x250_top,\n.s-mb-l.gpt-slot,\n.s-width-100.s-mv-m.flex-center-center",".gpt-slot",".article-list-alt2.article-list-alt > .article-holder-homepage > .row:nth-of-type(6) > .alt,\n.banner-list,\n.makoitemLeft,\n.post.post-alt,\n[href=\"http://www.mako.co.il\"],\n[href=\"https://www.mako.co.il\"],\n[href^=\"https://www.mako.co.il/\"][href$=\"&utm_source=sport5&utm_medium=RSS\"],\n[onclick*=\"hpClickEvent('mako');\"],\n[src^=\"https://meitavads-\"]",".gapunit,\n.kidums_separate,\n.srugim_top_slider","[class^=\"Banner_Wrap\"]",".banner_forums_160x600_right,\n.banner_forums_tree_300x250,\ndiv[style=\"width:990px;height:150px;margin:2px auto 4px auto\"]","#topbanner",".mainUpperBanner",".resp-mobile-hidden.banner",".rs",".header-banners.row",".td-adspot-title-320",".banner-box","#PublichVoiceChat",".slider2.bottom_line_neo",".bgbanner","#firstGoogleAd","#adPlayer,\n#adPlayerSecondary,\n#careerSection,\n#closure2014Section,\n#lawSection,\n#tldSection,\n#videoOverlay,\n#we\\ show,\n#zoomSection,\n.ads-spaces-shdera-hp,\n.commercial-items.mixed-sequence.sequence,\n.css-k0dd80,\n.homepage-desktop-top-ad,\n.href-winner,\n.marketing.desktop-regular,\n.more-in-walla-aside.side-article.fc,\n.no-desktop.homepage-mobile-top-ad,\n.no-mobile.shdera > ul,\n.no-title.shatapim.sequence,\n.ob-taste-left,\n.only-desktop.tld-event,\n.only-mobile.item-ad-in-content-placeholder,\n.positioned,\n.slot-top-margin + .static-spaces-rectangle-buzzer.no-tablet.no-mobile,\n.tld-side-recommendation.editor-selections.three-section-articles.sequence,\n.top_banner_outer.relative,\n.vertical-232.tld.type-2.vertical-editable.common-hp-articles.sequence,\n.walla-shops,\n[alt=\"adImg\"],\n[data-adid],\n[data-advertiser-id],\n[name=\"adIframe\"],\na[href*=\"jor-el.net\"] + img[src^=\"blob\"],\na[href*=\"jor-el.net\"] img[src^=\"blob\"],\na[href][onmousedown] img[src^=\"blob\"],\na[href^=\"javascript:\"] img[src^=\"blob\"],\ndiv.ads,\ndiv.center-bottom[data-slot-name=\"nickbar_phone\"],\ndiv[class^=\"ads-spaces\"],\ndiv[id^=\"Fusion_holder\"],\ndiv[style=\"width:468px;margin:0 auto;\"],\niframe[id*=\"AMAdIframe\"],\nli.ad,\nli.marketing,\nvideo[poster^=\"data:image/gif;base64,\"]","[href^=\"https://dtv.walla.co.il\"],\n[href^=\"https://unionhorizon.walla.co.il\"],\n[href^=\"https://www.democratv.org\"]",".game-item > .pre-game","#ad1,\n#ads-mail-cube,\n.ads-mail-cube,\ndiv[data-ads-params],\ndiv[data-ads-space]",".banner-tower,\n.master-popup-banner","#toolbarLink,\n.daily_container,\n.walTopBannerInside","li.outbrain",".css-jmqqm5,\n.separator.css-1v283wf,\n.wrap-outbrain",".type-2.common-hp-articles.sequence,\n[src=\"/public/assets/sport/winner_logo.webp\"]","#topBanner","#W2D_728x90_1.show-on-desktop",".wenBanner",".mid1Banner","#desktop-top-banners,\n#martef,\n.desktop-only[class*=\"slots_desktopTextlinkLightBoxAd_\"],\n.desktop-only[class*=\"slots_desktopTvAd_\"],\n.dfp,\n.dfp-desktop-tv-wrapper,\n.dfp-slot-container,\n.dfp_v2,\n.inactive.top_boxes_row,\n.iosLoad.mobile_strip_top,\n.iosLoad.mobile_top_dfp_placeholder_bill,\n.magazine-frame,\n.magazine_per_category,\n.sticky_magazine,\n[class*=\"_mobileInnerDfp_\"],\n[class*=\"additional-info_mobileStripMiddleDfp_\"],\n[class*=\"dfp-slot_desktopOnly_\"][class*=\"dfp-slot_container_\"],\n[class*=\"top-gallery_mobileDfp_\"],\n[class*=\"upper-ad-content_mobileStripTopDfp_\"],\n[class*=\"upper-item-description_mobileStripTopDfp_\"]","#top_banners","#ads\\.newspaper,\n#ads\\.top\\.2,\n#blanket,\n#taboola-video-reel-mid-article,\n.ArticleBannerComponenta,\n.CAATVcompAdvertiseTv,\n.MultiArticleTaboola.layoutItem,\n.StripMarketingComponenta1280,\n.Taboola.layoutItem,\n.art_tkb_talkback_advert,\n.banner.layoutItem,\n.commertial.slotView,\n.extended-banner.layoutItem,\n.pplus_hdr_ad,\n.promolightboxmvc,\n[class*=\"MarketingCarousel\"],\n[class*=\"PromoLightbox\"]","#XnetAdSenceThinkAdAD-300,\n#ads\\.250x250\\.top,\n#ads\\.300x250\\.1,\n#ads\\.blog\\.250x250,\n#ads\\.top\\.1,\n.ContentLink.banner.High,\n.ContentLink.banner.Low,\n.ad.hdn","#unit1,\n#unit2",".BannerBoxNew,\n.Martef,\n.leftSideBanner",".ad-title",".adpro","#video-blocker","#flow",".bookingaff","#wrapper > literal > div,\ndiv[style=\"clear: both;border-bottom:3px solid #ededed;padding:4px;height: 120px;\"]",".ad-label,\n.g-ad-label",".topBanner","[href^=\"http\"][href*=\"doubleclick\"][href*=\"net\"][href*=\"clk?id\"],\n[href^=\"https:\"][href*=\"haaretz\"][href*=\"co\"][href*=\"il\"][href*=\"labels/\"],\n[href^=\"https:\"][href*=\"supermarker\"][href*=\"themarker\"][href*=\"com\"],\n[href^=\"https:\"][href*=\"themarker\"][href*=\"com\"][href*=\"labels/\"]","#RoterHePromo,\n#taboola-forum_atf,\n.forum-side-responsive1,\n[href=\"https://bit.ly/3JbFKqV\"],\n[href=\"https://bit.ly/3yQVHRU\"],\n[href=\"https://sales22.telekol.co.il/\"],\n[href=\"https://www.kalish-fin.com/y\"],\n[href^=\"https://www.booking.com/index.html?aid=\"],\n[style=\"border: 0px solid red; width: 160px; table-layout: fixed;\"],\ntd[style=\"border:0px solid red; width:160px; table-layout:fixed;\"],\ntd[style=\"width:120px;border:0px solid red;\"]",".panel-row-upper,\n.remove-ad","#taboola_div",".inrpggoogle"];

const hostnamesMap = new Map([["hasdarot.cc",0],["sdarot.cc",0],["tvfeel.cc",0],["hasdarot.club",0],["hasdarot.co",0],["kurtgeigers.co",0],["bobuzz.com",0],["gubuzz.com",0],["hasdarot.com",0],["isdarot.com",0],["livenza-il.com",0],["matihlle-ocean.com",0],["saphiretelavivisrael.com",0],["sortie-shop.com",0],["twobluedeer.com",0],["vodxil.com",0],["zegvid.com",0],["avoda-mehabait.co.il",0],["bagly.co.il",0],["lead.foxweb.co.il",0],["freeoffers.co.il",0],["lp.infopage.co.il",0],["lp.playsmart.co.il",0],["kelocote.prpl.co.il",0],["shaardollar.co.il",0],["stylebox.co.il",0],["view-movies.co.il",0],["vodmovies.co.il",0],["vodx.co.il",0],["balimon.info",0],["hasdarot.info",0],["lauyn.info",0],["lools.info",0],["losittooday.info",0],["madlik.info",0],["magnivim.info",0],["metador.info",0],["mklrty.info",0],["movitop.info",0],["mporli.info",0],["sirtoonim.info",0],["stomi.info",0],["tukid.info",0],["yosle.info",0],["youlim.info",0],["hasdarot.life",0],["fringantlarn8.live",0],["hasdarot.live",0],["seret.live",0],["hasdarot.me",0],["myvod.me",0],["dubim.net",0],["gbuzz.net",0],["gefun.net",0],["hasdarot.net",0],["iastrology.net",0],["ilbuzz.net",0],["israfun.net",0],["jobuzz.net",0],["lyfun.net",0],["lyplay.net",0],["pinukim.net",0],["topfliightss.net",0],["ugbuzz.net",0],["usbuzz.net",0],["vebuzz.net",0],["vefun.net",0],["viral4buzz.net",0],["worldhotnews.net",0],["zegvid.net",0],["sdarot-il.org",0],["sdarot-tv.org",0],["hasdarot.pro",0],["asface.pw",0],["bitys.pw",0],["dealclick.pw",0],["dealsclubspecial.pw",0],["hasdarot.space",0],["sdarotil.top",0],["hasdarot.tv",0],["faceu.us",0],["hasdarot.vip",0],["hasdarot.xyz",0],["podcasts.center",1],["baba-mail.co.il",[1,32]],["mako.co.il",[1,82,83]],["pcmagazine.co.il",1],["m.sport5.co.il",1],["ashdodnet.com",2],["bigbroil.com",[3,4]],["shmua.com",3],["isramedia.net",[3,47,155]],["chodal24.com",5],["israrights.com",6],["0-15.co.il",6],["2b-bari.co.il",6],["50plus.co.il",6],["acnecenter.co.il",6],["add-syndrome.co.il",6],["alzheimer.co.il",6],["blood.co.il",6],["candidafree.co.il",6],["cold.co.il",6],["committee.co.il",6],["degeneration.co.il",6],["dementia.co.il",6],["dermatology.co.il",6],["east-west.co.il",6],["epilepsy.co.il",6],["feeling.co.il",6],["genes.co.il",6],["human.co.il",6],["iaawh.co.il",6],["ifeel.co.il",6],["le-la.co.il",6],["maane.co.il",6],["matnachim.co.il",6],["medicalcannabis.co.il",6],["mifrakim.co.il",6],["myeyes.co.il",6],["myhealth.co.il",6],["myheart.co.il",6],["myrights.co.il",6],["nashy.co.il",6],["pediatrics.co.il",6],["pigur.co.il",6],["stdinfo.co.il",6],["sukarti.co.il",6],["takana.co.il",6],["tevalife.co.il",6],["urinary.co.il",6],["voices.co.il",6],["womenonly.co.il",6],["abortion.org.il",6],["allergy.org.il",6],["asthma.org.il",6],["autism.org.il",6],["bariatric.org.il",6],["blinds.org.il",6],["burn.org.il",6],["cfs.org.il",6],["cholesterol.org.il",6],["colon.org.il",6],["commitment.org.il",6],["dialysis.org.il",6],["ear.org.il",6],["emun.org.il",6],["ent.org.il",6],["fms.org.il",6],["gastro-israel.org.il",6],["hyperhidrosis.org.il",6],["ibd.org.il",6],["ilsi.org.il",6],["immunology.org.il",6],["implants.org.il",6],["ioh.org.il",6],["isala.org.il",6],["linshom.org.il",6],["liver.org.il",6],["lung.org.il",6],["lupus.org.il",6],["matnachim.org.il",6],["multiplesclerosis.org.il",6],["my-rights.org.il",6],["neurology.org.il",6],["noga.org.il",6],["obesity.org.il",6],["oncology.org.il",6],["pain.org.il",6],["parkinsons.org.il",6],["pso.org.il",6],["psychiatrist.org.il",6],["psychiatry.org.il",6],["stroke.org.il",6],["urine.org.il",6],["il.pcmag.com",7],["pitria.com",8],["rateonclick.com",9],["s-maof.com",10],["themarker.com",11],["haaretz.co.il",11],["www.themarker.com",[12,13]],["www.haaretz.co.il",[12,13]],["www-haaretz-co-il.eu1.proxy.openathens.net",[12,158]],["www-themarker-com.eu1.proxy.openathens.net",[12,158]],["tiuli.com",14],["yeshanews.com",15],["lib.cet.ac.il",16],["0404.co.il",17],["13news.co.il",[18,19]],["13tv.co.il",[18,19]],["sport5.co.il",[19,116]],["14across.co.il",20],["2net.co.il",[21,22]],["auto.co.il",[21,31]],["calendar.2net.co.il",23],["93fm.co.il",24],["ch10.co.il",[24,41]],["a.co.il",25],["forum.lametayel.co.il",[25,71]],["maariv.co.il",[25,47,75]],["actualic.co.il",26],["aiwa.co.il",[27,28]],["bladna.co.il",27],["karmelna.net",27],["almadar.co.il",29],["marmar.co.il",29],["atmag.co.il",30],["hashulchan.co.il",[30,57]],["timeout.co.il",30],["bhol.co.il",33],["bipbip.co.il",34],["bizportal.co.il",35],["calcalist.co.il",[36,37,38]],["frogi.co.il",[36,46]],["mynet.co.il",36],["ynet.co.il",[36,37,146]],["m.calcalist.co.il",39],["camoni.co.il",40],["davar1.co.il",42],["easy.co.il",43],["foodik.co.il",44],["foodsdictionary.co.il",45],["fxp.co.il",[47,48]],["gadgety.co.il",[47,49]],["ice.co.il",47],["geektime.co.il",50],["www.geektime.co.il",51],["globes.co.il",[52,53,54]],["www-globes-co-il.eu1.proxy.openathens.net",[52,157]],["israelhayom.co.il",[54,65]],["rotter.name",[54,154]],["rotter.net",[54,106,154,159]],["haipo.co.il",55],["hamal.co.il",56],["hm-news.co.il",58],["homeless.co.il",59],["hon.co.il",60],["hwzone.co.il",61],["ilimudim.co.il",62],["inn.co.il",63],["isport.co.il",64],["israelweather.co.il",66],["jobmaster.co.il",67],["junkyard.co.il",68],["kipa.co.il",69],["kolhair.co.il",70],["www.lametayel.co.il",72],["linicom.co.il",73],["link4u.co.il",74],["m.maariv.co.il",[76,77]],["tmi.maariv.co.il",[77,79]],["sport1.maariv.co.il",78],["madas.co.il",80],["maka.co.il",81],["walla.co.il",[83,109,131]],["mobile.mako.co.il",84],["shironet.mako.co.il",85],["www.mako.co.il",86],["makorrishon.co.il",87],["masa.co.il",88],["mavir.co.il",89],["metukimil.co.il",90],["morfix.co.il",91],["n12.co.il",[92,93]],["tech12.co.il",93],["m.n12.co.il",94],["netex.co.il",95],["news1.co.il",96],["newsnow.co.il",97],["now14.co.il",98],["one.co.il",99],["m.one.co.il",100],["onlife.co.il",101],["posta.co.il",102],["psakdin.co.il",103],["radio-head.co.il",104],["rlive.co.il",105],["rotter.co.il",106],["seret.co.il",107],["sheee.co.il",[108,109]],["animals.walla.co.il",[108,132]],["astrology.walla.co.il",[108,132]],["b.walla.co.il",[108,132]],["calendar.walla.co.il",108],["cars.walla.co.il",[108,132]],["celebs.walla.co.il",[108,132]],["e.walla.co.il",[108,132]],["elections.walla.co.il",[108,132]],["euro.walla.co.il",[108,132]],["fashion.walla.co.il",[108,132]],["finance.walla.co.il",[108,132]],["food.walla.co.il",[108,132]],["gaming.walla.co.il",108],["healthy.walla.co.il",[108,132]],["home.walla.co.il",[108,132]],["judaism.walla.co.il",[108,132]],["kids.walla.co.il",[108,132]],["mag.walla.co.il",[108,132]],["movies.walla.co.il",[108,132]],["mundial.walla.co.il",[108,132]],["nadlan.walla.co.il",[108,132]],["news.walla.co.il",[108,132,137,138]],["olympics.walla.co.il",[108,132]],["sports.walla.co.il",[108,132,138,139]],["tags.walla.co.il",[108,132]],["tech.walla.co.il",[108,132]],["travel.walla.co.il",[108,132]],["tv-guide.walla.co.il",[108,132]],["usaelections.walla.co.il",[108,132]],["viva.walla.co.il",[108,132]],["vod.walla.co.il",[108,132]],["weather.walla.co.il",[108,132]],["www.walla.co.il",[108,132]],["sheva7.co.il",110],["shoofoo.co.il",111],["www.shvoong.co.il",112],["solitaire.co.il",113],["sponser.co.il",114],["m.sponser.co.il",115],["srugim.co.il",117],["mobile.srugim.co.il",118],["starmed.co.il",119],["start.co.il",120],["takdin.co.il",121],["portal.takdin.co.il",122],["tatus.co.il",123],["techtime.co.il",124],["tgspot.co.il",125],["thecage.co.il",126],["totalchat.co.il",127],["tvbee.co.il",128],["upf.co.il",129],["uzit.co.il",130],["buzzit.walla.co.il",132],["nick.walla.co.il",132],["fun.walla.co.il",133],["mail.walla.co.il",134],["mazaltov.walla.co.il",135],["newmail.walla.co.il",136],["wallashops.co.il",140],["weather2day.co.il",141],["wen.co.il",142],["wisebuy.co.il",143],["yad2.co.il",144],["homeprices.yad2.co.il",145],["pricelist.yad2.co.il",145],["pro.yad2.co.il",145],["xnet.ynet.co.il",147],["yo-yoo.co.il",148],["zap.co.il",149],["podcastim.org.il",150],["chabad.info",151],["hagdolim.info",152],["wacdfrt.info",152],["cellebrate.mobi",153],["m.isramedia.net",156],["hidabroot.org",160],["radio-israel.org",161],["safa-ivrit.org",162]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
