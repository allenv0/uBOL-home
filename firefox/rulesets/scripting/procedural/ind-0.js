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

// ruleset: ind-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".hotwp-box.widget_black_studio_tinymce\",\"tasks\":[[\"has\",{\"selector\":\"> div > p > img:only-child\"}]]}","{\"selector\":\".hotwp-box.widget_black_studio_tinymce\",\"tasks\":[[\"has\",{\"selector\":\"> div > p > ins\"}]]}"],["{\"selector\":\".box_header\",\"tasks\":[[\"has-text\",\"Advertising\"]]}"],["{\"selector\":\".wpb_raw_html\",\"tasks\":[[\"has\",{\"selector\":\".adsbymahimeta\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".widget-title > span\",\"tasks\":[[\"has-text\",\"Advertising\"]]}]]}"],["{\"selector\":\".main-menu ~ .container div\",\"tasks\":[[\"has\",{\"selector\":\"> a > img[src*=\\\"/uploads/ads/\\\"]\"}]]}"],["{\"selector\":\".advertisement\",\"tasks\":[[\"has-text\",\"advertisement\"]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> h5\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\"div.colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\"}]]}","{\"selector\":\"div.colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h2 + h4\"}]]}"],["{\"selector\":\"div.col-lg-3\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\"[id^=\\\"custom\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"Government Ad\"]]}]]}","{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > span > a[rel*=\\\"sponsored\\\"]\"}]]}","{\"selector\":\"div[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has\",{\"selector\":\"> a > img[src*=\\\"/ads/\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id*=\\\"-ad-\\\"]\"}]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".adsection\",\"tasks\":[[\"has\",{\"selector\":\".ad-1\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > p > .adsbygoogle\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"paid.outbrain.com\\\"]\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"MIsource\"]]}]]}","{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"Prasadam\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"Ad--\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> p > img.wp-image-23118\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_1\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".widget_recent_entries\",\"tasks\":[[\"has-text\",\"ads\"]]}"],["{\"selector\":\".main--sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.ad--widget-no\"}]]}"],["{\"selector\":\"div[data-slot=\\\"460008\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h6\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .main-heading\",\"tasks\":[[\"has-text\",\"Advertizement\"]]}]]}"],["{\"selector\":\".td-block-title > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-body > p:only-child\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has\",{\"selector\":\"> p > ins.adsbygoogle\"}]]}"],["{\"selector\":\".wpb_wrapper > p\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .w3-small\"}]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div > div[id^=\\\"daini\\\"]\"}]]}"],["{\"selector\":\".add\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> .widget_area > h3\"}]]}]]}"],["{\"selector\":\".textwidget > p\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"ADV\"]]}]]}"],["{\"selector\":\".mb-3\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .advert\"}]]}"],["{\"selector\":\".fourth_2_inner\",\"tasks\":[[\"has\",{\"selector\":\"> a > div > h1\",\"tasks\":[[\"has-text\",\"advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".container-fluid div\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\".mb-3\",\"tasks\":[[\"has\",{\"selector\":\"> div > ins.adsbygoogle\"}]]}"],["{\"selector\":\".HTML\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div.HTML\",\"tasks\":[[\"has\",{\"selector\":\"> div ins.adsbygoogle\"}]]}"],["{\"selector\":\"div > h2\",\"tasks\":[[\"has-text\",\"Google Ads\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"ABS Hospital\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Vijay Bakery\"]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"#sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\".banner\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title > h4\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[data-native-ad]\"}]]}"],["{\"selector\":\".block-title span\",\"tasks\":[[\"has-text\",\"Sponsored Ads\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"ADVT\"]]}]]}"],["{\"selector\":\".e-con\",\"tasks\":[[\"has\",{\"selector\":\"> .e-con-inner > .elementor-widget-heading\"}]]}","{\"selector\":\".e-con\",\"tasks\":[[\"has\",{\"selector\":\"> .e-con-inner > .elementor-widget-html\"}]]}"],["{\"selector\":\".gb-container\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> ins\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_P_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}","{\"selector\":\"div[id^=\\\"AS_P_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"> div > h4 > span\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\".code-block figure\",\"tasks\":[[\"has\",{\"selector\":\"> figcaption\"}]]}"],["{\"selector\":\".single_sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> ul > div\"}]]}"],["{\"selector\":\".widget_block\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\".list-category-posts-half\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-title\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".add\",\"tasks\":[[\"has\",{\"selector\":\"> div[id$=\\\"advertisement\\\"]\"}]]}"],["{\"selector\":\".vc_row\",\"tasks\":[[\"has\",{\"selector\":\"> .vc_column > .wpb_wrapper > .td-a-rec:only-child\"}]]}"],["{\"selector\":\"div[name=\\\"ArticleShow-Organic-LHS-1\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > span + a\"}]]}"],["{\"selector\":\"aside.right_content div.single_sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> a[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> p > ins.adsbygoogle\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> div > h4\",\"tasks\":[[\"has-text\",\"adv\"]]}]]}"],["{\"selector\":\".add .widget_area\",\"tasks\":[[\"has\",{\"selector\":\"> img\"}]]}"],["{\"selector\":\".elementor-widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Adv.\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h2 + span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div.sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".HTML\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-title > .title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".td-main-content-wrap .td-a-rec\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > h4.block-title\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > span[name=\\\"adchoicehtml\\\"]\"}]]}"],["{\"selector\":\".themesBazar_widget\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"sonalilife.com\"]]}]]}"],["{\"selector\":\".mb-3\",\"tasks\":[[\"has\",{\"selector\":\".section-title > h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".article-tag-content\",\"tasks\":[[\"has\",{\"selector\":\"> .oiad\"}]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\".adsbygoogle\"]]}"],["{\"selector\":\".widget--title .h4\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}","{\"selector\":\"div.ptop--30\",\"tasks\":[[\"has\",{\"selector\":\"> .ad--space\"}]]}"],["{\"selector\":\"#right div\",\"tasks\":[[\"has\",{\"selector\":\"> div.nw18-dfp-ad\"}]]}","{\"selector\":\".listview-story li\",\"tasks\":[[\"has\",{\"selector\":\"div[data-implementation]\"}]]}","{\"selector\":\".listview-story li\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"mobileAd\\\"]\"}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .myad\"}]]}"],["{\"selector\":\"figure\",\"tasks\":[[\"has\",{\"selector\":\"> figcaption\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar .widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"> :not(div)\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > span[name=\\\"adchoicehtml\\\"]\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h4\",\"tasks\":[[\"has-text\",\"Ad: \"]]}]]}","{\"selector\":\"div[id^=\\\"AS_O_RHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > p\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> small\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div.row\",\"tasks\":[[\"has\",{\"selector\":\"> .col-md12 > .margin-top > img.attachment-full\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> div > ins.adsbygoogle\"}]]}"],["{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"gpt_ads_\\\"]\"}]]}"],["{\"selector\":\".block-title-4\",\"tasks\":[[\"has\",{\"selector\":\"> h4 > span\",\"tasks\":[[\"has-text\",\"Advertisements\"]]}]]}"],["{\"selector\":\"div.primary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}","{\"selector\":\"div[data-adid]\",\"tasks\":[[\"has\",{\"selector\":\"> p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".safe_life\",\"tasks\":[[\"has\",{\"selector\":\"> .textwidget\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .dfp-ad-unit\"}]]}"],["{\"selector\":\"#side .widget\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".elementor-widget-wrap p\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".jeg_block_heading\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"ADVERTISEMENTS\"]]}]]}","{\"selector\":\".jeg_block_heading\",\"tasks\":[[\"has\",{\"selector\":\"> .jeg_block_title > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[class*=\\\"slide\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > .AdvtSample\"}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > p + h3\"}]]}"],["{\"selector\":\"div.sidebar h5\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\".app-news-section-div\",\"tasks\":[[\"has\",{\"selector\":\"> .adv\"}]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advt\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a > div > .pd_title\"}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> a span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"table\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr > td > a[href*=\\\"drkeshavjee.com\\\"]\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> .metaslider\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget--title > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .box_header\",\"tasks\":[[\"has-text\",\"Advertisements\"]]}]]}"],["{\"selector\":\".single_post_content\",\"tasks\":[[\"has\",{\"selector\":\"> h2 > span > a\",\"tasks\":[[\"has-text\",\"ADS\"]]}]]}"],["{\"selector\":\".a-wrap\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advt.\"]]}]]}"],["{\"selector\":\"div.wrapper-sticky div\",\"tasks\":[[\"has\",{\"selector\":\"> div.section-heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .adv\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .ad-div\"}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div p\",\"tasks\":[[\"has-text\",\"AD |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".single_sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> h2 > span\",\"tasks\":[[\"has-text\",\"advertisement\"]]}]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a span\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div h3 + p\"}]]}","{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"div-gpt-ad > div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"#sidebar-primary-sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\"div[data-adid]:not([data-type=\\\"custom_code\\\"])\"}]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > .dfp-ad-unit\"}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".primary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .section-heading > .h-text\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> h5 > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".pt-4\",\"tasks\":[[\"has\",{\"selector\":\"> .carousel\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\".my-4\",\"tasks\":[[\"has\",{\"selector\":\"> h5\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .section-title > h4\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}]]}"],["{\"selector\":\"section.widget_block\",\"tasks\":[[\"has\",{\"selector\":\"> p > ins\"}]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"ins.adsbygoogle\"}]]}"],["{\"selector\":\".sppb-column-addons > div\",\"tasks\":[[\"has\",{\"selector\":\".carouselbanner\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-head > .title\",\"tasks\":[[\"has-text\",\"ADS\"]]}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"taboola-mid\\\"]\"}]]}"],["{\"selector\":\".fashion_technology_area div\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2 span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".ad\",\"tasks\":[[\"has\",{\"selector\":\"> div:first-child\"}]]}"],["{\"selector\":\"section.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"div > h4.widget-title\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"figure\",\"tasks\":[[\"has\",{\"selector\":\"> figcaption\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}]]}"],["{\"selector\":\".wp-block-group\",\"tasks\":[[\"has\",{\"selector\":\"> div > .wp-block-heading\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sppb-addon\",\"tasks\":[[\"has\",{\"selector\":\".bannergroup\"}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\"#main-content .main-carousel\",\"tasks\":[[\"has\",{\"selector\":\"> .title-wrapper > h2 > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}","{\"selector\":\"#main-content .theiaStickySidebar\",\"tasks\":[[\"has\",{\"selector\":\"> div > .title-wrapper > h2 span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"> h3 > span\",\"tasks\":[[\"has-text\",\"Advt\"]]}]]}"],["{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > p\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"h4.td-block-title\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".colombiaonesuccess > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div a p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"div[id^=\\\"AS_O_LHS_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > p + h3\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div *\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .nbs-flexisel-container\"}]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\".sidebar-widget > h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[id*=\\\"_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > h4 > span\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\"div[id*=\\\"_O_\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > div > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"[id^=\\\"AS_O_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> div > a > div > h5\",\"tasks\":[[\"has-text\",\"Ad |\"]]}]]}"],["{\"selector\":\".align_cent\",\"tasks\":[[\"has-text\",\"Advertise\"]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"> .widget-body > p > img:only-child\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > h3\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sidebar h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".sub_new b\",\"tasks\":[[\"has-text\",\"Ads\"]]}"],["{\"selector\":\".card\",\"tasks\":[[\"has\",{\"selector\":\"> .card-header\",\"tasks\":[[\"has-text\",\"Advertisment\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\".colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > a > h5\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}","{\"selector\":\".colombiaonesuccess div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div a > p\",\"tasks\":[[\"has-text\",\"Ad:\"]]}]]}"],["{\"selector\":\"table[height=\\\"100\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr[bgcolor]\"}]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> div > .advimg\"}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div > .sc_item_title\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"]];

