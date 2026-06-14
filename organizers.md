---
title: "Organizers"
description: "The team organizing the MMCultureQA SemEval 2027 shared task."
---

# Organizers

MMCultureQA is organized by researchers at the Qatar Computing Research Institute (HBKU),
the University of Toronto, MEF University, and Macquarie University.

<ul class="org-grid">
  {% for person in site.data.organizers.main %}
  <li>
    <img src="{{ person.thumb | relative_url }}" alt="{{ person.name }}" loading="lazy">
    <p class="org-name">
      {% if person.link %}<a href="{{ person.link }}" rel="noopener" target="_blank">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}
    </p>
    {% if person.affiliation %}<p class="org-affil">{{ person.affiliation }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
