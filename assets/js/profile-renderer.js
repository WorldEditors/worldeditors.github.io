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
    const titleHtml = escapeHtml(item.title);
    const descriptionHtml = item.descriptionZh
      ? `${escapeHtml(item.descriptionZh)}<span class="publication-description-en">${escapeHtml(item.description)}</span>`
      : escapeHtml(item.description);
    const linkLabel = item.linkLabel || "Paper";

    return `
      <article class="publication-card">
        <div class="publication-image">${image}</div>
        <div class="publication-content">
          <h3 class="publication-title">
            <a href="${titleUrl}" target="_blank" rel="noopener noreferrer">${titleHtml}</a>
          </h3>
          <p class="publication-description">${descriptionHtml}</p>
          <div class="publication-meta">
            <span class="publication-date"><i class="bi bi-calendar3"></i> ${escapeHtml(item.venue)}</span>
            <a href="${item.url}" class="publication-link" target="_blank" rel="noopener noreferrer">
              ${escapeHtml(linkLabel)} <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  function createExperienceItem(item, isLast, compact) {
    const linksHtml = Array.isArray(item.links) && item.links.length
      ? `<ul class="resume-timeline-list">${item.links.map(function (link) {
          return `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a></li>`;
        }).join("")}</ul>`
      : "";
    const roleHtml = item.roleZh
      ? `${escapeHtml(item.roleZh)}<span class="bilingual-inline">${escapeHtml(item.roleEn || item.role)}</span>`
      : escapeHtml(item.role);
    const highlights = compact && item.previewHighlight ? [item.previewHighlight] : item.highlights;
    const highlightHtml = highlights.map(function (highlight) {
      if (typeof highlight === "string") {
        return `<li>${escapeHtml(highlight)}</li>`;
      }

      if (highlight && highlight.zh && highlight.en) {
        return `<li>${escapeHtml(highlight.zh)}<span class="bilingual-en">${escapeHtml(highlight.en)}</span></li>`;
      }

      return `<li>${escapeHtml(String(highlight))}</li>`;
    }).join("");

    return `
      <article class="resume-timeline-item position-relative ${isLast ? "" : "pb-5"}">
        <div class="resume-timeline-item-header mb-2">
          <div class="resume-position-meta d-flex justify-content-between mb-1 flex-column flex-md-row gap-1">
            <div class="resume-position-time">${escapeHtml(item.period)}</div>
            <div class="resume-company-name">${escapeHtml(item.organization)}</div>
          </div>
          <h3 class="resume-position-title mb-1">${roleHtml}</h3>
        </div>
        <div class="resume-timeline-item-desc">
          <ul class="resume-timeline-list">
            ${highlightHtml}
          </ul>
          ${compact ? "" : linksHtml}
        </div>
      </article>
    `;
  }

  function renderAbout() {
    const container = document.getElementById("about-summary");
    const identity = data.identity;

    if (!container || !identity) {
      return;
    }

    container.innerHTML = `
      <p class="about-answer-lead">${escapeHtml(identity.summaryZh)}</p>
      <p>${escapeHtml(identity.distinctionZh)}</p>
      <p class="about-english">${escapeHtml(identity.summaryEn)} ${escapeHtml(identity.distinctionEn)}</p>
    `;
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
    const compact = targetId === "experience-preview";
    container.innerHTML = items.map(function (item, index) {
      return createExperienceItem(item, index === items.length - 1, compact);
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
