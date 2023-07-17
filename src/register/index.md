---
title: Zum Kurs anmelden
layout: "layouts/base.njk"
---

<div class="flex justify-center">
    <!-- The iframe will be inserted here -->
    <!-- <div id="iframePlaceholder"></div> -->
    <div id="iframePlaceholder" class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalChoice">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-3 shadow">
                <div class="modal-body p-4 text-center">
                    <h5 class="mb-4">Cookie-Einstellungen bearbeiten</h5>
                    <p class="mb-4">Wenn du 'OK' klickst, stimmst du zu, dass das Anmeldeformular geladen wird, welches Browser Cookies für Tracking nutzt. Nähere Informationen dazu finden Sie in unseren <a href="https://bunteyogawelt.de/privacy">Datenschutzbestimmungen</a>. Ohne Cookies ist die Nutzung der Anmelde Funktion leider nicht möglich.</br></br>Stimmst du zu?</p>
                    <button id="loadIframeButton" class="btn btn-lg btn-primary">Zustimmen und Anmelde Formular laden</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    // JavaScript event listener for the button
    document.getElementById("loadIframeButton").addEventListener("click", function() {
        // Load the Airtable iframe
        var iframeContainer = document.getElementById("iframePlaceholder");
        iframeContainer.innerHTML = '<iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/appuemWY2xynXWJKt/shrB9yLVSxeZ9yDMr?backgroundColor=purple" frameborder="0" onmousewheel="" width="100%" height="1965" style="background: transparent; border: 1px solid #ccc;"></iframe>';
    })

</script>
