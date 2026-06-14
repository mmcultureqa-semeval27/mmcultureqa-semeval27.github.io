---
title: "Data"
description: "The OASIS dataset behind MMCultureQA SemEval 2027: scale, composition, instance format, download, citation, and license."
---

# Data

<p class="lead-box">The shared task is built on OASIS, a large multimodal dataset of images
paired with spoken and textual questions and answers from across the MENA region.</p>

## About OASIS

OASIS is a large-scale multimodal dataset of images paired with spoken and textual question
and answer instances, collected across 18 countries in the MENA region. It covers a broad
range of everyday and cultural content, organized into 9 categories and 31 sub-categories.

The shared-task subset is selected from OASIS to preserve diversity across language variety,
country, and modality, while keeping participation practical for teams with modest
computational resources. Final release counts will be confirmed at the data release.

<figure>
  <img src="{{ '/assets/images/oasis_sample.png' | relative_url }}" alt="Overview of the OASIS dataset: an image queried by a spoken and a textual question with the expected open-ended answer, alongside the language varieties, modality setups, and coverage across the MENA region.">
  <figcaption>Overview of OASIS: each image is paired with spoken and textual questions
  across English and three Arabic varieties.</figcaption>
</figure>

## What the Data Covers

| Property | Coverage |
| --- | --- |
| Language varieties | English, Modern Standard, Egyptian, and Levantine Arabic |
| Countries | 18 across the MENA region |
| Modalities | Each question is available as both audio and text |
| Content | 9 categories and 31 sub-categories |

## A Single Instance

Exact file formats and field names will be documented in the starter kit at release. Each
instance includes:

- **Image:** the image the question refers to.
- **Spoken question (Track 1):** an audio clip in the instance's language variety.
- **Textual question (Track 2):** the same question presented as text.
- **Reference answer:** an open-ended gold answer used for evaluation.
- **Metadata:** language variety and country, for per-language and per-track analysis.

## Download

The dataset is hosted on Hugging Face. Sample data is scheduled for 15 July 2026, with the
full training and development data following on 1 September 2026.

<p class="buttons">
  <a class="btn" href="{{ site.dataset_url }}" rel="noopener" target="_blank">Get the dataset on Hugging Face</a>
</p>

## Citation

If you use OASIS or take part in MMCultureQA, please cite the OASIS paper:

{% raw %}
```bibtex
@article{alam2025everydaymmqa,
  title   = {{OASIS}: A Multilingual and Multimodal Dataset for Culturally Grounded Spoken Visual QA},
  author  = {Alam, Firoj and Shahroor, Ali Ezzat and Hasan, Md. Arid and Ali, Zien Sheikh and Bhatti, Hunzalah Hassan and Kmainasi, Mohamed Bayan and Chowdhury, Shammur Absar and Mousi, Basel and Dalvi, Fahim and Durrani, Nadir and Milic-Frayling, Natasa},
  journal = {arXiv preprint arXiv:2510.06371},
  year    = {2025},
}
```
{% endraw %}

## License

The shared-task dataset is planned for release under the **CC BY-NC-SA 4.0** license, for
non-commercial research use with attribution and share-alike.
