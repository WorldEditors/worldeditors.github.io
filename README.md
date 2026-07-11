# Personal Academic Profile Template

This repository hosts a static GitHub Pages profile site for Fan Wang. It is adapted from the Shine Bootstrap resume template and reorganized as a data-driven academic/research profile with bilingual content, publication cards, concise homepage previews, and dedicated detail pages.

## Pages

- `index.html`: homepage with profile summary, selected publications, condensed experience, awards, and education.
- `publications.html`: full publication list.
- `experiences.html`: full professional experience timeline.

## Content Model

Most profile content is maintained in one shared data file:

- `assets/js/profile-data.js`

Update these sections there:

- `about`: bilingual personal introduction paragraphs.
- `experiences`: work history and research leadership items.
- `publications`: representative publications and research articles.
- `previewLimits`: item counts used by the homepage preview sections.

Rendering logic lives in:

- `assets/js/profile-renderer.js`

The renderer reads `window.profileData` and populates the homepage and detail pages based on each page's `data-page` attribute.

## Styling

Core visual styling comes from:

- `assets/css/shine.css`: base theme and customized homepage layout.
- `assets/css/publication.css`: publication cards, detail-page layout, bilingual profile polish, and compact content blocks.

Static images and icons are stored under:

- `assets/images/`
- `favicon-robot.svg`

## Local Preview

From the repository root, run a simple static server:

```powershell
python -m http.server 5502
```

Then open:

```text
http://127.0.0.1:5502/
```

The site can also be opened directly from `index.html`, but using a local server is closer to GitHub Pages behavior.

## Deployment

This is a GitHub Pages site. Pushing changes to the configured branch updates the public site after GitHub Pages finishes building.

## Template Notes

The site is based on the Shine Bootstrap 5 resume/CV template and has been customized for a research profile. Keep third-party asset licenses in mind when reusing or redistributing this repository.
