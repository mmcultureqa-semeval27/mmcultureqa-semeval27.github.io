---
title: "Task"
description: "Task definition, input and output format, tracks, languages, and evaluation for the MMCultureQA SemEval 2027 shared task."
---

# Task

<p class="lead-box">Given an image and a question about its content, a system generates an
open-ended answer that is grounded in the image and appropriate to the language and culture
of the question.</p>

## Overview

Answers are free text rather than multiple choice, so they must be semantically
appropriate, grounded in the visual content, and sensitive to the relevant linguistic and
cultural context. The question is presented either as speech or as text, in one of four
language varieties. Systems are scored on how closely their answer matches the reference
meaning.

## Tracks

The shared task has two tracks. Both take an image and a question and produce an open-ended
answer; they differ only in how the question is provided. You may enter either track or
both, in any of the four language varieties.

| Track | Input | Output |
| --- | --- | --- |
| Track 1: Spoken Visual QA | Image and spoken question (audio) | Open-ended answer (text) |
| Track 2: Textual Visual QA | Image and textual question (text) | Open-ended answer (text) |

**Track 1 (Spoken Visual QA)** tests semantic understanding when the question is presented
as speech.

**Track 2 (Textual Visual QA)** uses the same questions as text, which removes the effect of
speech recognition errors.

## Languages

Dialectal variation is central to the task. Systems should handle the differences between
the Arabic varieties as well as English.

| Code | Language |
| --- | --- |
| EN | English |
| MSA | Modern Standard Arabic |
| EGY | Egyptian Arabic |
| LEV | Levantine Arabic |

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
