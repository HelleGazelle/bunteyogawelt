---
title: Preise
subtitle: Die Zahlung für die Kurse erfolgt im Voraus für einen 10er Block.
layout: "layouts/base.njk"
---

<div class="">
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center flex justify-center">
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-primary">
        <div class="card-header py-3 text-bg-primary border-primary">
          <h4 class="my-0 fw-normal">Standard</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">120€<small class="text-body-secondary fw-light"> pro 10er Block</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Ein Kind</li>
            <li>10 Kurse a 60 Minuten</li>
            <li>Jeden Mittwoch</li>
            <li>Ohne Begleitung der Eltern</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-primary" onclick="location.href='/register'">Zur Anmeldung</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-secondary">
        <div class="card-header py-3 text-bg-secondary border-secondary">
          <h4 class="my-0 fw-normal">Geschwister</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">220€<small class="text-body-secondary fw-light"> pro 10er Block</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Für zwei Geschwister</li>
            <li>10 Kurse a 60 Minuten</li>
            <li>Jeden Mittwoch</li>
            <li>Ohne Begleitung der Eltern</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-secondary" onclick="location.href='/register'">Zur Anmeldung</button>
        </div>
      </div>
    </div>
  </div>
</div>
