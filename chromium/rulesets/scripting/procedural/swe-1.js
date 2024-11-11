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

// ruleset: swe-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\":is(.sjofa-top-takeover, .sjofa-artikel-pano)\",\"tasks\":[[\"upward\",\"section\"]]}"],["{\"selector\":\".slide-entry-excerpt\",\"tasks\":[[\"has-text\",\"/annons:/i\"],[\"upward\",\".avia-content-slider\"]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".highlighted-article-block\"]]}"],["{\"selector\":\".slick-slide\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"spath\",\" + .textwidget\"]]}","{\"selector\":\"body.unselectable\",\"action\":[\"remove-class\",\"unselectable\"]}"],["{\"selector\":\":is(div[id^=\\\"everysport_pano\\\"], div[id^=\\\"everysport_mobil\\\"], div[id^=\\\"everysport_rektangel\\\"])\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"h2.fusion-responsive-typography-calculated\",\"tasks\":[[\"has-text\",\"Spel och dobbel\"],[\"spath\",\" ~ p\"]]}"],["{\"selector\":\".smallNewsCategory\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",\".smallNewsLink\"]]}","{\"selector\":\"img[src*=\\\"/images/annonser/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\":is(div[class^=\\\"u-text\\\"], h2)\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",\"section\"]]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"remove-class\",\"modal-open\"]}"],["{\"selector\":\"a.js_commercial-text--link-text\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\".jwplayer_video-videoArea\"]]}","{\"selector\":\"article.grid\",\"tasks\":[[\"has-text\",\"/annonssamarbete/i\"]]}","{\"selector\":\"div.wings-gray-200\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"Senaste nyheterna om spelbolag:\"]]}","{\"selector\":\"div.section-body-plus\",\"tasks\":[[\"has-text\",\"/bonus|casino/i\"]]}"],["{\"selector\":\".label-sponsor\",\"tasks\":[[\"upward\",\".panel\"]]}"],["{\"selector\":\".bbSize\",\"tasks\":[[\"has-text\",\"Sponsormeddelande\"],[\"upward\",\".bbRelatedBox\"]]}","{\"selector\":\"div[class^=\\\"card-info\\\"]\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".card\"]]}"],["{\"selector\":\"a[target]\",\"tasks\":[[\"upward\",\".frontlinks tr\"]]}"],["{\"selector\":\".sponsored-notification\",\"tasks\":[[\"upward\",\"[id^=\\\"post-\\\"]\"]]}"],["{\"selector\":\"span.arialtext11[style^=\\\"float:left\\\"]\",\"tasks\":[[\"has-text\",\"/^i samarbete med/i\"],[\"upward\",2]]}"],["{\"selector\":\"div[class*=\\\"section-preview\\\"]\",\"tasks\":[[\"has-text\",\"/betalt samarbete/i\"],[\"upward\",4]]}"],["{\"selector\":\".vc_row_inner\",\"tasks\":[[\"has-text\",\"casino\"]]}"],["{\"selector\":\".nyhetsochreseartiklar .views-row\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".et_pb_module\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Annons:\\\"$\"}]]}"],["{\"selector\":\"legend\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\".holidAds\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#tv-schedule section\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}","{\"selector\":\"body.takeover-loading\",\"action\":[\"remove-class\",\"takeover-loading\"]}"],["{\"selector\":\".card-header\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",\".card\"]]}"],["{\"selector\":\":is(main > section a[data-test-tag=\\\"internal-link\\\"], main > aside a[data-test-tag=\\\"internal-link\\\"])\",\"tasks\":[[\"has-text\",\"innehåller annonslänkar\"]]}","{\"selector\":\"[data-ad-subtype]\",\"tasks\":[[\"upward\",1],[\"matches-css\",{\"name\":\"min-height\",\"value\":\"[0-9]+\"}]]}","{\"selector\":\"div[class^=\\\"hyperion-css\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"margin\",\"value\":\"32px\"}],[\"spath\",\":has(iframe[src*=\\\"tize.no\\\"])\"]]}","{\"selector\":\"main > section > div:first-child\",\"tasks\":[[\"matches-css\",{\"name\":\"box-shadow\",\"value\":\"^rgba\\\\(0, 0, 0, 0\\\\.2\\\\) 0px 0px 24px 0px$\"}]]}"],["{\"selector\":\"section.elementor-section\",\"tasks\":[[\"has-text\",\"Huvudsponsorer & partners\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":[\"Annonssamarbete\",\"i\"]}]]}","{\"selector\":\"div[class^=\\\"css-\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"value\":[\"Annons\",\"i\"]}],[\"upward\",\"article\"]]}"],["{\"selector\":\".block-title\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"Reklamsamarbete\"],[\"upward\",\".td_block_wrap\"],[\"spath\",\" + rs-module-wrap\"]]}","{\"selector\":\".block-title\",\"tasks\":[[\"has-text\",\"Reklamsamarbete\"],[\"upward\",\".td_block_wrap\"]]}","{\"selector\":\".td-adspot-title-span\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"a[href*=\\\"reklamsamarbete\\\"]\",\"tasks\":[[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\".text-sm\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".border-b, a[target]\"]]}"],["{\"selector\":\".bottom-liner span\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",2]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\".post-item__tag\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"li.post-item\"]]}"],["{\"selector\":\"#root > div:first-child\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}]]}","{\"selector\":\"div[id*=\\\"_mobil\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".widget_text\"]]}"],["{\"selector\":\"article.closed\",\"action\":[\"remove-class\",\"closed\"]}"],["{\"selector\":\".slick-slide\",\"tasks\":[[\"has-text\",\"/sponsra/i\"]]}"],["{\"selector\":\".adlabel\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".colorized\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"a\"]]}","{\"selector\":\".elevated-button\",\"tasks\":[[\"has-text\",\"/^Cookie/\"],[\"upward\",\".container\"]]}","{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",1]]}","{\"selector\":\".sponsored-chip\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^block$\"}],[\"upward\",\"a\"]]}","{\"selector\":\"img[src*=\\\"/borskollen_newsletter\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".article__properties-breadcrumbs span\",\"tasks\":[[\"has-text\",\"/Sponsrad|annons/i\"],[\"upward\",\".article\"]]}"],["{\"selector\":\"body > .elementor > .elementor-section:first-child\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\"a.click-track, img.click-track\",\"action\":[\"remove-class\",\"click-track\"]}","{\"selector\":\"a.click-track-attachment-preview, img.click-track-attachment-preview\",\"action\":[\"remove-class\",\"click-track-attachment-preview\"]}","{\"selector\":\"img[data-click-track]\",\"action\":[\"remove-attr\",\"data-click-track\"]}"],["{\"selector\":\"aside .textwidget\",\"tasks\":[[\"has-text\",\"/sponsr|samarbetspartners/i\"]]}"],["{\"selector\":\".post_sponsrad_label\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".post > div[style]\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",\"article:not([id])\"]]}"],["{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".elementor-column\"]]}"],["{\"selector\":\".text-xs\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",1]]}"],["{\"selector\":\".label\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"SPONSRAT\"],[\"upward\",\".swiper-slide\"]]}","{\"selector\":\".text-right\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}","{\"selector\":\"a[href^=\\\"https://dagenstech.se/articles/\\\"]\",\"tasks\":[[\"upward\",1],[\"has-text\",\"SPONSRAT\"]]}"],["{\"selector\":\".list-article__item-inscription\",\"tasks\":[[\"has-text\",\"/sponsrat innehåll/i\"],[\"upward\",\".list-article__item\"]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has-text\",\"/samarbete/i\"],[\"upward\",\".elementor-widget-smartmag-featgrid\"]]}"],["{\"selector\":\"h3.h-custom-headline\",\"tasks\":[[\"has-text\",\"Advertorial\"],[\"upward\",1]]}"],["{\"selector\":\"div[data-losjs^=\\\"borka\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"video[data-auto-play]\",\"action\":[\"remove-attr\",\"data-auto-play\"]}"],["{\"selector\":\".rightdiv p\",\"tasks\":[[\"has-text\",\"/casino|kasino|lån|betting|odds|lotto/i\"]]}"],["{\"selector\":\".label-sponsored\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\"#latest-slider a\"]]}"],["{\"selector\":\"html[data-impression-tracking-endpoint]\",\"action\":[\"remove-attr\",\"data-impression-tracking-endpoint\"]}"],["{\"selector\":\".aside-list--heading\",\"tasks\":[[\"has-text\",\"/^sponsra/i\"],[\"upward\",\".aside-list\"]]}","{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\"section.c-native_banner\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"p[style^=\\\"text-align: center;\\\"] em\",\"tasks\":[[\"has-text\",\"Annonser\"],[\"upward\",2]]}"],["{\"selector\":\".adaptive\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"article.elementor-grid-item\",\"tasks\":[[\"has-text\",\"reklamsamarbete\"]]}"],["{\"selector\":\"div.flowy-wp-protected-content\",\"action\":[\"remove-class\",\"flowy-wp-protected-content\"]}","{\"selector\":\"p.has-text-align-center\",\"tasks\":[[\"has-text\",\"Annons:\"]]}"],["{\"selector\":\".video-player[data-ad-config]\",\"action\":[\"remove-attr\",\"data-ad-config\"]}","{\"selector\":\"a[data-t-category]\",\"action\":[\"remove-attr\",\"data-t-category\"]}","{\"selector\":\"a[data-t-label]\",\"action\":[\"remove-attr\",\"data-t-label\"]}","{\"selector\":\"a[data-t-type]\",\"action\":[\"remove-attr\",\"data-t-type\"]}","{\"selector\":\"video[autoplay]\",\"action\":[\"remove-attr\",\"autoplay\"]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"/annons:/i\"]]}"],["{\"selector\":\"a[onclick^=\\\"plausible\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\":is(a[target=\\\"_blank\\\"]:not([href^=\\\"/\\\"], [href*=\\\"filatelisten.se\\\"]))\",\"tasks\":[[\"upward\",\"section\"]]}"],["{\"selector\":\".news\",\"tasks\":[[\"has-text\",\"casino\"]]}","{\"selector\":\".postmeta em\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\".row.news\"]]}"],["{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".feat-cat\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\"article.status-publish\",\"tasks\":[[\"has-text\",\"/annonssamarbete/i\"]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",\"p\"]]}"],["{\"selector\":\".whitebox-container\",\"tasks\":[[\"has-text\",\"/sponsra/i\"]]}","{\"selector\":\":is(div[class*=\\\"vicky-whitebox\\\"], .vicky-category-label, .vicky-video-infobox-label, .vicky-post-headline-container__category__inner)\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"a, .carousel-caption, .featurette, article\"]]}"],["{\"selector\":\"body.tingle-enabled\",\"action\":[\"remove-class\",\"tingle-enabled\"]}"],["{\"selector\":\".ticker-title\",\"tasks\":[[\"has-text\",\"/partner/i\"],[\"spath\",\" + .mh-section\"]]}","{\"selector\":\".ticker-title\",\"tasks\":[[\"has-text\",\"/partner/i\"]]}","{\"selector\":\".video-banner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\":is(.notice__tag_sponsored, .notice__tag)\",\"tasks\":[[\"has-text\",\"/sponsrat/i\"],[\"upward\",1]]}"],["{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Besök annonsör\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"/är en annons/i\"]]}"],["{\"selector\":\".category\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".mark\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".td-block-title-wrap\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",1]]}"],["{\"selector\":\".td-block-title > span\",\"tasks\":[[\"has-text\",\"/annonserat innehåll/i\"],[\"upward\",\".td_block_wrap\"]]}","{\"selector\":\".wp-block-column > h2\",\"tasks\":[[\"has-text\",\"/annonser/i\"],[\"spath\",\" ~ p\"]]}"],["{\"selector\":\".fp-carousel .fpci-kicker\",\"tasks\":[[\"has-text\",\"/^sponsr/i\"],[\"upward\",\".fpc-item\"]]}"],["{\"selector\":\".ad_interscroller\",\"tasks\":[[\"upward\",\".wrapper\"]]}","{\"selector\":\".colHomePlayer:has([data-slotads=\\\"videoad\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"video[data-autoplay]\",\"action\":[\"remove-attr\",\"data-autoplay\"]}"],["{\"selector\":\":is(p[class^=\\\"teasersmall-sectionLabel\\\"], p[class^=\\\"teasermedium-sectionLabel\\\"])\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"a.internal-link, li\"]]}"],["{\"selector\":\"[id^=\\\"adPlacement\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.g:has(a[href*=\\\".com.se/\\\"])\",\"tasks\":[[\"has-text\",\"/återförsäljare|rea|garanti|lågt pris|nöjd|priser|shop|bra pris|kläder|skor|outlet|frakt|butik|betala|kundkorg|varukorg/i\"]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"a[href*=\\\"/category/sponsrat/\\\"]\",\"tasks\":[[\"upward\",\"li[class=\\\"\\\"]\"]]}"],["{\"selector\":\"p[style^=\\\"text-transform\\\"]\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"spath\",\" + .wp-block-kadence-posts\"]]}","{\"selector\":\"p[style^=\\\"text-transform\\\"]\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\":is(small, span)\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\"article, li, a\"]]}","{\"selector\":\"article[class^=\\\"ArticleCard\\\"]\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"]]}","{\"selector\":\"span[class^=\\\"ArticleContent_articleDateBox\\\"]\",\"tasks\":[[\"has-text\",\"/annons från/i\"],[\"upward\",\"div[class^=\\\"ArticleContent_articlePage\\\"]\"]]}"],["{\"selector\":\":is(.main-article-container, section > div.flex.items-center.gap-4)\",\"tasks\":[[\"has-text\",\"/Sponsrad Artikel/i\"]]}"],["{\"selector\":\"div[id^=\\\"hitta_mobile_\\\"].placeholder\",\"tasks\":[[\"upward\",\"div[class^=\\\"height\\\"], div[class^=\\\"style_breakout\\\"]\"]]}"],["{\"selector\":\".bg-white:has(iframe[allow*=\\\"autoplay\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\".articleintroduction strong\",\"tasks\":[[\"has-text\",\"/samarbete/i\"],[\"upward\",\"li.item\"]]}"],["{\"selector\":\":is(a[href*=\\\"casino\\\"], a[href*=\\\"speltips\\\"])\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"body.advert-take-over-active\",\"action\":[\"remove-class\",\"advert-take-over-active\"]}"],["{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"/sponsrad artikel/i\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\"div[id^=\\\"ad-panorama\\\"]\",\"tasks\":[[\"upward\",\".elementor-section\"]]}"],["{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".elementor-column\"]]}"],["{\"selector\":\".sidebar-block\",\"tasks\":[[\"has-text\",\"/annons|sponsor/i\"]]}"],["{\"selector\":\":is(a[href*=\\\"casino\\\"], a[href*=\\\"kasino\\\"], a[href*=\\\"passagen.se\\\"])\",\"tasks\":[[\"upward\",\"p\"]]}"],["{\"selector\":\".card-partner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body.mega-loading\",\"action\":[\"remove-class\",\"mega-loading\"]}"],["{\"selector\":\".cookieBarWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"[class*=\\\"carousel_sponsored\\\"]\",\"tasks\":[[\"upward\",\"[class*=\\\"carousel_item\\\"]\"]]}","{\"selector\":\"[class*=\\\"sponsorLabel\\\"]\",\"tasks\":[[\"upward\",\"[class*=\\\"mosaic_item_wrapper\\\"]\"]]}"],["{\"selector\":\"iframe[allow]\",\"action\":[\"remove-attr\",\"allow\"]}"],["{\"selector\":\".postCard\",\"tasks\":[[\"has-text\",\"/bonusar|casino|betting|spelbranschen|spelupplevelse/i\"]]}"],["{\"selector\":\":is(a[href*=\\\"casino\\\"], a[href*=\\\"betting\\\"], a[href*=\\\"poker\\\"])\",\"tasks\":[[\"upward\",\".elementor-widget\"]]}","{\"selector\":\"article.feed-item\",\"tasks\":[[\"has-text\",\"/låna pengar|casino|betting/i\"]]}"],["{\"selector\":\".fusion-post-content-container\",\"tasks\":[[\"has-text\",\"/^annons/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\"body.private\",\"action\":[\"remove-class\",\"private\"]}"],["{\"selector\":\":is(img[src$=\\\"a_top.png.webp\\\"], a[href*=\\\"casino\\\"])\",\"tasks\":[[\"upward\",\"section.elementor-section\"]]}"],["{\"selector\":\"a[href=\\\"https://loppi.se/promotion\\\"]\",\"tasks\":[[\"upward\",\".page__section\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has-text\",\"/Sponsra|annons/i\"],[\"spath\",\" + .elementor-widget-post-block\"]]}","{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has-text\",\"/Sponsra|annons/i\"]]}"],["{\"selector\":\"div.with-ads\",\"action\":[\"remove-class\",\"with-ads\"]}"],["{\"selector\":\"#ad-panorama-category\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"noscript\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"mdp-deblocker-js-disabled\"]]}","{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"body * :not\"]]}"],["{\"selector\":\".advert\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\".slick-item\"]]}"],["{\"selector\":\"p.has-text-align-center\",\"tasks\":[[\"has-text\",\"/i samarbete med/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".excerpt\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"article\"]]}","{\"selector\":\".sidebar-widget h3\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".sidebar-widget\"]]}"],["{\"selector\":\".inner_article\",\"tasks\":[[\"has-text\",\"/sponsrat|annons/i\"]]}","{\"selector\":\"div[itemprop=\\\"articleBody\\\"] div\",\"tasks\":[[\"has-text\",\"ANNONS:\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\"#nativendo-mainfeed\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"span:not(.post-content)\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".site-main > div.widget_custom_html p[style^=\\\"text-align: center;\\\"]\",\"tasks\":[[\"has-text\",\"/annonssamarbete/i\"],[\"upward\",\"div.widget_custom_html\"]]}"],["{\"selector\":\".jet-listing-grid__item[data-post-id]\",\"tasks\":[[\"has-text\",\"/sponsrad artikel/i\"]]}"],["{\"selector\":\"article.post\",\"tasks\":[[\"has-text\",\"/annons från/i\"]]}"],["{\"selector\":\"article.teaser h2.fsize-24\",\"tasks\":[[\"has-text\",\"/casino/i\"],[\"upward\",\".teaser\"]]}"],["{\"selector\":\":is(.adsbygoogle, a[href*=\\\"casino\\\"])\",\"tasks\":[[\"upward\",\".elementor-section\"]]}"],["{\"selector\":\".vignette.XLText a\",\"tasks\":[[\"has-text\",\"/^annons/i\"],[\"upward\",\".section\"]]}"],["{\"selector\":\".item-list__item\",\"tasks\":[[\"has-text\",\"/annons från/i\"]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has-text\",\"Annons\"]]}","{\"selector\":\".tds-locked-content[hidden]\",\"action\":[\"remove-attr\",\"hidden\"]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has-text\",\"Annonser:\"]]}"],["{\"selector\":\".category-tag\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".ArticleListItem\"]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"][rel=\\\"nofollow\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar-widget > .textwidget strong\",\"tasks\":[[\"has-text\",\"casino\"],[\"upward\",\"li.sidebar-widget\"]]}"],["{\"selector\":\".view-header > h3\",\"tasks\":[[\"has-text\",\"/annonser/i\"],[\"upward\",\".view-nya-lankar-front\"]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",\".mh-posts-stacked-wrap\"]]}","{\"selector\":\"li.mh-slider-item:has(a[href*=\\\"casino\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body.freeze-scroll\",\"action\":[\"remove-class\",\"freeze-scroll\"]}"],["{\"selector\":\"div[consent-skip-blocker]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".cd-card-bar\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".cd-sidebar-item, .cd-news-card\"]]}"],["{\"selector\":\".mostReadMobile\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}","{\"selector\":\"a[target=\\\"_blank\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\"li.Notice\"]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/samarbete|annons|reklam|presenteras av/i\"],[\"upward\",\"a\"]]}","{\"selector\":\"[onclick^=\\\"ga(\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\".pill\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".grid-item, .pinned, .articleFlow-item\"]]}"],["{\"selector\":\".carousel-item-link\",\"tasks\":[[\"has-text\",\"Annons:\"]]}"],["{\"selector\":\".ra-widget-article-tag\",\"tasks\":[[\"has-text\",\"/partner/i\"],[\"upward\",\".ra-widget-panel\"]]}"],["{\"selector\":\"p.uppercase\",\"tasks\":[[\"has-text\",\"/i annonssamarbete med/i\"],[\"upward\",\".flex.overflow-hidden\"]]}"],["{\"selector\":\"html.sv-no-touch\",\"action\":[\"remove-class\",\"sv-no-touch\"]}"],["{\"selector\":\"body.cli-barmodal-open\",\"action\":[\"remove-class\",\"cli-barmodal-open\"]}"],["{\"selector\":\".fakta-list\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\"[class*=\\\"tot-content-preview-container\\\"]:has(a[href*=\\\"casino\\\"], a[href*=\\\"kasino\\\"], a[href*=\\\"betting\\\"], a[href*=\\\"spel\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div.text-\\\\[8px\\\\].text-center\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",1]]}"],["{\"selector\":\"div\",\"tasks\":[[\"matches-css\",{\"name\":\"visibility\",\"value\":\"^hidden$\"}],[\"has-text\",\"ANNONS\"]]}"],["{\"selector\":\"a[href=\\\"\\\"].uppercase\",\"tasks\":[[\"has-text\",\"REKLAM\"],[\"upward\",\".popular-post\"]]}"],["{\"selector\":\"a[target]\",\"tasks\":[[\"has-text\",\"/Sponsrat av|i samarbete med/i\"]]}"],["{\"selector\":\".jet-listing-dynamic-field__content\",\"tasks\":[[\"has-text\",\"/annonssamarbete|reklamsamarbete/i\"],[\"upward\",\".jet-listing-grid__item\"]]}"],["{\"selector\":\"aside .textwidget\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}"],["{\"selector\":\".betart-marker\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":[\"Annons\",\"i\"]}],[\"upward\",\".documentpush-group\"]]}"],["{\"selector\":\"html.has-intro-popup\",\"action\":[\"remove-class\",\"has-intro-popup\"]}","{\"selector\":\"html.show-intro-popup\",\"action\":[\"remove-class\",\"show-intro-popup\"]}"],["{\"selector\":\".g-single\",\"tasks\":[[\"upward\",\"section[data-settings*=\\\"background_background\\\"]\"]]}"],["{\"selector\":\":is(a, span)\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",3]]}"],["{\"selector\":\"button\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".owl-item\"]]}"],["{\"selector\":\".leftinfo\",\"tasks\":[[\"has-text\",\"/Externa artiklar:|Länktips:/\"]]}"],["{\"selector\":\".fusion-text\",\"tasks\":[[\"has-text\",\"Online casino\"]]}"],["{\"selector\":\".sidebox\",\"tasks\":[[\"has-text\",\"/Externa länkar|Artiklar/\"]]}"]];

