---
title: "Data"
kicker: "Dataset"
summary: "The shared task draws on OASIS, a large-scale multimodal dataset of images paired with spoken and textual question and answer instances from across the MENA region."
description: "The OASIS dataset behind MMCultureQA SemEval 2027: scale, composition, instance format, license, and access."
---

<section class="section">
  <div class="container">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">About OASIS</span>
        <h2>A culturally rich, multimodal foundation</h2>
        <p>
          <strong>OASIS</strong> is a large-scale multimodal dataset containing images paired with
          spoken and textual question and answer instances, collected across <strong>18 countries</strong>
          in the MENA region. It spans a broad range of everyday and cultural content, organized into
          9 categories and 31 sub-categories.
        </p>
        <p>
          The shared-task subset is selected from OASIS to preserve diversity across language variety,
          country, and modality, while keeping participation practical for teams with modest
          computational resources. Final release counts will be confirmed with the data release.
        </p>
      </div>
      <figure class="split-media reveal">
        <img src="{{ '/assets/images/oasis_sample.png' | relative_url }}" alt="Overview of the OASIS dataset: languages and dialects, modality setups, and coverage across MENA countries.">
        <figcaption>OASIS pairs each image with spoken and textual questions across Arabic varieties and English.</figcaption>
      </figure>
    </div>
  </div>
</section>

{% include stats.html
   section_class="section--raised"
   eyebrow="Scale of OASIS"
   title="The source dataset, by the numbers"
   lede="The shared-task subset is a diverse, practical slice of this larger resource." %}

<!-- Composition -->
<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Composition</span>
      <h2>What the data covers</h2>
      <p class="lede">Diversity is preserved deliberately along several axes.</p>
    </div>
    <div class="grid cols-4">
      <article class="card lift reveal">
        <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg></div>
        <h3>4 varieties</h3>
        <p>English, Modern Standard, Egyptian, and Levantine Arabic.</p>
      </article>
      <article class="card lift reveal">
        <div class="card-icon sky"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10z"/><circle cx="12" cy="11" r="2.5"/></svg></div>
        <h3>18 countries</h3>
        <p>Broad geographic coverage across the MENA region.</p>
      </article>
      <article class="card lift reveal">
        <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 15l-5-4-9 7"/></svg></div>
        <h3>2 modalities</h3>
        <p>Each question is available as both audio and text.</p>
      </article>
      <article class="card lift reveal">
        <div class="card-icon sky"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg></div>
        <h3>9 categories</h3>
        <p>Organized into 9 categories and 31 sub-categories of content.</p>
      </article>
    </div>
  </div>
</section>

<!-- Instance format -->
<section class="section section--raised">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Format</span>
      <h2>What a single instance looks like</h2>
      <p class="lede">Exact file formats and field names will be documented in the starter kit at release.</p>
    </div>
    <dl class="factlist reveal">
      <div><dt>Image</dt><dd>One image that the question refers to.</dd></div>
      <div><dt>Question (Track 1)</dt><dd>A spoken question, supplied as an audio clip in the instance's language variety.</dd></div>
      <div><dt>Question (Track 2)</dt><dd>A textual question: the same wording presented as text.</dd></div>
      <div><dt>Reference answer</dt><dd>An open-ended gold answer used for evaluation.</dd></div>
      <div><dt>Metadata</dt><dd>Language variety and country, supporting per-language and per-track analysis.</dd></div>
    </dl>
  </div>
</section>

<!-- License & access -->
<section class="section">
  <div class="container">
    <div class="grid cols-2">
      <article class="card reveal">
        <div class="card-icon sky"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></div>
        <h3>License</h3>
        <p>The shared-task dataset is planned for release under the <strong>CC&nbsp;BY-NC-SA&nbsp;4.0</strong> license, for non-commercial research use with attribution and share-alike.</p>
      </article>
      <article class="card reveal">
        <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg></div>
        <h3>Access</h3>
        <p>Data, the starter kit, baseline systems, and the official evaluation script will be linked from the <a href="{{ '/participate/' | relative_url }}">Participate</a> page as each becomes available. Watch the <a href="{{ '/' | relative_url }}#">news feed</a> for release announcements.</p>
      </article>
    </div>
  </div>
</section>

{% include cta.html
   title="Want to be first to the data?"
   text="Sample data is scheduled for 15 July 2026. Register your interest so you're ready on day one."
   primary_label="Participate"
   primary_url="/participate/"
   secondary_label="Read the task"
   secondary_url="/tasks/" %}
