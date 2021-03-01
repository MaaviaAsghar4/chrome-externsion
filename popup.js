// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   chrome.tabs.query(
//     { active: true, currentWindow: true },
//     function (activeTabs) {
//       chrome.tabs.executeScript(activeTabs[0].id, {
//         code: "<div>hello world</div>",
//       });
//     }
//   );
// });

let hello = document.getElementsByTagName("h1");
for (let tag of hello) {
  tag.innerHTML = "hello world";
}
