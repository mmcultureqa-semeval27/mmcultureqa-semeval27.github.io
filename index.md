---
title: "Home"
description: "SemEval 2027 shared task on multilingual multimodal cultural question answering: open-ended visual question answering in English and Arabic varieties, with spoken and textual questions."
---

# Welcome to MMCultureQA 2027

MMCultureQA is a [SemEval 2027](https://semeval.github.io/SemEval2027/) shared task on visual question answering in multiple languages. A system is given an image and a question about it, and has to write a short, open-ended answer. The question can be spoken or typed, and it comes in multiple languages.


What makes the task hard is cultural grounding. Many questions are about the food, places, customs, and objects, so the right answer often depends on local knowledge rather than on what is plainly visible in the image.

## Tasks

The shared task has two tasks, each offered as a separate track per language variety. You may enter either task or both.

- **Task 1: Spoken Visual QA** generates an answer to a spoken (audio) question about an image.
- **Task 2: Textual Visual QA** answers the same question presented as text.

See the [Tasks](/tasks/) page for the full definition, and the [OASIS](/oasis/) page for the dataset the shared task is built on.

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

## Contact

Registration is open: [sign up using the registration form]({{ site.registration_url }}).
For full details on taking part, see the [Participate](/participate/) page. A participant mailing list is being set up and will be linked here, and for other questions you can contact the [organizers](/organizers/).
