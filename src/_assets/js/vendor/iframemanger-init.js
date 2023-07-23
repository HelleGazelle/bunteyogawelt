(function () {
  const im = iframemanager();

  // Example with youtube embed
  im.run({
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
})();
