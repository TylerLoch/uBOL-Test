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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc","#invideo_wrapper,\n.Ads,\n.mobile-catfixx",".pc-catfixx",".jw-logo","#ad-floating-right,\n.ad-floating-left","#sponsor-balloon,\n#top-banner-pc","#catfish","#ads-1xbet-catfish,\n#popup-1720497466,\n.banner728,\n.container > div[style^=\"height: 228px\"]",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".banner_top","#antiblocker,\n#antiblocker_underplayer",".wppopups-whole","#footer_fixed_ads",".xx-ads",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".float-ck-center-lt","#custom_html-42","#popup-giua-man-hinh",".ad-container",".float-ck",".banner-sticky-footer-wrapper","a[rel=\"nofollow\"]","#quangcaopc","#wap_bottombanner",".banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)",".sk_balloon","div[id^=\"dnn_\"]",".company","#match-child-1",".match-detail__offer",".offer__btn",".menu-top-nha-cai",".menu-cuoc-8xbet",".sub-menu.d-none.d-lg-flex",".marquee-container","#popup_banner_beta",".v4j-header > center","#quang-cao",".toogle-ads",".ads-container","#AgeModal","div.mt-3:nth-of-type(2),\ndiv.mt-3:nth-of-type(3)","#player + div[id]","#xs-addd0","#overlay",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".adLogoPlayer",".sda-catfish",".sda-preload-popup,\n.sda-preload-popup-overlay","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile","#ab_ctl,\n.bannerads",".banner-top","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".catfish-ck",".t_logo",".gnarty-offads","#fbox-background","#mobile-ads",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".popup-container","#BaoMoi_HalfPage,\n.masthead-wrapper",".bm_B > div,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".widget.widget_text","#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#shoppe_aff_button",".adsbygoogle","#custom_html-7",".div_box_adv",".alldiv ~ div[class]","div.box-aside","[id$=\"bnr\"]",".ad-pin-right-bottom",".adv",".top-right",".line-ads",".btn-od",".btn-odds",".footer-banner",".d-lg-flex.d-none.p-0.company.flex-1.table","#home_header",".popup",".banner-ads,\ndiv#recent-content:nth-of-type(1)",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\ndiv[style=\"margin:6px 0px 6px 0px\"]",".google-auto-placed","#topbanner",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense",".banner-bot-mobile,\n.banner-top-mobile",".preload","[href^=\"https://shope.ee\"]","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".anhbn-qc",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","[id^=\"bdaia-widget-html\"]:has(.widget-inner > [href*=\"premiumvns.com\"])","#countdown,\n.bottom_cnt_ad,\n.tp_ads_incontent,\ndiv.ad_separator",".movie-banner","#js-read-body > .text-center.pb-3,\n#js-read__body + .mt-3,\n.nh-read__alert,\n[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".ads-embed",".mp-adz","#floating_ads_bottom_textcss_container,\n.module_home_ads,\n.module_single_ads","#mp-adx-b32","[class^=\"box_adv_ele\"]","#tdi_129","#wap_bottombanner1",".my-banner",".code-block","#IMAPointernctPlayer,\n.adv_home_300_250,\n.nqc-zone","#itro_opaco",".i9bet","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".popUpBannerBox",".code-block-1.code-block,\n.navbar-container + .container","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#mobile_content_top,\n#p-GMH",".banner-clickadu",".sticky-footer",".shadow-card + .mt-2","#adsposttop","#adrighttop",".adbox","#divExoLayerWrapper",".banner-catfish-bottom","#f186fb23a33995d91ce3c2212189178c8",".w1e48c4420b7073bc11916c6c1de226bb","#scriptDiv","#container-ads","a#banner",".banner",".pc_catfix_adv",".stream-item","#footer-widget-area",".box,\n.pum",".truct-catfish,\n.truct-widget","div#adsChapterTop","#ad_info_top,\n#catfishAd,\ndiv#ad_info",".footer-info",".v4j-header.v4j-content",".ai-viewport-1","#ads_preload1,\n#ads_preload2,\n#catfish-adv,\n.widget_text.text-center + .text-center","[class*=\"_banner\"]",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead","#link-view > center:nth-of-type(1)",".button-action-float-banner",".wtt-ads","#ouibounce-modal","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".banner-ads-cs",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n[id^=\"zone-ads\"]",".code-block-8.code-block,\n.ez-video-wrap",".fade.show",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".modal-backdrop.show",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block","#pc-preload-modal,\n#popup",".quang-cao",".g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".active.bg-overlay",".btn-bet",".container > .row > center","[id^=\"Balloon_\"]",".qx_135","#myModal,\ndiv[id^=\"adsphim-\"]","#banner-shopee,\ndiv[style^=\"position: fixed; bottom: 0px;\"]",".ff-banner","#backgroundPopupp,\n#popupContact","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div","[onclick^=\"__a.hide\"],\ndiv:has([class$=\"-modal\"])","#i9bet",".hd-tube-desktop,\n.hd-tube-mobile",".adsphim-mobile-popup",".entry > a[target=\"_blank\"],\n.single-content > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]","a[rel=\"nofollow sponsored\"]",".underplayer_btn",".ads-wrapper",".a-header,\n.apu,\n.header","#qc_clgt",".advertisement",".sticky",".datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".btn-betting",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top,\n[href^=\"/goto\"]","#m-bet","div[class*=\"size-\"]",".ibs-bet",".hide-desk.footer-banner,\n.modelAds.modal-ads,\n.nhacaiuytin.after.top-btnpage","#mp-preload-pp-overlay,\n.adpl",".ad-botton,\n.topbanner",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section","#layerLogo",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads","#iklan-atas-wrapper",".box_odds",".banners",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".body_wrapper1","#mp-preload-popup-overlay",".detail-odd-title,\n.div-ad-allpage-top,\ndiv[id^=\"div-ad-list-\"]","[href=\"https://8xbe52.com\"]","#hide_float_right",".a--d-wrapper",".catfish-bottom","#adx,\n.banner-preload,\n.catfish-top,\ndiv.banner-catfish-bottom",".btm_bar",".catfix","#bar_float_r,\n.quangcaomb",".footer-fixed-br-container",".v4j-watch-1.v4j-content,\nbody > div[class]",".no-auto-popup","#menubentrai,\n.gnartyx-offads",".btn-bet-top,\n.item-betnow",".box-host","[href*=\"cellphones.com.vn\"]",".textwidget","#right_float,\n[id$=\"float_banner\"]",".in.fade.modal-backdrop",".link-gold,\n[id^=\"banner\"]",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#ad_global_below_navbar",".b-player",".pum-overlay",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","#qc-kpgame",".info-footer:nth-child(4)",".mobile-catfix","#left_ads_float,\n#right_ads_float","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"]","#banner-top-mobile,\n#pc-top-banner,\n#quang-cao-2",".pc-catfix,\nmobile-catfix","#pm_quangcao","#catfish-banner,\n#dl-banner-728x90,\n.center-screen.backdrop,\n.topless",".ads-pc,\n.ads-sp",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua","#wap_bottombannerr,\n.grid-match[style]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#ad_balloon",".adpia_banner",".btn-top.btnz,\n.grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo,\n.mmo-inner,\n.modal",".show.fade",".fixed-bottom,\n.popup-banners",".sbAdv","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list",".elementor-widget-image",".box-rating",".adx1","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250",".Notices.PanelScroller","div[class*=\"qca\"]",".content_middle_rightbar","winbox-1",".parent.special,\n.partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer","#hide_catfish","#top_oddd","#popup_fi","#idAdLink","#closeAds","div.py-2.md\\:py-6.mx-auto.w-full.max-w-screen-3xl > div.relative",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"]",".PanelScroller.Notices",".expand-static-banner,\n.preload-banner,\n.static-banner","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]",".adv_phim,\n.fixed_bottom","#adspm4u",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.topButton,\n.widget_offer,\nheader > .container","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.col-xl-4,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.justify-content-center.d-flex > .btn-primary.btn,\n.matches__item--footer,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2)",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle","[src^=\"https://ads.starzd.com/\"]",".btn-betnow,\n.ft-box,\n.vb-button > .mct_-bet,\ndiv.vebo-sp.container:nth-of-type(7)","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#hots-btn,\n.bet-btn-8423,\n.bn-popup-bottom-sdwdwxw,\n.btn_soikeo_74324,\n.highlight,\n.images_fixed,\na.btn_betnow_632132,\na.btn_fb:nth-of-type(3),\nli:nth-child(1n+2)",".show.modal",".quangcaomobile",".v4j-header > a[target=\"_blank\"]",".sticky_bottom","#tut4ktream_idAdLink","#video_player ~ div[id]","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner","#video_player + div[id]","body > [style*=\"position: fixed;\"]",".bg-black.w-full.items-center > .relative.px-2.flex,\n.items-center.justify-center.flex.w-full.top-\\[47px\\].fixed",".sdzhead",".banner-catfish-bottomd","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".navbar-ex8-collapse","#bnc1","#bnc0","#sticky",".grid-match__footer,\n.odds-comp,\n.w-100.justify-content-center.align-items-center.d-flex,\na.d-lg-none.d-block:nth-of-type(1)",".separator",".-translate-x-1\\/2.transform.left-1\\/2.bottom-0.fixed",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".popup-overlay","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#header-ads,\n.catfish-img","#ad-container,\n.uniad-player + div[style]","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#banner3double","div[id^=\"adsWeb\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#div_inpage_banner,\n#div_inpage_banner_after,\n#div_inpage_banner_open,\n#subRightAbove,\n#subRightAboveHome,\n.adv-24h-mid,\n.boxbannerinfeed-kh,\n.fixad300x600,\n.lady,\n.module3,\n[id^=\"ADS_\"]",".col:has(span.tmPst.clrGr)",".admicro",".top-header",".top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page","#\\37 290,\n#\\38 893,\n#ke0v7etz,\n#kizq4u4r,\n#kjb6n9uy,\n#lnm1eu57,\n#lpr54voy,\n.ads-top,\n.top-advertisment","#topbn","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".bg-gray,\n.sidebar > div[style]","div[id^=\"adsbg\"]",".banrpstn","#myElementz,\n.bannerinfooter,\n.quang-cao-ben-phai",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".background-blur,\n.qc-benphai,\n.qc-bentrai","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper",".top-banner-mobile","[id^=\"adv\"]",".quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner","div[class^=\"adv-\"]",".ads-970x280","#pc-top-container,\n.align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.top-ads-16x9","#myCarousel,\n.banner-boder-zoom",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".zone-top",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".container .desktopjszone,\n.mobilejszone","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".adsbypubpower,\n.v-element > .v-responsive,\ndiv.message--post,\ndiv[style]:has(.adsbypubpower)",".sys-ads",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner",".group-link:has(a[href*=\"&utm_\"]),\n.topnhacai","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","li.special.parent"];

