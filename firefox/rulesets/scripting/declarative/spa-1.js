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

// ruleset: spa-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".ad_block_non_shadowed\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\".ad_block_shadowed\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"div[class^=\\\"block-ads-\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".body\",\"action\":[\"style\",\"background-image: none!important;\"]}"],["{\"selector\":\"#colunas\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".ads.ads-block.prebid\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".containerMapAndBanner > .contentMap\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".play\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".main__corpo\",\"action\":[\"style\",\"margin-top: 160px!important;\"]}"],["{\"selector\":\"div[class=\\\"vc_row wpb_row td-pb-row\\\"][style^=\\\"padding-top: 1\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#fusion-app\",\"action\":[\"style\",\"margin-top: 0!important;\"]}","{\"selector\":\".navbar-container\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"display: block!important; position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".is_advertising .site-advertising\",\"action\":[\"style\",\"margin: 5px auto 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; padding-right: 0 !important;\"]}"],["{\"selector\":\".block-wrapper[style*=\\\"url\\\"] > .container > .row\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".block-wrapper[style*=\\\"url\\\"]\",\"action\":[\"style\",\"background: none !important;\"]}","{\"selector\":\"body[style*=\\\"url\\\"] .trending-light[style^=\\\"margin-top:\\\"]\",\"action\":[\"style\",\"margin-top: 20px !important;\"]}","{\"selector\":\"body[style*=\\\"url\\\"]\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"body div[id].ads.adsbox.doubleclick\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body > header\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#banner_b\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"iframe#google_ads_iframe_123_bait\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"iframe#google_ads_iframe_b\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#header-bar.header-bar\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#div-gpt-leaderboard ~ #page\",\"action\":[\"style\",\"margin-top: 30px !important;\"]}"],["{\"selector\":\".alert-message > #informacion\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#NEWS_RELATED\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#ROBAPAGINAS_INLINE_LEFT\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"[id].adsbox.doubleclick.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body .adsbygoogle\",\"action\":[\"style\",\"display: block!important; position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#framed\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".navBar\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".banner\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".ads-300x300\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#framed > #player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"body > #box\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"html.fancybox-lock > body\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"html.fancybox-margin\",\"action\":[\"style\",\"margin-right: 0 !important;\"]}"],["{\"selector\":\".col-anu + div.col-cnt > div.columna\",\"action\":[\"style\",\"width: 34% !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute !important; left: -4000px !important;\"]}"],["{\"selector\":\".hasBgApb\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#ablockercheck\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".content_section > .top\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}","{\"selector\":\".page-container.top\",\"action\":[\"style\",\"margin-top: 60px!important;\"]}","{\"selector\":\".top-home\",\"action\":[\"style\",\"margin-top: 60px!important;\"]}"],["{\"selector\":\"#article-header\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"div#ad\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#manga-title\",\"action\":[\"style\",\"height: unset !important;\"]}"],["{\"selector\":\".lv-publi-box\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\".megabanner-adv\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".add990x90 div\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".add990x90\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".ads.adsbox.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".ads728x90.ads970x90\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"iframe.video\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".series-indeti\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#Publi300600xaa\",\"action\":[\"style\",\"height: 1px!important;\"]}","{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px!important; display: block!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image:none!important;\"]}"],["{\"selector\":\"#ad\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#adsdiv\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".ads.ad.adsbox.ad-placement.carbon-ads\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".container.have-brand\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\".publicite.text-ad.adsbox\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sidebar > div.tile-top.tile\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\"body div.adsbox.doubleclick.ad-placement[id]:not(#style_important)\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".iframeDiv > center > a[target=\\\"_blank\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none!important;\"]}"],["{\"selector\":\"#axds-Top\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".dat-menu-container\",\"action\":[\"style\",\"cursor: auto !important;\"]}","{\"selector\":\"body[style^=\\\"background\\\"]\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\".op-body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"aside > div > .goqpfsl\",\"action\":[\"style\",\"visibility: hidden !important; height: 1px !important;\"]}"],["{\"selector\":\"body.modal-open[style=\\\"padding-right: 17px;\\\"]\",\"action\":[\"style\",\"overflow: visible!important; padding-right: 0px!important;\"]}"],["{\"selector\":\"#hide\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".content #src_iframe\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".content #video\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body #fullbanner-container\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"[style=\\\"text-align: center; display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto!important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto!important;\"]}"],["{\"selector\":\"body .adblock_warning:not(#style_important)\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#bannerGames\",\"action\":[\"style\",\"height: 2px!important;\"]}","{\"selector\":\".adstopo\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"div[id^=\\\"src_iframe_\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"]];

