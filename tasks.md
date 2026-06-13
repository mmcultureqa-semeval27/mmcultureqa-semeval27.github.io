---
title: "Tasks"
kicker: "Task Definition"
summary: "The shared task evaluates open-ended answer generation from images paired with spoken or textual questions."
description: "Task tracks, dataset, evaluation metrics, and participation details for MMCultureQA SemEval 2027."
---

## Tracks

- **Track 1: Spoken Visual Question Answering.** Given an image and a language-specific spoken question about its content, generate an open-ended answer that is semantically appropriate and grounded in the visual content.
- **Track 2: Textual Visual Question Answering.** Given an image and a language-specific textual question about its content, generate an open-ended answer that is semantically appropriate and grounded in the visual content.

Both tracks are offered in English, Modern Standard Arabic, Egyptian Arabic, and Levantine Arabic. Track 1 tests semantic understanding when the question is presented as speech, while Track 2 offers a text-based condition that reduces the impact of speech recognition errors.

## Dataset

The shared task will use a subset of OASIS, a large-scale multimodal dataset containing images paired with spoken and textual question-answer instances. OASIS contains approximately 0.92M images, 14.8M QA pairs, and 3.7M spoken questions collected across 18 countries in the MENA region.

The shared-task subset will be selected to preserve diversity across language variety, country, and modality while keeping participation practical for teams with modest computational resources. Final release counts will be confirmed with the data release.

## Evaluation

Systems generate open-ended answers. BLEU and ROUGE will be reported as auxiliary lexical-overlap metrics. The official ranking metric is planned to be the F1 variant of BERTScore, which better captures semantically equivalent answers with different surface forms.

LLM-based evaluation may be reported as supplementary analysis for final submitted systems, but it is not planned as the official ranking metric.

## Participation

The official submission platform is planned for CodaBench. Data, starter-kit resources, baseline systems, and the official evaluation script will be linked here when they are available.

## License

The shared-task dataset is planned for release under the CC BY-NC-SA 4.0 license.
