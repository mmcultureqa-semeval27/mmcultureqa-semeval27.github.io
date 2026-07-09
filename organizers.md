---
title: "Organizers"
lede: "MMCultureQA is organized by researchers at the Qatar Computing Research Institute (HBKU) together with partners at the University of Toronto, MEF University, and Macquarie University."
description: "The team organizing the MMCultureQA SemEval 2027 shared task."
---

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

<p>For anything task-related, the fastest way to reach us is the <a href="{{ site.slack_url }}" rel="noopener" target="_blank">community Slack</a>.</p>
