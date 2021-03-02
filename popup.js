document.getElementById("btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: "hello_world" });
  });
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === "all_urls_fetched") {
//     console.log("hello world");
//   }
// });
