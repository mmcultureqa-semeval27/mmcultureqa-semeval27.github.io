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
  <li>Download the tracks you want from <a href="{{ site.dataset_url }}" rel="noopener" target="_blank">Hugging Face</a>. Seventeen tracks have train, dev and devtest data; the rest follow the <a href="/#dates">timeline</a>.</li>
  <li>Build a system for Task 1 (spoken), Task 2 (textual), or both, in whichever language tracks you choose.</li>
  <li>Check your scores locally with the <a href="{{ site.github_url }}/tree/main/scorer" rel="noopener" target="_blank">scorer</a>, and validate your file with the <a href="{{ site.github_url }}/tree/main/format_checker" rel="noopener" target="_blank">format checker</a>.</li>
  <li>Upload your devtest predictions now, and your test predictions during the evaluation phase, on the <a href="#submission">submission platform for your task</a>.</li>
  <li>Submit a system description paper for the SemEval 2027 proceedings (required for every team) and present it at the workshop.</li>
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

Upload your predictions through the corresponding task page:

- [Task 1: Spoken Visual QA](https://eval.qcri.org/web/challenges/challenge-page/1/overview)
- [Task 2: Textual Visual QA](https://eval.qcri.org/web/challenges/challenge-page/2/overview)

**Note:** The dev-test phase is open now for all seventeen released tracks; pick your language in the Language field when you upload. The test phase opens with the evaluation period in January.

### Submission tutorial

<figure>
  <video controls playsinline preload="none" width="1910" height="1080" aria-labelledby="submission-tutorial" poster="{{ '/assets/videos/submission-tutorial.jpg' | relative_url }}">
    <source src="{{ '/assets/videos/submission-tutorial.mp4' | relative_url }}" type="video/mp4">
  </video>
  <figcaption>See how to upload predictions and view the leaderboard (1:48). <a href="{{ '/assets/videos/submission-tutorial.mp4' | relative_url }}" download>Download the MP4</a>.</figcaption>
</figure>

## Rules

The full rules ship with the [code repository]({{ site.github_url }}). The essentials:

- Enter any subset. Systems are ranked per task and per track.
- The official ranking metric is BERTScore F1, described under
  [Evaluation](/tasks/#evaluation).
- **Open-weight models only.** Any architecture, pipeline, fine-tuning or prompting setup is
  allowed, as long as every model in your system has publicly released weights. You may run
  them yourself or call them through a hosted API. Closed models such as GPT, Gemini or Claude
  are not allowed.
- Public external data is permitted. Document every model and dataset you used.
- **A system description paper is mandatory.** Every participating team must submit one after
  the evaluation period.
- The data is licensed for non-commercial research use; see
  [the dataset page](/oasis/#license).

## Questions?

Ask in the [community Slack]({{ site.slack_url }}) or contact the [organizers](/organizers/).
