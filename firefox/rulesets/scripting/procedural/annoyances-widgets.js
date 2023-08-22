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

// ruleset: annoyances-widgets

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".stk-grid > div[class^=\\\"stk-theme\\\"] > a[href^=\\\"http://paperpaper.site\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#body-in > .menu_title3\",\"tasks\":[[\"has-text\",\"/ヘッドライン|ピックアップ/\"]]}","{\"selector\":\".rss-hd\",\"tasks\":[[\"has-text\",\"/(?:おすすめ|人気)記事$/\"]]}"],["{\"selector\":\"div[style^=\\\"font-weight: bold;text-align: left\\\"]\",\"tasks\":[[\"has-text\",\"/ヘッドライン|おススメ/\"]]}"],["{\"selector\":\".article-footer\",\"tasks\":[[\"has\",{\"selector\":\"> .article-post > li > font > b\",\"tasks\":[[\"has-text\",\"アンテナ新着記事一覧\"]]}]]}"],["{\"selector\":\"aside.section-box\",\"tasks\":[[\"has\",{\"selector\":\"> div.plugin-blogroll\"}]]}"],["{\"selector\":\"span[style=\\\"font-size: 125%;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\"#test224\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".related_post\",\"tasks\":[[\"has\",{\"selector\":\"+ div.rss_aritcle\"}]]}"],["{\"selector\":\".article-title-outer-h\",\"tasks\":[[\"has-text\",\"ヘッドライン\"]]}"],["{\"selector\":\".border-b > div#_popIn_recommend\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".article-body-inner > div[class^=\\\"article-news\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> iframe[src^=\\\"http://digital-thread.com/digital-thread-headline-\\\"]\"}]]}"],["{\"selector\":\"#main-content div.et_pb_module\",\"tasks\":[[\"has\",{\"selector\":\"> div.et_pb_code_inner > center > iframe[src^=\\\"https://donorbox.org/\\\"]\"}]]}"],["{\"selector\":\".l-footerTop > div.boxi800\",\"tasks\":[[\"has\",{\"selector\":\"> iframe[data-src=\\\"https://erodoujinshi-world.com/sp_rss_iframe.html\\\"]\"}]]}"],["{\"selector\":\".l-footerTop > h2.ranking_ttl\",\"tasks\":[[\"has-text\",\"他サイトの最新漫画記事\"]]}"],["{\"selector\":\".l-footerTop > div.boxi800\",\"tasks\":[[\"has\",{\"selector\":\"> iframe[src$=\\\"/sp_rss_iframe.html\\\"]\"}]]}"],["{\"selector\":\".ranking_ttl\",\"tasks\":[[\"has-text\",\"他サイトの最新漫画記事\"]]}"],["{\"selector\":\"div[class$=\\\"_outline\\\"] > div > div.plugin-freearea > link[href^=\\\"https://blogroll.livedoor.net\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".t_h2\",\"tasks\":[[\"has-text\",\"他記事\"]]}"],["{\"selector\":\"div[id^=\\\"more\\\"] > p\",\"tasks\":[[\"has\",{\"selector\":\"> b > a[href^=\\\"http://katuru.com/rss/\\\"]\"}]]}"],["{\"selector\":\".widget-area > section.widget h2.donate-title\",\"tasks\":[[\"upward\",\"section.widget\"]]}"],["{\"selector\":\"#kanren div.singleh4\",\"tasks\":[[\"has-text\",\"お世話になっているＲＳＳ様\"]]}","{\"selector\":\".code-block > div.sponserdrink\",\"tasks\":[[\"has-text\",\"RSS\"]]}","{\"selector\":\"h4.menu_underh2\",\"tasks\":[[\"has-text\",\"画像RSS\"]]}","{\"selector\":\"header > div.smhh4\",\"tasks\":[[\"has-text\",\"ＲＳＳヘッドライン\"]]}"],["{\"selector\":\".plugin-memo > div.side > div > script[src$=\\\"/blogroll.js\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".tm-sexy-sidebar > section.tm-block_spacing-around\",\"tasks\":[[\"has\",{\"selector\":\"> footer > a[href^=\\\"https://career.habr.com\\\"]\"}]]}"],["{\"selector\":\"main > div.card-white__blue\",\"tasks\":[[\"has\",{\"selector\":\"> div.rss-scroll\"}]]}"],["{\"selector\":\".article-body-more > span[style]\",\"tasks\":[[\"has-text\",\"おすすめ記事\"]]}"],["{\"selector\":\".article div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> section.ProductAffilateWrapper\"}]]}"],["{\"selector\":\".box2\",\"tasks\":[[\"has\",{\"selector\":\"img[src$=\\\"/title_new_ichioshi.png\\\"]\"}]]}"],["{\"selector\":\"#lite_link > h2\",\"tasks\":[[\"has-text\",\"/人気記事1|こちらも読まれています/\"],[\"upward\",1]]}"],["{\"selector\":\".article span[style=\\\"font-size: 125%;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> span > span[style^=\\\"font-weight: bold;\\\"]\"}]]}","{\"selector\":\".sub_right > .sidewrapper\",\"tasks\":[[\"has\",{\"selector\":\"> .sidetitlebody > .sidetitle\",\"tasks\":[[\"has-text\",\"人気記事\"]]}]]}"],["{\"selector\":\"#the-content > center > b\",\"tasks\":[[\"has\",{\"selector\":\"> div.inmaincmframe\"}]]}"],["{\"selector\":\"#article-body > h3\",\"tasks\":[[\"has\",{\"selector\":\"+ div[class^=\\\"headline_\\\"]\"}]]}"],["{\"selector\":\"#center > div.plugin3_outline\",\"tasks\":[[\"has\",{\"selector\":\"> div[class$=\\\"_body\\\"] p > a[href^=\\\"http://newmofu.doorblog.jp/\\\"]\"}]]}","{\"selector\":\"#center > div.plugin3_outline\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] script[src=\\\"https://blogroll.livedoor.net/js/blogroll.js\\\"]\"}]]}"],["{\"selector\":\".widget-content-top table.has-fixed-layout td\",\"tasks\":[[\"has\",{\"selector\":\"> div > div#moe_blog_parts_000\"}]]}"],["{\"selector\":\".cactus-sidebar-content > aside.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-inner div#flip\"}]]}"],["{\"selector\":\"#static_cells > div.recommended_cell\",\"tasks\":[[\"has\",{\"selector\":\"> div#forex\"}]]}"],["{\"selector\":\".sidebar-box > div.sidebar-title\",\"tasks\":[[\"has-text\",\"Погода\"]]}"],["{\"selector\":\".frame > script[src$=\\\"/blogroll.js\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".frame\",\"tasks\":[[\"has\",{\"selector\":\"> script[src$=\\\"/blogroll.js\\\"]\"}],[\"spath\",\"+ br\"]]}","{\"selector\":\".page-title\",\"tasks\":[[\"has-text\",\"/話題の|ピックアップ/\"]]}","{\"selector\":\".topWrap1Frame > div.frame > script[src$=\\\"/blogroll.js\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"article > div > .article-sub-category > h3\",\"tasks\":[[\"has-text\",\"Vtuberピックアップ\"]]}"],["{\"selector\":\".plugin-memo > div.side > div.blogroll-saido\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".related-wrapper > div.rss-single\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".plugin-memo > div.side > script[src$=\\\"/blogroll.js\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".entry-body > blockquote\",\"tasks\":[[\"has\",{\"selector\":\"> div[align=\\\"center\\\"] > a[href][target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".article_headline_main\",\"tasks\":[[\"has\",{\"selector\":\"> div.article_Headline > div > iframe[src=\\\"../rss.htm\\\"]\"}]]}","{\"selector\":\".column-inner > div.headline_out\",\"tasks\":[[\"has\",{\"selector\":\"> div.headline_in > iframe[src=\\\"../rss.htm\\\"]\"}]]}","{\"selector\":\".sub_article_Headline\",\"tasks\":[[\"has\",{\"selector\":\"> div > iframe[src=\\\"../rss.htm\\\"]\"}]]}"],["{\"selector\":\".bt-bg-white\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"btcee-opinary\\\"]\"}]]}"],["{\"selector\":\".frontpageOverview > section[data-testid=\\\"popularBlock\\\"] + aside:not([data-testid])\",\"tasks\":[[\"has\",{\"selector\":\"> .pollBlock__wrapper\"}]]}"],["{\"selector\":\".article__richtext .article__infobox\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"infobox\\\"] > .apester-media\"}]]}","{\"selector\":\".article__richtext h2\",\"tasks\":[[\"has-text\",\"Umfrage\"]]}"],["{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> .placeholder + div[class] > .opinary-widget-embed\"}]]}"],["{\"selector\":\".article__widget-element\",\"tasks\":[[\"has\",{\"selector\":\"> script[src*=\\\"widgets.opinary\\\"]\"}]]}"],["{\"selector\":\"#story-elements > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div#opinary-automation-placeholder\"}]]}"],["{\"selector\":\"#materialBlock_0 > div\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"/^Поддержать/\"]]}]]}","{\"selector\":\"main > header ~ div[class]:not([id])\",\"tasks\":[[\"has\",{\"selector\":\"> svg + div[class] a[href^=\\\"/donate?\\\"]\"}]]}"],["{\"selector\":\".contents_main_area > div.innerframe\",\"tasks\":[[\"has\",{\"selector\":\"iframe[id^=\\\"frm_rss_\\\"]\"}]]}","{\"selector\":\".innerframe > div.whiteboard > div > div.indent > center > div[id^=\\\"rss_\\\"]\",\"tasks\":[[\"upward\",5]]}","{\"selector\":\".innerframe > div.whiteboard > div > div.indent > div.gcl[data-gcl-entity=\\\"sougo-rank\\\"]\",\"tasks\":[[\"upward\",4]]}","{\"selector\":\".innerframe > div.whiteboard > div > div.indent > div.gcl[data-gcl-entity=\\\"top-area-ad-bottom\\\"]\",\"tasks\":[[\"upward\",4]]}","{\"selector\":\".innerframe > div.whiteboard > div > div.indent > div[id^=\\\"rss_\\\"]\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"div[class^=\\\"css-\\\"] > div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.cls_frame > div[class^=\\\"css-\\\"] > div.listalicaProizvoda_swiper\"}]]}"],["{\"selector\":\".row-fluid-wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div.row-fluid > div[data-widget-type=\\\"custom_widget\\\"] > div.hs_cos_wrapper h3\",\"tasks\":[[\"has-text\",\"Ask a Question\"]]}]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"おすすめ新着リスト\"]]}"],["{\"selector\":\"#headrank2\",\"tasks\":[[\"has-text\",\"/Pickup|オススメ|注目の記事/\"]]}"],["{\"selector\":\".p-body-sidebar > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block-container > h3.block-minorHeader\",\"tasks\":[[\"has-text\",\"Курсы\"]]}]]}"],["{\"selector\":\".sidebar-content > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > iframe[src^=\\\"https://st.chatango.com/\\\"]\"}]]}"],["{\"selector\":\".ently_text > span\",\"tasks\":[[\"has\",{\"selector\":\"> span > span > b\",\"tasks\":[[\"has-text\",\"☆おすすめ記事☆\"]]}]]}"],["{\"selector\":\".plugin-memo.sidewrapper\",\"tasks\":[[\"has-text\",\"楽天人気ランキング\"]]}"],["{\"selector\":\"body > #second-header\",\"tasks\":[[\"has\",{\"selector\":\"> #header_rss_c\"}]]}"],["{\"selector\":\".plugin-memo > div > div.side > div[id^=\\\"blz_rss_\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".menuLineLightW-3\",\"tasks\":[[\"has-text\",\"人気記事\"]]}"],["{\"selector\":\"article > h1.article-option-title\",\"tasks\":[[\"has-text\",\"/^おススメ記事$/\"]]}"],["{\"selector\":\".a-ws-span8 > div.a-row\",\"tasks\":[[\"has\",{\"selector\":\"> div.a-column > div.a-section > div#ConfirmationPageCenterVOCElement-score-text-row\"}]]}"],["{\"selector\":\".aside_redesign.post > h3.aside_redesign_headline\",\"tasks\":[[\"has-text\",\"こちらもどうぞ\"]]}"],["{\"selector\":\".main-post-list > div.blogrss\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"section > div.c-heading\",\"tasks\":[[\"has\",{\"selector\":\"> p.c-heading__en\",\"tasks\":[[\"has-text\",\"RECOMMEND\"]]}]]}"],["{\"selector\":\".related-wadai\",\"tasks\":[[\"has-text\",\"新着ニュース\"]]}"],["{\"selector\":\".column-inner-2 > .plugin-memo\",\"tasks\":[[\"has\",{\"selector\":\"iframe[src*=\\\"_rss.html\\\"]\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/\\\\/(?:a_load|bookedaura|doujinero|douxnavi|ele01|fightersmatome|geinoujin_dougazou|goodadult|gotisoku|gourmetmatome|hktmatomemon|h_taiken_dan|idol_gravure_sexy|izumich-wjzrnqvn|junglep2|kaigainoomaera|kanribu01|kore_iine|lexus_ls460|nandemojouhou|news4wide123|niji_tan|ninshin_syussann|nityannnerumatome-torendo|nizimoenews|ochinpomilksokuho|seisobitch|sky_wing2010-geinou|soccerrevolution|spec_530|toshi114514|toshiboking|uwasainfo|yakiusoku)/\"],[\"spath\",\".rss-blogroll\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/\\\\/(?:itsoku|news_aru)/\"],[\"spath\",\".headline\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/diet2channel\"],[\"spath\",\".article-footer2\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/sekaiminzoku\"],[\"spath\",\".article-body-more > div[style=\\\"margin:0px;padding:0px;\\\"]\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/sekaiminzoku\"],[\"spath\",\".main-column-inner > div[style^=\\\"width:720px;height:\\\"][style*=\\\"border-bottom-style:groove\\\"]\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/soccerkusoyarou\"],[\"spath\",\".column-inner-2 > .article-body2\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/umadori0726\"],[\"spath\",\"#headline\"]]}","{\"selector\":\".plugin-memo > div.side > div.pickups\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".plugin-memo > div.side > div[id^=\\\"blz_rss_\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".plugin-memo > div.side > div[style=\\\"margin:0px 0;height:2250px;width:300px;\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".swiper-slide[data-history^=\\\"photo_extra\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".wpex-sidebar > div.wpex-widget-area\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget_text > h3\",\"tasks\":[[\"has-text\",\"Live Chat\"]]}]]}"],["{\"selector\":\"#trigger_donate\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sectiontwone__cta\",\"tasks\":[[\"has\",{\"selector\":\".donate-inline\"}]]}"],["{\"selector\":\"body[marginwidth=\\\"0\\\"][marginheight=\\\"0\\\"] > div:first-child:only-of-type:not([class]):not([id])\",\"tasks\":[[\"has\",{\"selector\":\"> font[color=\\\"green\\\"] > span\",\"tasks\":[[\"has-text\",\"| Chat Rules |\"]]}]]}"],["{\"selector\":\".mb-0\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"_popIn_\\\"]\"}]]}"],["{\"selector\":\"aside > h4.card-panel\",\"tasks\":[[\"has-text\",\"色々な同人誌\"]]}"],["{\"selector\":\".ctn-PlaceholderContent\",\"tasks\":[[\"has\",{\"selector\":\"> .ctn-GDPR\"}]]}"],["{\"selector\":\".kotei-headline\",\"tasks\":[[\"has-text\",\"新着おすすめ記事\"]]}"],["{\"selector\":\"#sidebar-widget > .widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> div > script[src^=\\\"//\\\"]\"}]]}"],["{\"selector\":\".t_h[style=\\\"border-bottom: solid 5px #68aa66;\\\"] > div[style=\\\"margin: 0px; padding: 0px; font-size: 14px;\\\"] > span[style=\\\"color: #006800;\\\"]\",\"tasks\":[[\"has-text\",\"/^名無しさんのおすすめ$/\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"rss-box\\\"]\"}]]}"],["{\"selector\":\".wp-block-image\",\"tasks\":[[\"has\",{\"selector\":\"> a[href$=\\\"/donate\\\"]\"}]]}"],["{\"selector\":\"#sidebar1 > h4.widgettitle > span\",\"tasks\":[[\"has-text\",\"RSS\"]]}"],["{\"selector\":\"aside > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div.gsInformer\"}]]}"],["{\"selector\":\"#sidebar > li\",\"tasks\":[[\"has\",{\"selector\":\"> div.block > div.blocksubhead > span.blocktitle\",\"tasks\":[[\"has-text\",\"DONATE\"]]}]]}"],["{\"selector\":\"div > div#medonet__healthcare__window\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".wrapper > div.col-md-3 > div.nav-side-menu > h2\",\"tasks\":[[\"has-text\",\"Мини чат\"]]}"],["{\"selector\":\"#mainNode > div[class^=\\\"_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[href^=\\\"/donate?utm_source=\\\"]\"}]]}"],["{\"selector\":\"#gkContent div.box div[id=\\\"marketWidget\\\"]\",\"tasks\":[[\"upward\",\"div.box\"]]}"],["{\"selector\":\"#articleContainer > div:not([class])\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > a[href=\\\"http://donate.theins.ru/\\\"]\"}]]}"],["{\"selector\":\"#app > div > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > span[data-test-component=\\\"OnboardingTooltip\\\"]\"}]]}"],["{\"selector\":\".main > .container > .col-md-3 > .title-seaducal-section > h2\",\"tasks\":[[\"has-text\",\"CHAT ROOM\"]]}"],["{\"selector\":\"div[class=\\\"div\\\"] > div[class=\\\"div\\\"][style]\",\"tasks\":[[\"has\",{\"selector\":\"> div.tradingview-widget-container\"}]]}"],["{\"selector\":\"#fbVideo\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".module-style\",\"tasks\":[[\"has\",{\"selector\":\"#SinoptikInformer\"}]]}"],["{\"selector\":\"#secondary > aside.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > center > div#SinoptikInformer\"}]]}"],["{\"selector\":\".content > div\",\"tasks\":[[\"has\",{\"selector\":\"> div#SinoptikInformer\"}]]}"],["{\"selector\":\"#sidebar > div.sidebox\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidetitle > span\",\"tasks\":[[\"has-text\",\"Погода\"]]}]]}"],["{\"selector\":\"#sidebar div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > div#SinoptikInformer\"}]]}","{\"selector\":\"#sidebar div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > div[id^=\\\"kurs-com-ua-\\\"]\"}]]}"],["{\"selector\":\".container div.w\",\"tasks\":[[\"has\",{\"selector\":\"> div#SinoptikInformer\"}]]}"]];

const hostnamesMap = new Map([["jumpmatome2ch.biz",1],["honwaka2ch.livedoor.biz",2],["otasoku.livedoor.biz",3],["seiyufan.livedoor.biz",4],["akb48matomemory.com",5],["bakuwaro.com",6],["blue-protocol-ch.com",7],["chaos2ch.com",8],["ctinews.com",9],["digital-thread.com",10],["disntr.com",11],["erodoujinshi-world.com",[12,13]],["eromanga-fantasy.com",[13,14]],["eromanga-life.com",15],["blog.fc2.com",16],["joker004.blog.fc2.com",17],["katuru2ch.blog12.fc2.com",18],["gellerreport.com",19],["gfoodd.com",20],["gundamlog.com",21],["blog.livedoor.jp",[21,39,68]],["habr.com",22],["hentai-tanker.com",23],["himasoku.com",24],["tech.hindustantimes.com",25],["idol-blog.com",26],["inazumanews2.com",27],["kijomatomelog.com",28],["m4ex.com",29],["majikichi.com",30],["matomecup.com",31],["moez-m.com",32],["mysocceraustralia.com",33],["philstar.com",34],["podillyanews.com",35],["re-file.com",36],["revuestarlightre.com",37],["sukattojapan.com",38],["sutekinakijo.com",39],["vipsister23.com",40],["zch-vip.com",41],["btc-echo.de",42],["echo-online.de",43],["nordbayern.de",44],["rtl.de",45],["stern.de",46],["tagesspiegel.de",47],["novayagazeta.eu",48],["eegg.fun",49],["danas.hr",50],["kansaz.in",51],["daretoku-eromanga.info",52],["kanasoku.info",53],["miningclub.info",54],["snahp.it",55],["asianoneta.blog.jp",56],["gensin.blog.jp",57],["nanj-world.blog.jp",58],["pazdra2ch.blog.jp",59],["tozanchannel.blog.jp",60],["tsubamesoku.blog.jp",61],["amazon.co.jp",62],["live.kufu.co.jp",63],["blog.domesoccer.jp",64],["full-count.jp",65],["anicobin.ldblog.jp",66],["matome-tarou.ldblog.jp",67],["otonanswer.jp",69],["goanimelist.me",70],["agents.media",71],["holod.media",72],["bosscast.net",73],["crank-in.net",74],["ddd-smart.net",75],["faz.net",76],["nyaasokuvip.net",77],["pioncoo.net",78],["warotanien.net",79],["chomanga.org",80],["currentaffairs.org",81],["episodesex.org",82],["nikcenter.org",83],["torrentinvites.org",84],["medonet.pl",85],["lenov.ru",86],["novayagazeta.ru",87],["superplanshet.ru",88],["theins.ru",89],["youla.ru",90],["cricfree.sc",91],["yenimesaj.com.tr",92],["healthylives.tw",93],["dks.com.ua",94],["expert.com.ua",95],["harpersbazaar.com.ua",96],["siver.com.ua",97],["volyninfa.com.ua",98],["gazeta.ua",99]]);

const entitiesMap = new Map([["paperpaper",0]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
