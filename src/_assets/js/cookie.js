import "./vendor/iframemanager";
import "./vendor/cookieconsent";

// obtain iframemanager object
var manager = iframemanager();

// obtain cookieconsent plugin
var cc = initCookieConsent();

manager.run({
  currLang: "de",

  services: {
    airtable: {
      embedUrl:
        "https://airtable.com/embed/appuemWY2xynXWJKt/shrB9yLVSxeZ9yDMr?backgroundColor=purple",
      iframe: {
        allow:
          "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;",
      },
      languages: {
        de: {
          notice:
            'Dieser Inhalt wird von einem Drittanbieter gehostet. Durch das Anzeigen des externen Inhalts akzeptieren Sie die Geschäftsbedingungen von Airtable <a rel="noreferrer noopener" href="https://www.airtable.com/privacy" target="_blank">Datenschutzerklärung</a> von airtable.com',
          loadBtn: "Anmelde Formular laden",
          loadAllBtn: "Ab jetzt nicht mehr fragen",
        },
      },
      cookie: {
        name: "im_airtable", // cookie name
      },
    },
    googlemaps: {
      embedUrl: "https://www.google.com/maps/embed?pb={data-id}",

      iframe: {
        allow: "picture-in-picture; fullscreen;",
      },

      languages: {
        de: {
          notice:
            'Dieser Inhalt wird von einem Drittanbieter gehostet. Durch das Anzeigen des externen Inhalts akzeptieren Sie die Geschäftsbedingungen von Google Maps <a rel="noreferrer noopener" href="https://cloud.google.com/maps-platform/terms" target="_blank">Datenschutzerklärung</a> von Google Maps.',
          loadBtn: "Google Maps laden",
          loadAllBtn: "Ab jetzt nicht mehr fragen",
        },
      },
    },
  },
});

