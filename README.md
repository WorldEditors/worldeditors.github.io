# Fan Wang Profile and Blog

This repository hosts Fan Wang's GitHub Pages site. The former profile site is now the About section, and the former `futureagi.github.io` posts have been merged as the Blog while sharing the same visual style.

## Pages

- `index.html`: About page with profile summary, selected publications, condensed experience, awards, and education.
- `blog.html`: Jekyll-powered blog index.
- `_posts/`: migrated blog posts.
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
- `img/` for migrated blog media.
- `favicon-robot.svg`

## Local Preview

The About page can still be previewed with a simple static server:

```powershell
python -m http.server 5502
```

Then open:

```text
http://127.0.0.1:5502/
```

The Blog requires Jekyll/Liquid rendering. With Ruby and Bundler installed, preview the full site with:

```powershell
bundle exec jekyll serve
```

## Deployment

This is a GitHub Pages site. Pushing changes to the configured branch updates the public site after GitHub Pages finishes building.

## Template Notes

The site is based on the Shine Bootstrap 5 resume/CV template and has been customized for a research profile. Keep third-party asset licenses in mind when reusing or redistributing this repository.