const hostnamesMap = new Map([["malayaleepathram.com.au",0],["suprovatsydney.com.au",1],["garavigujarat.biz",2],["uthayannews.ca",3],["tamilnews.cc",4],["bangla.24livenewspaper.com",5],["aadarshhimachal.com",6],["aajbikel.com",7],["aajkaaldaily.com",8],["aapkikhabar.com",9],["aayomail.com",10],["ajkalerkhobor.com",11],["cinemainbox.com",11],["marathiworld.com",11],["maxmaharashtra.com",11],["natunsylhet24.com",11],["nayanjagriti.com",11],["telugugateway.com",11],["teluguglobal.com",11],["doonhorizon.in",[11,134]],["maxwoman.in",11],["andhrajyothy.com",12],["angulonline.com",13],["asianetnews.com",14],["atalhind.com",15],["atalsamachar.com",16],["bdcrime24.com",17],["bhadainimirror.com",18],["bhaskar.com",19],["bholanews.com",20],["blivenews.com",21],["dailyharyananews.com",21],["fashionnewsera.com",21],["chatonay71news.com",22],["chhattisgarhaaj.com",23],["cityandolan.com",24],["cityliveindia.com",25],["countrynewstoday.com",26],["crimediarybd.com",27],["dailybahadur.com",28],["dailypurbodesh.com",29],["dainikamadershomoy.com",30],["dainiklivenews24.com",31],["dainikparibarton.com",32],["dainiksylhet.com",33],["dakshinapath.com",34],["dhamaka36.com",35],["bharatiyadigitalnews.in",[35,125]],["dhinasari.com",36],["divyahimachal.com",37],["entevarthakal.com",38],["etamilnews.com",39],["filmybuzz.com",40],["ghatail.com",41],["gossiplanka.com",42],["gossiplankanews.com",43],["horizonhind.com",44],["hrbreakingnews.com",45],["timeskerala.com",45],["iautoindia.com",46],["ibmnews24.com",47],["meranews.com",47],["tamizhakam.com",47],["tv20news.in",47],["indiasamachar24.com",48],["indiatimes.com",49],["vijaykarnataka.com",49],["indocanadiantimes.com",50],["janamtv.com",51],["janbolnews.com",52],["jankarido.com",53],["janprahar.com",54],["jansandeshonline.com",55],["janwarta.com",56],["jhunjhununewz.com",57],["khabar7clive.com",58],["khabarcgnews.com",59],["timesofswaraj.com",59],["khabardev.com",60],["khabareast.com",61],["khaboriya24.com",62],["khabreelal.com",63],["khoborersomoy.com",64],["khulnagazette.com",65],["spnewsbd.com",65],["kirandoot.com",66],["kolomerbatra.com",67],["lnstarnews.com",68],["loginkerala.com",69],["loudspeakeronline.com",70],["madhepurakhabar.com",71],["manvadhikarabhivyakti.com",72],["momainews.com",73],["muktirlorai.com",74],["munaadi.com",75],["tamil.mykhel.com",76],["naya-alo.com",77],["neplays.com",78],["news18.com",79],["news24bite.com",80],["newsdesk24.com",81],["newspoint24.com",82],["newstodaynetwork.com",83],["nobat.com",84],["onstimes.com",85],["pagetamil.com",86],["patrika.com",87],["pingara.com",88],["pksnews24.com",89],["prabhatkhabar.com",90],["mumbaitak.in",90],["promisenews24.com",91],["prothomalo.com",92],["punjabikangaroo.com",93],["rajdhanidaily.com",94],["rochakkhabare.com",95],["utkalpratidin.com",[95,119]],["theonlinepost.in",[95,157]],["sabhavarthakal.com",96],["sachikalam.com",97],["saharasamachar.com",98],["samajkihalchal.com",99],["samakal.com",100],["samarthsahara.com",101],["varchasvnews.com",101],["samayduniya.com",102],["samaynews24.com",103],["satyamevtv.com",104],["satyavoice.com",105],["seithipunal.com",106],["khabaraaptak.net",106],["shikshabhartinetwork.com",107],["smtv24x7.com",108],["tarunbharat.com",109],["thedesiawaaz.com",110],["theheadline24.com",111],["thesigmanews.com",112],["thuglak.com",113],["timesnowtamil.com",114],["ttncinema.com",115],["twentyfournews.com",116],["unitednewskannada.com",117],["upuklive.com",118],["veerdharanews.com",120],["jalauntimessite.wordpress.com",121],["yugvartanews.com",122],["yuvaharyana.com",123],["haal.fashion",124],["biharnation.in",126],["cg24news.in",127],["cgwebnews.in",128],["champarantoday.in",129],["bhingatimes.co.in",130],["indiakhabar.co.in",131],["overlook.co.in",132],["deshkikhabar.in",133],["theexpose.in",[134,154]],["doonited.in",135],["editiontoday.in",136],["encounterindia.in",137],["tamil.goodreturns.in",138],["indianewscentre.in",139],["indiatv.in",140],["janadeshexpress.in",141],["lifestylenama.in",142],["madhubaninews.in",143],["magadhexpress.in",144],["namastepurvanchal.in",145],["newscreation.in",146],["newsmoments.in",147],["newstm.in",148],["pressnote.in",149],["rozanapost.in",150],["rozanaspokesman.in",151],["satyasandhana.in",152],["soochnanews.in",153],["thehindutimes.in",155],["thenewswords.in",156],["thevoices.in",158],["todaynewshindi.in",159],["visionnewsservice.in",160],["viznews.in",161],["odiascraps.info",162],["k9media.live",163],["news11.live",164],["pardaphashnews.live",165],["abcnews.media",166],["indiannewsservice.net",167],["satkhiraprobaho.net",168],["tutyonline.net",169],["asr24.news",170],["kathir.news",171],["livevns.news",172],["voiceasian.news",173],["rajbirajdainik.com.np",174],["ammanealing.org",175],["thannambikkai.org",176]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
