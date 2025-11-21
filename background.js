chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateIcon") {
    const state = request.enabled ? "ON" : "OFF";
    const color = request.enabled ? "#4CAF50" : "#555555";
    
    // Dynamic badge update to indicate status
    chrome.action.setBadgeText({ text: state });
    chrome.action.setBadgeBackgroundColor({ color: color });
  }
});
