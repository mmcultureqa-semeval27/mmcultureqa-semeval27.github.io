---
title: "Tasks"
description: "Task definitions, language tracks, and evaluation for the MMCultureQA SemEval 2027 shared task."
---

# Tasks

<p class="lead-box">Given an image and a question about its content, a system generates an
open-ended answer that is grounded in the image and appropriate to the language and culture
of the question.</p>

<p class="buttons">
  <a class="btn" href="{{ site.dataset_url }}" rel="noopener" target="_blank">Get the data</a>
  <a class="btn secondary" href="/participate/">Participate</a>
</p>

## Overview

Answers are free text rather than multiple choice, so they must be semantically
appropriate, grounded in the visual content, and sensitive to the relevant linguistic and
cultural context. The question is presented either as speech or as text, across English and
Arabic varieties. Systems are scored on how closely their answer matches the reference
meaning.

## The two tasks

The shared task has two tasks. Both take an image and a question and produce an open-ended
answer; they differ only in how the question is provided. You may enter either task or both.

| Task | Input | Output |
| --- | --- | --- |
| Task 1: Spoken Visual QA | Image and spoken question (audio) | Open-ended answer (text) |
| Task 2: Textual Visual QA | Image and textual question (text) | Open-ended answer (text) |

**Task 1 (Spoken Visual QA)** tests semantic understanding when the question is presented
as speech.

**Task 2 (Textual Visual QA)** uses the same questions as text, which removes the effect of
speech recognition errors.

## Language tracks

Each task is offered as a separate track for each language variety, and systems are ranked
per track. English and Modern Standard Arabic are confirmed; Egyptian Arabic and Levantine
Arabic are planned, with more to follow.

## Evaluation

Because answers are open-ended, scoring rewards semantic equivalence rather than exact
wording.

- **Official ranking: BERTScore F1.** Captures answers that mean the same thing even when
  the wording differs.
- **Auxiliary: BLEU and ROUGE.** Reported as lexical-overlap metrics for context, not used
  for the official ranking.
- **Supplementary: LLM-based analysis.** May be reported for submitted systems as
  additional analysis. It is not the official ranking metric.

The official evaluation script will be released with the data so you can reproduce scores
locally before submitting on CodaBench. When you are ready, see
[Participate](/participate/) for registration and submission.
