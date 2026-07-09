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
| `_data/deadlines.yml` | Home timeline (done/next status auto-computed from `iso` dates) |
| `_data/updates.yml` | Home news feed |
| `_data/organizers.yml` | Organizer grid |

Pages live at the repo root (`index.md`, `tasks.md`, `oasis.md`, `participate.md`,
`organizers.md`). Styles are in `_sass/`.

## Structure

- `_layouts/`: `home.html` (landing page: hero + sections), `default.html` (interior pages:
  slim page header driven by front-matter `title`, `lede`, and optional `ctas` keys)
- `_includes/`: `head.html`, `header.html`, `footer.html`
- `_sass/`: design system (`_variables.scss`, `_base.scss`)
- `assets/`: `css/style.scss`, `js/main.js`, images, and the SVG logo / favicon

The planned GitHub Pages repository is:

```text
https://github.com/mmcultureqa-semeval27/mmcultureqa-semeval27.github.io
```
