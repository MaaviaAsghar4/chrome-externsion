chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "hello_world") {
    document.documentElement.innerHTML = "hello world";
  }
});
