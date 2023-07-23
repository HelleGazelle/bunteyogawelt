// obtain plugin
var cc = initCookieConsent();

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

  categories: {
    necessary: {
      readOnly: false,
      enabled: false,
    },

    analytics: {
      services: {
        airtable: {
          label: "Airtable form Embed",
          onAccept: () => im.acceptService("airtable"),
          onReject: () => im.rejectService("airtable"),
        },
        googlemaps: {
          label: "GoogleMaps iframe",
          onAccept: () => im.acceptService("googlemaps"),
          onReject: () => im.rejectService("googlemaps"),
        },
      },
    },

    //   ads: {},
  },

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
  },

  onAccept: function (cookie) {
    // ...
  },

  onChange: function (cookie, changed_preferences) {
    // ...
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
                col1: "im_airtable", // match all cookies starting with "_ga"
                col2: "Airtable",
                col3: "Wird verwendet, um sich daran zu erinnern, ob der Benutzer den Airtable-Dienst akzeptiert hat.",
              },
              {
                col1: "im_googlemaps", // match all cookies starting with "_ga"
                col2: "GoogleMaps",
                col3: "Wird verwendet, um sich daran zu erinnern, ob der Benutzer den GoogleMaps-Dienst akzeptiert hat.",
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
