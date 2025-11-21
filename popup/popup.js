document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggleExtension');
  const typeSelect = document.getElementById('typeSelect');
  const intensityRange = document.getElementById('intensityRange');
  const intensityValue = document.getElementById('intensityValue'); // المنت جدید
  const statusText = document.getElementById('statusText'); // المنت جدید

  // Default settings
  let settings = {
    enabled: false,
    type: 'protanopia',
    intensity: 100
  };

  // UI Update Helper
  const updateUI = () => {
    // Update Text
    statusText.textContent = toggle.checked ? "Active" : "Disabled";
    intensityValue.textContent = intensityRange.value + "%";
    
    // Disable controls visual style when toggle is off
    if (!toggle.checked) {
        typeSelect.style.opacity = '0.5';
        intensityRange.style.opacity = '0.5';
        typeSelect.disabled = true;
        intensityRange.disabled = true;
    } else {
        typeSelect.style.opacity = '1';
        intensityRange.style.opacity = '1';
        typeSelect.disabled = false;
        intensityRange.disabled = false;
    }
  };

  // Load settings
  chrome.storage.local.get(['settings'], (result) => {
    if (result.settings) {
      settings = result.settings;
      toggle.checked = settings.enabled;
      typeSelect.value = settings.type;
      intensityRange.value = settings.intensity;
      updateUI(); // Update UI on load
    }
  });

  // Update Logic
  const updateSettings = () => {
    settings = {
      enabled: toggle.checked,
      type: typeSelect.value,
      intensity: parseInt(intensityRange.value)
    };
    
    updateUI(); // Update UI immediately

    chrome.storage.local.set({ settings: settings });
    chrome.runtime.sendMessage({ action: "updateIcon", enabled: settings.enabled });

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
  intensityRange.addEventListener('input', () => {
      // Live update for the percentage number while dragging
      intensityValue.textContent = intensityRange.value + "%";
      updateSettings();
  });
});
