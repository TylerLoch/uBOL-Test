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

/* eslint-disable indent */
/* global cloneInto */

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedClickElement = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [[".didomi-continue-without-agreeing","","1000"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],[":is(.didomi-continue-without-agreeing, #didomi-notice-disagree-button)","","2000"],["button.cassie-reject-all","","1000"],[".almacmp-button--settings, #purposeConsents1, #purposeConsents2, #purposeConsents3, #purposeConsents4, #purposeConsents5, #purposeConsents6, #purposeConsents7, #purposeConsents8, #purposeConsents9, #purposeConsents10, #purposeConsents11, #specialFeatureConsents1, #specialFeatureConsents2, #almacmp-save-layer2"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pg-shadow-host >>> #pg-configure-btn, #pg-shadow-host >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-shadow-host >>> button#pg-save-preferences-btn"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],[".gdpr-btn.small-right, .thirdlayer .gdpr-btn-lbl"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-non-targeted-ad\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["span.didomi-continue-without-agreeing","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[title*=\"Zustimmen\"]","","1000"],["#acceptAllMain","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Alle Akzeptieren\"]","","1000"],["button[title=\"Alle akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"]];

const hostnamesMap = new Map([["auto.it",0],["consent.youtube.com",[1,2]],["sourcepointcmp.bloomberg.com",[3,4,5]],["sourcepointcmp.bloomberg.co.jp",[3,4,5]],["giga.de",5],["cmpv2.standard.co.uk",[6,7]],["cmpv2.independent.co.uk",[8,9,10]],["wetransfer.com",[11,12]],["spiegel.de",13],["www.nytimes.com",14],["consent.yahoo.com",15],["tumblr.com",16],["fplstatistics.co.uk",17],["e-shop.leonidas.com",18],["cdn.privacy-mgmt.com",[19,20,37,38,39,76,82,84,90,95,113,115,116,117]],["festoolcanada.com",21],["dr-beckmann.com",21],["consent.ladbible.com",[22,23]],["consent.unilad.com",[22,23]],["consent.gamingbible.com",[22,23]],["consent.sportbible.com",[22,23]],["consent.tyla.com",[22,23]],["consent.ladbiblegroup.com",[22,23]],["m2o.it",24],["deejay.it",24],["capital.it",24],["ilmattino.it",[24,25]],["leggo.it",[24,25]],["libero.it",24],["tiscali.it",24],["consent-manager.ft.com",[26,27]],["tf1info.fr",30],["uber.com",31],["ubereats.com",31],["lego.com",32],["ai.meta.com",33],["publicsenat.fr",34],["lilly.com",35],["ampparit.com",36],["arvopaperi.fi",36],["iltalehti.fi",36],["kauppalehti.fi",36],["mediuutiset.fi",36],["mikrobitti.fi",36],["talouselama.fi",36],["tekniikkatalous.fi",36],["tivi.fi",36],["uusisuomi.fi",36],["digi24.ro",40],["digisport.ro",40],["digitalfoundry.net",40],["egx.net",40],["eurogamer.it",40],["mail.com",40],["mcmcomiccon.com",40],["nintendolife.com",40],["oe24.at",40],["paxsite.com",40],["player.pl",40],["purexbox.com",40],["pushsquare.com",40],["starwarscelebration.com",40],["thehaul.com",40],["timeextension.com",40],["travelandleisure.com",40],["tunein.com",40],["videoland.com",40],["wizzair.com",40],["wetter.at",40],["dicebreaker.com",[41,42]],["eurogamer.cz",[41,42]],["eurogamer.es",[41,42]],["eurogamer.net",[41,42]],["eurogamer.nl",[41,42]],["eurogamer.pl",[41,42]],["eurogamer.pt",[41,42]],["gamesindustry.biz",[41,42]],["jelly.deals",[41,42]],["reedpop.com",[41,42]],["rockpapershotgun.com",[41,42]],["thepopverse.com",[41,42]],["vg247.com",[41,42]],["videogameschronicle.com",[41,42]],["eurogamer.de",43],["roadtovr.com",44],["mundodeportivo.com",45],["m.youtube.com",46],["www.youtube.com",46],["corriere.it",47],["gazzetta.it",47],["oggi.it",47],["cmp.sky.it",48],["tennisassa.fi",49],["formula1.com",50],["f1racing.pl",51],["consent-pref.trustarc.com",53],["highlights.legaseriea.it",54],["calciomercato.com",54],["sosfanta.com",55],["wetter.com",58],["youmath.it",59],["pip.gov.pl",60],["forbes.com",61],["mediaset.it",62],["fortune.com",63],["cmp.dpgmedia.nl",[64,66]],["cmp.dpgmedia.be",[64,66]],["cmp.ad.nl",[64,66]],["cmp.autotrack.nl",[64,66]],["cmp.autoweek.nl",[64,66]],["cmp.bd.nl",[64,66]],["cmp.bndestem.nl",[64,66]],["cmp.demorgen.be",[64,66]],["cmp.deondernemer.nl",[64,66]],["cmp.destentor.nl",[64,66]],["cmp.ed.nl",[64,66]],["cmp.gaspedaal.nl",[64,66]],["cmp.gelderlander.nl",[64,66]],["cmp.hln.be",[64,66]],["cmp.humo.be",[64,66]],["cmp.margriet.nl",[64,66]],["cmp.nu.nl",[64,66]],["cmp.qmusic.nl",[64,66]],["cmp.stijlvol-wonen.com",[64,66]],["cmp.trouw.nl",[64,66]],["cmp.tubantia.nl",[64,66]],["cmp.vtwonen.be",[64,66]],["cmp.vtwonen.nl",[64,66]],["cmp.pzc.nl",[64,66]],["cmp.zozitdat.nl",[64,66]],["cmp-sp.vrt.be",[65,66]],["myprivacy.dpgmedia.nl",67],["dpgmediagroup.com",67],["story.nl",67],["veronicasuperguide.nl",67],["ilrestodelcarlino.it",68],["quotidiano.net",68],["lanazione.it",68],["ilgiorno.it",68],["iltelegrafolivorno.it",68],["frandroid.com",69],["nutri-plus.de",70],["aa.com",71],["consent.capital.fr",72],["programme-tv.net",72],["cmp.e24.no",[73,74]],["cmp.vg.no",[73,74]],["huffingtonpost.fr",75],["geopop.it",77],["fanpage.it",77],["rainews.it",78],["remarkable.com",79],["netzwelt.de",80],["money.it",81],["cmp.computerbild.de",83],["cmp-sp.siegener-zeitung.de",83],["cmp-sp.sportbuzzer.de",83],["eneco.nl",85],["deichmann.com",86],["blackpoolgazette.co.uk",87],["lep.co.uk",87],["northamptonchron.co.uk",87],["scotsman.com",87],["shieldsgazette.com",87],["thestar.co.uk",87],["portsmouth.co.uk",87],["sunderlandecho.com",87],["northernirelandworld.com",87],["3addedminutes.com",87],["anguscountyworld.co.uk",87],["banburyguardian.co.uk",87],["bedfordtoday.co.uk",87],["biggleswadetoday.co.uk",87],["bucksherald.co.uk",87],["burnleyexpress.net",87],["buxtonadvertiser.co.uk",87],["chad.co.uk",87],["daventryexpress.co.uk",87],["derbyshiretimes.co.uk",87],["derbyworld.co.uk",87],["derryjournal.com",87],["dewsburyreporter.co.uk",87],["doncasterfreepress.co.uk",87],["falkirkherald.co.uk",87],["fifetoday.co.uk",87],["glasgowworld.com",87],["halifaxcourier.co.uk",87],["harboroughmail.co.uk",87],["harrogateadvertiser.co.uk",87],["hartlepoolmail.co.uk",87],["hemeltoday.co.uk",87],["hucknalldispatch.co.uk",87],["lancasterguardian.co.uk",87],["leightonbuzzardonline.co.uk",87],["lincolnshireworld.com",87],["liverpoolworld.uk",87],["londonworld.com",87],["lutontoday.co.uk",87],["manchesterworld.uk",87],["meltontimes.co.uk",87],["miltonkeynes.co.uk",87],["newcastleworld.com",87],["newryreporter.com",87],["newsletter.co.uk",87],["northantstelegraph.co.uk",87],["northumberlandgazette.co.uk",87],["nottinghamworld.com",87],["peterboroughtoday.co.uk",87],["rotherhamadvertiser.co.uk",87],["stornowaygazette.co.uk",87],["surreyworld.co.uk",87],["thescarboroughnews.co.uk",87],["thesouthernreporter.co.uk",87],["totallysnookered.com",87],["wakefieldexpress.co.uk",87],["walesworld.com",87],["warwickshireworld.com",87],["wigantoday.net",87],["worksopguardian.co.uk",87],["yorkshireeveningpost.co.uk",87],["yorkshirepost.co.uk",87],["eurocard.com",88],["saseurobonusmastercard.se",89],["tver.jp",91],["linkedin.com",92],["elmundo.es",93],["mapillary.com",94],["cmp.seznam.cz",96],["raiplay.it",97],["derstandard.at",98],["derstandard.de",98],["ansa.it",99],["delladio.it",99],["huffingtonpost.it",99],["lastampa.it",99],["movieplayer.it",99],["multiplayer.it",99],["repubblica.it",99],["tomshw.it",99],["tuttoandroid.net",99],["tuttotech.net",99],["ilgazzettino.it",100],["ilmessaggero.it",100],["ilsecoloxix.it",100],["privacy.motorradonline.de",101],["dailystar.co.uk",[102,103,104,105]],["mirror.co.uk",[102,103,104,105]],["jeuxvideo.com",106],["idnes.cz",107],["20minutos.es",108],["20minutes.fr",108],["24sata.hr",108],["abc.es",108],["actu.fr",108],["autopista.es",108],["belfasttelegraph.co.uk",108],["bonduelle.it",108],["bonniernews.se",108],["cadenaser.com",108],["ciclismoafondo.es",108],["cnews.fr",108],["cope.es",108],["decathlon.nl",108],["decathlon.pl",108],["diepresse.com",108],["dnevnik.hr",108],["dumpert.nl",108],["ebuyclub.com",108],["edreams.de",108],["edreams.net",108],["elcomercio.es",108],["elconfidencial.com",108],["eldesmarque.com",108],["elespanol.com",108],["elpais.com",108],["elpais.es",108],["engadget.com",108],["euronews.com",108],["expressen.se",108],["france24.com",108],["ghacks.net",108],["gva.be",108],["hbvl.be",108],["krone.at",108],["kurier.at",108],["lalibre.be",108],["ledauphine.com",108],["lejdd.fr",108],["lexpress.fr",108],["libremercado.com",108],["marmiton.org",108],["metronieuws.nl",108],["nicematin.com",108],["nieuwsblad.be",108],["numerama.com",108],["radiofrance.fr",108],["rankia.com",108],["rfi.fr",108],["rossmann.pl",108],["rtbf.be",108],["rtl.lu",108],["science-et-vie.com",108],["sensacine.com",108],["shure.com",108],["silicon.es",108],["sncf-connect.com",108],["sport.es",108],["techcrunch.com",108],["telegraaf.nl",108],["telequebec.tv",108],["trailrun.es",108],["meteofrance.com",109],["ryobitools.eu",[110,111]],["americanexpress.com",112],["golem.de",113],["antena3.com",114],["antena3internacional.com",114],["atresmedia.com",114],["atresmediapublicidad.com",114],["atresmediastudios.com",114],["atresplayer.com",114],["correryfitness.com",114],["europafm.com",114],["flooxernow.com",114],["lasexta.com",114],["melodia-fm.com",114],["ondacero.es",114],["1und1.de",119],["infranken.de",120],["cmp.chip.de",121],["cmp.petbook.de",122],["estadiodeportivo.com",123],["kicker.de",124],["formulatv.com",125],["web.de",126],["lefigaro.fr",127],["linternaute.com",128],["consent.caminteresse.fr",129],["volksfreund.de",130],["dailypost.co.uk",131],["the-express.com",131],["tarife.mediamarkt.de",132],["saturn.de",133]]);

const entitiesMap = new Map([["consent.google",1],["festool",21],["hertz",28],["mediamarkt",29],["gmx",40],["music.amazon",52],["chrono24",[56,57]],["americanairlines",71],["degiro",118]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedClickElement(
    selectors = '',
    extraMatch = '',
    delay = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('trusted-click-element', selectors, extraMatch, delay);

    if ( extraMatch !== '' ) {
        const assertions = extraMatch.split(',').map(s => {
            const pos1 = s.indexOf(':');
            const s1 = pos1 !== -1 ? s.slice(0, pos1) : s;
            const not = s1.startsWith('!');
            const type = not ? s1.slice(1) : s1;
            const s2 = pos1 !== -1 ? s.slice(pos1+1).trim() : '';
            if ( s2 === '' ) { return; }
            const out = { not, type };
            const match = /^\/(.+)\/(i?)$/.exec(s2);
            if ( match !== null ) {
                out.re = new RegExp(match[1], match[2] || undefined);
                return out;
            }
            const pos2 = s2.indexOf('=');
            const key = pos2 !== -1 ? s2.slice(0, pos2).trim() : s2;
            const value = pos2 !== -1 ? s2.slice(pos2+1).trim() : '';
            out.re = new RegExp(`^${this.escapeRegexChars(key)}=${this.escapeRegexChars(value)}`);
            return out;
        }).filter(details => details !== undefined);
        const allCookies = assertions.some(o => o.type === 'cookie')
            ? getAllCookiesFn()
            : [];
        const allStorageItems = assertions.some(o => o.type === 'localStorage')
            ? getAllLocalStorageFn()
            : [];
        const hasNeedle = (haystack, needle) => {
            for ( const { key, value } of haystack ) {
                if ( needle.test(`${key}=${value}`) ) { return true; }
            }
            return false;
        };
        for ( const { not, type, re } of assertions ) {
            switch ( type ) {
            case 'cookie':
                if ( hasNeedle(allCookies, re) === not ) { return; }
                break;
            case 'localStorage':
                if ( hasNeedle(allStorageItems, re) === not ) { return; }
                break;
            }
        }
    }

    const getShadowRoot = elem => {
        // Firefox
        if ( elem.openOrClosedShadowRoot ) {
            return elem.openOrClosedShadowRoot;
        }
        // Chromium
        if ( typeof chrome === 'object' ) {
            if ( chrome.dom && chrome.dom.openOrClosedShadowRoot ) {
                return chrome.dom.openOrClosedShadowRoot(elem);
            }
        }
        return null;
    };

    const querySelectorEx = (selector, context = document) => {
        const pos = selector.indexOf(' >>> ');
        if ( pos === -1 ) { return context.querySelector(selector); }
        const outside = selector.slice(0, pos).trim();
        const inside = selector.slice(pos + 5).trim();
        const elem = context.querySelector(outside);
        if ( elem === null ) { return null; }
        const shadowRoot = getShadowRoot(elem);
        return shadowRoot && querySelectorEx(inside, shadowRoot);
    };

    const selectorList = selectors.split(/\s*,\s*/)
        .filter(s => {
            try {
                void querySelectorEx(s);
            } catch(_) {
                return false;
            }
            return true;
        });
    if ( selectorList.length === 0 ) { return; }

    const clickDelay = parseInt(delay, 10) || 1;
    const t0 = Date.now();
    const tbye = t0 + 10000;
    let tnext = selectorList.length !== 1 ? t0 : t0 + clickDelay;

    const terminate = ( ) => {
        selectorList.length = 0;
        next.stop();
        observe.stop();
    };

    const next = notFound => {
        if ( selectorList.length === 0 ) {
            safe.uboLog(logPrefix, 'Completed');
            return terminate();
        }
        const tnow = Date.now();
        if ( tnow >= tbye ) {
            safe.uboLog(logPrefix, 'Timed out');
            return terminate();
        }
        if ( notFound ) { observe(); }
        const delay = Math.max(notFound ? tbye - tnow : tnext - tnow, 1);
        next.timer = setTimeout(( ) => {
            next.timer = undefined;
            process();
        }, delay);
        safe.uboLog(logPrefix, `Waiting for ${selectorList[0]}...`);
    };
    next.stop = ( ) => {
        if ( next.timer === undefined ) { return; }
        clearTimeout(next.timer);
        next.timer = undefined;
    };

    const observe = ( ) => {
        if ( observe.observer !== undefined ) { return; }
        observe.observer = new MutationObserver(( ) => {
            if ( observe.timer !== undefined ) { return; }
            observe.timer = setTimeout(( ) => {
                observe.timer = undefined;
                process();
            }, 20);
        });
        observe.observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    };
    observe.stop = ( ) => {
        if ( observe.timer !== undefined ) {
            clearTimeout(observe.timer);
            observe.timer = undefined;
        }
        if ( observe.observer ) {
            observe.observer.disconnect();
            observe.observer = undefined;
        }
    };

    const process = ( ) => {
        next.stop();
        if ( Date.now() < tnext ) { return next(); }
        const selector = selectorList.shift();
        if ( selector === undefined ) { return terminate(); }
        const elem = querySelectorEx(selector);
        if ( elem === null ) {
            selectorList.unshift(selector);
            return next(true);
        }
        safe.uboLog(logPrefix, `Clicked ${selector}`);
        elem.click();
        tnext += clickDelay;
        next();
    };

    runAtHtmlElementFn(process);
}

function getAllCookiesFn() {
    return document.cookie.split(/\s*;\s*/).map(s => {
        const pos = s.indexOf('=');
        if ( pos === 0 ) { return; }
        if ( pos === -1 ) { return `${s.trim()}=`; }
        const key = s.slice(0, pos).trim();
        const value = s.slice(pos+1).trim();
        return { key, value };
    }).filter(s => s !== undefined);
}

function getAllLocalStorageFn(which = 'localStorage') {
    const storage = self[which];
    const out = [];
    for ( let i = 0; i < storage.length; i++ ) {
        const key = storage.key(i);
        const value = storage.getItem(key);
        return { key, value };
    }
    return out;
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { trustedClickElement(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_trustedClickElement();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_trustedClickElement = cloneInto([
            [ '(', uBOL_trustedClickElement.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_trustedClickElement);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_trustedClickElement;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