// run plugin with your configuration
cc.run({
  current_lang: "de",
  autoclear_cookies: true, // default: false
  page_scripts: true, // default: false

  mode: "opt-out", // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  // auto_language: null                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  // force_consent: false,                   // default: false
  // hide_from_bots: true,                   // default: true
  // remove_cookie_tables: false             // default: false
  // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  // cookie_expiration: 182,                 // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0

  gui_options: {
    consent_modal: {
      layout: "cloud", // box/cloud/bar
      position: "bottom center", // bottom/middle/top + left/right/center
      transition: "slide", // zoom/slide
      swap_buttons: false, // enable to invert buttons
    },
    settings_modal: {
      layout: "box", // box/bar
      position: "left", // left/right
      transition: "slide", // zoom/slide
    },
  },

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
  },

  onAccept: function (cookie) {
    // If analytics category is disabled => load all iframes automatically
    if (cc.allowedCategory("analytics")) {
      console.log("iframemanager: loading all iframes");
      manager.acceptService("all");
    }
  },

  onChange: function (cookie, changed_preferences) {
    // If analytics category is disabled => ask for permission to load iframes
    if (!cc.allowedCategory("analytics")) {
      console.log("iframemanager: disabling all iframes");
      manager.rejectService("all");
    } else {
      console.log("iframemanager: loading all iframes");
      manager.acceptService("all");
    }
  },

  languages: {
    de: {
      consent_modal: {
        title: "Wir verwenden Cookies!",
        description:
          'Hallo, diese Website verwendet unverzichtbare Cookies, um ihre ordnungsgemäße Funktion sicherzustellen, sowie Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden erst nach Ihrer Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link"> Einstellungen auswählen</button>',
        primary_btn: {
          text: "Alle akzeptieren",
          role: "accept_all", // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Alle verweigern",
          role: "accept_necessary", // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: "Cookie Einstellungen",
        save_settings_btn: "Einstellungen speichern",
        accept_all_btn: "Alle akteptieren",
        reject_all_btn: "Alle verweigern",
        close_btn_label: "Schließen",
        serviceCounterLabel: "Service|Services",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Service" },
          { col3: "Beschreibung" },
        ],
        blocks: [
          {
            title: "Verwendung von Cookies 📢",
            description:
              'Ich verwende Cookies, um die grundlegenden Funktionen der Website sicherzustellen und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sie aktivieren oder deaktivieren möchten, wann immer Sie möchten. Für weitere Details zu Cookies und anderen sensiblen Daten lesen Sie bitte die vollständige Datenschutzerklärung. <a href="/privacy" class="cc-link">Datenschutzerklärung</a>.',
          },
          {
            title: "Unbedingt erforderliche Cookies",
            description:
              "Diese Cookies sind für das ordnungsgemäße Funktionieren meiner Website unerlässlich. Ohne diese Cookies würde die Website nicht ordnungsgemäß funktionieren.",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Analytics Cookies",
            description:
              "Diese Cookies ermöglichen es der Website, sich an die Entscheidungen zu erinnern, die Sie in der Vergangenheit getroffen haben.",
            linkedCategory: "analytics",
            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              // list of all expected cookies
              {
                col1: "__Host-airtable-session",
                col2: "Airtable",
                col3: "Session ID for Airtable platform",
              },
              {
                col1: "__Host-airtable-session.sig",
                col2: "Airtable",
                col3: "Session ID for Airtable platform",
              },
              {
                col1: "AWSELB",
                col2: "Airtable",
                col3: "Load Balancing",
              },
              {
                col1: "AWSELBCORS",
                col2: "Airtable",
                col3: "Load Balancing",
              },
              {
                col1: "brw",
                col2: "Airtable",
                col3: "Session ID for debugging",
              },
              {
                col1: "_ga",
                col2: "Airtable",
                col3: "Google Analytics cookies used for analytics and service improvement",
              },
              {
                col1: "_gat",
                col2: "Airtable",
                col3: "Google Analytics cookies used for analytics and service improvement",
              },
              {
                col1: "_gat_UA-nnnnnnn-nn",
                col2: "Airtable",
                col3: "This is a pattern type cookie set by Google Analytics, where the pattern element on the name contains the unique identity number of the account or website it relates to. It appears to be a variation of the _gat cookie which is used to limit the amount of data recorded by Google on high traffic volume websites.",
              },
              {
                col1: "_gat_xxxxxxxxxxxxxxxxxxxxxxxxxx",
                col2: "Airtable",
                col3: "Google Analytics cookies used for analytics and service improvement",
              },
              {
                col1: "_gid",
                col2: "Airtable",
                col3: "Google Analytics cookies used for analytics and service improvement",
              },
              {
                col1: "_mkto_trk",
                col2: "Airtable",
                col3: "This cookie is associated with an email marketing service provided by Marketo. This tracking cookie allows a website to link visitor behaviour to the recipient of an email marketing campaign, to measure campaign effectiveness.",
              },
              {
                col1: "amplitude_cookie_test",
                col2: "Airtable",
                col3: "Amplitude cookies used to track traffic to improve the performance of our website.",
              },
              {
                col1: "amplitude_id_01c5c9182d4beaee719619af5db39310airtable.com",
                col2: "Airtable",
                col3: "Amplitude cookies to identify unique users visits in order to keep accurate web analytics.",
              },
              {
                col1: "amplitude_testairtable.com",
                col2: "Airtable",
                col3: "Amplitude cookies to identify unique users visits in order to keep accurate web analytics.",
              },
              {
                col1: "lightstep_guid%2FsharedForm",
                col2: "Airtable",
                col3: "Session ID",
              },
              {
                col1: "lightstep_guid%2FsharedViewOrApp",
                col2: "Airtable",
                col3: "Session ID",
              },
              {
                col1: "lightstep_session_id",
                col2: "Airtable",
                col3: "Session ID",
              },
              {
                col1: "mv",
                col2: "Airtable",
                col3: "Airtable uses this cookie to track website analytics and improve the performance of our website.",
              },
              {
                col1: "optimizelyDomainTestCookie",
                col2: "Airtable",
                col3: "Optimizely cookies to identify unique users visits and improve website functionality.",
              },
              {
                col1: "optimizelyEndUserId",
                col2: "Airtable",
                col3: "Optimizely cookies to identify unique users visits and improve website functionality.",
              },
              {
                col1: "optimizelyPPID",
                col2: "Airtable",
                col3: "Optimizely cookies are used to compare two versions of the same website page, allowing to improve the websites performance. ",
              },
              {
                col1: "__cfruid",
                col2: "Airtable",
                col3: "Cookie associated with sites using CloudFlare, used to identify trusted web traffic.",
              },
              {
                col1: "__zlcmid",
                col2: "Airtable",
                col3: "Store a unique user ID",
              },
              {
                col1: "_help_center_session",
                col2: "Airtable",
                col3: "This cookie aids in session for the Zendesk guide.",
              },
              {
                col1: "_zendesk_authenticated",
                col2: "Airtable",
                col3: "This cookie is used to store a binary variable determining whether a user has been authenticated.",
              },
              {
                col1: "_zendesk_session",
                col2: "Airtable",
                col3: "This cookie holds session information for root access applications.",
              },
              {
                col1: "_zendesk_shared_session",
                col2: "Airtable",
                col3: "This cookie holds session information for sharing across Zendesk applications.",
              },
              {
                col1: "ajs%3Acookies",
                col2: "Airtable",
                col3: "Track traffic to improve the functionality of our website.",
              },
              {
                col1: "ajs%3Atest",
                col2: "Airtable",
                col3: "Track traffic to improve the functionality of our website.",
              },
              {
                col1: "intercom-id-wb1whb4b",
                col2: "Airtable",
                col3: "Allows visitors to see any conversations they've had on Airtable websites.",
              },
              {
                col1: "intercom-session-wb1whb4b",
                col2: "Airtable",
                col3: "Allows users to access their conversations and have data communicated on logged out pages for 1 week.",
              },
              {
                col1: "shared_view_signup_7_day_cooldown",
                col2: "Airtable",
                col3: "Track visitor usage.",
              },
              {
                col1: "zte2095",
                col2: "Airtable",
                col3: "Zendesk cookie used to enhance the performance and functionality of the website",
              },
              {
                col1: "_fbp",
                col2: "Airtable",
                col3: "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers",
              },
              {
                col1: "ajs_group_id",
                col2: "Airtable",
                col3: "Track visitor usage and events",
              },
              {
                col1: "ajs_user_id",
                col2: "Airtable",
                col3: "Track visitor usage and events",
              },
              {
                col1: "drift_aid",
                col2: "Airtable",
                col3: "This is the anonymous identifier token. It is used to tie the visitor on your website with the profile within the Drift system. This allows Drift to remember the information that this site visitor has provided through the chat on subsequent site visits.",
              },
              {
                col1: "drift_campaign_refresh",
                col2: "Airtable",
                col3: "This is the session identifier token. It is used to tie the visitor on your website with a current website session within the Drift system. This is enables session-specific features, such as popping up a messaging only once during a 30 minute session as to prevent a disruptive experience.",
              },
              {
                col1: "driftt_aid",
                col2: "Airtable",
                col3: "This is the anonymous identifier token. It is used to tie the visitor on your website with the profile within the Drift system. This allows Drift to remember the information that this site visitor has provided through the chat on subsequent site visits.",
              },
              {
                col1: "__cf_bm",
                col2: "Airtable",
                col3: "The __cf_bm cookie is a cookie necessary to support Cloudflare Bot Management, currently in private beta. As part of our bot management service, this cookie helps manage incoming traffic that matches criteria associated with bots. ",
              },
              {
                col1: "_session_id",
                col2: "Airtable",
                col3: "This cookie creates an interim session ID used as an in-session user ID. ",
              },
              {
                col1: "BIGipServerab47web-nginx-app_https",
                col2: "Airtable",
                col3: "This cookie name is associated with the BIG-IP product suite from company F5. Usually associated with managing sessions on load balanced servers, to ensure user requests are routed consistently to the correct server. The common root is BIGipServer most commonly followed by a domain name, usually the one that it is hosted on, but not always.",
              },
              {
                col1: "eupubconsent",
                col2: "Airtable",
                col3: "This cookie is used by the IAB Europe Transparency & Consent Framework to store the user's consent to the data collection Purposes. The cookie holds an encrypted consent string that vendors participating in the framework can read and determine the user's consent. ",
              },
              {
                col1: "OptanonAlertBoxClosed",
                col2: "Airtable",
                col3: "This cookie is set by websites using certain versions of the cookie law compliance solution from OneTrust.  It is set after visitors have seen a cookie information notice and in some cases only when they actively close the notice down.  It enables the website not to show the message more than once to a user.  The cookie has a one year lifespan and contains no personal information.",
              },
              {
                col1: "OptanonConsent",
                col2: "Airtable",
                col3: "This cookie is set by the cookie compliance solution from OneTrust. It stores information about the categories of cookies the site uses and whether visitors have given or withdrawn consent for the use of each category. This enables site owners to prevent cookies in each category from being set in the users browser, when consent is not given. The cookie has a normal lifespan of one year, so that returning visitors to the site will have their preferences remembered. It contains no information that can identify the site visitor.",
              },
              {
                col1: "__gsas",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "__gpi",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "__gpi_optout",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "NID",
                col2: "Google Maps",
                col3: "Security, Analytics, Functionality, Advertising",
              },
              {
                col1: "DSID",
                col2: "Google Maps",
                col3: "Security, Functionality, Advertising",
              },
              {
                col1: "test_cookie",
                col2: "Google Maps",
                col3: "Functionality",
              },
              {
                col1: "id",
                col2: "Google Maps",
                col3: "Functionality, Advertising",
              },
              {
                col1: "__gads",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "GED_PLAYLIST_ACTIVITY",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "ACLK_DATA",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "pm_sess",
                col2: "Google Maps",
                col3: "Security, Functionality",
              },
              {
                col1: "pm_sess_NNN",
                col2: "Google Maps",
                col3: "Security, Functionality",
              },
              {
                col1: "aboutads_sessNNN",
                col2: "Google Maps",
                col3: "Security, Functionality",
              },
              {
                col1: "FPAU",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "ANID",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "AID",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "IDE",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "TAID",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "FPGCLDC",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "_gcl_dc",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "_gcl_au",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "FLC",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "RUL",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "FCCDCF",
                col2: "Google Maps",
                col3: "Functionality",
              },
              {
                col1: "FCNEC",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "FPGCLAW",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "FPGCLGB",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "_gcl_gb",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "_gac_gb_<wpid>",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "_gcl_aw",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "1P_JAR",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "Conversion",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "YSC",
                col2: "Google Maps",
                col3: "Security",
              },
              {
                col1: "VISITOR_INFO1_LIVE",
                col2: "Google Maps",
                col3: "Security, Advertising",
              },
              {
                col1: "VISITOR_INFO1_LIVE__k",
                col2: "Google Maps",
                col3: "Security, Advertising",
              },
              {
                col1: "VISITOR_INFO1_LIVE__default",
                col2: "Google Maps",
                col3: "Security, Advertising",
              },
              {
                col1: "FPLC",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_ga",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_gac_<wpid>",
                col2: "Google Maps",
                col3: "Advertising",
              },
              {
                col1: "_gid",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_gat[_<customname>]",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "__utma",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "__utmb",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "__utmc",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "__utmt",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "__utmz",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "__utmv",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "AMP_TOKEN",
                col2: "Google Maps",
                col3: "Functionality",
              },
              {
                col1: "FPID",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "GA_OPT_OUT",
                col2: "Google Maps",
                col3: "Functionality",
              },
              {
                col1: "_ga_<wpid>",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_dc_gtm_<property-id>",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_gaexp",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_gaexp_rc",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_opt_awcid",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_opt_awmid",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_opt_awgid",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_opt_awkid",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_opt_utmc",
                col2: "Google Maps",
                col3: "Analytics",
              },
              {
                col1: "_gcl_gf",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "_gcl_ha",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "PAIDCONTENT",
                col2: "Google Maps",
                col3: "Analytics, Advertising",
              },
              {
                col1: "_opt_expid",
                col2: "Google Maps",
                col3: "Analytics",
              },
            ],
          },
          // {
          //   title: "Advertisement and Targeting cookies",
          //   description:
          //     "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
          //   toggle: {
          //     value: "targeting",
          //     enabled: false,
          //     readonly: false,
          //   },
          // },
          {
            title: "Weitere Informationen",
            description:
              'Bei Fragen zu unserer Cookie-Richtlinie und Ihren Auswahlmöglichkeiten wenden Sie sich bitte <a class="cc-link" href="imprint">via Email</a>.',
          },
        ],
      },
    },
  },
});
