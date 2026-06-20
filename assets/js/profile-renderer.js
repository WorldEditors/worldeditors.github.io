(function () {
  const data = window.PROFILE_DATA;

  if (!data) {
    return;
  }

  function createPublicationCard(item) {
    const image = item.coverUrl
      ? `<img src="${item.coverUrl}" alt="${escapeHtml(item.title)} cover" class="publication-cover">`
      : `<i class="${item.iconClass || "bi bi-journal-richtext"}"></i>`;

    const titleUrl = item.featuredUrl || item.url;

    return `
      <article class="publication-card">
        <div class="publication-image">${image}</div>
        <div class="publication-content">
          <h3 class="publication-title">
            <a href="${titleUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a>
          </h3>
          <p class="publication-description">${escapeHtml(item.description)}</p>
          <div class="publication-meta">
            <span class="publication-date"><i class="bi bi-calendar3"></i> ${escapeHtml(item.venue)}</span>
            <a href="${item.url}" class="publication-link" target="_blank" rel="noopener noreferrer">
              Paper <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  function createExperienceItem(item, isLast) {
    const linksHtml = Array.isArray(item.links) && item.links.length
      ? `<ul class="resume-timeline-list">${item.links.map(function (link) {
          return `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a></li>`;
        }).join("")}</ul>`
      : "";

    return `
      <article class="resume-timeline-item position-relative ${isLast ? "" : "pb-5"}">
        <div class="resume-timeline-item-header mb-2">
          <div class="resume-position-meta d-flex justify-content-between mb-1 flex-column flex-md-row gap-1">
            <div class="resume-position-time">${escapeHtml(item.period)}</div>
            <div class="resume-company-name">${escapeHtml(item.organization)}</div>
          </div>
          <h3 class="resume-position-title mb-1">${escapeHtml(item.role)}</h3>
        </div>
        <div class="resume-timeline-item-desc">
          <ul class="resume-timeline-list">
            ${item.highlights.map(function (highlight) {
              return `<li>${escapeHtml(highlight)}</li>`;
            }).join("")}
          </ul>
          ${linksHtml}
        </div>
      </article>
    `;
  }

  function renderAbout() {
    const container = document.getElementById("about-summary");
    if (!container) {
      return;
    }

    container.innerHTML = data.about.map(function (paragraph) {
      return `<p>${escapeHtml(paragraph)}</p>`;
    }).join("");
  }

  function renderPublications(targetId, limit) {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    const items = typeof limit === "number" ? data.publications.slice(0, limit) : data.publications;
    container.innerHTML = items.map(createPublicationCard).join("");
  }

  function renderExperiences(targetId, limit) {
    const container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    const items = typeof limit === "number" ? data.experiences.slice(0, limit) : data.experiences;
    container.innerHTML = items.map(function (item, index) {
      return createExperienceItem(item, index === items.length - 1);
    }).join("");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  const page = document.body.getAttribute("data-page");

  if (page === "home") {
    renderAbout();
    renderPublications("publications-preview", data.previewLimits.publications);
    renderExperiences("experience-preview", data.previewLimits.experiences);
  } else if (page === "publications") {
    renderPublications("publications-full");
  } else if (page === "experiences") {
    renderExperiences("experience-full");
  }
})();
