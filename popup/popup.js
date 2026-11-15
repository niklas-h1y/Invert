const toggle = document.querySelector("#enabled");
const status = document.querySelector("#status");

chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
  toggle.checked = enabled;
  status.textContent = enabled ? "On" : "Off";
});

toggle.addEventListener("change", async () => {
  const enabled = toggle.checked;
  status.textContent = enabled ? "On" : "Off";
  await chrome.storage.sync.set({ enabled });
});
