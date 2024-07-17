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

const argsList = [".qc","#invideo_wrapper,\n.Ads,\n.mobile-catfixx",".pc-catfixx",".jw-logo","#ad-floating-right,\n.ad-floating-left","#sponsor-balloon,\n#top-banner-pc","#catfish",".container > div[style^=\"height: 228px\"]",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".banner_top","#antiblocker,\n#antiblocker_underplayer","#footer_fixed_ads",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".float-ck-center-lt","#custom_html-42","#popup-giua-man-hinh",".ad-container",".float-ck",".banner-sticky-footer-wrapper","#popup_banner_beta",".v4j-header > center","#quang-cao",".toogle-ads",".ads-container","#player + div[id]","#xs-addd0","#overlay",".offer__btn",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".adLogoPlayer",".sda-catfish",".sda-preload-popup,\n.sda-preload-popup-overlay","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile","#ab_ctl,\n.bannerads",".banner-top","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".catfish-ck",".t_logo",".gnarty-offads","#fbox-background","#mobile-ads",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".popup-container","#BaoMoi_HalfPage,\n.masthead-wrapper",".bm_B > div,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".widget.widget_text","a[rel=\"nofollow\"]","#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#shoppe_aff_button",".adsbygoogle","#custom_html-7",".div_box_adv",".alldiv ~ div[class]","div.box-aside","[id$=\"bnr\"]",".ad-pin-right-bottom",".adv",".top-right",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.topButton,\n.widget_offer,\nheader > .container",".btn-odds","#quangcaopc","#wap_bottombanner","div[id^=\"dnn_\"]",".company",".footer-banner",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".marquee-container",".line-ads","a#banner","#container-ads",".btn-od",".d-lg-flex.d-none.p-0.company.flex-1.table","#home_header",".popup",".banner-ads,\ndiv#recent-content:nth-of-type(1)",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\ndiv[style=\"margin:6px 0px 6px 0px\"]",".google-auto-placed","#topbanner",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense",".banner-bot-mobile,\n.banner-top-mobile",".preload","[href^=\"https://shope.ee\"]","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".anhbn-qc",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#countdown,\n.bottom_cnt_ad,\n.tp_ads_incontent,\ndiv.ad_separator",".movie-banner","#js-read-body > .text-center.pb-3,\n#js-read__body + .mt-3,\n.nh-read__alert,\n.tpm-unit,\n[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".ads-embed",".mp-adz","#mp-adx-b32","[class^=\"box_adv_ele\"]","#tdi_129","#wap_bottombanner1",".my-banner",".code-block","#IMAPointernctPlayer,\n.adv_home_300_250,\n.nqc-zone","#itro_opaco","#ads_preload,\n.show.ads-sticky",".i9bet","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".popUpBannerBox","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#mobile_content_top,\n#p-GMH",".sticky-footer",".shadow-card + .mt-2","#adsposttop","#adrighttop",".adbox","#divExoLayerWrapper",".banner-catfish-bottom","#f186fb23a33995d91ce3c2212189178c8",".w1e48c4420b7073bc11916c6c1de226bb","#scriptDiv",".pc_catfix_adv",".stream-item","#footer-widget-area",".box,\n.pum",".truct-catfish,\n.truct-widget",".banner","div#adsChapterTop","div#ad_info","#ad_info_top",".footer-info",".v4j-header.v4j-content",".ai-viewport-1","#ads_preload1,\n#ads_preload2,\n#catfish-adv,\n.widget_text.text-center + .text-center","[class*=\"_banner\"]",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)",".adx1","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead","#link-view > center:nth-of-type(1)",".button-action-float-banner",".wtt-ads","#ouibounce-modal","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec","[id^=\"zone-ads\"]",".code-block-8.code-block,\n.ez-video-wrap",".fade.show",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".modal-backdrop.show",".sub-menu.d-none.d-lg-flex",".container > .row > center","[id^=\"Balloon_\"]","#pc-preload-modal,\n#popup",".quang-cao",".btn-bet,\n.g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".active.bg-overlay",".wppopups-whole",".qx_135","#myModal,\ndiv[id^=\"adsphim-\"]","#banner-shopee,\ndiv[style^=\"position: fixed; bottom: 0px;\"]",".ff-banner","#backgroundPopupp,\n#popupContact","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div","[onclick^=\"__a.hide\"]","#i9bet",".hd-tube-desktop,\n.hd-tube-mobile",".adsphim-mobile-popup",".entry > a[target=\"_blank\"],\n.single-content > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","a[rel=\"nofollow sponsored\"]",".underplayer_btn",".ads-wrapper",".a-header,\n.apu,\n.header","#qc_clgt",".advertisement",".sticky",".datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".btn-betting",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top,\n[href^=\"/goto\"]","#m-bet","div[class*=\"size-\"]",".ibs-bet",".hide-desk.footer-banner,\n.modelAds.modal-ads,\n.nhacaiuytin.after.top-btnpage","#mp-preload-pp-overlay,\n.adpl",".ad-botton,\n.topbanner",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section","#layerLogo",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#iklan-atas-wrapper",".box_odds",".banners",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".body_wrapper1","#mp-preload-popup-overlay",".detail-odd-title,\n.div-ad-allpage-top,\ndiv[id^=\"div-ad-list-\"]","[href=\"https://8xbe52.com\"]","#hide_float_right",".a--d-wrapper",".catfish-bottom","#adx,\n.banner-preload,\n.catfish-top,\ndiv.banner-catfish-bottom",".btm_bar",".catfix","#bar_float_r,\n.quangcaomb",".footer-fixed-br-container",".v4j-watch-1.v4j-content,\nbody > div[class]",".no-auto-popup","#menubentrai,\n.gnartyx-offads",".btn-bet-top,\n.item-betnow",".box-host","[href*=\"cellphones.com.vn\"]",".textwidget","#right_float,\n[id$=\"float_banner\"]",".in.fade.modal-backdrop",".link-gold,\n[id^=\"banner\"]",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#ad_global_below_navbar",".b-player",".pum-overlay",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","#qc-kpgame",".info-footer:nth-child(4)",".mobile-catfix","#left_ads_float,\n#right_ads_float","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"]","#banner-top-mobile,\n#pc-top-banner,\n#quang-cao-2",".pc-catfix,\nmobile-catfix","#pm_quangcao","#floating_ads_bottom_textcss_container,\n.module_home_ads","#catfish-banner,\n#dl-banner-728x90,\n.center-screen.backdrop,\n.topless",".ads-pc,\n.ads-sp",".banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)","#match-child-1",".match-detail__offer",".sk_balloon",".menu-top-nha-cai",".menu-cuoc-8xbet",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua","#wap_bottombannerr,\n.grid-match[style]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#ad_balloon",".adpia_banner",".btn-top.btnz,\n.grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo,\n.mmo-inner,\n.modal",".show.fade",".fixed-bottom,\n.popup-banners",".sbAdv","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250",".Notices.PanelScroller","div[class*=\"qca\"]",".content_middle_rightbar","winbox-1",".parent.special,\n.partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer","#hide_catfish","#top_oddd","#popup_fi",".code-block-1.code-block,\n.navbar-container + .container","#idAdLink","#closeAds","div.py-2.md\\:py-6.mx-auto.w-full.max-w-screen-3xl > div.relative",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"]",".PanelScroller.Notices",".expand-static-banner,\n.preload-banner,\n.static-banner","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]",".adv_phim,\n.fixed_bottom","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.col-xl-4,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.justify-content-center.d-flex > .btn-primary.btn,\n.matches__item--footer,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2)","#adspm4u",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle",".btn-betnow,\n.ft-box,\n.vb-button > .mct_-bet,\ndiv.vebo-sp.container:nth-of-type(7)",".quangcaomobile",".xx-ads","#hots-btn,\n.bet-btn-8423,\n.bn-popup-bottom-sdwdwxw,\n.btn_soikeo_74324,\n.highlight,\n.images_fixed,\na.btn_betnow_632132,\na.btn_fb:nth-of-type(3),\nli:nth-child(1n+2)",".show.modal",".v4j-header > a[target=\"_blank\"]",".sticky_bottom","#tut4ktream_idAdLink","#video_player ~ div[id]","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner","#video_player + div[id]","body > [style*=\"position: fixed;\"]",".bg-black.w-full.items-center > .relative.px-2.flex,\n.items-center.justify-center.flex.w-full.top-\\[47px\\].fixed","#AgeModal",".sdzhead",".banner-catfish-bottomd","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".navbar-ex8-collapse","#bnc1","#bnc0","#sticky",".grid-match__footer,\n.odds-comp,\n.w-100.justify-content-center.align-items-center.d-flex,\na.d-lg-none.d-block:nth-of-type(1)",".separator",".-translate-x-1\\/2.transform.left-1\\/2.bottom-0.fixed",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".popup-overlay","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#header-ads,\n.catfish-img","#ad-container,\n.uniad-player + div[style]","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double","div[id^=\"adsWeb\"]",".bgadmtoptotal",".bannertop","#adm-slot-7249",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#div_inpage_banner,\n#div_inpage_banner_after,\n#div_inpage_banner_open,\n#subRightAbove,\n#subRightAboveHome,\n.adv-24h-mid,\n.boxbannerinfeed-kh,\n.fixad300x600,\n.lady,\n.module3,\n[id^=\"ADS_\"]",".admicro",".top-header",".top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page","#\\37 290,\n#\\38 893,\n#ke0v7etz,\n#kizq4u4r,\n#kjb6n9uy,\n#lnm1eu57,\n#lpr54voy,\n.ads-top,\n.top-advertisment","#topbn","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".bg-gray,\n.sidebar > div[style]","div[id^=\"adsbg\"]",".banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".background-blur,\n.qc-benphai,\n.qc-bentrai","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion",".advertTop,\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper",".top-banner-mobile","[id^=\"adv\"]",".quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner","div[class^=\"adv-\"]",".ads-970x280","#pc-top-container,\n.align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.top-ads-16x9","#myCarousel,\n.banner-boder-zoom","#adm-slot-7299",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".zone-top",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".adsbypubpower,\n.v-element > .v-responsive,\ndiv.message--post",".sys-ads",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","li.special.parent"];

const hostnamesMap = new Map([["*",0],["animevietsub.app",[1,2,3]],["damconuongz.com",[2,50]],["thongtintruyen.com",[2,131]],["abysscdn.com",[3,24]],["api.anime3s.com",[3,38]],["freeplayervideo.com",[3,24]],["player-cdn.com",[3,24]],["geoip.redirect-ads.com",[3,24]],["phim18u.net",[3,11,13,251]],["phimss.net",[3,256]],["live4.xoilac34.org",[3,168,202,203,204,233,234,298]],["i.fdcdn.xyz",3],["watch.rkplayer.xyz",[3,420]],["hhchina.app",[4,5,6]],["hhtqvietsub.top",[5,6,215]],["hhtq3d.com",[6,86]],["hhtrungquoc6.com",[6,86]],["hoathinh3dtq.com",6],["phimbocn.com",6],["phimhoathinh3d.com",6],["wibu47.com",6],["hentaivn.forum",[6,178]],["motchilltv.ink",[6,106]],["hhtqnet.me",[6,215]],["hoathinh4k2.net",6],["phimmoi2024.net",[6,16]],["smotchill.net",6],["hoathinhtq.site",[6,15]],["dragonphim.tv",[6,15]],["hhh3d.tv",[6,15]],["hhninja6.tv",6],["hhtm.tv",6],["animeweb.vip",[6,86]],["hhtq5.vip",6],["hhtq7.vip",[6,86,215,327]],["hh3d1.xyz",6],["xemphimchill.xyz",[6,15,16,118]],["bluphim.art",7],["vnesports.art",[8,9]],["mythethao.net",[9,17,248]],["hayghe.bio",10],["bichill.biz",11],["dongchill.co",[11,25]],["vivuphim.info",[11,42,118]],["dongphim.li",[11,26,191]],["phimmoi.onl",[11,16,78,283]],["tamlinh247.biz",12],["cliphot69.blog",[13,14]],["gvnvh18.com",13],["mobiblogz.com",13],["topviet69.com",13],["xem14.com",[13,162]],["cliphotvn.lol",13],["hh3dhay.lol",[13,210]],["phim24h.mobi",[13,223]],["sayhentai.one",13],["phimvuihd.org",13],["hh3dhay.pro",13],["3dchill.shop",13],["vutruphim.tv",[13,320]],["phevkl.uk",[13,219,322]],["viet69.vin",[13,325]],["247phim.cc",[15,16,17]],["hayhaytv.cc",[15,16,17]],["anivn.club",[15,21]],["boctem.com",15],["tvhay26.com",15],["movies.vkoolz.com",[15,17,106]],["vuaphimmoi8.net",[15,17]],["vungtv.us",[15,17,78]],["www.phimmoichilla.xyz",[15,16]],["ephoto360.com",[16,76]],["thiepmung.com",16],["motphimchill.online",16],["ophimhd.vip",[16,106,328]],["checkgaigoi7.cc",17],["dailyphimz.com",17],["sieudamtv.dev",[17,174,175]],["gunnylau360.net",17],["gunnymienphi.net",17],["phim.vkool4.net",[17,26,37,275]],["vuonhoalan.net",[17,279]],["phim33.tv",[17,315]],["rphang.vin",[17,324]],["phim18vip.vip",17],["phimno4.xyz",[17,417]],["biphims.cc",18],["chillhaytv.click",19],["phimtho.net",19],["mphim14.org",[19,294]],["phimmoinay.vip",[19,31]],["soikeoz.vip",[19,216]],["protruyen4.xyz",[19,26]],["javhay.click",20],["heovktgame.club",22],["ketqua247vn.club",23],["keoso.me",[23,216,217]],["quat2vn.club",24],["subnhanh.li",[25,26,192]],["subnhanhvl.net",[25,26]],["subnhanh.tube",[25,26]],["tructiepdabong5.co",[26,27,28,29,30]],["biphim.online",[26,50,192,284]],["quick-counter.net",[27,50,69,70,71,72,75,171,257,258,259,260,261,262]],["xoivo2.online",[29,30,146]],["tvzinghd.co",[31,32]],["phimmoisz.org",[31,296]],["vailonxx.co",[33,34]],["vlxxhot.com",[34,153]],["123nhadatviet.com",35],["123nhadatviet.net",35],["tuoitre.vn",[35,402]],["tuoitrenews.vn",35],["live.7mvn2.com",36],["ahaphimz.com",37],["vphims.net",37],["phimvietsub.pro",[38,304]],["subnhanh.xyz",[38,40,106,304]],["animetvn4.com",[39,40,41]],["animet1.net",[39,40,232]],["appvn.com",42],["javtopxx.com",[42,95]],["linkerpt.com",42],["vlxx.mobi",[42,182,224,225]],["soikeo365.net",[42,266]],["ghienphim.one",[42,136,281,282]],["cungthi.online",[42,58]],["antt.vn",42],["bongda24h.vn",42],["kienthuc.net.vn",[42,379]],["nghenhinvietnam.vn",42],["nhadautu.vn",42],["saostar.vn",42],["v.xemphimviet.xyz",[42,136,282,422]],["asianbookie.com",43],["asideway.com",44],["baomoi.com",45],["m.baomoi.com",46],["baonga.com",47],["bongda12h365.com",48],["thethao12h.me",[48,220]],["canhrau.com",49],["topthuthuat.com",49],["chatboxn.com",50],["elizadoolittle.com",[50,67,68,69,70,71,72,73,74,75]],["xem.tructiepnba.com",[50,135]],["xemtivi4k.com",[50,163]],["abtruyen.net",[50,231]],["ketqua01.net",[50,244]],["vidian.online",[50,288]],["bongdainfoo.tv",50],["truyenchu.com.vn",[50,355]],["nghean24h.vn",50],["vbfast.xyz",50],["chouc.com",51],["www.clbgamesvn.com",52],["congthucvatly.com",[53,54]],["phuongtrinhhoahoc.com",[54,122]],["phimhaytv.info",[54,186]],["contuhoc.com",55],["www5.cbox.ws",55],["cryptoviet.com",56],["cunghocvui.com",57],["custommapposter.com",58],["giavang.net",58],["romgoc.net",58],["dexuat.com",59],["diadiem.com",60],["mobile.ditnhauvietnam.com",61],["javhdvip.net",61],["doisongphapluat.com",62],["dualeotruyenbi.com",63],["dubaotiente.com",[64,65]],["bongda.com.vn",[65,344]],["giadinhonline.vn",[65,357]],["taichinhdoanhnghiep.net.vn",[65,136]],["nongnghiep.vn",[65,357]],["vietnamnet.vn",[65,407]],["ebookbkmt.com",66],["francemag.com",[68,71,73,79,80]],["live.thapcam22.net",[68,170,177,202,269,270]],["rakhoizz.tv",[68,72,73,260]],["xoilaczrr.tv",[68,70,80,259,261,262,321]],["zoolujan.com",[69,70,71,72,74,75,168,169,170,171]],["nobeijing2022.org",[69,70,72,75,258,259,262,295]],["avvietsub.info",[70,183,184]],["phym18.lol",[70,183,211]],["nhentaivn.online",[70,183,285]],["xemtv.tvhayhd.tv",[70,317]],["phimsexsub.xyz",70],["tructiep.caheo7.link",[73,197,198,199,200]],["tructiep12.cakhia24.live",[73,197,198,199,200]],["cakhia.cakhia27.xyz",[73,197,198,199,200]],["rakhoi.rakhoi3.xyz",[73,197,198,199,419]],["fphimhdc.com",[77,78]],["fsharetv.com",81],["fullcliphot.com",[82,83]],["home.mannhan3.pro",[82,301]],["forum.gocmod.com",[84,85]],["www.tiengnhatdongian.com",85],["ycongnghe.com",[85,165]],["truyensieuhay.com",[86,140]],["hoahoc247.com",87],["hoidap247.com",88],["homedy.com",89],["hotruyen1.com",90],["huphimtv.com",[91,92]],["sexviet1.one",92],["www.iosviet.com",93],["javtiful.com",94],["lacaigi.com",96],["laptrinhcanban.com",[97,98]],["yhocdata.com",[98,167]],["lichngaytot.com",99],["lichvannien365.com",100],["loigiaihay.com",101],["mephimitv.com",102],["metruyencv.com",103],["metruyencv.info",103],["metruyencv.net",103],["mmo4me.com",104],["baodauthau.vn",[104,335]],["motchillfc.com",105],["motphimtvv.com",106],["www.mp.com",[106,107]],["phimnhanhvl.com",106],["muabanraovat.com",108],["muaxegiatot.com",109],["nettruyenaa.com",110],["nettruyenx.com",111],["nghienanh.com",112],["nhaccuatui.com",113],["phim202.com",114],["phimcuon.com",115],["phimdinhcao.com",[116,117,118]],["phimdinhcao.net",[116,117,118]],["phimlongtieng.net",[116,117,118,120]],["phimhaymoii.com",119],["phimlongtieng.com",120],["phimyeuthichb.com",121],["truyensextv.com",121],["lxmanga.life",[121,193]],["quantrimang.com",[123,124,125]],["hoatieu.vn",[123,154,197,370]],["vndoc.com",[125,154]],["khoahoc.tv",125],["download.com.vn",125],["download.vn",[125,162,360]],["gamevui.vn",125],["xem.sex-sub.com",[126,127]],["vl.phe.to",[126,313]],["sexheovl.com",[128,129]],["sexsoc.info",[128,187]],["heovlvn.net",[128,129,187]],["sexvietco.net",128],["sexvip1z.net",[128,129]],["viet69new.net",[128,129]],["vlxxai.net",[128,187]],["javhd.social",[128,187]],["javhd.tech",[128,312]],["sieutamphim.com",130],["thuthuatjb.com",132],["thuthuattienich.com",133],["toithuthuat.com",134],["truyengihotnay.com",[136,137]],["truyengihotnha.com",[136,137]],["truyengihotqua.com",[136,137]],["tenmientruyengi.net",[136,137]],["thichxemphim1.net",[136,271]],["truyengihotdo.net",[136,137]],["truyengihotnha.net",[136,137]],["truyengihotqua.net",[136,137]],["truyengihotzay.net",[136,137]],["megalink.pro",136],["baoxaydung.com.vn",136],["tienphong.vn",[136,335,394,395]],["toquoc.vn",136],["truyenqqviet.com",[138,139]],["truyenqqvn.com",139],["sexvn.tuoi69s.com",141],["tvhaiss.com",142],["tvhayc.com",143],["tvso1.com",144],["bongdaso66.net",[144,237]],["blog.abit.vn",[144,170,270,331]],["vaoroi365.com",[145,146]],["vatlypt.com",147],["vesotantai.com",148],["vietcetera.com",149],["vietgiaitri.com",150],["vietjack.com",151],["www.vietjack.com",152],["vsc7.com",155],["vtruyen.com",156],["vuighe3.com",[157,158]],["xem1080.com",158],["web1s.com",159],["webhoctienganh.com",160],["webtretho.com",161],["xosodaiphat.com",164],["yeah1.com",166],["live.90phut34.live",[168,170,201,202,203,204]],["tructiep2.banhkhuc15.net",[168,202,203,204,233,234]],["live.vebo24.net",[168,202,203,204,233,234]],["live.vebo26.net",[168,202,203,204,233,234]],["vebo4.net",[168,202,203,204,233,234]],["noitu.pro",[170,302]],["keonhacai5.date",[172,173]],["xemtivingon.org",173],["sex.chichnhau.net",[174,238]],["xoilacz.dev",[176,177]],["hentaivn.homes",179],["cdnwp.icu",180],["mephim.ink",[180,188]],["luotphim1.net",180],["animehay.in",181],["phim1080.in",182],["socolivebongda.net",[183,265]],["xem.javkche.info",185],["javhd.shop",187],["maclife.io",189],["tapchibitcoin.io",190],["truyen18.life",194],["anime47.link",[195,196]],["doctruyen3qvn.pro",196],["www.toptruyenvn.pro",196],["tructiep36.cakhia24.live",[199,205]],["vn.cliphot69.live",206],["doctruyenchufull.live",207],["mn.mediastation.live",208],["sexhd88.live",209],["vn.phym18.lol",212],["chotlo247.me",213],["www.gaingon18.me",214],["bongda365.news",216],["ngaytho.me",218],["phimhay123.me",219],["chat.vebotv.me",221],["tuoinung.men",222],["mephimnhe1.net",[223,247]],["xvideos1z.net",224],["phimtuoitho.tv",224],["play.anh.moe",226],["heo69.moe",227],["sexphimhd.vip",227],["tuoi69.moe",228],["viet69.name",229],["sexsub.247jav.net",230],["bantincongnghe.net",235],["blogkiienthuc.net",236],["chodansinh.net",239],["xem19.gavang1.net",240],["xem20.gavang1.net",240],["gockhuat.net",241],["vn.javbabe.net",242],["javfc2.net",243],["khiphach.net",245],["linkneverdie.net",246],["ophimhdvn3.net",[247,250]],["phimgichill.net",[247,250,252]],["www.o-study.net",249],["phimmoichillv.net",253],["phimmoiiii.net",254],["phimnhua.net",255],["sachmoi.net",263],["sieukhungvn.net",264],["tenovi.net",[267,268]],["truyentuan.xyz",[268,421]],["tracnghiem.net",272],["phimmoi.tuphim.net",273],["vietmoz.net",274],["vnexpress.net",276],["vozer.net",277],["vtipster.net",278],["zcine.net",280],["phimhay.online",286],["tut4ktream.online",287],["animew.org",289],["blogtruyenvn.org",290],["btcvn.org",291],["chillphimmoizzz.org",292],["lmssplus.org",293],["truyenaudiocv.org",297],["phimsex.emthao.pro",299],["sexgaidep69.pro",299],["x.sexngocha.pro",299],["gaidep3x.pro",300],["vlxyz.tube",300],["phimsexhay669.pro",303],["sexvn2024.pro",305],["youtubeporn.pro",[306,307]],["vectorx.top",306],["hls.playerfb.xyz",306],["phim18hd.sex",308],["bestx.stream",309],["filemoon.sx",310],["ws-client.gavang.tech",311],["sex.lenlut.tv",314],["phimdacap.tv",316],["vieclam.tv",[318,319]],["xskt.com.vn",319],["motchilltv.us",323],["www.buomtv.vip",326],["2banh.vn",329],["2game.vn",330],["afamily.vn",332],["sport5.vn",332],["m.afamily.vn",333],["autodaily.vn",334],["xehay.vn",[334,414]],["cafebiz.vn",336],["cafef.vn",337],["ttvn.toquoc.vn",337],["m.cafef.vn",338],["careerlink.vn",339],["chap.vn",340],["24h.com.vn",341],["autopro.com.vn",342],["baohaugiang.com.vn",343],["congan.com.vn",345],["daklak24h.com.vn",346],["dantri.com.vn",347],["nld.com.vn",348],["tapchikientruc.com.vn",349],["thanhtra.com.vn",350],["thoidai.com.vn",351],["petrotimes.vn",351],["www.thuocbietduoc.com.vn",352],["thuongtruong.com.vn",353],["thuysanvietnam.com.vn",354],["voh.com.vn",356],["congluan.vn",357],["congly.vn",358],["thitruongtaichinhtiente.vn",[358,393]],["danviet.vn",359],["eva.vn",361],["fshare.vn",362],["game24h.vn",363],["game8.vn",364],["gameio.vn",365],["gamek.vn",366],["soha.vn",366],["genk.vn",367],["vnews.gov.vn",368],["gplay.vn",369],["hosocongty.vn",371],["kenh14.vn",372],["kinhtedothi.vn",[373,374]],["minhngoc.net.vn",374],["vn-z.vn",374],["lazi.vn",375],["lucloi.vn",376],["muare.vn",377],["myeva.vn",378],["phunumoi.net.vn",380],["nhipcaudautu.vn",380],["nhacdj.vn",381],["olug.vn",382],["phapluatplus.vn",383],["qdnd.vn",384],["reatimes.vn",385],["rung.vn",386],["www.saostar.vn",387],["sharecode.vn",388],["m.soha.vn",389],["thanhnien.vn",390],["thethao247.vn",391],["thethaovanhoa.vn",392],["tinnhanhchungkhoan.vn",395],["tiin.vn",396],["timdaily.vn",397],["tinhte.vn",398],["tinmoi.vn",399],["tintucvietnam.vn",400],["truyenfull.vn",401],["tuyengiao.vn",403],["tvphapluat.vn",404],["v4u.vn",405],["vietfones.vn",406],["vietq.vn",408],["viettelstore.vn",409],["voz.vn",410],["vtcnews.vn",411],["vungoctuan.vn",412],["webthethao.vn",413],["yellowpages.vn",415],["znews.vn",416],["rk.plcdn.xyz",418],["plvb.xyz",418]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
