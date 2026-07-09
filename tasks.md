---
title: "Tasks & Evaluation"
lede: "Two tasks with a shared goal: open-ended answers to questions about images, appropriate to the language and culture of the asker."
description: "Task definitions, language tracks, and evaluation for the MMCultureQA SemEval 2027 shared task."
---

## Task definition

Given an image and a question about its content, a system produces a **short, open-ended
answer**. Answers are free text rather than multiple choice, so they must be semantically
correct, grounded in the visual content, and appropriate to the linguistic and cultural
context of the question. Many questions draw on local knowledge about food, places, customs,
and objects that is not spelled out in the image itself.

## The two tasks

Every question in the dataset exists in two forms, audio and text. Both tasks use the same
images and the same questions; they differ only in how the question is provided. You may
enter either task or both.

| Task | Input | Output |
| --- | --- | --- |
| **Task 1: Spoken Visual QA** | Image + spoken question (audio) | Open-ended answer (text) |
| **Task 2: Textual Visual QA** | Image + written question (text) | Open-ended answer (text) |

Task 1 tests end-to-end understanding when the question arrives as speech. Task 2 removes
speech recognition from the equation and isolates multimodal, culturally grounded reasoning.

## Language tracks

Each task is offered as a separate track per language, and systems are ranked per track.
You can enter a single track, several, or all of them.

<ul class="chip-row">
  <li><span class="chip confirmed">English</span></li>
  <li><span class="chip confirmed">Modern Standard Arabic</span></li>
  <li><span class="chip">Dialectal Arabic</span></li>
  <li><span class="chip">Bangla</span></li>
  <li><span class="chip">Hindi</span></li>
  <li><span class="chip">Assamese</span></li>
  <li><span class="chip">Urdu</span></li>
  <li><span class="chip">More planned</span></li>
</ul>

<p class="chip-note">Highlighted languages are confirmed for the first data release; the
others are planned and will follow in the same format.</p>

## Evaluation

Because answers are open-ended, scoring rewards meaning rather than exact wording.

<div class="metric-cards">
  <div class="metric-card official">
    <span class="metric-badge">Official ranking</span>
    <h3>BERTScore F1</h3>
    <p>Measures semantic similarity to the reference, so answers that mean the same thing score well even when the wording differs.</p>
  </div>
  <div class="metric-card">
    <span class="metric-badge">Auxiliary</span>
    <h3>BLEU &amp; ROUGE</h3>
    <p>Lexical-overlap metrics reported for context. Not used for the ranking.</p>
  </div>
  <div class="metric-card">
    <span class="metric-badge">Supplementary</span>
    <h3>LLM-based analysis</h3>
    <p>May be reported for submitted systems as additional analysis. Not used for the ranking.</p>
  </div>
</div>

The official evaluation script is released together with the data, so you can reproduce the
ranking metric locally before submitting. Submissions run on CodaBench during the evaluation
phase; see [Participate](/participate/) for the full workflow.
