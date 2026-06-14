---
title: "Participate"
description: "How to participate in MMCultureQA SemEval 2027: registration, data, submission on CodaBench, rules, and FAQ."
---

# Participate

<p class="lead-box">Participation is open and free to individuals and teams from academia
and industry. Enter one track or both, in any of the four language varieties.</p>

<p class="buttons">
  <a class="btn" href="{{ site.registration_url }}" rel="noopener" target="_blank">Register</a>
  <a class="btn secondary" href="{{ site.dataset_url }}" rel="noopener" target="_blank">Get the dataset</a>
</p>

## How to Take Part

1. **Register.** Sign up using the [registration form]({{ site.registration_url }}) and
   accept the dataset usage terms.
2. **Get the data.** The dataset is hosted on [Hugging Face]({{ site.dataset_url }}). Start
   with the sample set (from 15 July 2026) to preview the format, then download the full
   training and development data (from 1 September 2026).
3. **Build your system.** Develop a model for Track 1 (spoken), Track 2 (textual), or both,
   across whichever language varieties you choose.
4. **Evaluate locally.** Use the official evaluation script to measure BERTScore F1 (plus
   BLEU and ROUGE) before you submit.
5. **Submit on CodaBench.** During the evaluation phase (10 to 31 January 2027), submit your
   predictions on the official competition.
6. **Write it up.** Submit a system description paper for the SemEval 2027 proceedings and
   present your work at the workshop.

## Submission

Submissions are planned through **CodaBench**. The competition link, the submission format,
and the official evaluation script will be posted here when the evaluation phase opens. A
starter kit with data loaders and baseline systems will be released with the data.

## Rules

Full rules ship with the starter kit. The essentials:

- **Eligibility:** open and free to everyone, individuals and teams alike.
- **Tracks and languages:** enter any subset, a single track, a single language, or all of them. Systems are ranked per track and per language.
- **Ranking:** planned official ranking by BERTScore F1.
- **External resources:** pretrained models and public data are generally permitted; document them in your paper. Any limits will be stated at release.
- **Data license:** CC BY-NC-SA 4.0, for non-commercial research use.

## Frequently Asked Questions

{% for item in site.data.faq %}
<details class="faq-item">
  <summary>{{ item.q }}</summary>
  <div class="faq-body"><p>{{ item.a }}</p></div>
</details>
{% endfor %}

## Contact

A participant mailing list is being set up and will be linked here; it will carry every
announcement about data, baselines, and submission. In the meantime, reach the team on the
[organizers](/organizers/) page and watch the [home page](/) for updates.
