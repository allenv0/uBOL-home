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

// ruleset: pol-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"section.section:nth-of-type(-1n+2)\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > .adv\"}]]}"],["{\"selector\":\"section.section:nth-of-type(-1n+2)\",\"tasks\":[[\"has\",{\"selector\":\"> div > .adv\"}]]}"],["{\"selector\":\".tab-content div[class] > center > fieldset\",\"tasks\":[[\"has\",{\"selector\":\"> a[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".status > .main > p\",\"tasks\":[[\"has\",{\"selector\":\"+ a[href^=\\\"https://ad.doubleclick.net/\\\"]\"}]]}"],["{\"selector\":\"#f13 > table\",\"tasks\":[[\"has\",{\"selector\":\"#f13 > a[href^=\\\"//stooq.com/ads/\\\"]\"}]]}"],["{\"selector\":\"#f13 > table\",\"tasks\":[[\"has\",{\"selector\":\"#f13 > b\",\"tasks\":[[\"has-text\",\"Artykuł Sponsorowany\"]]}]]}","{\"selector\":\"table\",\"tasks\":[[\"has\",{\"selector\":\" > tbody > tr > td > #aswift_1_expand\"}]]}"],["{\"selector\":\"table[border=\\\"0\\\"][cellpadding=\\\"0\\\"][cellspacing=\\\"0\\\"]:not([width])\",\"tasks\":[[\"has\",{\"selector\":\"[id=\\\"ads_goog_1\\\"]\"}]]}"],["{\"selector\":\".ad-banner-text\",\"tasks\":[[\"has-text\",\"Ad\"]]}"],["{\"selector\":\"div[class]:not([id])\",\"tasks\":[[\"has\",{\"selector\":\"> .ad-text\"}]]}"],["{\"selector\":\".elementor-widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\".wpb_wrapper .td_block_template_1\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"body > .page > main > .small.pasek-gray\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".bbbb > div > div > div\",\"tasks\":[[\"has-text\",\"reklama\"]]}","{\"selector\":\".bbbb\",\"tasks\":[[\"has\",{\"selector\":\"[data-original*=\\\"/pictures/informacje/\\\"]\"}]]}","{\"selector\":\".bottom:nth-of-type(1n+5):nth-of-type(-1n+6) > .bbbb\",\"tasks\":[[\"has-text\",\"reklama\"]]}","{\"selector\":\".bottom:nth-of-type(20) > .bbbb\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".sppb-addon-title\",\"tasks\":[[\"has-text\",\"reklama\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".inner\",\"tasks\":[[\"has-text\",\"/reklama/i\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\"#main > div:nth-child(2)\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".entry-content > p\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".conntent > center\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"div[class] > .small\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"div.site-content\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"videojs-remote\\\"]\"}]]}"],["{\"selector\":\"li > div[id*=\\\"taboola\\\"]\",\"tasks\":[[\"upward\",\"li\"]]}"],["{\"selector\":\".part-sidebar > .widget\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\".boxContent > ul > li[class^=\\\"item-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".premium-link\"}]]}"],["{\"selector\":\"li.m-home-link-list__item\",\"tasks\":[[\"has-text\",\"/reklama/\"]]}"],["{\"selector\":\".box > .bbh-top\",\"tasks\":[[\"has\",{\"selector\":\"> h3 > a[href*=\\\"//www.mediaexpert.pl/\\\"]\"}]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"script + div[id^=\\\"crt\\\"][style]\"}]]}"],["{\"selector\":\".sppb-addon-content > .sppb-addon-title\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"Patron\"]]}"],["{\"selector\":\"#sidebar > div.widget > h3\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\".post_adv\"}]]}"],["{\"selector\":\"#InboxTable > tbody > tr\",\"tasks\":[[\"has\",{\"selector\":\"> td > .spons\"}]]}"],["{\"selector\":\".ipsComment.ipsBox.cPost\",\"tasks\":[[\"has\",{\"selector\":\".cAuthorPane_info > li\",\"tasks\":[[\"has-text\",\"/^Reklama$/\"]]}]]}"],["{\"selector\":\"div.row > .col-md-12 > .line-header > span\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"article > .hint\",\"tasks\":[[\"has\",{\"selector\":\"a[href$=\\\"/Czyszczenie-systemu-z-niechcianego-oprogramowania,News,61336.html\\\"]\"}]]}","{\"selector\":\"article[itemprop=\\\"review\\\"] > div[id]\",\"tasks\":[[\"matches-css-after\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":\"przy|pomocy|Asystenta|pobierania\"}]]}","{\"selector\":\"body script\",\"tasks\":[[\"has-text\",\"slotNumber\"],[\"upward\",2]]}","{\"selector\":\"div.collection\",\"tasks\":[[\"has-text\",\"Edycja wideo dla ambitnych\"]]}"],["{\"selector\":\".row > center, div.row > .col-md-4.col-sm-12 > .text-center, div.row > .col-md-4.col-sm-12 > div.pws-box-title\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".col-md-4 > div.margin-bottom-sm.margin-top-sm > div\",\"tasks\":[[\"has-text\",\"Reklama\"]]}","{\"selector\":\".margin-bottom-md.margin-top-md > div\",\"tasks\":[[\"has-text\",\"R EK L A M A\"]]}","{\"selector\":\".margin-bottom-xs.margin-top-xs > div\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"#main .col-md-8 form[action*=\\\"//\\\"][action*=\\\"m\\\"][action*=\\\".\\\"]\",\"tasks\":[[\"upward\",\".col-md-8 > div\"]]}","{\"selector\":\".the-content > div[class] > div\",\"tasks\":[[\"has\",{\"selector\":\" > a[href][target=\\\"_blank\\\"][onclick*=\\\"'Patron', 'Click Button'\\\"]\"}]]}","{\"selector\":\".the-content > div[class] > div\",\"tasks\":[[\"has\",{\"selector\":\" > a[href^=\\\"http://www.biall.com.pl/sklep.html\\\"][target=\\\"_blank\\\"]\"}]]}","{\"selector\":\".the-content > div[class] > div\",\"tasks\":[[\"has\",{\"selector\":\" > form[action^=\\\"https://www.tme.eu/pl/katalog/\\\"][target=\\\"_blank\\\"]\"}]]}","{\"selector\":\".the-list > li[class^=\\\"clearfix \\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > a[href][target=\\\"_blank\\\"][onclick*=\\\"'Navibox', 'Click', '\\\"]\"}]]}","{\"selector\":\".the-post-list > ul > li[class^=\\\"clearfix \\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > a[href][target=\\\"_blank\\\"][onclick*=\\\"'Banner\\\"]\"}]]}","{\"selector\":\".topic-lists > li[id] > .topic-box > .position-relative\",\"tasks\":[[\"has\",{\"selector\":\"> .sec-b > div > ins.adsbygoogle\"}]]}","{\"selector\":\".topic-lists > li[id] > .topic-box > .position-relative\",\"tasks\":[[\"has\",{\"selector\":\"> .sec-b > div[id^=\\\"div-gpt-ad\\\"]\"}]]}","{\"selector\":\"a.button_open[href=\\\"/rtvforum/companyabout.php\\\"]\",\"tasks\":[[\"has-text\",\"Zamieść Reklamę\"]]}"],["{\"selector\":\".block-title > span\",\"tasks\":[[\"has-text\",\"/R(EKLAMA|eklama)/\"]]}"],["{\"selector\":\"div[style*=\\\"sticky\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[target=\\\"_blank\\\"][onclick*=\\\"'polsat'\\\"]\"}]]}"],["{\"selector\":\".title > span\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"#mainSkyBanner-pl_PL > script\",\"tasks\":[[\"has-text\",\"skyBanner\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"adblockDisplayInformation.\"],[\"has-text\",\"/[\\\\w\\\\W]{8000,50000}/\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"plusAdblock\"],[\"has-text\",\"/[\\\\w\\\\W]{4000,10000}/\"]]}"],["{\"selector\":\"li.videoblock iframe[id][src*=\\\"/www/delivery/\\\"]\",\"tasks\":[[\"upward\",\"li\"]]}","{\"selector\":\"li.videoblock script[src^=\\\"https://a.realsrv.com/\\\"]\",\"tasks\":[[\"upward\",\"li\"]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-pulldown-size\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]]}"],["{\"selector\":\"table.forumline > tbody > tr\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"http://www.mlawa.fora.pl/reklama\\\"]\"}]]}"],["{\"selector\":\"div.clear.box_tekstowy_mainpage > h3\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".vc_row-has-fill.vc_row-fluid.wpb_row.vc_row.row\",\"tasks\":[[\"has\",{\"selector\":\"img[width=\\\"350\\\"][height=\\\"250\\\"][src*=\\\"-350x250.\\\"]\"}]]}"],["{\"selector\":\".column-wrap > div[class^=\\\"wrap_small __frame\\\"] > div.media_frame\",\"tasks\":[[\"has\",{\"selector\":\"> .media_content > .adsbygoogle\"}]]}","{\"selector\":\".layout > div.side > div.side__i\",\"tasks\":[[\"has\",{\"selector\":\"> div > div.ad\"}]]}"],["{\"selector\":\".contentpaneopen\",\"tasks\":[[\"has-text\",\"Reklama\"]]}","{\"selector\":\".module\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"div.moduletable\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"div[style*=\\\"sticky\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .boxHeader ~ a[href][target=\\\"_blank\\\"][onclick*=\\\"'polsat'\\\"]\"}]]}"],["{\"selector\":\".brief-list-item\",\"tasks\":[[\"has\",{\"selector\":\"> .mixerAdTopRight-wrapper:not(.has-noads)\"}]]}"],["{\"selector\":\"#wrapper > .maximized-wrapper\",\"tasks\":[[\"has\",{\"selector\":\".premium-account-promotion\"}]]}","{\"selector\":\"#wrapper > .maximized-wrapper\",\"tasks\":[[\"has\",{\"selector\":\".premium-account-promotion-new\"}]]}","{\"selector\":\".border\",\"tasks\":[[\"has\",{\"selector\":\"+ .ad-box\"}]]}"],["{\"selector\":\".et_pb_section_6\",\"tasks\":[[\"has-text\",\"Reklamy Google\"]]}","{\"selector\":\".et_pb_text_8\",\"tasks\":[[\"has-text\",\"Twoja reklama\"]]}"],["{\"selector\":\"div.widget.row > .widget-custom.text-center\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"/Reklama/i\"]]}]]}"],["{\"selector\":\"#synergiaLogin + div[class]\",\"tasks\":[[\"has\",{\"selector\":\"picture > source[srcset*=\\\"librus\\\"] ~ img[src*=\\\"librus\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"m\\\"].module > div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"figcaption\",\"tasks\":[[\"has-text\",\"STS kod promocyjny\"]]}"],["{\"selector\":\"div#kon_2a[style*=\\\"white\\\"] > * > *:empty\",\"tasks\":[[\"upward\",\"[style*=\\\"white\\\"]\"]]}"],["{\"selector\":\".post\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\"div.home-intro__grid-tile\",\"tasks\":[[\"has\",{\"selector\":\"> .ad\"}]]}"],["{\"selector\":\".post > .entry-content > h4\",\"tasks\":[[\"has-text\",\"Reklama\"]]}","{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]]}"],["{\"selector\":\"#app > div[data-reactroot] > div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"v\\\\.wpimg\\\\.pl\\\\/MjAxOTA\"}]]}","{\"selector\":\"div[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src=\\\"https://i.wpimg.pl/O/56x45/i.wp.pl/a/i/stg/pkf/bg.png\\\"]\"}]]}"],["{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class]:first-child\",\"tasks\":[[\"has-text\",\"REKLAMA\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> *\"}]]}]]}]]}"],["{\"selector\":\"[src$=\\\"bg.png\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#app > div[class^=\\\"sc-\\\"] > div[class]:not([class*=\\\" \\\"])\",\"tasks\":[[\"has\",{\"selector\":\" > div[class*=\\\" \\\"]:only-child > img[src^=\\\"https://v.wpimg.pl/\\\"][src$=\\\"==\\\"][alt]\"}]]}","{\"selector\":\"div[class*=\\\" \\\"]:not(.LazyLoad) > img[src^=\\\"https://v.wpimg.pl/\\\"][src$=\\\"==\\\"][alt]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^absolute$\"}],[\"spath\",\"+ div:last-child\"],[\"upward\",1]]}"],["{\"selector\":\"#app > div > div\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"^url\\\\(.https:\\\\/\\\\/v\\\\.wpimg\\\\.pl\"}]]}","{\"selector\":\".article__content > div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div > div > div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\"body > div[class][style*=\\\"position: fixed\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".yt-player, video\"}]]}"],["{\"selector\":\".td-pulldown-size\",\"tasks\":[[\"has-text\",\"R E K L A M A\"]]}"],["{\"selector\":\".componentsArticleContent hr ~ p\",\"tasks\":[[\"has\",{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"doskonałe\"]]}]]}","{\"selector\":\".componentsArticleContent hr\",\"tasks\":[[\"has\",{\"selector\":\"~ h3 > a[href*=\\\"ceneo.pl\\\"]\"}]]}","{\"selector\":\".componentsArticleContent hr\",\"tasks\":[[\"has\",{\"selector\":\"~ p strong\",\"tasks\":[[\"has-text\",\"doskonałe\"]]}]]}","{\"selector\":\".componentsArticleContent ul\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"ceneo.pl\\\"]\"}]]}"],["{\"selector\":\".ipbtable\",\"tasks\":[[\"has\",{\"selector\":\"div[align=\\\"center\\\"] > script[src^=\\\"//nhlpl.engine.adglare.org\\\"]\"}]]}"],["{\"selector\":\"div[style=\\\"width:300px;float:left;\\\"] ~ p:first-of-type\",\"tasks\":[[\"has-text\",\"/^$/\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"matches-css-after\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":\"R.*E.*K.*L.*A.*M.*A\"}],[\"upward\",1]]}"],["{\"selector\":\"[src$=\\\"adPlaceholder.png\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[class][style=\\\"width:100%\\\"] > div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > img[role=\\\"presentation\\\"]:not([src])\"}]]}"],["{\"selector\":\".left-zobacz\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/openurl.php\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"slot-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"slot\\\"][class$=\\\"plug\\\"]\"}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"script\"}]]}"],["{\"selector\":\"table > tbody > tr > td > font\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".qa-widget-side\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"div[style^=\\\"width:728\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a[target=\\\"_blank\\\"] > img\"}]]}"],["{\"selector\":\"#obrazekOpis > div[style^=\\\"width:\\\"][style*=\\\"height:\\\"]:not([class]):not([id])\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > .adsbygoogle\"}]]}","{\"selector\":\"#poprawejTekst > div[style^=\\\"width:\\\"][style*=\\\"height:\\\"]:not([class]):not([id])\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\".screening\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"div.centering.tile\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\"body > p\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"div[style*=\\\"font-size\\\"]\",\"tasks\":[[\"upward\",\"div[class*=\\\"col\\\"]\"]]}"],["{\"selector\":\".col-wrapper > div:nth-of-type(1)\",\"tasks\":[[\"has\",{\"selector\":\"> div:nth-of-type(2)\",\"tasks\":[[\"has-text\",\"Sponsorowane\"]]}]]}","{\"selector\":\".col-wrapper > div:nth-of-type(12)\",\"tasks\":[[\"has\",{\"selector\":\"> .banner\"}]]}"],["{\"selector\":\"[id^=\\\"text-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".article__placement\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"zpr_m_inside\\\"]\"}]]}"],["{\"selector\":\".sidebar-panel\",\"tasks\":[[\"has\",{\"selector\":\"center:only-child script\",\"tasks\":[[\"has-text\",\"googletag.cmd.push\"]]}]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has\",{\"selector\":\"[src^=\\\"img/reklama_\\\"]\"}]]}"],["{\"selector\":\"#f13 > table\",\"tasks\":[[\"has\",{\"selector\":\"#f13 > a[href^=\\\"//stooq.pl/ads/\\\"]\"}]]}"],["{\"selector\":\".col-lg-12 > .row > .col-lg-9\",\"tasks\":[[\"has-text\",\"r e k l a m a\"]]}","{\"selector\":\"div.row > div.col-md-6\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".thumb td\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}","{\"selector\":\"td > div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"div.ebok-pop-up\",\"tasks\":[[\"has\",{\"selector\":\"[title^=\\\"Zyskaj dotację do 4000\\\" i][title*=\\\"fotowolt\\\" i]\"}]]}"],["{\"selector\":\"font\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"th\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"#custom_html-5\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\"[class^=\\\"_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src*=\\\".wp.pl\\\"]\"}]]}"],["{\"selector\":\"div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\" \\\"] > [class^=\\\"__bc_layer\\\"]\"}]]}"],["{\"selector\":\"div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class]:first-child:empty + img[src*=\\\"://v.wpimg.pl/\\\"][alt]:empty\"}]]}","{\"selector\":\"td[data-reactid] > div[class] > div[class] > div[class*=\\\" \\\"] > div[class] > span\",\"tasks\":[[\"has-text\",\"/^TWOJE OKAZJE$/\"],[\"upward\",2]]}"],["{\"selector\":\"body > div[class][id]\",\"tasks\":[[\"has\",{\"selector\":\"div[class]\",\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Nie teraz, wracam na WP\\\\.pl\\\"$\"}]]}]]}"],["{\"selector\":\"body > div[class][id]\",\"tasks\":[[\"has\",{\"selector\":\"div[class]:not([id])\",\"tasks\":[[\"has-text\",\"Tworzenie treści to nasza pasja\"]]}]]}"],["{\"selector\":\"body > div[class][id]\",\"tasks\":[[\"has\",{\"selector\":\"div[class]:not([id])\",\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Jak dodać WP do wyjątków adBlocka\\\"$\"}]]}]]}"],["{\"selector\":\"body > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[href]\"}]]}"],["{\"selector\":\".desktop > div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\"}]]}","{\"selector\":\".grid-right > div > div\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"data:image\\\\/png;base64,\"}]]}","{\"selector\":\".grid-right > div\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"data:image\\\\/png;base64,\"}]]}","{\"selector\":\".narrow.grid-right > div:nth-of-type(1)\",\"tasks\":[[\"has\",{\"selector\":\"div:empty\"}]]}"],["{\"selector\":\"body > [class]:not([id])\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"matches-css\",{\"name\":\"top\",\"value\":\"^0px$\"}]]}","{\"selector\":\"body [class]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"matches-css\",{\"name\":\"top\",\"value\":\"^0\\\\..*px$\"}]]}"],["{\"selector\":\"div[class*=\\\" \\\"][height]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src^=\\\"https://v.wpimg.pl/\\\"][src$=\\\"==\\\"]:not([alt])\"}]]}","{\"selector\":\"div[height=\\\"auto\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[data-st-area] > div > div > div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"max-width\",\"value\":\"^300px$\"}],[\"matches-css\",{\"name\":\"max-height\",\"value\":\"^250px$\"}]]}","{\"selector\":\"div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src$=\\\"/i.wp.pl/a/i/stg/pkf/bg.png\\\"]\"}]]}","{\"selector\":\"div[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\":scope > img[src^=\\\"https://v.wpimg.pl/\\\"][role=\\\"presentation\\\"][class^=\\\"sc-\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^absolute$\"}]]}]]}","{\"selector\":\"div[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src=\\\"//v.wpimg.pl/LTc0NzY1JT1MBXgCbQRjPU1HPlQpXWM1TFlhCS1WYyQIVmEYPh88OgQ=/\\\"]\"}]]}"],["{\"selector\":\".r-block\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"wykop.pl/tracker\\\"]\"}]]}","{\"selector\":\"div.r-block\",\"tasks\":[[\"has\",{\"selector\":\" > .baner-mobile\"}]]}","{\"selector\":\"div.r-block\",\"tasks\":[[\"has\",{\"selector\":\" > [id^=\\\"bmone2n-\\\"]\"}]]}","{\"selector\":\"li.link\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"li.link\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"wykop.pl/market\\\"]\"}]]}","{\"selector\":\"li.link\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"wykop.pl/paylink\\\"]\"}]]}","{\"selector\":\"li.link\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"wykop.pl/reklama\\\"]\"}]]}"],["{\"selector\":\"[class^=\\\"elementor-heading-title\\\"]\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".row div[class][style*=\\\"border-bottom:\\\"][style*=\\\"max-height:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\":scope > div[style]\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]]}"],["{\"selector\":\"div.pink > .box > div\",\"tasks\":[[\"has-text\",\"Adblock\"]]}"],["{\"selector\":\"div.panel-default.panel:nth-of-type(2)\",\"tasks\":[[\"has\",{\"selector\":\"script[src^=\\\"//adsearch.adkontekst.pl\\\"]\"}]]}"]];