const hostnamesMap = new Map([["sjofart.ax",0],["bandyfeber.com",1],["borsvarlden.com",2],["dagenstv.com",3],["discoveringtheplanet.com",4],["everysport.com",5],["fotbollsresultat.com",6],["fotbolltransfers.com",7],["hejauppsala.com",8],["hockeymagasinet.com",9],["mabra.com",10],["allas.se",10],["elle.se",[10,56]],["femina.se",10],["hant.se",10],["motherhood.se",10],["residencemagazine.se",10],["svenskdam.se",10],["sportbloggare.com",11],["svampguiden.com",12],["sweclockers.com",13],["varmepumpsforum.com",14],["gynning.net",15],["vovve.net",16],["bulletin.nu",17],["hockeybladet.nu",18],["indien.nu",19],["jarnvagar.nu",20],["svenskamagasinet.nu",21],["temperatur.nu",22],["tv.nu",23],["voodoofilm.org",24],["aftonbladet.se",25],["aktieskolan.se",26],["aktuellhallbarhet.se",27],["byggindustrin.se",27],["dagensmedia.se",27],["dagensmedicin.se",27],["dagenssamhalle.se",27],["dagligvarunytt.se",27],["fastighetsnytt.se",27],["market.se",27],["privataaffarer.se",27],["resume.se",27],["aktuellsakerhet.se",28],["arbetaren.se",29],["aurumforum.se",30],["autonytt.se",31],["baraenkakatill.se",32],["barometern.se",33],["blt.se",33],["bt.se",33],["olandsbladet.se",33],["smp.se",33],["sydostran.se",33],["ut.se",33],["vxonews.se",33],["bilresaieuropa.se",34],["bioenergitidningen.se",35],["kvalitetsmagasinet.se",35],["miljo-utveckling.se",35],["telekomidag.se",35],["vdtidningen.se",35],["boneo.se",36],["borskollen.se",37],["branschaktuellt.se",38],["butikstrender.se",39],["byggahus.se",40],["byggipedia.se",41],["campingsverige.se",42],["conpot.se",43],["dagenslogistik.se",44],["dagensps.se",45],["news55.se",45],["dagenstech.se",46],["dalarnasaffarer.se",47],["hallandsnaringsliv.se",47],["jamtlandsaffarer.se",47],["naringslivetvgl.se",47],["sjuharadsnaringsliv.se",47],["stockholmsaffarer.se",47],["datormagazin.se",48],["densistavilan.se",49],["devote.se",50],["di.se",51],["dn.se",51],["digitalavykort.se",52],["djungeltrumman.se",53],["dust2.se",54],["ehandel.se",55],["esportare.se",57],["etc.se",58],["evergreengarden.se",59],["expo.se",60],["expressen.se",61],["familjeliv.se",62],["feber.se",63],["tjock.se",63],["filatelisten.se",64],["filmtipset.se",65],["finanstid.se",66],["firstclassmagazine.se",67],["firstfoto.se",68],["fl-net.se",69],["folkhalsasverige.se",70],["foretagsverige.se",70],["forskningsverige.se",70],["grillbibeln.se",70],["hallbarhetsverige.se",70],["kampenmotcancer.se",70],["motorbibeln.se",70],["tillvaxtsverige.se",70],["forstasidorna.se",71],["forvaltarforum.se",72],["fotbollskanalen.se",[73,74]],["koket.se",[74,105]],["tv4.se",74],["tv4play.se",74],["fotbollsthlm.se",75],["gasetten.se",75],["fragbite.se",76],["freeride.se",77],["frihetsnytt.se",78],["futsalmagasinet.se",79],["fz.se",80],["gamereactor.se",81],["godare.se",[82,83]],["livsstil.se",83],["google.se",84],["happypancake.se",85],["happyride.se",86],["hejaolika.se",87],["hemnet.se",88],["hippson.se",89],["hitta.se",90],["hockeynews.se",91],["horisontmagasin.se",92],["husbil.se",93],["husvagn.se",93],["ibnytt.se",94],["ingenjorsjobb.se",95],["inredningsarkitektur.se",96],["it-finans.se",97],["it-hallbarhet.se",97],["it-halsa.se",97],["it-kanalen.se",97],["it-pedagogen.se",97],["it-retail.se",97],["javligtgott.se",98],["karlskogavaxer.se",99],["kiacarclub.se",100],["killsteal.se",101],["kingmagazine.se",102],["klart.se",103],["kokaihop.se",104],["kritiker.se",106],["lajvo.se",107],["listor.se",108],["livinguppsala.se",109],["ljuskultur.se",110],["lokalti.se",111],["loppi.se",112],["maltermagasin.se",113],["nyadagbladet.se",[113,125]],["marknadschefer.se",114],["matinspo.se",115],["matspar.se",116],["medibok.se",117],["metromode.se",118],["minimalisterna.se",119],["modernalivet.se",120],["moviezine.se",121],["mygatemagazine.se",122],["ng.se",123],["nordfront.se",124],["nyemissioner.se",126],["nyfiknainvesterare.se",127],["nyheteridag.se",128],["oskarshamns-nytt.se",129],["placera.se",130],["podtail.se",131],["samfalligheterna.se",132],["senses.se",133],["shortcut.se",134],["siljannews.se",135],["siljanskok.se",136],["sillyseason.se",137],["so-rummet.se",138],["spelochfilm.se",139],["storyhouseegmont.se",140],["svenskbyggmarknad.se",141],["sverigespringer.se",142],["swedroid.se",143],["tekniknytt.se",144],["teknikveckan.se",145],["99.teknikveckan.se",146],["thelocal.se",147],["tidningenbalans.se",148],["tidningencurie.se",149],["tidningenridsport.se",150],["tlnt.se",151],["totallyorebro.se",152],["totallystockholm.se",152],["travnet.se",153],["travronden.se",154],["trendenser.se",155],["tripadvisor.se",156],["underbaraclaras.se",157],["upphandling24.se",158],["utsidan.se",159],["vadvivet.se",160],["vildmarken.se",161],["villalivet.se",162],["vimedbarn.se",163],["viseniorer.se",164],["vm-fotboll.se",165],["vmj.se",166]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
