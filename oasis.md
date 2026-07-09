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

<figure>
  <img src="{{ '/assets/images/oasis_sample.png' | relative_url }}" alt="Overview of the OASIS dataset: an image queried by a spoken and a textual question with the expected open-ended answer, alongside the language varieties, modality setups, and coverage across the MENA region.">
  <figcaption>Overview of OASIS: each image is paired with spoken and textual questions
  across English and three Arabic varieties.</figcaption>
</figure>

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
