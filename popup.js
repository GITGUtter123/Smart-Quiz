chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "textSelected") {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = `<p><strong>Question:</strong> ${message.text}?</p>`;
  }
});
