---
title: "Participate"
lede: "Participation is open and free to individuals and teams from academia and industry. Enter one task or both, in any of the language tracks."
description: "How to participate in MMCultureQA SemEval 2027: registration, data, submission on CodaBench, and rules."
ctas: [register, slack]
priority: 0.9
changefreq: weekly
---

## How it works

<ol class="steps">
  <li>Fill in the <a href="{{ site.registration_url }}" rel="noopener" target="_blank">registration form</a> and accept the dataset usage terms.</li>
  <li>Download the tracks you want from <a href="{{ site.dataset_url }}" rel="noopener" target="_blank">Hugging Face</a>. Training and development data for the MENA region is out now; the remaining language tracks follow on the schedule in the <a href="/#dates">timeline</a>.</li>
  <li>Build a system for Task 1 (spoken), Task 2 (textual), or both, in whichever language tracks you choose.</li>
  <li>Check your scores locally with the evaluation script that ships with the data, so your numbers match ours.</li>
  <li>Upload your predictions to the CodaBench competition during the evaluation phase.</li>
  <li>Describe your system in a paper for the SemEval 2027 proceedings and present it at the workshop.</li>
</ol>

## Submission

Submissions run through **CodaBench**. The competition link and the exact submission format
will be posted here when the evaluation phase opens. A starter kit with data loaders,
baseline systems, and the scorer is released together with the training data.

## Rules

The full rules ship with the starter kit. The essentials:

- Enter any subset: one task or both, one language track or all of them. Systems are ranked
  per task and per track.
- The official ranking metric is BERTScore F1, described under
  [Evaluation](/tasks/#evaluation).
- Pretrained models and public external data are generally permitted; document what you used
  in your system paper. Any limits will be stated at the data release.
- The data is licensed for non-commercial research use; see
  [the dataset page](/oasis/#license).

## Questions?

Ask in the [community Slack]({{ site.slack_url }}), where announcements about data,
baselines, and submission land first, or contact the [organizers](/organizers/).
