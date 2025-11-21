document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggleExtension');
  const typeSelect = document.getElementById('typeSelect');
  const intensityRange = document.getElementById('intensityRange');

  // Default settings
  let settings = {
    enabled: false,
    type: 'protanopia',
    intensity: 100
  };

  // Load saved settings
  chrome.storage.local.get(['settings'], (result) => {
    if (result.settings) {
      settings = result.settings;
      toggle.checked = settings.enabled;
      typeSelect.value = settings.type;
      intensityRange.value = settings.intensity;
    }
  });

  // Update handler
  const updateSettings = () => {
    settings = {
      enabled: toggle.checked,
      type: typeSelect.value,
      intensity: parseInt(intensityRange.value)
    };

    // Save to storage
    chrome.storage.local.set({ settings: settings });

    // Update Background Icon state
    chrome.runtime.sendMessage({ action: "updateIcon", enabled: settings.enabled });

    // Message active tab to apply filter
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { 
          action: "updateSettings", 
          settings: settings 
        });
      }
    });
  };

  // Listeners
  toggle.addEventListener('change', updateSettings);
  typeSelect.addEventListener('change', updateSettings);
  intensityRange.addEventListener('input', updateSettings);
});
