# MMCultureQA SemEval 2027 Website

Jekyll site for the **MMCultureQA** SemEval 2027 shared task: multilingual,
multimodal, culturally grounded question answering.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Editing content

Most content is data-driven. Edit the YAML files in `_data/`, no templating needed:

| File | Drives |
| --- | --- |
| `_data/navigation.yml` | Header / footer nav links |
| `_data/stats.yml` | "By the numbers" strip (OASIS scale) |
| `_data/tracks.yml` | Track cards |
| `_data/languages.yml` | Language / dialect cards |
| `_data/deadlines.yml` | Timeline (status auto-computed from `iso` dates) |
| `_data/updates.yml` | News feed |
| `_data/faq.yml` | FAQ accordion |
| `_data/organizers.yml` | Organizer grid |

Pages live at the repo root (`index.md`, `tasks.md`, `data.md`, `participate.md`,
`organizers.md`). Reusable section blocks are in `_includes/`; styles are in `_sass/`.

## Structure

- `_layouts/`: `default.html` (shell) and `page.html` (interior pages with title band)
- `_includes/`: `hero`, `stats`, `tracks`, `languages`, `timeline`, `news`, `cta`, `faq`, header/footer
- `_sass/`: design system (`_variables`, `_base`, `components/*`)
- `assets/`: `css/style.scss`, `js/main.js`, images, and the SVG logo / favicon

The planned GitHub Pages repository is:

```text
https://github.com/mmcultureqa-semeval27/mmcultureqa-semeval27.github.io
```
