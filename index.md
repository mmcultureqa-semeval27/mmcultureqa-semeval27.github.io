---
title: "Home"
description: "SemEval 2027 shared task on multilingual multimodal cultural question answering: open-ended visual question answering in English and Arabic varieties, with spoken and textual questions."
---

# MMCultureQA 2027

<p class="lead-box">A <a href="https://semeval.github.io/SemEval2027/" rel="noopener" target="_blank">SemEval 2027</a> shared task on culturally grounded visual question answering. A system is given an image and a question about it, and writes a short, open-ended answer. The question can be spoken or typed, in English or Arabic.</p>

<p class="buttons">
  <a class="btn" href="{{ site.registration_url }}" rel="noopener" target="_blank">Register</a>
  <a class="btn secondary" href="{{ site.dataset_url }}" rel="noopener" target="_blank">Get the data</a>
  <a class="btn secondary" href="{{ site.slack_url }}" rel="noopener" target="_blank">Join the Slack</a>
</p>

What makes the task hard is cultural grounding: many questions are about food, places, customs, and objects, so the right answer often depends on local knowledge rather than on what is plainly visible in the image.

There are two tasks, and you may enter either or both:

- **Task 1 — Spoken Visual QA:** answer a spoken (audio) question about an image.
- **Task 2 — Textual Visual QA:** answer the same question presented as text.

See the [Tasks](/tasks/) page for the full definition and evaluation, the [OASIS](/oasis/) page for the dataset, and [Participate](/participate/) for how to take part.

## Important Dates

All dates are tentative and will be confirmed at the data release.

{% assign now = site.time | date: "%s" | plus: 0 %}{% assign next_found = false %}
<ul class="date-list">
  {% for item in site.data.deadlines %}{% assign t = item.iso | date: "%s" | plus: 0 %}
  <li><strong>{{ item.date }}:</strong> {{ item.label }}{% if item.released %} <a class="date-link" href="{{ site.dataset_url }}" rel="noopener" target="_blank">Find here</a>{% endif %}{% if t >= now and next_found == false and item.released != true %} <span class="tag-next">Next</span>{% assign next_found = true %}{% endif %}</li>
  {% endfor %}
</ul>

## Recent Updates

<ul class="update-list">
  {% for u in site.data.updates %}
  <li><strong>{{ u.date }}:</strong> {{ u.text }}{% if u.link %} <a href="{{ u.link }}" rel="noopener" target="_blank">{{ u.link_text | default: "Learn more" }}</a>.{% endif %}</li>
  {% endfor %}
</ul>

## Stay in Touch

[Join our Slack]({{ site.slack_url }}) for announcements, questions, and discussion — it is the best place to keep up with the task. For anything else, reach the [organizers](/organizers/).