const hostnamesMap = new Map([["foros.3dgames.com.ar",0],["lavoz.com.ar",1],["adrenaline.com.br",2],["adrianeboneck.com.br",3],["bolsadevalores.club",3],["androidapktop.com",3],["cheirinhobao.com",3],["dicasfinanceirasbr.com",3],["osmtecnologico.com",3],["receitasdochico.life",3],["decorabolos.net",3],["futlances.net",3],["gastronomiabrasileira.net",3],["receitasdalu.net",3],["dicadesaude.online",3],["receitasdahora.online",3],["legacyfun.site",3],["blog.clarocombomais.com.br",4],["radioagricultura.cl",4],["mantrazscan.com",4],["gamestorrents.one",4],["gamesviatorrent.top",4],["buscalinks.xyz",4],["oplanetatv.clickgratis.com.br",5],["ouniversodatv.com",5],["climaaovivo.com.br",6],["decorardicas.com.br",7],["loucasporcabelos.com.br",7],["diariodepernambuco.com.br",8],["diariodoiguacu.com.br",9],["estadao.com.br",10],["expressodaspraias.com.br",[11,12]],["journaldemontreal.com",11],["gamersboard.com.br",13],["eletronicabr.com",13],["mundocracking.net",13],["ggames.com.br",14],["despistaos.es",14],["hardware.com.br",15],["inforchannel.com.br",16],["mundoconectado.com.br",17],["oceans14.com.br",18],["tudogostoso.com.br",19],["uol.com.br",20],["jc.ne10.uol.com.br",21],["oantagonista.uol.com.br",22],["goovie.co",23],["androidayuda.com",[24,25]],["gamerzona.com",24],["hardzone.es",24],["softzone.es",24],["adslzone.tv",[24,25]],["antoniomote.com",26],["asialiveaction.com",27],["bellareceitas.com",28],["diariodecasamento.com",[28,32]],["empregovaga.com",[28,32]],["flashreceitas.com",[28,32]],["grandnoticias.com",28],["modaestiloeafins.com",[28,32]],["portalmundocurioso.com",[28,32]],["receitasabores.com",[28,32]],["resenhasglobais.com",[28,32,56]],["turismoeviagem.com",[28,32]],["vidadeatletas.com",[28,32]],["tecword.info",[28,32,56]],["blotz.me",[28,32]],["belezaedieta.net",[28,32]],["blogdatecnologia.net",[28,32]],["culinariadochef.net",28],["eusaudavel.net",[28,32]],["gameszoom.net",28],["manualdamulher.net",[28,32]],["cardapiodavovo.online",[28,32]],["financashoje.online",[28,32]],["financasnow.online",[28,32]],["globalnoticias.online",28],["noticiasfitness.online",[28,32]],["noticiastecnologica.online",[28,32]],["receitasdamamae.online",[28,32]],["tudoemprego.online",[28,32]],["vivercomsaude.online",[28,32,56]],["muitasreceitas.site",28],["receitasdomundo.site",[28,32]],["tecnologiaonline.site",28],["smartdoing.tech",[28,32,56]],["fazendorendaextra.xyz",28],["manchetehoje.xyz",[28,32,56]],["cienradios.com",29],["clavejuegos.com",30],["depor.com",31],["mundotecnologias.com",32],["dicasgostosas.com",33],["guiafinancas.net",33],["guianoticiario.net",[33,56]],["receitasdaora.online",33],["elchapuzasinformatico.com",34],["elperiodico.com",35],["felizemforma.com",36],["folhadoslagos.com",37],["formulatv.com",38],["futbolfantasy.com",39],["gamevicio.com",40],["hartico.com",41],["infobae.com",42],["infoescola.com",43],["iptvvall.com",44],["knightnoscanlation.com",45],["lavanguardia.com",46],["lecturas.com",47],["mangahost1.com",48],["mangahost2.com",[48,49]],["mangahost4.com",[48,49]],["mangahostbr.com",48],["mangahosted.com",[48,49]],["yesmangas1.com",[48,49]],["mangahostbr.net",48],["mastercuriosidadesbr.com",50],["navegacom.com",51],["pcbolsa.com",52],["profesionalreview.com",53],["radiotormentamx.com",[54,55]],["televall.website",54],["seodiv.com",57],["seriesretro.com",58],["windowsblogitalia.com",59],["xerifetech.com",60],["zona-leros.com",61],["zonammorpg.com",62],["20minutos.es",63],["canarias7.es",64],["hoy.es",64],["lasprovincias.es",64],["geeknetic.es",65],["netmentor.es",66],["todalamusica.es",67],["visioncloud.ga",68],["kshowes.net",69],["sejasaudavel.net",70],["sudoroot.net",71],["tecnoblog.net",72],["comandotorrents.org",73],["mundotec.pro",74],["jornaleconomico.pt",75],["meocloud.pt",76],["visao.sapo.pt",77],["superanimes.site",78],["clubinvest.top",79]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
