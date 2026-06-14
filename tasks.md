---
title: "Task"
kicker: "Task Definition"
summary: "Generate open-ended answers to spoken or textual questions about images, grounded in language and culture."
description: "Tracks, example walkthrough, languages, and evaluation for the MMCultureQA SemEval 2027 shared task."
---

<!-- Overview + example -->
<section class="section">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">Overview</span>
        <h2>What systems must do</h2>
        <p>
          Given an <strong>image</strong> and a <strong>question</strong> about its content, a system
          generates an open-ended answer. Answers are free-form text, not multiple choice, so they
          must be semantically appropriate, grounded in the visual content, and sensitive to the
          relevant linguistic and cultural context.
        </p>
        <p>
          The question arrives either as <strong>speech</strong> (Track 1) or as <strong>text</strong>
          (Track 2), in one of four language varieties. Systems are scored on how well their answer
          matches the reference meaning.
        </p>
        <div class="pill-row">
          <span class="pill pill--blue">Open-ended generation</span>
          <span class="pill">Visual grounding</span>
          <span class="pill">Cultural sensitivity</span>
        </div>
      </div>
      <figure class="split-media reveal">
        <img src="{{ '/assets/images/oasis_sample.png' | relative_url }}" alt="An OASIS example showing an image, a spoken and textual question in Arabic and English, and the expected answer.">
        <figcaption>A worked example: the same image is queried by voice and by text; the system returns one grounded, open-ended answer.</figcaption>
      </figure>
    </div>
  </div>
</section>

{% include tracks.html
   section_class="section--raised"
   eyebrow="Tracks"
   title="The two tracks"
   lede="Both tracks are offered in all four language varieties. You may enter either track, or both." %}

{% include languages.html
   eyebrow="Languages &amp; dialects"
   title="One English, three Arabics"
   lede="Dialectal variation is central to the task, so systems should handle the differences between Modern Standard, Egyptian, and Levantine Arabic." %}

<!-- Evaluation -->
<section class="section section--raised" id="evaluation">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Evaluation</span>
      <h2>How answers are scored</h2>
      <p class="lede">Because answers are open-ended, ranking rewards semantic equivalence rather than exact wording.</p>
    </div>
    <div class="grid cols-3">
      <div class="metric reveal">
        <span class="tag official">Official ranking</span>
        <h3>BERTScore F1</h3>
        <p>The planned official metric. It captures answers that are semantically equivalent even when the surface form differs.</p>
      </div>
      <div class="metric reveal">
        <span class="tag aux">Auxiliary</span>
        <h3>BLEU &amp; ROUGE</h3>
        <p>Reported alongside as lexical-overlap metrics for additional context, but not used for the official ranking.</p>
      </div>
      <div class="metric reveal">
        <span class="tag supp">Supplementary</span>
        <h3>LLM-based analysis</h3>
        <p>May be reported as supplementary analysis for final submitted systems. It is not planned as the official ranking metric.</p>
      </div>
    </div>
    <div class="callout reveal" style="margin-top:24px">
      <span class="ico">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>
      </span>
      <p>The official evaluation script will be released with the data so you can reproduce scores locally before submitting on CodaBench.</p>
    </div>
  </div>
</section>

{% include cta.html
   title="Get set up to compete"
   text="Head to the Participate page for registration, the submission platform, and the starter kit."
   primary_label="How to participate"
   primary_url="/participate/"
   secondary_label="See the dataset"
   secondary_url="/data/" %}
