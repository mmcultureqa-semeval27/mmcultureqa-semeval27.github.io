---
title: "The OASIS Dataset"
lede: "The shared task is built on OASIS: images paired with spoken and written questions and open-ended answers, collected across the MENA region."
description: "OASIS, the multilingual multimodal dataset behind the MMCultureQA SemEval 2027 shared task: what it covers, how to get it, and how to cite it."
ctas: [dataset]
---

## What's inside

OASIS pairs each image with a question and an open-ended answer, in both spoken and written
form. The data was collected across 18 countries in the MENA region and spans everyday and
cultural life. Questions come in English, Modern Standard Arabic, Egyptian Arabic, and
Levantine Arabic, and every question is recorded as audio as well as text.

<ul class="stat-grid">
  <li><b>18</b><span>countries covered</span></li>
  <li><b>9</b><span>topic categories</span></li>
  <li><b>31</b><span>sub-categories</span></li>
  <li><b>4</b><span>language varieties</span></li>
</ul>

<div class="record">
  <div class="record-head">
    <span class="record-title">Sample record</span>
    <span class="record-mods">image · audio · text</span>
  </div>
  <div class="record-body">
    <div class="record-media">
      <img src="{{ '/assets/images/sample-item.jpg' | relative_url }}" alt="The National Museum of Qatar, its interlocking discs inspired by the desert rose" loading="lazy">
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

<p class="sample-cap">One OASIS item: the same question is asked as audio and as text, in English
and Arabic varieties, and the target is a short open-ended answer.</p>

## Getting the data

The shared-task data is hosted on [Hugging Face]({{ site.dataset_url }}) and is drawn from
OASIS, or created with the same framework. A sample set is available now so you can preview
the format; the training and development data follow on the schedule in the
[timeline](/#dates).

## License

The shared-task dataset is planned for release under the **CC BY-NC-SA 4.0** license: free
for non-commercial research use, with attribution and share-alike.

## Citation

OASIS is described in the paper [arXiv:2510.06371](https://arxiv.org/abs/2510.06371). If you
use the dataset, please cite:

{% raw %}
```bibtex
@article{alam2025everydaymmqa,
  title = {{OASIS}: A Multilingual and Multimodal Dataset for Culturally Grounded Spoken Visual QA},
  author = {Alam, Firoj and Shahroor, Ali Ezzat and Hasan, Md. Arid and Ali, Zien Sheikh and Bhatti, Hunzalah Hassan and Kmainasi, Mohamed Bayan and Chowdhury, Shammur Absar and Mousi, Basel and Dalvi, Fahim and Durrani, Nadir and Milic-Frayling, Natasa},
  journal = {arXiv preprint arXiv:2510.06371},
  year = {2025},
}
```
{% endraw %}
