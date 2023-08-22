/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

// ruleset: idn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#popup_bawah,\n#popup_box","[href=\"https://klik.gg/anoboy\"],\n[href=\"https://klik.gg/anoboyvip\"]","#headads","#ptbanner","#top-banner","#ads","#le_header_ads","#ouibounce-modal","#sgpb-popup-dialog-main-div-wrapper",".sgpb-popup-overlay",".kln","#teaser3",".ads","#fbanner","#fbbanner","#hbanner","#pbanner","#teaser1","#teaser2","#floatbottom,\na[href][target=\"_blank\"] > img[src$=\".gif\"]","#floatcenter",".adsrow",".banner-float-bottom-2.banner-float-bottom",".under-player-ad-mobile","#repop","#floating_bot.btm_ban","#floating_banner_top1",".box_item_berlangganan_popup","a[href^=\"https://cek.to/\"]",".lazyloaded.loaded.ads-50","#overplay",".sgpb-popup-dialog-main-div-wrapper","#floattop,\n#top6",".banner-img","#btm_bannerMobile","a[href^=\"http://bit.ly/\"]","a[href^=\"https://goo.gl/\"]","#semprotpokemon_3,\n#semprotpokemon_4",".lazyloaded.ls-is-cached.bannerdua,\n.lazyloaded.ls-is-cached.bannersatu,\n[href^=\"https://137.184.194.29/\"]","[href^=\"http://rebrand.ly/\"]","#KD_adpB,\n.krucil_ads",".banner-float-bottom","#fixedban","#iklantengah1","#tutupen,\n[href=\"https://bit.ly/idx-xx\"]","[href^=\"https://bit.ly/\"]",".headbanner",".ban_empat",".adscenter",".teaser3","#advertisement","#overlay",".warning-modal",".sgpb-popup-overlay.sgpb-popup-overlay-19287.sgpb-theme-1-overlay,\n[href=\"https://yukclick.me/oploverzpopluxury111\"]",".underlay","#iklap,\n#iklhead,\n#jwp_gmn_adss","#promoContainer",".blocker.jquery-modal",".jwseed",".kln.mlb.blox",".wp-image-80765.size-full.alignnone",".banner-left,\n.banner-right","[href^=\"http://bit.ly/\"]","#kayan_reklam_sag,\n#kayan_reklam_sol",".contentlist","[href^=\"https://manjur.id/search.php\"]",".td-header-rec-wrap",".sg-popup-content","#middle-banner","#ptbanner.row","div[class^=\"adsgen\"],\ndiv[class^=\"mobileads\"]",".lmd-iklan","#popup_content","a[href=\"http://www.filmxy.cc/download/\"],\na[href=\"http://www.filmxy.cc/watch/\"]","#tengah > span","tbody",".imgbanner","#floating_banner_left,\n#floating_banner_right",".textwidget > p","#wrap > .headborder > .headcontent > .textwidget","#col,\n#tengah,\n#tengahaa,\ndiv.content-kuss",".klikdisini","#fadeinbox","#filmoncereklam","a[href^=\"https://bit.ly/\"]","a[target=\"_blank\"][rel=\"nofollow\"] > img[src$=\".gif\"]",".home.border","#banner-tengah","[href$=\"/sukamovieclub\"]","[href^=\"/GoUrl.php?ads=\"]",".pop-overlay",".popbox","[href^=\"http://152.44.32.81\"]","#btm_banner",".iklansamping,\n.klnrec,\n.sidebar_right,\na[rel=\"nofollow\"] > img[src*=\"bp.blogspot.com\"],\na[rel=\"noopener\"] > img[src*=\"bp.blogspot.com\"]","#bioskop-kiri,\nbioskop-kanan",".hilang2","#modal","#myModal,\n.modal-content","#playerOverlay","a[href^=\"https://shope.ee/\"]","iframe[style*=\"z-index: 2147483647\"]",".td-banner-wrap-full","#div-Inside-MediumRectangle",".ad-photo,\n.commSkin__fluid--left.commSkin__fluid,\n.commSkin__fluid--right.commSkin__fluid,\n.mb3.gpt-ad-head-wrapper.widget",".cls-outstream","#advertisement-2",".banner-fix-bottom,\n.banner320x480,\n.bannerhead,\n.closebanner1,\n.closebanner2",".ayu-headads","#energysaving",".banner","img[width=\"720\"][height=\"90\"]","#floatads1",".middle-ad-cont",".anm__flying--ads-holder","a[href^=\"http://anizan.slask.pl/go.php\"]","#billboard",".d-flex.w-100:has([id^=\"div-gpt-ad\"]),\n.underlay-ad","a[href=\"http://162.144.35.114/\"]","#billboard_banner,\na:nth-of-type(2),\ntd:nth-of-type(3)","#floating_banner_bottoms","#floating_banner_tops","#wrap > center",".headborder:nth-of-type(5)",".sidebarborder:nth-of-type(2)","#floating_banner_top",".textwidget img",".adsPushdown,\n.banner.billboardBig.billboard,\n.banner.billboardBottom,\n.banner.billboardRectangle.billboard,\n.banner.billboardTop.billboard,\n.flying_carpet_show,\n.flying_carpet_show_inner,\n.skyscrapper--left,\n.skyscrapper--right",".product__card:has(.product__tag__ads)","#floating_banner_bottom2,\n#floating_banner_top img[width=\"728\"][height=\"90\"]","#HTML2,\n.lalulintas",".ads-on,\n.ads__stick--left,\n.ads__stick--right,\n.ads_below_photo",".ads-partner-wrap",".ads__top-big,\n.cls-composite,\n.cls-geniee,\n.float-ads",".mgidclsbanner",".pushdown-banner",".bl-product-card-new:has(.bl-product-card-new__ads-badge)",".dp-card-container:has(.ico_promotion)",".wpa","#adsic728,\n#adsic7282",".ad","#hbanner:nth-of-type(1)",".adstops",".side:nth-of-type(7),\n.side:nth-of-type(8),\n.side:nth-of-type(9)","#sgcboxOverlay",".megabillboard",".mr1-scrollpage-height,\n.mr2-scrollpage-height",".mr1:has([id^=\"div-gpt-ad\"]),\n.mr2:has([id^=\"div-gpt-ad\"])","#adv-caption-mr1","#adv-caption-mr2",".footer_banner",".paraA.para,\n.para_abs,\n.para_fix,\n.paradetail",".Widget:nth-of-type(2),\n.Widget:nth-of-type(3)","#ads-728,\n#ads-960-mid,\n#ads-mid,\n#mid-banner,\n.ads2-home,\n.fixed-ads-atas,\n.mid-banner","#adpoint5,\n#adv-caption-lead,\n#leaderboard:has([id^=\"div-gpt-ad\"]),\n#leaderboard[style*=\"width: 750px;height: 100px;\"],\n#megabillboard-desktop,\n#otp_banner,\n#skinad,\n#sto_banner,\n#top_banner,\n.ads-slot,\n.banner_inside_article,\n.detikads,\n.mr1:has(#adv-caption-mr1),\n.normalbanner,\n.otp_banner_close,\n.parallax_abs,\n.sisip_video_ds,\n.skinad_1,\n.skinad_2","#bottom_banner",".bb_banner",".dewa_floating_bottom","[href^=\"http://www.dukungbpjs.com/ref.php\"]","#ads-stack,\n#close-ads-stack,\n#itro_opaco,\n#itro_popup","#float-bottom-banner",".visible-lg",".ads_square_banner,\n.section_sticky_ads_bottom",".banner-common",".left.banner-vertical,\n.right.banner-vertical","#peluang",".ktzsingle-bannerright",".pps-single-popup",".random","#footer_sticky_inside",".adsense-header-in-article",".box","#jxOutstreamContainer",".ads-liftdown,\n.clearfix.ads__top-big250,\n.read__left",".ads__boxr",".blocker-notice,\n.blocker-overlay","#balloonads,\n#parallaxdetail,\n.ads-scrollpage-container,\n.ads-scrollpage-height,\n.billboard__banner,\n.m-r1:has(#adv-caption-mr1),\n.m-r2:has(#adv-caption-mr2)","#ads-float,\n#solopos_float,\n.bottom-fix","#bannerkategoriheader,\n#mybannerpopup,\n#mybannerpopup2",".article-bottom-ad,\n.article-desktop-ad",".spb_middle.spb_banner","#text-28 > .textwidget,\na[href^=\"http://www.pembesar-vimax-herbal.com/\"]","[style=\"float:right; margin:7px 0 10px 10px;\"] > small",".parallax-ad",".sponsor_ads:nth-of-type(1),\n.sponsor_ads:nth-of-type(2),\n.sponsor_ads:nth-of-type(4)","#floating_ads_bottom_textcss_wrap",".top-banner",".adBar-vertical.left,\n.adBar-vertical.right","#IklanIDGS,\n#bottombanner",".ktz-banneraftercontent","#headerbanner","#baca_juga,\n#more_stories,\n#title_kanal,\n#vertical_top_kanal",".aligncenter,\n.sidebar-widget:nth-of-type(1),\n.sidebar-widget:nth-of-type(3),\n.sidebar-widget:nth-of-type(4)","#player-side-right","._ning_link.strack_cli","#anchormasklink",".bt-g1.b-g3.wb-300x100,\n.bt-g1.b-g3.wb-300x250","#bannerkiri",".d.wp-120x600,\n.wb-300x250","img[style=\"width: 125px; height: 125px;\"]","img:nth-of-type(2)","[class^=\"ad-\"][class*=\"-container\"]","#hello",".adv-space","#leaderboard",".bottom-frame-banner-close-btn,\n.bottom-leaderboard-cont,\n.skycapper","#v5-marcommpromotion.home-right-box,\n#v5-marcommpromotion2,\n#v5-showcase3,\n#v8-leaderboard","#v5-showcase1,\n#v5-showcase2",".ad2","#blockblockA",".ads__under__image",".textwidget img[width=\"300\"][height=\"250\"],\ncenter img[width=\"728\"][height=\"70\"]","#left-skyscraper,\n#right-skyscraper,\n.ad.b300x250","#floatbanner","#credential_picker_container,\n#crt-225c8f8a,\n#crt-4f9f1ad0,\n#crt-f6d317f5,\n.ads-latest-wrap,\n.ads-on-body,\n.adsMR1Lipsus1,\n.bannerAdB,\n.bannerCenter,\n.bannerCenter1SubRubrik,\n.bannerCenter2SubRubrik,\n.bannerCenterRubrik,\n.bannerR,\n.bannerR2,\n.bannerR2A,\n.bannerR3,\n.bannerR3A,\n.bannerTopOut,\n.boxBanner1,\n.boxBanner3,\n.boxBannerR1akt,\n.boxSkinAd,\n.clearfix.kcm__big.kcm,\n.clearfix.kcm__horizontal.kcm,\n.clearfix.kcm__rectangle.kcm,\n.clearfix.kcm__sticky.kcm,\n.clearfix.kcm__top.kcm,\n.clearfix.kcm__tower.kcm,\n.clearfix.kcm__track.kcm,\n.hAds,\n.kcm-track-sticky,\n.kcm__articleList,\n.kcm__stick--left,\n.kcm__stick--right,\n.kcm__superbig.kcm,\n.native-wrap,\n.ol_big_inner,\n.premium_div,\n.show.ol_promo,\n.video-box-wrap,\n[src^=\"https://adsimg.kompas.com\"]","iframe[title=\"3rd party ad content\"]",".bannerTop1",".w340.r-ads.right > ul > li",".banner-center,\n.banner-mgid",".banner-dable.banner,\n.banner-gennie.banner,\n.banner-mgid-read.banner,\n.banner-right-big.banner,\n.banner-right.banner,\n.mb20.mt20.banner-dable-read.banner","#bannertheme_left,\n#bannertheme_right",".adssingle,\na[href=\"http://kshowid.com/advertising/\"]","center",".banner_box",".banner_main,\n.leftcontent[style=\"padding:0px; margin:0px auto; height:250px; width:720px; border:0px; background:none; \"]",".img-banner","#idcomboard1.com-728x90,\n#idcomright1.com-300x250,\n#idcomright2.com-300x250,\n#idcomsensebox1.com-300x250,\n#idcomsky1.com-160x600,\n.ctnitem.ctncom","#lht2_lesson_after_vocab2_300x250_phone,\n#lht2_lesson_bottom_300x250_phone,\n#lht2_lesson_top_320x50_phone,\n#lht_base_bot_320x50_phone,\n#lht_lesson_right2_300x250_desktop,\n#lht_lesson_right_300x250_desktop",".box-ads-right","#float-banner","#rotating",".ad_990_80",".hero_adslot","#aa,\n#close,\n.mas_tamvan","#lbanner",".masthead","#floating_ads_bottom_textcss_container",".banner-top,\n.bannercol,\n.bannerfloat,\n.bannerpos,\n.cell_banner_inside","#ad-genie-container,\n#div-paralax-container",".js-tower-sticky.clearfix.kcm__tower.kcm",".nkt__stick--left,\n.nkt__stick--right",".spnsr-top,\n.vip-info,\n[class^=\"spnsr-top-\"],\n[class^=\"spnsr-wrapper-\"]",".in.modal-backdrop","#fab","[href^=\"//wizliebeg.com/\"]",".box_item_berlangganan",".sitemaji_banner","#nbpopx-wrapper,\n.jx-ads.nobar-ads","#left_ads_float_phonedevelop,\n#under-video-ads,\n.mask-ads","#wrap > table","#sidebar-right,\ncenter > table",".bannermovie,\n.banners",".content-kuss-ikln","#fatas","#fbawah,\n#previewBox2","#previewBox4","#floatbawah","[href=\"https://www.ocanoke.com/\"]",".center-ban,\n.detads,\n.rc-ad-300x250,\n.skyscrapper,\n.sponsored-belt468x60",".center-paralax,\n.flying_ads",".banner-zone",".r-ads",".alignnone.size-large.wp-image-458","#cont-megabillboard",".float-ck","#float-left,\n#float-right",".sg-popup-builder-content",".lazyloaded.ads-50,\n.sgpb-popup-dialog-main-div-theme-wrapper-6",".semprotnenenmontok_2",".c-message > div:nth-of-type(1)","#me-div-gpt-ad-parallax,\n.clear.size-wide-custom.dummy",".ujipopup","div[style=\"height:260px;\"]",".margin-right-40.left.pullquotes,\ndiv.ad-before","#forum_ads_8,\n#sodasusu_ads_side_left,\n#sodasusu_ads_side_right,\n#teaser4",".adds-top.add,\n.banner-top-m.widget-ads-top,\n.placeholder_expose,\n.placeholder_leaderboard,\n.placeholder_medium,\n.placeholder_r1,\n.placeholder_r2,\n.placeholder_r3,\n.placeholder_read_body,\ndiv.placeholder_pariwara",".\\33 .Premium.Sundul,\n.\\34 .Premium.Sundul","#right_ads_float_phonedevelop,\n.overlay","div[style=\"position:absolute; top:20px; left:45px; width:70px; background:#000; text-align:center;\"]","#fancybox-wrap","#fancybox_ajax,\n.advertisement_box1,\n.advertisement_box2","#banner-atas,\n#banner-bawah",".expandable-bottom-sticky","div[data-testid=\"divProduct\"]:has(span[data-testid=\"icnHomeTopadsRecom\"]),\ndiv[data-testid=\"divProductWrapper\"]:has(span[data-testid=\"divSRPTopadsIcon\"]),\ndiv[data-testid=\"featuredShopCntr\"],\ndiv[data-testid=\"lazy-frame\"]:has(span[data-testid=\"lblProdTopads\"]),\ndiv[data-testid=\"master-product-card\"]:has(span[data-testid^=\"linkProductTopads\"]),\ndiv[data-testid=\"topadsCPMWrapper\"],\ndiv[data-testid^=\"divProductRecommendation\"]:has(span[data-testid=\"icnHomeTopadsRecom\"]),\nsection[data-unify=\"Card\"]:has([href^=\"https://ta.tokopedia.com\"]:first-child)","#idb3","#div-Right-MediumRectangle-1","#div-Top-Leaderboard","#anchorads,\n#bannerku,\n#bannerkubawah,\n#boxright [style=\"width:300px; height:250px;\"],\n#div-Center-FullBanner-1,\n#div-Center-FullBanner-2,\n#div-Tribunnews-Home-Center-2-FullBanner,\n#skinads,\n.ads-placeholder,\n.ads-placeholder-inside,\n.belanja-picks,\n.content [style=\"width:160px; height:600px;\"],\n.ovh[style=\"width:468px;height:60px\"],\nimg[src*=\".pgi.tribunnews.com/\"]","#div-Right-MediumRectangle-3","#boxleft > .mb20",".avert","#an-Modal,\n.reveal-modal-bg",".banneritem",".code-block-3.code-block","#Ad300B,\n#Ad728","#aside img[width=\"300\"][height=\"250\"],\n#lAds,\n#rAds,\n#simplemodal-container,\n#simplemodal-overlay",".download,\na[href^=\"https://144.126.241.203/\"]","[href=\"http://click2go.me/aksesklik4a\"]","#teaser5","#previewBox3","#flobwh,\na[href^=\"https://rebrand.ly/\"]","#floatbot,\n.appup",".mfp-inline-holder.mfp-s-ready.mfp-container,\n.mfp-ready.mfp-with-zoom.mfp-no-margins.mfp-img-mobile","#floatbanner-bottom",".nyaa300,\n.nyaa728",".adsbygoogle",".sidebar > .klan300",".box-ads--container",".bausastra-ads",".affcoups",".inf_infusionsoft_popup","div.ui_adblock","#TopBannerBg",".bnr",".banner-sc,\n.banner-sc2,\n.col-banner,\n.masonry-brick.drm-banner-x.drm-artikel:nth-of-type(3)",".header__kasad,\n.kasad-h",".flying_carpet_div,\n[style=\"height:0; min-height:180px;\"],\ndiv:has(> [id^=\"div-gpt-ad\"][class^=\"paralax\"])","#adsoutsream,\n.heightads250","#fixslowshow","#dablewidget_RoOGdzom,\n#div-Skycrapper-Stocksetup,\n.heightads600.pad-t.pad-r.pad-l.pad-10,\n.heightads90.ads-middle-list-news,\n.text-center.center.width-px-1100","#Kolom-random-300,\n#iklan-dalam-postingan-300,\n#overlay[style=\"display: block;\"],\nimg[style=\"border:0;display:block;\"]","#top-banner-parallax,\n.banner-parallax",".adsense",".description-ads",".ads-120__left,\n.ads-120__right,\n.ads-160,\n.ads-160-600,\n.ads-300-video,\n.ads_160x600,\n.ads_970x250,\n.set-ads-468,\na[style=\"width: 100%; height: 100%; display: block; position: fixed; z-index: 1\"]","#otp_ads,\n.portlet.sideskycrapper","#bottomframe-ad,\n#skinframe-ad-left",".ad-inventory-wrapper","a[href^=\"http://www.apktiga.com/p/start-download-reayus.html\"]","#detailSkinAdLeft,\n#detailSkinAdRight",".ads-mr,\n.ads__skyscraper,\n.ads_sky,\n.clearfix.ads__horizontal",".mt20.top1,\ndiv.banner-r","#div-top-banner-transparent",".ads_sticky_footer",".ads-sticky-left,\n.ads-sticky-right,\n.bg-grey.text-center.p-0.mb-3.mt-3,\n.mb-4.bg-grey.text-center",".ad-box-wrappr,\n.row > .show-desktop > div,\n.underlay-ad-text-box",".nkt__stick","#main-banner-middle,\n.legend_banner-container,\n.stickybanner",".gambar_pemanis",".ftadss",".parallax_ads,\n.widebanner.banner,\ndiv.showcase.banner,\ndiv.skycrapper.banner","[href^=\"https://scratchy-trick.com/\"]",".cls.code-block-center",".lepopup-popup-container,\n.lepopup-popup-loader,\n.lepopup-popup-overlay",".banner-skin--left,\n.banner-skin--right,\n.banner__giant.banner,\n.banner__left.banner,\n.banner__right.banner,\n.banner__top.banner",".ads-popup__inner",".ads.single_post_content,\n.animated.ads",".adbox","#bkgOverlay,\n#bn-premium,\n#delayedPopup,\n#premium,\n.d-sidebar,\n.skinner-left,\n.skinner-right,\n[id^=\"gpt-inline\"]",".box-ads-300x250",".text-align-center.box-ads-content",".in_up_ad-area",".cads","#ilang2",".modal",".box-banner","#floating_ads_bottom_textcss2",".wait","[href=\"javascript:showHideGB()\"],\n[href^=\"http://dwatngkas.\"],\na[href^=\"http://cocobet.\"]","#ilang1",".adv",".bannersinglefot","#googlebox","#floatbtmleft,\na[href^=\"//angel4d.com/\"],\na[href^=\"//telolet4d.com/\"]",".iklanSUKI",".slot-iklan",".float_tengah,\n.separator","#iklanFloat,\n.iklan,\n.modal-backdrop",".lenyap",".ad-float-image",".rsABlock","a[href=\"https://klik.fun/Kp7S5\"]",".col-xs-12.col-md-6.col-lg-6","#previewBox",".wpb-outer-wrap",".bot.ads","ins.adsbygoogle","#float-pop","#overlay-pop","#fancybox-overlay","[href=\"http://bit.ly/adsvbola\"],\n[id^=\"yui-gen\"].postcontainer",".bm.overlay","a.bnner","[href=\"https://klik.fun/ZyslX\"]",".top-bnner.lazy","[href=\"https://144.126.241.203/invite/c6c83up\"],\n[href=\"https://bit.ly/anoboySG88\"],\n[href=\"https://kliksaya.info/mcdanoboy\"]",".adbtm,\n.bh-ad,\n.block-bh-googledfp,\n.center-block.img-responsive",".cari-ads",".td-banner-bg.td-banner-wrap-full","#Taboola_widget,\n#rec_ad4,\n.tonal__standfirst",".adplaceholder-mrec",".code-block-6,\ndiv[data-ub-carousel]","#sadl,\n#sadr",".ktz_banner","#sct_banner_top,\n#videoad1",".ads-header-5","#bmpop_adpB",".placeholder-container:has(.ads-container)","img.aligncenter",".cfmonitor","#banner-popup-desktop",".idmupi-topbanner","#banner-right",".clearfix.act2-970x90:nth-of-type(1),\n.clearfix.act2-970x90:nth-of-type(3)","img[width=\"1020\"][height=\"350\"]","#semprot_ads_side_left,\n#semprot_ads_side_right","#jsemrp_372_719,\n#jsemrp_373_873,\n#jsemrp_374_469,\n#jsemrp_380_290",".semprotpokemon_1,\n.semprotpokemon_2",".coliklan",".cm-popup-modal",".banner3",".blox","#floatads2,\n#floatads3",".anuads","a[title^=\"manga4d\"]","#openpopunder",".mvic-btn",".sidebarborder:nth-of-type(4),\n.sidebarborder:nth-of-type(5)","#floatads,\n.active.adde_modal-overlay,\n.adde_modal_detector-show.adde_modal_detector","a[href^=\"//bit.ly/\"]","#videoOverAd","#tutup,\n#tutup2","#float-atas",".header-banner","#lmd-iklan",".swal-overlay--show-modal.swal-overlay",".s-sponsor","#popuppress-9119,\n#top-banner-content","#main-popup",".banner-middle","[class*=\"banner\"]","a[target=\"_blank\"][rel^=\"noopener noreferrer\"] > img[src$=\".gif\"]",".kzl-header.kzl","[href=\"https://klik.gg/manhwadesu\"]",".iklan-tengah","[href$=\"/referral/nontoncinema\"],\na[href^=\"http://referral.\"]",".box_banner","[href=\"//dumbpop.com/help.xml\"]","#largebanner","table","#ffbp-bg,\n#ffbp-body,\n#ffbp-close","[href^=\"http://linkalternatif.\"],\n[href^=\"https://tinyurl.com/\"]",".btm_ban","img[width=\"320\"][height=\"105\"]",".setdah","a[rel^=\"nofollow noopener\"] > img[src$=\".gif\"]","#ffbp,\n#popup",".gmr-bannerpopup,\n.idmuvi-floatbanner,\n[href^=\"//avgirls.asia/\"]",".add,\n.mobi.content-left,\n.mobi.content-right","#wpb_overlay,\n.wpb-image-popup.wpb-main-wrapper","#floating_bot","#epmblock,\ndiv:nth-of-type(2) > div > .btn-block.btn-lg.btn-success.btn",".hidden-xs",".page > div:nth-of-type(4) > div:nth-of-type(1),\ndiv:nth-of-type(4) > div:nth-of-type(2)",".av-content-full,\n.glx-link,\n.glx-teaser",".adsincenter","#bannerhomefooter","#ftadsth",".ik-overlay","#player-side-left","#home-bnner-content","#home-bnner2-content,\n.reklam-goster-sag,\n.reklam-goster-sol","#directorio > .random > center","#sidebar_right > .side:nth-of-type(5) > .textwidget,\n#sidebar_right > .side:nth-of-type(6) > .textwidget,\n#sidebar_right > .side:nth-of-type(7) > .textwidget,\n#sidebar_right > .side:nth-of-type(8) > .textwidget,\n#sidebar_right > .side:nth-of-type(9) > .textwidget",".bannerwrap","#previewBox1","#top-bnner-content",".ads-big,\n.ads-foot,\n.ads-right2,\n.container_skinad",".fancybox-skin",".navbar-brand.bot,\ndiv[id^=\"previewBox\"]",".ads728-slot-panjang",".banner-premium","[class=\"sc__wrp\"]","[class^=\"xnxx5-\"]",".tutup.banner","#content > div:nth-of-type(1)","#playerOverplay"];

