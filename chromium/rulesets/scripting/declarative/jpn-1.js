/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

// ruleset: jpn-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".pum-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#body-in > div[class^=\\\"d-contents\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#playertopads\",\"action\":[\"style\",\"height: 51px!important; position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#scroll.fixed\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".vjs-controls-disabled.vjs-error .vjs-control-bar\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"#top #head\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#player_3x2_close\",\"action\":[\"style\",\"opacity: 0 !important; height: 300px !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important;left: -4000px !important;\"]}","{\"selector\":\"body[style=\\\"display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body > div[style=\\\"visibility: hidden;\\\"]\",\"action\":[\"style\",\"visibility: visible !important;\"]}"],["{\"selector\":\".btmads\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".csh_main\",\"action\":[\"style\",\"padding-top: 30px !important;\"]}"],["{\"selector\":\".top_banner_area\",\"action\":[\"style\",\"height: 44px !important\"]}"],["{\"selector\":\".gPr.u-mtbM\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".gPr_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".p-dol .gNews_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#sub\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#lower section.character ul.character_list li.standby\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"#right\",\"action\":[\"style\",\"padding-top: 25px !important;\"]}"],["{\"selector\":\".gadget_topics > div.cont.last-child\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".adsense-container\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#subProgram\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"footer\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".jackFix + div.siteContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".siteRanking-main\",\"action\":[\"style\",\"margin-left: 0!important;\"]}"],["{\"selector\":\"#main-container\",\"action\":[\"style\",\"padding: 0px 60px 80px !important;\"]}"],["{\"selector\":\"#left\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".app-container[aria-expanded=\\\"false\\\"] section.with-ad\",\"action\":[\"style\",\"width: calc(100% - 20px) !important;\"]}"],["{\"selector\":\".with-ad[data-layout=\\\"list\\\"] .main-header\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"][data-section-type=\\\"new-video\\\"] .content-wrap:nth-child(-1n+2)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#entry[class^=\\\"e\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"#new\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\"#side[class^=\\\"s\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\".entry-content\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display:block!important;\"]}"],["{\"selector\":\"#index_nav > h1\",\"action\":[\"style\",\"padding-top: 30px!important;\"]}","{\"selector\":\"body:not(.tp) > div#container > #main.template1\",\"action\":[\"style\",\"padding-top: 20px !important;\"]}"],["{\"selector\":\"#left[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"div[style=\\\"width:730px;font-size:11pt;\\\"] > table[width=\\\"730\\\"]\",\"action\":[\"style\",\"width: 380px !important;\"]}"],["{\"selector\":\"body[style=\\\"padding: 0px 0px 154px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\".ads\",\"action\":[\"style\",\"display: block!important;height: 1px!important;\"]}"],["{\"selector\":\"#plugin2[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".nav-menu-width.margin.no-side-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".side-ad-area.half-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"padding-bottom: 354px !important;\"]}"],["{\"selector\":\".article-wrapper\",\"action\":[\"style\",\"margin-top: 778px !important;\"]}"],["{\"selector\":\"#wrap01\",\"action\":[\"style\",\"height: 2205px !important;\"]}","{\"selector\":\".tabpain[style=\\\"left: -260px; top: 280px;\\\"]\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".tabpain[style=\\\"top: 550px; left: 0px;\\\"]\",\"action\":[\"style\",\"top: -1120px !important;\"]}"],["{\"selector\":\".adsepa\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".reply_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}","{\"selector\":\".thread_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}"],["{\"selector\":\"body[style^=\\\"overflow:\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#cb-container\",\"action\":[\"style\",\"padding-top: 110px !important;\"]}","{\"selector\":\".ovni-header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".header\",\"action\":[\"style\",\"height: 50px !important;\"]}"],["{\"selector\":\"div[data-js]\",\"action\":[\"style\",\"background: none !important; cursor: default !important;\"]}","{\"selector\":\"div[id][class][style^=\\\"position:relative;background:#000;\\\"][style*=\\\"width:729px;\\\"][style*=\\\"height: 90px;\\\"]\",\"action\":[\"style\",\"height: 1px !important;\"]}","{\"selector\":\"table[width=\\\"762px\\\"] table[width=\\\"100%\\\"] td[align=\\\"center\\\"] > div > div[style$=\\\"width:728px;line-height: 1.2;height: 90px;\\\"]:has(> ins.adsbygoogle[style=\\\"display:inline-block;width:728px;height:90px;position:absolute\\\"] > iframe#aswift_1)\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}","{\"selector\":\"#side[class^=\\\"ad\\\"]\",\"action\":[\"style\",\"border-top: 0 !important;\"]}","{\"selector\":\".adh\",\"action\":[\"style\",\"border-top: 0 !important;\"]}"],["{\"selector\":\"div[style=\\\"margin: auto; width: 930px; height: 265px; text-align: center;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"display: block !important; width: 100% !important; height: 100% !important;\"]}"],["{\"selector\":\".fix_box-m\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".clearfix.contents\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow-y: hidden;\\\"]\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\".sub > div.section > span.heading\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body[style=\\\"position: fixed;\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"div#wrapper.on\",\"action\":[\"style\",\"padding-top: 450px !important;\"]}","{\"selector\":\"div.on h1\",\"action\":[\"style\",\"top: 386px !important;\"]}","{\"selector\":\"div.on nav#path\",\"action\":[\"style\",\"top: 330px !important;\"]}"],["{\"selector\":\"body.header_bg_ad.modal-open\",\"action\":[\"style\",\"padding-right: auto !important; overflow: auto!important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".l-contentsSub[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"td[style^=\\\"vertical-align\\\"] [onclick]:has(> img[src*=\\\"/clip_\\\"] + b):not(:has(b td > a[href]))\",\"action\":[\"style\",\"pointer-events: none !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#side-r\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#contents\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".ui-wrapper\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#subAInner[style]\",\"action\":[\"style\",\"position: static !important;margin-top: auto !important;\"]}","{\"selector\":\"._2pnTOjTu\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\"#loading\",\"action\":[\"style\",\"z-index: auto !important;\"]}"],["{\"selector\":\"#adcheck.ads-ad\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".c167:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c213:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c422:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".right-container[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"._fukugan_grid\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\"div[class=\\\"block recommend\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".is-fixed.secondaryContents\",\"action\":[\"style\",\"position: static !important; margin-left: auto !important;\"]}"],["{\"selector\":\".hustle-no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#wholeHeaderPane\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".ad_common_1_970x250\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}","{\"selector\":\"div[class^=\\\"detail_photo_\\\"]\",\"action\":[\"style\",\"height: 100% !important; max-height: calc(100vh - 70px - 20px) !important;\"]}","{\"selector\":\"img[class^=\\\"detail_mainImage\\\"]\",\"action\":[\"style\",\"max-height: calc(100vh - 70px - 20px) !important;\"]}"],["{\"selector\":\"#result_nav\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".center_column\",\"action\":[\"style\",\"min-height: 1500px!important;\"]}"],["{\"selector\":\"headerr\",\"action\":[\"style\",\"height: 150px !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 768px)\"]]}","{\"selector\":\"main\",\"action\":[\"style\",\"padding-top: 110px !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 768px)\"]]}"],["{\"selector\":\".s-ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#common-header > div[class^=\\\"common-header-pc-\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#tx7player[style*=\\\"opacity: 0.\\\"]\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"div[class^=\\\"LayoutContentInner-sc\\\"] > div[class^=\\\"Promotion-sc\\\"]\",\"action\":[\"style\",\"grid-template-columns: 1fr 0 !important;\"]}"],["{\"selector\":\".isJack\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\"body.withsky div#shellcontent[style]\",\"action\":[\"style\",\"right: 0 !important;\"]}"],["{\"selector\":\"#ydn-bot\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important;\"]}"],["{\"selector\":\".latestnewstable2014[height^=\\\"1\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"body[style*=\\\"position\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".l-sidebar-b[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#adnone\",\"action\":[\"style\",\"height: 724px !important;\"]}"],["{\"selector\":\".adBillBoardPC\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\"#stage\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"#sub-col-wrap_top280\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\".l-generalContent-secondary[style=\\\"position: unset;\\\"]\",\"action\":[\"style\",\"position: sticky !important;\"]}","{\"selector\":\"main > div.l-generalContent-secondary\",\"action\":[\"style\",\"position: sticky !important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed.is-pc-bottom\",\"action\":[\"style\",\"bottom: 0 !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 641px)\"]]}"],["{\"selector\":\"#breadcrumb\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#hidari\",\"action\":[\"style\",\"top: unset !important;\"]}"],["{\"selector\":\".ads_native\",\"action\":[\"style\",\"visibility: hidden !important;margin: 0 !important;\"]}"],["{\"selector\":\"div[class*=\\\"ad_\\\"]\",\"action\":[\"style\",\"height: 1px !important; width: 1px !important; min-height: 1px !important; padding: 0 !important; margin: 0 !important; overflow: hidden !important;\"]}","{\"selector\":\"div[id^=\\\"sub_ad\\\"]\",\"action\":[\"style\",\"height: 1px !important; width: 1px !important; min-height: 1px !important; padding: 0 !important; margin: 0 !important; overflow: hidden !important;\"]}"],["{\"selector\":\".ly_content_wrapper\",\"action\":[\"style\",\"margin-bottom: 0!important;\"]}"],["{\"selector\":\".ads970\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important;\"]}"],["{\"selector\":\".articleList-attention[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height:60px !important;\"]}"],["{\"selector\":\".adBillboard_pc\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important; margin-bottom: 0 !important;\"]}"],["{\"selector\":\".MuiGrid-container.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}","{\"selector\":\".MuiGrid-item.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}"],["{\"selector\":\".BottomContainer.InView\",\"action\":[\"style\",\"min-height:auto !important;\"]}"],["{\"selector\":\".following_buttons_upper\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\"#asideRight .box.bottom\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#writerprofile + aside.adsense\",\"action\":[\"style\",\"height: 90px !important; width: 0 !important;\"]}"],["{\"selector\":\".side[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#footer\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"#main[style=\\\"padding-bottom:300px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 170px !important;\"]}"],["{\"selector\":\"body.app-scroll-lock\",\"action\":[\"style\",\"position: relative!important;overflow-y: unset !important;\"]}"],["{\"selector\":\"body.tp-modal-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\".ad-section\",\"action\":[\"style\",\"height: 10px !important; position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#signin-with-twitter\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".fortune-submit\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#widget_code_php_in_widget-23\",\"action\":[\"style\",\"height: 24px!important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"width:auto !important; padding-left:15px !important;\"]}","{\"selector\":\".tngMainT\",\"action\":[\"style\",\"width:100% !important;\"]}"],["{\"selector\":\".viewer, .viewer .imgWrap, .viewer .lastPage.slick-slide, .viewer .slick-list, .viewer .slick-track, .viewerBody\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".view_pc .play-Imagemaker\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".blockContainer[style$=\\\"-60px auto;\\\"] > div[style=\\\"min-height: 90px;\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}","{\"selector\":\".sideContents.ie-sticky[style$=\\\"min-height: 1500px;\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".medipartner\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#js-forms\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\".bbsmenu-with-ad\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\"#center-left\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#bottom_area\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".side_box\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#adsidetop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adstop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-10\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-11\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}"],["{\"selector\":\".entry-content\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".ad_unit.ad-unit.text-ad.text_ad.pub_300x250\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#header_rtranking\",\"action\":[\"style\",\"top: 120px !important;\"]}","{\"selector\":\"div[id^=\\\"container_in\\\"]\",\"action\":[\"style\",\"margin-top: 240px !important;\"]}"],["{\"selector\":\".inv_scroll_cancel\",\"action\":[\"style\",\"overflow: auto !important; height: auto !important;\"]}"],["{\"selector\":\"#main_panel\",\"action\":[\"style\",\"height: 300px !important;\"]}"]];

