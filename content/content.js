(() => {
  const apply = (enabled) => {
    const root = document.documentElement;
    if (!root) return;
    root.classList.toggle("invert-every-color-enabled", enabled);
  };

  // Inversion is enabled by default, including on pages opened before settings load.
  apply(true);
  chrome.storage.sync.get({ enabled: true }, ({ enabled }) => apply(enabled));

  // Keep every open tab in sync when the toolbar switch changes.
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.enabled) {
      apply(changes.enabled.newValue !== false);
    }
  });
})();