const hostnamesMap = new Map([["anoboy.digital",[0,84,296,297]],["anoboy.media",[0,297,385]],["anoboy.watch",0],["anoboy.ink",1],["bioskopkeren.beauty",2],["bioskopkeren.bond",2],["bioskopkeren.sbs",2],["ayononton.co",3],["layarkaca21.com",[3,13,15]],["lk21tv.com",[3,4,68,160,229,230]],["terbit21.cool",3],["dunia21.cx",[3,4,68]],["bioskopkeren.dev",[3,4]],["dunia21.green",3],["layarkaca21.web.id",[3,13,14,15,16]],["158.69.0.212",4],["terbit21.cafe",[4,68,69]],["movies21.co",[4,68]],["bioskopkerenin.com",[4,62]],["kebioskop21.com",4],["lk21.web.id",[4,35,229,359]],["sinemaindo.web.id",[4,35,229,353,363]],["terbit21.in",4],["kebioskop21.online",4],["ganool.watch",[4,68]],["ganool21.watch",4],["dutasex.bio",5],["perawabokep.cam",5],["perawanbokep.cam",5],["cctvbokep.help",5],["budiarto.id",[5,308]],["cinemaindo.web.id",[5,13,15,16,353,354]],["malemjumat.ink",5],["malemjumat.lol",5],["malemjumat.mom",5],["dutasex.top",5],["filmapik.tv",5],["5.182.209.205",6],["filmapik.kim",6],["filmapik.sbs",6],["filmapik21.space",6],["149.102.130.200",[7,26]],["207.244.225.48",[7,54]],["154.12.229.9",[7,26]],["drakorindo.best",[7,62]],["giladrakor.com",7],["gudangmovies21.lol",7],["mangakita.net",[7,10,11,45,93,414]],["gatsunime.org",[7,431]],["indosemi45.org",7],["manhwaid.org",7],["layarkeren.site",7],["gudangmovies21.skin",7],["kazemanga.xyz",[8,266]],["65.108.132.145",[9,17,18,30,31]],["oploverz.bz",[9,30,67]],["sebokep.com",[9,266,267]],["oploverz.top",[9,10,11,17,18,30,67]],["45.12.2.2",[10,11,27,43]],["107.152.37.223",[10,48,49]],["15.235.11.45",[10,11,17,30,31,53]],["157.245.12.72",10],["komikindo.co",[10,100]],["manhwalist.com",10],["mareceh.com",10],["nontondramaseri.com",10],["oploverz.fan",[10,11,17,18]],["anoboy.id",10],["kiryuu.id",[10,101]],["manhwaindo.id",10],["isekaisubs.web.id",[10,17,18,20]],["oploverz.co.in",10],["oploverz.info",[10,11,17,18,30]],["westmanga.info",[10,371]],["komikcast.io",10],["komikdewasa.me",[10,11]],["komikindo.me",10],["manhwaindo.me",[10,11]],["manhwaland.mom",10],["kazefuri.net",[10,411]],["mangashiro.net",[10,17,84,415]],["animasu.nl",[10,424]],["mangakyo.org",[10,11]],["anichin.top",10],["manhwaland.top",10],["oploverz.tv",[10,11,17,18]],["anichin.vip",10],["komik18.art",[11,59]],["komikdewasa.art",[11,60]],["bioskop201.biz",[11,18,63,64]],["animasu.cc",[11,71]],["bioskop21.co",[11,96]],["bioskopgalaxy21.com",[11,18,122,125]],["doujinlands.com",11],["downloadfilmbaru.com",[11,18,159]],["layarbiru21.com",11],["lmanime.com",11],["realmscans.com",[11,17,18]],["22cinema.download",[11,18,298]],["nontonmovie.web.id",[11,13,14,16,18,141,361]],["luciferdonghua.co.in",11],["filmbaru.in",[11,18]],["luciferdonghua.in",[11,17,18]],["sektedoujin.lol",11],["komikmanhwa.me",[11,383]],["kumapoi.me",11],["mangaindo.me",11],["kikil.net",11],["komiku.net",[11,18,412]],["movie76.net",[11,18,120,122,125]],["ganool.nl",[11,18]],["ganool.ph",[11,18,372]],["cinemaindo.stream",[11,17,18,142]],["cinemaindo.tv",[11,17,18,463]],["animexin.xyz",[11,20]],["kanzenin.xyz",11],["kuramanime.xyz",[11,45,476]],["95.216.163.177",12],["192.99.70.18",[12,39]],["samehadaku.cam",[12,19,20]],["22cinema.com",[12,108]],["topgans.blogspot.com",12],["dapurpacu.com",[12,153]],["dewanontons.com",[12,157]],["download-lagu-mp3.com",12],["embed.dramanices.com",12],["duniafilm21.com",12],["kompas.com",[12,132,135,214,215]],["smallencode.com",12],["samehadaku.day",[12,19,20,21]],["embed.dramacool.es",12],["republika.co.id",[12,324]],["komikindo.info",12],["dunia21.ltd",12],["k-vid.net",12],["otakuindo.net",12],["neumanga.tv",[12,17]],["cinema-indo.com",[13,14,16,141]],["filmbagus21.web.id",13],["filmbagus21.info",[13,354]],["ganool.li",13],["layarkaca21.net",[13,14,15,16]],["nonton21.net",[13,14,16,141]],["lk21.org",[13,14,15,16]],["layarkaca21.tv",[13,14,468]],["lk21.tv",[13,14,468]],["lk21.me",14],["film-ganool.co",[17,18]],["cinemaindo.com",[17,18,142,143]],["film-ganool.com",[17,18,168]],["filmroster.online",17],["bioskopmovie.tv",[18,462]],["samehadaku.run",[19,20,21]],["149.28.158.117",20],["212.32.226.234",20],["awsubs.co",[20,93,94]],["anixlife.xyz",20],["samehadaku.win",21],["51.81.238.0",22],["128.199.102.111",23],["193.178.172.113",24],["157.245.195.114",25],["75.119.147.12",26],["194.163.158.12",26],["45.67.231.215",26],["89.117.61.35",26],["46.149.76.81",26],["81.0.220.98",26],["cinema-indo.co",26],["zonafilm.icu",26],["nontonlk21.live",[26,125,374]],["kawanfilm21.online",[26,45]],["kawanfilm21.pro",[26,45]],["194.163.183.129",[27,28]],["216.155.135.144",29],["oploverz.best",30],["oploverz.love",30],["80.209.252.146",32],["164.68.127.15",33],["194.233.87.224",33],["154.26.132.73",33],["bokepmobile.fun",33],["103.194.170.153",34],["xtubecinema.club",[34,89]],["xtubecinema.top",34],["46.166.167.16",[35,36,37]],["lk21.cam",35],["nekopoi.care",[35,70]],["nekopoi.cash",[35,70]],["gudangmovies21.cc",35],["indomovies.club",35],["indoxx1.club",[35,80]],["bioskop168.co",[35,86,95]],["filmbioskop21.co",35],["layarmovie21.co",35],["nontonsub.co",35],["01nonton.com",35],["123drakor.com",[35,36]],["bioskop45.com",[35,36]],["idbioskop.com",[35,36]],["nonton-streaming.com",35],["nonton789.com",35],["nontongratis88.com",35],["nontonmovie81.com",35],["nontonsub.com",[35,84]],["sashahillfilm.com",35],["semprot.com",[35,37,268]],["semprotku.com",[35,37]],["thirdstarfilm.com",35],["layarkacaxxi.id",35],["meownime.id",35],["zonabola.id",35],["nekopoi.lol",[35,70]],["animeboy.me",35],["nontonani.me",35],["nontondrama.me",35],["ns21.me",[35,36,47]],["sukamovie.mobi",[35,46]],["gandhool.net",35],["indomv.net",35],["nonton33.net",[35,36]],["satujiwa.net",35],["bioskop168.online",[35,95]],["layarxxi.online",[35,427]],["bioskop168.pro",[35,84,95,441]],["lk21.rip",35],["dewamovie.tv",35],["drakorindo.tv",[35,36]],["filmroster.tv",35],["ganoolmovie.video",35],["bioskopkeren.club",36],["bioskopxx1.com",36],["moviebaru21.com",[36,112]],["serunonton.com",36],["awsubs.id",36],["bioskopkeren.online",36],["indoxxi.top",[36,84,460,461]],["ns21.top",36],["bioskopkeren.xyz",36],["188.166.39.172",38],["173.199.167.192",40],["krucil.com",40],["krucil.net",40],["139.99.33.192",41],["164.68.105.199",42],["drakorindofilms.net",42],["bokepid.wiki",[42,473]],["173.249.49.204",44],["139.99.33.205",45],["139.99.120.222",[45,47]],["185.231.223.76",[45,55,56]],["gudangmovies21.cfd",45],["pecintabokep.club",[45,85]],["21filem.co",45],["bioskop45.co",45],["lk21go.fun",45],["manganime.in",[45,366]],["www.nontondramas.net",45],["movieajip.online",45],["otakudesu.watch",45],["gm21.xyz",45],["139.99.33.210",46],["bokepfull.fun",46],["videocrot.org",[46,361]],["nontonserial.com",[47,253,254,255]],["nonton21.tv",[47,254,255,299,373]],["film21terbaru.org",[49,93]],["94.237.74.225",50],["streamingbokeps.co",[50,106]],["149.56.24.226",[51,52]],["kricom.id",51],["gomunime.biz",56],["68.65.123.84",57],["didrakorindo.com",57],["simontok.cx",57],["simontok.ink",57],["avtub.io",57],["sukanonton.online",57],["indoxxi.pictures",[57,440]],["indoxx1.pw",[57,446]],["avtub.sx",57],["indoxx1.art",58],["indoxxi.bz",58],["mangaceng.com",59],["dewabioskop21.asia",61],["dewabioskop21.org",[61,186,428,429]],["b201.info",[63,368]],["kabarviral.blog",65],["lewat.club",[65,81]],["mediapermata.com.bn",66],["terkini.id",[66,347]],["cafecinema.cc",72],["lk21.io",72],["dramamu.net",72],["filmxy.cc",73],["lk21.cc",[74,75]],["dunia21.top",[74,84]],["dutafilm.cfd",76],["dutafilm.observer",[76,425]],["dutafilm.us",76],["bioskop007.club",[77,78]],["bioskop55.club",[77,79]],["bioskop1080.com",77],["bioskop90.com",[77,123,124]],["cinema007.com",77],["cinemastar21.com",[77,83]],["nontononline99.com",77],["bioskop55.me",[77,125]],["bioskop90.me",77],["bioskop212.net",[77,83]],["apk.miuiku.com",81],["nf21.club",82],["nontonfilm21.club",83],["sinema21.id",83],["ns21.club",84],["animeindo.co",84],["idxxi.co",84],["lk21indo.co",84],["lk21xxi.co",84],["bioskopbos.com",84],["dramaind.com",84],["filmbioskop21.com",84],["lk21n.com",84],["nontondramas.com",84],["otakufile.com",84],["bioskopkeren.fun",84],["lk21c.fun",[84,300]],["subindo.id",84],["animebatch.web.id",84],["eka.web.id",[84,355]],["kazefuri.web.id",[84,358]],["mangaku.in",[84,360]],["lk-21.me",84],["neonime.net",84],["nontongratis88.net",84],["anoboy.org",84],["nontonbioskop21.org",84],["cinemaindo.pro",84],["layarindo21.pro",84],["animeku.tv",84],["semi168.club",86],["sukamovie.club",[87,88]],["indoxx1.co",87],["idxxx1.com",[87,185,186]],["sidrama.com",87],["agenbokep.co",[90,91]],["agenbokep.pro",91],["akurat.co",92],["benfile.com",93],["blifnews.com",93],["kabar2.com",[93,204]],["mangacanblog.com",[93,233]],["semuaberita.com",93],["mangaku.web.id",[93,360]],["nusareborn.in",93],["fastdrama.co",[97,98]],["hkfree.co",97],["iyottube.co",99],["iyottube.com",99],["komikstation.co",101],["komikcast.com",101],["bacamanga.id",101],["komikindo.id",[101,338]],["nontondramaonline.co",102],["nontondramaonline.net",102],["www.parapuan.co",[103,104,105]],["bolasport.com",[103,105,131,132,133,134,135]],["www.sonora.id",[103,239,344]],["tempo.co",107],["90animax.com",109],["animebatchs.com",[110,111]],["goblintvfree.com",110],["merdeka.com",[110,235]],["nanime.in",110],["juragan-anime.net",[110,410]],["anixverse.com",112],["astroawani.com",113],["autonetmagz.com",114],["bagas31.com",115],["beritasatu.com",[116,117]],["detik.com",[116,145,146,147,148,149,154,155]],["bioskop19.com",118],["bioskop78.com",[119,120,121,122]],["nonton33.com",121],["bioskop99.me",[121,375]],["bioskop99.mobi",121],["nonton33.tv",121],["juragantomatx.com",[122,125]],["juraganmovie.net",[122,125]],["sejutafilm.com",124],["nontonganool.net",[124,417]],["bioskopstar88.com",125],["cinemaqq.com",[125,144]],["bioskoptigalima.com",126],["icinema3satu.net",126],["bisnis.com",127],["blibli.com",128],["blogspot.com",129],["starringheavenlyrics.blogspot.com",130],["gridoto.com",[131,135,172,173,174]],["www.grid.id",[132,332]],["kompas.tv",[134,172,467]],["bukalapak.com",136],["m.bukalapak.com",137],["cdramabase.com",138],["ceritasexindonesia.com",139],["clip.cewecewe.com",140],["cnbcindonesia.com",[145,146,147]],["haibunda.com",[145,146,149,155,176]],["cnnindonesia.com",[146,147,148,149,150,151]],["teknoup.com",[150,279,280]],["comotin.com",152],["pikiran-rakyat.com",[155,263]],["inet.detik.com",156],["dewantn.com",158],["dunia21tv.com",[160,161]],["cinema-indo.web.id",[160,161]],["layarcinema.tv",[160,161]],["duwitmu.com",162],["dwanonton.com",[163,164]],["dewanonton.vip",[163,471]],["eramuslim.com",165],["faktabali.com",166],["filem456.com",167],["gadgetren.com",169],["gamebrott.com",170],["gopego.com",171],["motorplus-online.com",[174,238,239,240]],["gudangpemain.com",175],["harianjogja.com",177],["solopos.com",177],["hdtvku.com",178],["hellosehat.com",179],["hipwee.com",180],["hotabis.com",181],["iberita.com",182],["idntimes.com",183],["sindonews.com",[183,270]],["idpelago.com",184],["lapar.com",[186,223,224]],["nontonitu.com",186],["indobokepz.com",187],["indogamers.com",188],["indonesiamovies21.com",189],["indosiar.com",190],["indotelko.com",191],["indoxtream.com",192],["indoxx1.com",193],["idxx1.top",[193,382,459]],["indoxximovie.com",194],["inilah.com",[195,196]],["kompasiana.com",[195,218]],["ekonomi.inilah.com",197],["teknologi.inilah.com",[197,198]],["isdaryanto.com",199],["jakbos.com",200],["jalantikus.com",201],["jenismac.com",202],["k-vid.com",203],["dramacool.io",203],["dramanice.io",203],["kabar24.com",205],["kapanlagi.com",[206,207]],["otosia.com",207],["m.kapanlagi.com",208],["kertashitam.com",209],["klikanggaran.com",210],["www.hops.id",210],["klikseru.com",211],["komikbaru.com",212],["komikstation.com",213],["tribunnews.com",[215,285,287]],["indonesiasatu.kompas.com",216],["otomotif.kompas.com",217],["www.kompasiana.com",219],["kotakgame.com",220],["kshowid.com",221],["kuyhaa-me.com",222],["gigapurbalingga.net",222],["loveindonesia.com",[223,231]],["ld2tv.com",225],["lensaindonesia.com",226],["www.lingohut.com",227],["liputan6.com",228],["lk21.pw",229],["malaysiakini.com",232],["mangafap.com",234],["mgkomik.com",236],["modifikasi.com",237],["grid.id",[240,330]],["mydramalist.com",241],["nanimex1.com",242],["negumo.com",243],["nekonime.com",244],["neonime.com",245],["neonime.vip",245],["ninemanga.com",246],["nobartv.com",247],["nontonbokeps.com",248],["nontonfilm77.com",249],["nontonfilm88.com",250],["nontonme.com",251],["nontonplus.com",252],["fb21.tv",[254,255,299,465]],["dunia21s.fun",[255,299]],["lk21.li",[255,299,373]],["nontonsini.com",256],["dl.ocanoke.com",257],["okezone.com",258],["news.okezone.com",259],["oktavita.com",260],["otomania.com",261],["palingseru.com",262],["readwebtoons.com",264],["remo-xp.com",265],["siherp.com",269],["tetew.info",269],["greget.space",269],["sinemakaca.com",271],["bioskopxxi.net",271],["situshp.com",272],["smartphoneku.com",273],["sodasusu.com",274],["suara.com",275],["sundul.com",276],["susterbokep.com",277],["tabloidbintang.com",278],["idfl.me",[279,379,380]],["r-l.me",[279,379]],["tempointeraktif.com",281],["thejakartapost.com",282],["tokopedia.com",283],["topfilmz.com",284],["blog.tribunjualbeli.com",[285,286]],["makassar.tribunnews.com",288],["wartakota.tribunnews.com",289],["webdesign.tutsplus.com",290],["unixmen.com",291],["waralabakan.com",292],["windowsreport.com",293],["wowkeren.com",294],["zonabola.com",295],["lk21.host",301],["juraganfilm.icu",302],["layardrama21.icu",303],["animeindo.id",304],["apkmod.id",305],["radarlombok.co.id",305],["novelgo.id",305],["paraedu.id",305],["hightech.web.id",[305,357]],["nama.web.id",305],["batch.id",306],["beautynesia.id",307],["ceklist.id",309],["alona.co.id",310],["cerpen.co.id",311],["chip.co.id",312],["cosmogirl.co.id",313],["anime17.net",[313,393]],["dream.co.id",314],["kaskus.co.id",315],["katadata.co.id",316],["kontan.co.id",317],["pusatdata.kontan.co.id",318],["stocksetup.kontan.co.id",319],["lihat.co.id",320],["orami.co.id",321],["pontianakpost.co.id",322],["pricebook.co.id",323],["viva.co.id",325],["log.viva.co.id",326],["wartaekonomi.co.id",327],["filmterbaru.id",328],["ggwp.id",329],["nextren.grid.id",331],["inews.id",333],["www.inibaru.id",334],["investor.id",335],["jurnalisindonesia.id",336],["kabargames.id",337],["komikcast.net",338],["komikindo.pro",[338,444]],["manganime.id",339],["medcom.id",340],["slurr.my.id",341],["onlinemetro.id",342],["shinigami.id",343],["tek.id",345],["terasjakarta.id",346],["tirto.id",348],["uzone.id",349],["internetpositif.uzone.id",350],["animeindo.web.id",351],["animeindo.video",351],["animekompi.web.id",352],["ganool.web.id",356],["mangaku.site",[360,457]],["resep.web.id",362],["suki48.web.id",364],["zigi.id",365],["nanimex.in",367],["senimovie.info",[369,370]],["senimovies.net",369],["ganool.is",372],["ganool.se",[372,451]],["ganool.st",372],["doroni.me",376],["dunia21.me",[377,378]],["dunia21.net",378],["dunia21.org",378],["dunia21.wtf",378],["idtube.me",[381,382]],["xx1.me",384],["bharian.com.my",386],["mforum.cari.com.my",387],["hijabista.com.my",388],["majalahpama.my",388],["nona.my",388],["vanillakismis.my",388],["utusan.com.my",389],["mediahiburan.my",390],["rasa.my",391],["youtube-mp3.my",392],["animeindo.net",394],["awnime.net",395],["bintangmawar.net",396],["briliofood.net",397],["cinema-indo.net",398],["dramaqu.net",399],["duniaku.net",400],["filmace21.net",401],["filmbagus88.net",402],["filmku.net",403],["funtasticko.net",404],["gadismalam.net",405],["harakahdaily.net",406],["ibugil.net",407],["indoxxi.net",408],["inidramaku.net",409],["kurazone.net",413],["nobarfilm21.net",416],["sangetods.net",418],["seri168.net",419],["torjack.net",420],["tvkabel.net",421],["unyil.net",422],["zonapanaz.net",423],["indobokep.pro",423],["bokepml.online",426],["dwa21.org",[428,430]],["kumpulmanga.org",432],["manhwadesu.org",433],["nanimex.org",434],["nontoncinema.org",435],["otakuindo.org",436],["pakbos21.org",437],["pkspiyungan.org",438],["satujiwa.org",439],["bokepkita.pro",442],["info.gambar.pro",443],["otakudesu.pro",445],["layardrama21.rest",447],["file.rocks",448],["lonteku.sbs",449],["ruangbokep.sbs",450],["streamingbokeponline.site",450],["ruangbokep.top",450],["streamingbokeponline.top",450],["kamarbokep.xyz",450],["kebokepanku.xyz",450],["cmovieshd.se",[451,452]],["hdfree.se",453],["myasiantv.se",454],["ganol.si",455],["komikcast.site",456],["komikcast.vip",456],["mangaku.vip",457],["samehadaku.skin",458],["indoxxi.tv",[460,466]],["elde.tv",464],["xx1.tv",466],["ns21.tv",469],["ns21.us",469],["drakorasia.us",470],["kurina.vip",472],["goblintv.xyz",474],["indostreamings.xyz",475]]);

const entitiesMap = new Map([["anoboy",[0,1]],["bioskopkeren",[2,3,4]],["layarkaca21",[3,13,14,15,16]],["dutasex",5],["perawanbokep",5],["filmapik21",6],["gudangmovies21",[7,8,9]],["komikcast",10],["komikdewasa",[10,11]],["oploverz",[10,11,17,18]],["komikindo",12],["samehadaku",[12,19,20,21]]]);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
