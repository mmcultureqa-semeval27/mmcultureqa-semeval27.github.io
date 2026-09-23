---
title: "Tasks & Evaluation"
lede: "Open-ended answers to questions about images, in the language the question was asked in."
description: "Task definitions, language tracks, and evaluation for the MMCultureQA SemEval 2027 shared task."
priority: 0.9
changefreq: weekly
---

## Task definition

Given an image and a question about it, a system produces a **short, open-ended answer** in
the language of the question. Answers are free text, so they must be semantically correct,
grounded in the image, and right for its cultural context.

## The two tasks

Every question exists in two forms, audio and text. Both tasks use the same images and
questions, and differ only in how the question arrives.

| Task | Input | Output |
| --- | --- | --- |
| **Task 1: Spoken Visual QA** | Image + spoken question (audio) | Open-ended answer (text) |
| **Task 2: Textual Visual QA** | Image + written question (text) | Open-ended answer (text) |


## Language tracks

Each task is a separate track per language, ranked per track. Eighteen language varieties are
planned, and you can enter any subset.

<ul class="chip-row">
  {% for l in site.data.languages %}
  <li><span class="chip">{{ l.name }}</span></li>
  {% endfor %}
</ul>


## Evaluation

Because answers are open-ended, scoring rewards meaning rather than exact wording.

<div class="metric-cards">
  <div class="metric-card official">
    <span class="metric-badge">Official ranking</span>
    <h3>BERTScore F1</h3>
    <p>Semantic similarity to the reference, so the wording can differ.</p>
  </div>
  <div class="metric-card">
    <span class="metric-badge">Auxiliary</span>
    <h3>BLEU &amp; ROUGE</h3>
    <p>Lexical overlap, reported for context. Not used for the ranking.</p>
  </div>
  <div class="metric-card">
    <span class="metric-badge">Supplementary</span>
    <h3>LLM-based analysis</h3>
    <p>May be reported as extra analysis. Not used for the ranking.</p>
  </div>
</div>

The official evaluation script ships with the data, so you can reproduce the ranking locally.
Submissions run on CodaBench; see [Participate](/participate/) for the workflow.
