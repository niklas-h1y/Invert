// Persist a global default so the inversion setting follows the user across tabs.
chrome.runtime.onInstalled.addListener(async () => {
  const { enabled } = await chrome.storage.sync.get({ enabled: true });
  if (typeof enabled !== "boolean") {
    await chrome.storage.sync.set({ enabled: true });
  }
});