const hostnamesMap = new Map([["pictab.art",0],["b2.sakki2022.com",0],["ero-gazou.jp",0],["my-nikki.net",0],["animenew.be",1],["jumpmatome2ch.biz",2],["380cc.cc",3],["wave.popin.cc",4],["anige-sokuhouvip.com",5],["asahi.com",6],["automaton-media.com",7],["freesoft-100.com",7],["avfuuzoku.com",8],["avgle.com",9],["battlecats-db.com",10],["kledgeb.blogspot.com",11],["ssbsblg.blogspot.com",12],["ekr.chosunonline.com",13],["life.chosunonline.com",13],["www.chosunonline.com",14],["dengekionline.com",15],["digital-thread.com",16],["itaishinja.com",16],["oryouri.2chblog.jp",16],["kyousoku.net",16],["dq-dai.com",17],["dqclear.com",18],["e-nenpi.com",19],["egotter.com",20],["anime.eiga.com",21],["ero-kawa.com",22],["colordic.org",22],["blog.esuteru.com",[23,24]],["otakomu.jp",[23,24]],["blog.fc2.com",25],["kandatasokuho.blog.fc2.com",26],["matometanews.com",26],["vip-front.video.g.fc2.com",[27,28]],["video.fc2.com",[27,28]],["ideo.laxd.com",27],["ff10-hd.com",29],["sheepplus.com",[29,46]],["winningpost8.com",[29,54]],["ff8clear.net",[29,54]],["gigaho.com",30],["hostlove.com",31],["itainews.com",32],["kabegamikan.com",33],["t-mall.kantangame.com",34],["knshow.com",35],["kosoch.com",36],["mapfan.com",37],["medibang.com",38],["mizuhonokuni2ch.com",39],["mozakin.com",40],["bbs4.mozakin.com",41],["news-postseven.com",42],["ovninavi.com",43],["security-next.com",44],["sekai-kabuka.com",45],["shirotomaster.com",47],["supercweather.com",48],["takenokosokuhou.com",49],["togetter.com",50],["uraaka.com",51],["wazap.com",52],["sp.jp.wazap.com",53],["yamareco.com",55],["young-machine.com",56],["applica.info",57],["realtime-chart.info",58],["gahalog.2chblog.jp",59],["news.2chblog.jp",60],["9db.jp",61],["ad-contents.jp",62],["ameblo.jp",63],["animedeck.jp",64],["applion.jp",65],["barks.jp",66],["hiraganakeyaki.blog.jp",67],["h-pon.doorblog.jp",67],["sunri2525.blog.jp",68],["bunshun.jp",69],["daily.co.jp",70],["eguchi-hd.co.jp",71],["lesson.golfdigest.co.jp",72],["score.golfdigest.co.jp",72],["news.jorudan.co.jp",73],["friday.kodansha.co.jp",74],["mapion.co.jp",75],["estate.nikkan.co.jp",76],["nikkei-cnbc.co.jp",77],["teny.co.jp",78],["tv-asahi.co.jp",79],["video.tv-tokyo.co.jp",80],["auctions.yahoo.co.jp",81],["games.yahoo.co.jp",82],["mail.yahoo.co.jp",83],["weather.yahoo.co.jp",84],["cosp.jp",85],["dailynewsonline.jp",86],["duellinks.doorblog.jp",87],["shikaku2ch.doorblog.jp",88],["figgy.jp",89],["firecross.jp",90],["gameranbu.jp",91],["gizmodo.jp",92],["jikayosha.jp",93],["k-knuckles.jp",94],["kakijun.jp",95],["hrs-game.main.jp",96],["main-hrs-game.ssl-lolipop.jp",96],["musmus.main.jp",97],["minkabu.jp",98],["minpo.jp",99],["news.mynavi.jp",100],["weather.biglobe.ne.jp",101],["gamer.ne.jp",102],["onlinegamer.jp",102],["news.so-net.ne.jp",103],["nicovideo.jp",104],["okwave.jp",105],["gdm.or.jp",106],["otajo.jp",107],["otonanswer.jp",108],["piapro.jp",109],["novel.prcm.jp",110],["snrec.jp",111],["tters.jp",112],["twpf.jp",113],["uranaitv.jp",114],["webcartop.jp",115],["uwl.weblio.jp",116],["mangalove.me",117],["picrew.me",118],["gendai.media",119],["4gamer.net",120],["itest.5ch.net",121],["buhidoh.net",122],["roote.ekispert.net",123],["azby.fmworld.net",124],["intaa.net",125],["logworker.net",126],["ouminews.net",127],["pokemon-matome.net",128],["twivideo.net",129],["gigafile.nu",130]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
