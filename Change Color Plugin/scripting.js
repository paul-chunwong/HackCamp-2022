const color = getUserColor();
function getUserColor() {
  const input = prompt("Hello! Please choose between the following categories:");
  alert(`You choosed ${input}`);
}
function changeBackgroundColor() {
  document.body.style.backgroundColor = color;
}
const tabId = getTabId();
chrome.scripting.executeScript(
    {
      target: {tabId: tabId},
      func: changeBackgroundColor,
    },
    );