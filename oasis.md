---
title: "OASIS"
description: "OASIS, the multilingual multimodal dataset that the MMCultureQA SemEval 2027 shared task is built on: how it was curated, what it covers, and how to cite it."
---

# OASIS

<p class="lead-box">OASIS is a large multimodal dataset of images paired with spoken and
textual questions and answers from across the MENA region. The shared-task data is drawn
from OASIS, or created with the same framework.</p>

## About OASIS

OASIS pairs each image with a question and an open-ended answer, in both spoken and textual
form. It was collected across 18 countries in the MENA region and spans everyday and
cultural life, organized into 9 categories and 31 sub-categories. Questions are provided in
English, Modern Standard Arabic, Egyptian Arabic, and Levantine Arabic, and every question
is available as both audio and text.

<figure>
  <img src="{{ '/assets/images/oasis_sample.png' | relative_url }}" alt="Overview of the OASIS dataset: an image queried by a spoken and a textual question with the expected open-ended answer, alongside the language varieties, modality setups, and coverage across the MENA region.">
  <figcaption>Overview of OASIS: each image is paired with spoken and textual questions
  across English and three Arabic varieties.</figcaption>
</figure>

## License

The shared-task dataset is planned for release under the **CC BY-NC-SA 4.0** license, for
non-commercial research use with attribution and share-alike.

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
