chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "generateQuiz",
    title: "Generate Quiz from Selection",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generateQuiz") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
