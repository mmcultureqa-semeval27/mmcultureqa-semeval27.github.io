---
title: "Participate"
kicker: "Get Involved"
summary: "Everything you need to enter MMCultureQA, from registration through submission and the system description paper."
description: "How to participate in MMCultureQA SemEval 2027: registration, data, submission on CodaBench, rules, FAQ, and contact."
---

<!-- Steps -->
<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">How it works</span>
      <h2>From sign-up to submission in six steps</h2>
      <p class="lede">Participation is open and free. Enter one track or both, in any of the four language varieties.</p>
    </div>
    <div class="steps reveal">
      <div class="step">
        <div>
          <h3>Register</h3>
          <p>Sign up on the submission platform and accept the dataset usage terms. The registration link will be posted here before the data release.</p>
        </div>
      </div>
      <div class="step">
        <div>
          <h3>Get the data</h3>
          <p>Start with the sample set (from 15 July 2026) to preview the format, then download the full training and development data (from 1 September 2026).</p>
        </div>
      </div>
      <div class="step">
        <div>
          <h3>Build your system</h3>
          <p>Develop a model for Track 1 (spoken), Track 2 (textual), or both, across whichever language varieties you choose.</p>
        </div>
      </div>
      <div class="step">
        <div>
          <h3>Evaluate locally</h3>
          <p>Use the official evaluation script to measure BERTScore F1 (plus BLEU and ROUGE) before you submit.</p>
        </div>
      </div>
      <div class="step">
        <div>
          <h3>Submit on CodaBench</h3>
          <p>During the evaluation phase (10 to 31 January 2027), submit your predictions on the official CodaBench competition.</p>
        </div>
      </div>
      <div class="step">
        <div>
          <h3>Write it up</h3>
          <p>Submit a system description paper for the SemEval 2027 proceedings and present your work at the workshop.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Platform & resources -->
<section class="section section--raised">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Platform &amp; resources</span>
      <h2>Where everything will live</h2>
      <p class="lede">Links are activated as each resource becomes available, so check back or join the mailing list.</p>
    </div>
    <div class="grid cols-3">
      <article class="card lift reveal">
        <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17l6-6-6-6M12 19h8"/></svg></div>
        <h3>Submission platform <span class="pill pill--gold">Soon</span></h3>
        <p>Submissions are planned through <strong>CodaBench</strong>. The competition link and submission format will be posted here.</p>
      </article>
      <article class="card lift reveal">
        <div class="card-icon sky"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/></svg></div>
        <h3>Starter kit &amp; baselines <span class="pill pill--gold">Soon</span></h3>
        <p>A starter kit with data loaders, baseline systems, and the official evaluation script will be released with the data.</p>
      </article>
      <article class="card lift reveal">
        <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg></div>
        <h3>System papers</h3>
        <p>Participants are encouraged to submit a system description paper, published in the SemEval 2027 proceedings.</p>
      </article>
    </div>
  </div>
</section>

<!-- Rules at a glance -->
<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Rules at a glance</span>
      <h2>The essentials</h2>
      <p class="lede">Full rules ship with the starter kit. The basics:</p>
    </div>
    <dl class="factlist reveal">
      <div><dt>Eligibility</dt><dd>Open and free to everyone: individuals and teams, academia and industry.</dd></div>
      <div><dt>Tracks &amp; languages</dt><dd>Participate in any subset: a single track, a single language, or all of them.</dd></div>
      <div><dt>Ranking metric</dt><dd>Planned official ranking by BERTScore F1, reported per track and per language.</dd></div>
      <div><dt>External resources</dt><dd>Pretrained models and public data are generally permitted; document them in your paper. Any limits will be stated at release.</dd></div>
      <div><dt>Data license</dt><dd>CC&nbsp;BY-NC-SA&nbsp;4.0, for non-commercial research use.</dd></div>
    </dl>
  </div>
</section>

{% include timeline.html
   section_class="section--raised"
   eyebrow="Plan ahead"
   title="Deadlines to put in your calendar" %}

{% include faq.html
   id="faq"
   eyebrow="Questions"
   title="Frequently asked questions" %}

<!-- Contact -->
<section class="section section--raised" id="contact">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Stay in touch</span>
      <h2>Contact &amp; updates</h2>
    </div>
    <div class="callout reveal">
      <span class="ico">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
      </span>
      <p>
        A participant <strong>mailing list</strong> is being set up and will be linked here soon, and it will carry every
        announcement about data, baselines, and submission. In the meantime, reach the team via the
        <a href="{{ '/organizers/' | relative_url }}">organizers</a> page, and watch the
        <a href="{{ '/' | relative_url }}">home page news feed</a>.
      </p>
    </div>
  </div>
</section>
