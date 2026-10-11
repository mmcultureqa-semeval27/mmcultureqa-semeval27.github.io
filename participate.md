---
title: "Participate"
lede: "Participation is open and free to individuals and teams from academia and industry. Enter one task or both, in any of the language tracks."
description: "How to participate in MMCultureQA SemEval 2027: registration, data, the code repository, submission, and rules."
ctas: [register, github, slack]
priority: 0.9
changefreq: weekly
---

## How it works

<ol class="steps">
  <li>Fill in the <a href="{{ site.registration_url }}" rel="noopener" target="_blank">registration form</a> and accept the dataset usage terms.</li>
  <li>Download the tracks you want from <a href="{{ site.dataset_url }}" rel="noopener" target="_blank">Hugging Face</a>. MENA train and dev data is out now; the other tracks follow the <a href="/#dates">timeline</a>.</li>
  <li>Build a system for Task 1 (spoken), Task 2 (textual), or both, in whichever language tracks you choose.</li>
  <li>Check your scores locally with the <a href="{{ site.github_url }}/tree/main/scorer" rel="noopener" target="_blank">scorer</a>, and validate your file with the <a href="{{ site.github_url }}/tree/main/format_checker" rel="noopener" target="_blank">format checker</a>.</li>
  <li>Upload your predictions during the evaluation phase. The submission link is coming soon.</li>
  <li>Describe your system in a paper for the SemEval 2027 proceedings and present it at the workshop.</li>
</ol>

## Code

The [code repository]({{ site.github_url }}) holds everything you need to run and check a system:

<ul class="repo-links">
  <li><a href="{{ site.github_url }}/tree/main/data" rel="noopener" target="_blank"><b>data</b></a> download the tracks from Hugging Face</li>
  <li><a href="{{ site.github_url }}/tree/main/baselines" rel="noopener" target="_blank"><b>baselines</b></a> a runnable starting point</li>
  <li><a href="{{ site.github_url }}/tree/main/scorer" rel="noopener" target="_blank"><b>scorer</b></a> the official ranking metric, so you can reproduce your score</li>
  <li><a href="{{ site.github_url }}/tree/main/format_checker" rel="noopener" target="_blank"><b>format checker</b></a> validate a submission file before you upload it</li>
</ul>

## Submission

<p class="soon-note"><span class="soon-badge">Coming soon</span> The submission link and the exact file format will be posted here, and announced on <a href="{{ site.slack_url }}" rel="noopener" target="_blank">Slack</a>, when the evaluation phase opens.</p>

## Rules

The full rules ship with the [code repository]({{ site.github_url }}). The essentials:

- Enter any subset. Systems are ranked per task and per track.
- The official ranking metric is BERTScore F1, described under
  [Evaluation](/tasks/#evaluation).
- Pretrained models and public external data are permitted; document what you used. Any
  limits will be stated at the data release.
- The data is licensed for non-commercial research use; see
  [the dataset page](/oasis/#license).

## Questions?

Ask in the [community Slack]({{ site.slack_url }}) or contact the [organizers](/organizers/).
