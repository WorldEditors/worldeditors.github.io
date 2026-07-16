(() => {
  const storageKey = "fan-blog-language";
  const buttons = [...document.querySelectorAll("[data-language-button]")];
  const links = [...document.querySelectorAll("[data-language-link]")];
  const content = [...document.querySelectorAll("[data-language-content]")];

  const remember = (language) => {
    try {
      localStorage.setItem(storageKey, language);
    } catch (_) {
      // Language selection still works when storage is unavailable.
    }
  };

  const preferredLanguage = () => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (requested === "zh" || requested === "en") return requested;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === "zh" || stored === "en") return stored;
    } catch (_) {
      // Fall back to the browser language.
    }
    return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
  };

  const selectLanguage = (language) => {
    content.forEach((element) => {
      element.hidden = element.dataset.languageContent !== language;
    });
    buttons.forEach((button) => {
      const selected = button.dataset.languageButton === language;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.documentElement.lang = language;
    remember(language);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.languageButton;
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      window.history.replaceState({}, "", url);
      selectLanguage(language);
    });
  });
  links.forEach((link) => {
    link.addEventListener("click", () => remember(link.dataset.languageLink));
  });

  if (buttons.length && content.length) selectLanguage(preferredLanguage());
})();
