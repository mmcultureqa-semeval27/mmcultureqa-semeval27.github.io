---
title: "Dataset"
lede: "The shared task is inspired by OASIS dataset: images paired with spoken and written questions and open-ended answers."
description: "MMCultureQA SemEval 2027 shared task dataset."
ctas: [dataset]
schema_type: "Dataset"
priority: 0.9
changefreq: weekly
---

## Dataset

For the **MMCultureQA SemEval 2027** shared task, we are curating language-specific datasets for all participating tracks.

The datasets for **English, Modern Standard Arabic (MSA), Egyptian Arabic, and Levantine Arabic** are derived from **[OASIS](https://arxiv.org/pdf/2510.06371)**, where each image is paired with culturally grounded questions and open-ended answers in both spoken and written form.

For the remaining languages, we follow the same **EverydayMMQA** data-development pipeline used to curate **OASIS**. The data covers **9 broad cultural topic categories and 31 sub-categories**, including culturally grounded concepts related to places, food, traditions, everyday objects, and social practices.

Language-specific datasets will be **released gradually throughout the shared-task preparation period and before the evaluation phase**. Participants should check this page, the [timeline](/#dates), and the Hugging Face repository for the latest releases.

Below is an example of an image and its associated multimodal QA record.


<!-- <ul class="stat-grid"> -->
  <!-- <li><b>18</b><span>countries covered</span></li> -->
  <!-- <li><b>9</b><span>topic categories</span></li> -->
  <!-- <li><b>31</b><span>sub-categories</span></li> -->
  <!-- <li><b>4</b><span>language varieties</span></li> -->
<!-- </ul> -->

<div class="record">
  <div class="record-head">
    <span class="record-title">Sample record</span>
    <span class="record-mods">image · audio · text</span>
  </div>
  <div class="record-body">
    <div class="record-media">
      <img src="{{ '/assets/images/sample-item-2.jpg' | relative_url }}" alt="The National Museum of Qatar, its interlocking discs inspired by the desert rose" loading="lazy">
    </div>
    <dl class="record-fields">
      <div class="field">
        <dt>question_en</dt>
        <dd>What is the name of the building shown in the image, and what inspired its design?</dd>
      </div>
      <div class="field">
        <dt>question_ar</dt>
        <dd dir="rtl" lang="ar">ما اسم المبنى الموضح في الصورة، وما الذي ألهم تصميمه؟</dd>
      </div>
      <div class="field">
        <dt>question_audio</dt>
        <dd><span class="wave" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span> <span class="wave-note">the same question, spoken</span></dd>
      </div>
      <div class="field">
        <dt>answer_en</dt>
        <dd>The building is the National Museum of Qatar, and its design is inspired by desert rose formations.</dd>
      </div>
      <div class="field">
        <dt>answer_ar</dt>
        <dd dir="rtl" lang="ar">المبنى هو متحف قطر الوطني، وتصميمه مستوحى من تشكيلات الورود الصحراوية.</dd>
      </div>
    </dl>
  </div>
</div>

<p class="sample-cap">The same question as audio and as text, in English and Arabic
varieties; the target is a short open-ended answer.
Photo: <a href="https://commons.wikimedia.org/wiki/File:Nmoq.jpg" rel="noopener" target="_blank">Msarg77</a>,
<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="noopener" target="_blank">CC BY-SA 4.0</a>.</p>

## Getting the data

The shared-task datasets are hosted on [Hugging Face](<{{ site.dataset_url }}>).

Data for individual languages will be **released progressively**, rather than all at once. Please check the [timeline](/#dates) and the Hugging Face repository regularly for the availability of each language-specific dataset.

All language tracks are expected to have the required data available before the corresponding evaluation phase.

## License

The shared-task dataset is planned for release under the **CC BY-NC-SA 4.0** license: free for non-commercial research use, with attribution and share-alike.

## Citation

If you use the **MMCultureQA** shared-task data, please cite the relevant dataset papers listed below. We will continue to add citations for newly released language-specific datasets as they become available.

{% raw %}

```
@article{alam2025everydaymmqa,
  title = {{OASIS}: A Multilingual and Multimodal Dataset for Culturally Grounded Spoken Visual QA},
  author = {Alam, Firoj and Shahroor, Ali Ezzat and Hasan, Md. Arid and Ali, Zien Sheikh and Bhatti, Hunzalah Hassan and Kmainasi, Mohamed Bayan and Chowdhury, Shammur Absar and Mousi, Basel and Dalvi, Fahim and Durrani, Nadir and Milic-Frayling, Natasa},
  journal = {arXiv preprint arXiv:2510.06371},
  year = {2025}
}

```
{% endraw %}