const hostnamesMap = new Map([["defence24.com",0],["defence24.pl",[0,1]],["energetyka24.com",1],["infosecurity24.pl",1],["oddslivesport.com",2],["payu.com",3],["stooq.com",[4,5,6]],["stooq.pl",[5,6,93]],["zomato.com",7],["chelmski.eu",8],["cypr24.eu",9],["zegocina.in",10],["bielsko.info",11],["tychy.info",11],["czecho.pl",11],["pless.pl",11],["www.bolec.info",12],["halogorlice.info",13],["katowice24.info",14],["lebork24.info",15],["nowy-sacz.info",16],["starosadeckie.info",17],["dbpolska.net",18],["emka.news",19],["express-miejski.pl",19],["bajeczki.org",20],["pl",21],["badaniaprenatalne.pl",22],["bankier.pl",23],["www.bankier.pl",24],["benchmark.pl",25],["bezuzyteczna.pl",26],["bielskirynek.pl",27],["booklips.pl",28],["braclowiecka.pl",29],["budnet.pl",30],["chomikuj.pl",31],["crafted.pl",32],["czaskultury.pl",33],["www.dobreprogramy.pl",34],["e-hotelarz.pl",35],["ebarlinek.pl",36],["elektroda.pl",37],["epainfo.pl",38],["esporter.pl",39],["interia.pl",[39,52,53]],["pomponik.pl",[39,52]],["styl.pl",[39,52]],["expresskaszubski.pl",40],["filmweb.pl",41],["filmy69.pl",42],["flarrow.pl",43],["mlawa.fora.pl",44],["gazeta-mlawska.pl",45],["gazetabilgoraj.pl",46],["gismeteo.pl",47],["glogow-info.pl",48],["glogow.info.pl",48],["gloszabrza24.pl",49],["gtaforum.pl",50],["wiesci.info.pl",51],["poczta.interia.pl",54],["komputerowapasja.pl",55],["korsokolbuszowskie.pl",56],["portal.librus.pl",57],["mecze24.pl",58],["meczewinternecie.pl",59],["meteo.pl",60],["milanos.pl",61],["milmag.pl",62],["mobileclick.pl",63],["money.pl",[64,65,66,67]],["moneyv.wp.pl",64],["wp.pl",[65,74,101,102]],["polygamia.pl",[66,82]],["pudelek.pl",[66,74]],["wideo.wp.pl",66],["www.money.pl",68],["naekranie.pl",69],["naszamlawa.pl",70],["naszemiasto.pl",71],["nhl.pl",72],["niebezpiecznik.pl",73],["o2.pl",[74,75]],["oknonet.pl",76],["poczta.onet.pl",77],["optyczne.pl",78],["originals24.pl",79],["forum.pasja-informatyki.pl",80],["matematyka.pisz.pl",81],["portalplock.pl",83],["profilki.pl",84],["przyslijprzepis.pl",85],["encyklopedia.pwn.pl",86],["sjp.pwn.pl",87],["rodzice.pl",88],["rydzyna24.pl",89],["www.se.pl",90],["spidersweb.pl",91],["stoczniowcy.pl",92],["super-nowa.pl",94],["tygodnik.szczytno.pl",95],["tapeciarnia.pl",96],["moj.tauron.pl",97],["tkn24.pl",98],["voltahorse.pl",99],["wielkahistoria.pl",100],["sportowefakty.wp.pl",[102,104,105,109]],["dom.wp.pl",103],["facet.wp.pl",103],["film.wp.pl",[103,104]],["finanse.wp.pl",[103,104,105]],["gry.wp.pl",103],["gwiazdy.wp.pl",103],["kobieta.wp.pl",[103,104,105,106]],["ksiazki.wp.pl",[103,104,105,106]],["kuchnia.wp.pl",[103,107]],["moto.wp.pl",103],["opinie.wp.pl",[103,104,105]],["tech.wp.pl",103],["teleshow.wp.pl",[103,104,105]],["turystyka.wp.pl",103],["wawalove.wp.pl",103],["wiadomosci.wp.pl",[103,104,105,106]],["wroclaw.wp.pl",103],["magazyn.wp.pl",[104,105]],["pogoda.wp.pl",108],["tv.wp.pl",110],["www.wp.pl",111],["wykop.pl",112],["zwa24.pl",113],["wylecz.to",114],["gralandia.tv",115],["kreskowki.tv",116]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["www.wp.pl",[74,102]],["poczta.o2.pl",[74]]]);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