const hostnamesMap = new Map([["*",0],["animevietsub.app",[1,2,3]],["damconuongz.com",[2,21]],["thongtintruyen.com",[2,143,144]],["abysscdn.com",[3,42]],["api.anime3s.com",[3,55]],["freeplayervideo.com",[3,42]],["player-cdn.com",[3,42]],["geoip.redirect-ads.com",[3,42]],["phim18u.net",[3,12,15,262]],["phimss.net",[3,266]],["live4.xoilac34.org",[3,179,214,215,216,244,245,304]],["fdcdn.xyz",3],["watch.rkplayer.xyz",[3,424]],["hhchina.app",[4,5,6]],["hhtqvietsub.top",[5,6,226]],["truyenhentai.bio",[6,11]],["hhtq3d.com",[6,93]],["hhtrungquoc6.com",[6,93]],["hoathinh3dtq.com",6],["phimbocn.com",6],["phimhoathinh3d.com",6],["wibu47.com",6],["yanhh3d.com",[6,17,175]],["motchilltv.ink",[6,114]],["hhtqnet.me",[6,226]],["amotchill.net",6],["hoathinh4k3.net",6],["phimmoi2024.net",[6,18]],["hoathinhtq.site",[6,17]],["dragonphim.tv",[6,17]],["hhh3d.tv",[6,17]],["hhninja6.tv",6],["hhtm.tv",6],["yanhh3d.tv",[6,17,175]],["animeweb.vip",[6,93]],["hhtq5.vip",6],["hhtq7.vip",[6,93,226,332]],["hh3d1.xyz",6],["xemphimchill.xyz",[6,17,18,126]],["bluphim.art",7],["vnesports.art",[8,9]],["mythethao.net",[9,19,259]],["hayghe.bio",10],["bichill.biz",12],["dongchill.co",[12,43]],["vivuphim.info",[12,59,126]],["dongphim.li",[12,44,203]],["phimmoi.onl",[12,18,141,288]],["sexnhe.biz",13],["vlxyz.tube",13],["tamlinh247.biz",14],["cliphot69.blog",[15,16]],["cliphotvn69.com",15],["gvnvh18.com",15],["mobiblogz.com",15],["topviet69.com",15],["xem14.com",[15,172]],["hh3dhay.lol",[15,222]],["phim24h.mobi",[15,234]],["sayhentai.one",15],["phimvuihd.org",15],["hh3dhay.pro",15],["3dchill.shop",15],["vutruphim.tv",[15,325]],["phevkl.uk",[15,230,327]],["viet69.vin",[15,330]],["247phim.cc",[17,18,19]],["hayhaytv.cc",[17,18,19]],["anivn.club",[17,37]],["boctem.com",17],["tvhay26.com",17],["movies.vkoolz.com",[17,19,114]],["vuaphimmoi8.net",[17,19]],["www.ssphim.us",[17,18]],["vungtv.us",[17,19,141]],["www.phimmoichilla.xyz",[17,18]],["ephoto360.com",[18,83]],["thiepmung.com",18],["motphimchill.online",18],["ophimhd.vip",[18,114,333]],["checkgaigoi7.cc",19],["dailyphimz.com",19],["sieudamtv.dev",[19,183,184]],["gunnylau360.net",19],["gunnymienphi.net",19],["phim.vkool4.net",[19,44,54,279]],["vuonhoalan.net",[19,284]],["phim33.tv",[19,320]],["rphang.vin",[19,329]],["phim18vip.vip",19],["phimno4.xyz",[19,421]],["biphims.cc",20],["xoilacx.cc",[21,22,23,24,25,26,27,28,29,30,31,32,33,34]],["chatboxn.com",21],["xem.tructiepnba.com",[21,148]],["xemtivi4k.com",[21,173]],["abtruyen.net",[21,242]],["ketqua01.net",[21,255]],["biphim.online",[21,44,204,289]],["vidian.online",[21,292]],["ramapoughlenapenation.org",[21,22,23,26,27,34,85,86,182,300]],["bongdainfoc.tv",21],["truyenchu.com.vn",[21,359]],["nghean24h.vn",21],["vbfast.xyz",21],["zoolujan.com",[22,23,26,27,33,34,179,180,181,182]],["salesjobs.org",[22,23,27,28,29,32,34,301]],["avvietsub.info",[23,194,195]],["phym18.lol",[23,194,223]],["nhentaivn.online",[23,194,290]],["xemtv.tvhayhd.tv",[23,322]],["xoilaczvl.tv",[23,29,31,32,85,87,326]],["phimsexsub.xyz",23],["rakhoizz.tv",[25,27,85,86]],["francemag.com",[26,84,85,86,87]],["tructiepdabong5.co",[30,44,45,46,47]],["chillhaytv.click",35],["phimtho.net",35],["mphim14.org",[35,298]],["phimmoinay.vip",[35,48]],["soikeoz.vip",[35,227]],["protruyen4.xyz",[35,44]],["javhay.click",36],["heovktgame.club",38],["ketqua247vn.club",39],["keoso.me",[39,227,228]],["mobiblog.club",[40,41]],["javhd.tech",[40,138]],["quat2vn.club",42],["subnhanh.li",[43,44,204]],["subnhanhvl.net",[43,44]],["subnhanh.tube",[43,44]],["xoivo2.online",[46,47,157]],["tvzinghd.co",[48,49]],["phimmoisz.org",[48,299]],["vailonxx.co",[50,51]],["www.vlxxhot.net",[51,280]],["123nhadatviet.com",52],["123nhadatviet.net",52],["tuoitre.vn",[52,405]],["tuoitrenews.vn",52],["live.7mvn2.com",53],["ahaphimz.com",54],["vphims.net",54],["phimvietsub.pro",[55,310]],["subnhanh.xyz",[55,57,114,310]],["animetvn4.com",[56,57,58]],["animet1.net",[56,57,243]],["appvn.com",59],["javtopxx.com",[59,102]],["linkerpt.com",[59,108]],["mod.lnpchannel.com",59],["vlxx.mobi",[59,193,235,236]],["soikeo365.net",[59,270]],["ghienphim.one",[59,143,286,287]],["cungthi.online",[59,74]],["antt.vn",59],["bongda24h.vn",59],["kienthuc.net.vn",[59,383]],["nghenhinvietnam.vn",59],["nhadautu.vn",59],["saostar.vn",59],["v.xemphimviet.xyz",[59,143,287,426]],["asianbookie.com",60],["asideway.com",61],["baomoi.com",62],["m.baomoi.com",63],["baonga.com",64],["bongda12h365.com",65],["thethao12h.me",[65,231]],["canhrau.com",66],["topthuthuat.com",66],["chouc.com",67],["www.clbgamesvn.com",68],["congthucvatly.com",[69,70]],["phuongtrinhhoahoc.com",[70,132]],["phimhaytv.info",[70,197]],["contuhoc.com",71],["www5.cbox.ws",71],["cryptoviet.com",72],["cunghocvui.com",73],["custommapposter.com",74],["giavang.net",74],["romgoc.net",74],["dexuat.com",75],["diadiem.com",76],["mobile.ditnhauvietnam.com",77],["javhdvip.net",77],["doisongphapluat.com",78],["dualeotruyenbi.com",79],["dubaotiente.com",[80,81]],["bongda.com.vn",[81,348]],["giadinhonline.vn",[81,361]],["taichinhdoanhnghiep.net.vn",[81,143]],["nongnghiep.vn",[81,361]],["vietnamnet.vn",[81,410]],["ebookbkmt.com",82],["live.thapcam22.net",[85,181,186,214,273,274]],["tructiep.caheo7.link",[86,209,210,211,212]],["tructiep12.cakhia24.live",[86,209,210,211,212]],["cakhia.cakhia29.xyz",[86,209,210,211,212]],["rakhoi1.rakhoi3.xyz",[86,209,210,211,423]],["fsharetv.com",88],["fullcliphot.com",[89,90]],["home.mannhan3.pro",[89,306]],["forum.gocmod.com",[91,92]],["www.tiengnhatdongian.com",92],["ycongnghe.com",[92,176]],["truyensieuhay.com",[93,151]],["hoahoc247.com",94],["hoidap247.com",95],["homedy.com",96],["hotruyen1.com",97],["huphimtv.com",[98,99]],["sexviet1.one",99],["www.iosviet.com",100],["javtiful.com",101],["lacaigi.com",103],["laptrinhcanban.com",[104,105]],["yhocdata.com",[105,178]],["lichngaytot.com",106],["lichvannien365.com",107],["loigiaihay.com",109],["mephimitv.com",110],["metruyencv.com",111],["metruyencv.info",111],["metruyencv.net",111],["mmo4me.com",112],["baodauthau.vn",[112,339]],["motchillfc.com",113],["motphimtvv.com",114],["www.mp.com",[114,116]],["phimnhanhvl.com",114],["motphimww.com",115],["phimmoiiii.net",115],["tvphim.us",115],["muabanraovat.com",117],["muaxegiatot.com",118],["nettruyenaa.com",119],["nettruyenx.com",120],["nghienanh.com",121],["nhaccuatui.com",122],["phim202.com",123],["phimdinhcao.com",[124,125,126]],["phimlongtieng.com",[124,125,126,129]],["phimdinhcao.net",[124,125,126]],["phimlongtieng.net",[124,125,126,129]],["phimhaya.com",127],["phimhaymoii.com",128],["phimmoifhd.com",130],["phimyeuthichb.com",131],["truyensextv.com",131],["lxmanga.life",[131,205]],["quantrimang.com",[133,134,135]],["hoatieu.vn",[133,164,209,374]],["vndoc.com",[135,164]],["khoahoc.tv",135],["download.com.vn",135],["download.vn",[135,172,364]],["gamevui.vn",135],["xem.sex-sub.com",[136,137]],["vl.phe.to",[136,318]],["sexheovl.com",[138,139]],["sexsoc.info",[138,198]],["heovlvn.net",[138,139,198]],["sexvietco.net",138],["sexvip1z.net",[138,139]],["viet69new.net",[138,139]],["vlxxai.net",[138,198]],["javhd.social",[138,198]],["sieutamphim.com",140],["sphimhdc.com",[141,142]],["truyengihotnay.com",[143,149]],["truyengihotnha.com",[143,149]],["truyengihotqua.com",[143,149]],["tenmientruyengi.net",[143,149]],["thichxemphim1.net",[143,275]],["truyengihotdo.net",[143,149]],["truyengihotnha.net",[143,149]],["truyengihotqua.net",[143,149]],["truyengihotzay.net",[143,149]],["megalink.pro",143],["baoxaydung.com.vn",143],["tienphong.vn",[143,339,398,399]],["toquoc.vn",143],["thuthuatjb.com",145],["thuthuattienich.com",146],["toithuthuat.com",147],["truyenqqviet.com",150],["sexvn.tuoi69s.com",152],["tvhaiss.com",153],["tvhayd.com",154],["tvso1.com",155],["bongdaso66.net",[155,248]],["blog.abit.vn",[155,181,274,336]],["vaoroi365.com",[156,157]],["vatlypt.com",158],["vesotantai.com",159],["vietcetera.com",160],["vietgiaitri.com",161],["vietjack.com",162],["www.vietjack.com",163],["vsc7.com",165],["vtruyen.com",166],["vuighe3.com",[167,168]],["xem1080.com",168],["web1s.com",169],["webhoctienganh.com",170],["webtretho.com",171],["xosodaiphat.com",174],["yeah1.com",177],["live.90phut34.live",[179,181,213,214,215,216]],["tructiep2.banhkhuc15.net",[179,214,215,216,244,245]],["live.vebo24.net",[179,214,215,216,244,245]],["live.vebo26.net",[179,214,215,216,244,245]],["vebo4.net",[179,214,215,216,244,245]],["noitu.pro",[181,307]],["sex.chichnhau.net",[183,249]],["xoilacz.dev",[185,186,187]],["summer.90phut20.xyz",[186,187,420]],["keonhacai5.fit",[188,189]],["xemtivingon.org",189],["hentaivn.homes",190],["cdnwp.icu",191],["mephim.ink",[191,199]],["luotphim1.net",191],["animehay.in",192],["phim1080.in",193],["socolivebongda.net",[194,269]],["xem.javkche.info",196],["javhd.shop",198],["maclife.io",200],["tapchibitcoin.io",201],["truyenfull.io",202],["truyen18.life",206],["anime47.link",[207,208]],["doctruyen3qvn.pro",208],["www.toptruyenvn.pro",208],["tructiep36.cakhia24.live",[211,217]],["vn.cliphot69.live",218],["doctruyenchufull.live",219],["mn.mediastation.live",220],["sexhd88.live",221],["vn.phym18.lol",224],["www.gaingon18.me",225],["bongda365.news",227],["ngaytho.me",229],["phimhay123.me",230],["chat.vebotv.me",232],["tuoinung.men",233],["mephimnhe1.net",[234,258]],["haysex3xx.net",235],["tvhayk.org",[235,303]],["phimtuoitho.tv",235],["play.anh.moe",237],["heo69.moe",238],["sexphimhd.vip",238],["tuoi69.moe",239],["viet69.name",240],["sexsub.247jav.net",241],["bantincongnghe.net",246],["blogkiienthuc.net",247],["chodansinh.net",250],["xem19.gavang1.net",251],["xem20.gavang1.net",251],["gockhuat.net",252],["vn.javbabe.net",253],["javfc2.net",254],["khiphach.net",256],["linkneverdie.net",257],["ophimhdvn3.net",[258,261]],["phimgichill.net",[258,261,263]],["www.o-study.net",260],["phimmoichillv.net",264],["phimnhua.net",265],["sachmoi.net",267],["sieukhungvn.net",268],["tenovi.net",[271,272]],["truyentuan.xyz",[272,425]],["tracnghiem.net",276],["phimmoi.tuphim.net",277],["vietmoz.net",278],["vnexpress.net",281],["vozer.net",282],["vtipster.net",283],["zcine.net",285],["tut4ktream.online",291],["animew.org",293],["blogtruyenvn.org",294],["btcvn.org",295],["chillphimmoizzz.org",296],["lmssplus.org",297],["truyenaudiocv.org",302],["chotlo247.pro",305],["m.phimsexdacbiet.pro",308],["sexgaidep69.pro",308],["sexabc.us",308],["phimsexhay669.pro",309],["sexvn2024.pro",311],["youtubeporn.pro",[312,313]],["vectorx.top",312],["hls.playerfb.xyz",312],["phim18hd.sex",314],["bestx.stream",315],["filemoon.sx",316],["ws-client.gavang.tech",317],["sex.lenlut.tv",319],["phimdacap.tv",321],["vieclam.tv",[323,324]],["xskt.com.vn",324],["motchilltv.us",328],["www.buomtv.vip",331],["2banh.vn",334],["2game.vn",335],["afamily.vn",337],["sport5.vn",337],["autodaily.vn",338],["xehay.vn",[338,417]],["cafebiz.vn",340],["cafef.vn",341],["ttvn.toquoc.vn",341],["careerlink.vn",342],["chap.vn",343],["24h.com.vn",344],["www.24h.com.vn",345],["autopro.com.vn",346],["baohaugiang.com.vn",347],["congan.com.vn",349],["daklak24h.com.vn",350],["dantri.com.vn",351],["nld.com.vn",352],["tapchikientruc.com.vn",353],["thanhtra.com.vn",354],["thoidai.com.vn",355],["petrotimes.vn",355],["www.thuocbietduoc.com.vn",356],["thuongtruong.com.vn",357],["thuysanvietnam.com.vn",358],["voh.com.vn",360],["congluan.vn",361],["congly.vn",362],["thitruongtaichinhtiente.vn",[362,397]],["danviet.vn",363],["eva.vn",365],["fshare.vn",366],["game24h.vn",367],["game8.vn",368],["gameio.vn",369],["gamek.vn",370],["soha.vn",370],["genk.vn",371],["vnews.gov.vn",372],["gplay.vn",373],["hosocongty.vn",375],["kenh14.vn",376],["kinhtedothi.vn",[377,378]],["minhngoc.net.vn",378],["vn-z.vn",378],["lazi.vn",379],["lucloi.vn",380],["muare.vn",381],["myeva.vn",382],["phunumoi.net.vn",384],["nhipcaudautu.vn",384],["nhacdj.vn",385],["olug.vn",386],["phapluatplus.vn",387],["qdnd.vn",388],["reatimes.vn",389],["rung.vn",390],["www.saostar.vn",391],["sharecode.vn",392],["techrum.vn",393],["thanhnien.vn",394],["thethao247.vn",395],["thethaovanhoa.vn",396],["tinnhanhchungkhoan.vn",399],["tiin.vn",400],["timdaily.vn",401],["tinhte.vn",402],["tinmoi.vn",403],["tintucvietnam.vn",404],["tuyengiao.vn",406],["tvphapluat.vn",407],["v4u.vn",408],["vietfones.vn",409],["vietq.vn",411],["viettelstore.vn",412],["voz.vn",413],["vtcnews.vn",414],["vungoctuan.vn",415],["webthethao.vn",416],["yellowpages.vn",418],["znews.vn",419],["rk.plcdn.xyz",422],["plvb.xyz",422]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
