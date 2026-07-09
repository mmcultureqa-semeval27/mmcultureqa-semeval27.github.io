---
layout: home
title: "Home"
description: "MMCultureQA, a SemEval 2027 shared task on culturally grounded visual question answering: open-ended answers to spoken and written questions about images, across many languages."
---

<section class="home-section" id="task">
  <div class="container">
    <p class="kicker">The task</p>
    <h2>Vision alone is not enough</h2>
    <p class="section-intro">Questions cover food, places, customs, and everyday objects, so the right answer often depends on cultural knowledge rather than plain visual recognition. Every question exists in two forms, audio and text, which gives the shared task its two tasks:</p>
    <div class="task-cards">
      <a class="task-card" href="/tasks/">
        <span class="task-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg></span>
        <p class="task-num">Task 1</p>
        <h3>Spoken Visual QA</h3>
        <p class="task-io"><span>Image + spoken question</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span>Short text answer</span></p>
        <p>Answer a question asked as audio, testing multimodal understanding directly from speech.</p>
        <span class="more">Task details →</span>
      </a>
      <a class="task-card" href="/tasks/">
        <span class="task-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></span>
        <p class="task-num">Task 2</p>
        <h3>Textual Visual QA</h3>
        <p class="task-io"><span>Image + written question</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span>Short text answer</span></p>
        <p>Answer the same question presented as text, with speech recognition taken out of the picture.</p>
        <span class="more">Task details →</span>
      </a>
    </div>
    <p class="section-foot">Each task runs as a separate track per language, and you can enter any subset. See <a href="/tasks/">Tasks &amp; Evaluation</a> for the full definition and the <a href="/oasis/">OASIS dataset</a> the task is built on.</p>
  </div>
</section>

<section class="home-section" id="dates">
  <div class="container">
    <p class="kicker">Timeline</p>
    <h2>Important dates</h2>
    <p class="section-intro">All dates are tentative and will be confirmed at the data release.</p>
    {% assign now = site.time | date: "%s" | plus: 0 %}
    {% assign next_found = false %}
    <ol class="timeline">
      {% for item in site.data.deadlines %}
      {% assign t = item.iso | date: "%s" | plus: 0 %}
      {% assign cls = "" %}
      {% if item.released or t < now %}{% assign cls = "done" %}{% endif %}
      {% if t >= now and next_found == false and item.released != true %}{% assign cls = "next" %}{% assign next_found = true %}{% endif %}
      <li class="{{ cls }}">
        <p class="t-head"><strong>{{ item.date }}</strong> · {{ item.label }}{% if cls == "next" %}<span class="tag-next">Next</span>{% endif %}{% if item.released %}<a class="t-link" href="{{ site.dataset_url }}" rel="noopener" target="_blank">Available →</a>{% endif %}</p>
        {% if item.note %}<p class="t-note">{{ item.note }}</p>{% endif %}
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="home-section" id="news">
  <div class="container">
    <p class="kicker">News</p>
    <h2>Latest updates</h2>
    <ul class="updates">
      {% for u in site.data.updates %}
      <li>
        <span class="u-date">{{ u.date }}</span>
        <div>
          <span class="u-title">{{ u.title }}</span>
          <p class="u-text">{{ u.text }}{% if u.link %} <a href="{{ u.link }}" rel="noopener" target="_blank">{{ u.link_text | default: "Learn more" }}</a>.{% endif %}</p>
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
