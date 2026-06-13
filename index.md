---
layout: default
title: "Home"
description: "A SemEval 2027 shared task on multilingual, multimodal, culturally grounded question answering over images, with spoken and textual questions in English and Arabic varieties."
---

{% include hero.html %}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">The challenge</span>
        <h2>Three signals, one task<span class="dot">.</span></h2>
        <p>
          <strong>MMCultureQA</strong> is about culturally grounded spoken and visual question
          answering. Every instance pairs an image with a question, asked by voice or in writing,
          and a system has to produce an open-ended answer that fits the picture and respects the
          local language and culture.
        </p>
        <p>
          Today these abilities are tested in isolation. Culturally grounded QA is usually text
          only, while spoken QA and visual reasoning live in separate benchmarks. We put them in
          one place, for English and three Arabic varieties.
        </p>
        <a class="btn btn--ghost" href="{{ '/tasks/' | relative_url }}">
          See the full task
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>

      <div class="grid reveal" style="gap:16px">
        <article class="card lift">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 15l-5-4-9 7"/></svg>
          </div>
          <h3>Multimodal</h3>
          <p>Reason over an image together with a question that arrives as speech or as text.</p>
        </article>
        <article class="card lift">
          <div class="card-icon sky">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>
          </div>
          <h3>Multilingual</h3>
          <p>English alongside Modern Standard, Egyptian, and Levantine Arabic.</p>
        </article>
        <article class="card lift">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10z"/><circle cx="12" cy="11" r="2.5"/></svg>
          </div>
          <h3>Culturally grounded</h3>
          <p>Answers have to respect local knowledge and context across 18 MENA countries.</p>
        </article>
      </div>
    </div>
  </div>
</section>

{% include stats.html
   section_class="section--raised"
   eyebrow="By the numbers"
   title="Built on OASIS"
   lede="The shared-task subset is drawn from OASIS, one of the largest multimodal Arabic resources to date." %}

{% include tracks.html
   eyebrow="Tracks"
   title="Two ways to ask a question"
   lede="Enter one track or both. Each is offered in all four language varieties." %}

{% include languages.html
   section_class="section--raised"
   eyebrow="Coverage"
   title="Four language varieties"
   lede="Track 1 tests understanding from speech. Track 2 uses the same questions as text, so speech recognition errors stay out of the picture." %}

{% include timeline.html
   eyebrow="Timeline"
   title="Key dates" %}

{% include news.html
   section_class="section--raised"
   eyebrow="News"
   title="Latest updates" %}

{% include cta.html %}
