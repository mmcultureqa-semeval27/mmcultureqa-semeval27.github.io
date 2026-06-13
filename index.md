---
layout: default
title: "Home"
description: "MMCultureQA SemEval 2027 shared task on multilingual and multimodal culturally grounded question answering."
hide_title: true
---

{% include hero.html %}

<section class="section">
  <div class="container two-column">
    <div class="content">
      <p class="eyebrow">Overview</p>
      <h2>Shared Task Description</h2>
      <p>
        MMCultureQA focuses on culturally grounded spoken visual question answering. Each instance pairs an image with a question in spoken or textual form, and systems must generate an open-ended answer that is semantically appropriate, visually grounded, and sensitive to the relevant linguistic and cultural context.
      </p>
      <p>
        The task targets a gap in current evaluation: culturally grounded QA is often text-only, while spoken QA and visual reasoning are usually evaluated separately. This shared task brings these signals together for English and Arabic varieties.
      </p>
    </div>
    <figure class="media-panel">
      <img src="{{ '/assets/images/oasis_sample.png' | relative_url }}" alt="OASIS example showing a visual question answering instance">
      <figcaption>Example visual grounding material from OASIS.</figcaption>
    </figure>
  </div>
</section>

{% include updates.html %}

{% include deadlines.html %}
