document.getElementById('color1').addEventListener('click', async evt => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.insertCSS({
    target: {
        tabId: tab.id
    },
    files: ["redgreen.css"],
},
() => {});
});

document.getElementById('color2').addEventListener('click', async evt => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.insertCSS({
    target: {
        tabId: tab.id
    },
    files: ["bluegreen.css"],
},
() => {});
});

document.getElementById('color3').addEventListener('click', async evt => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.insertCSS({
    target: {
        tabId: tab.id
    },
    files: ["redgreen.css"],
},
() => {});
});

document.getElementById('color4').addEventListener('click', async evt => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.insertCSS({
    target: {
        tabId: tab.id
    },
    files: ["redgreen.css"],
},
() => {});
});

document.getElementById('color5').addEventListener('click', async evt => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.insertCSS({
    target: {
        tabId: tab.id
    },
    files: ["redgreen.css"],
},
() => {});
});

document.getElementById('rotateImage').addEventListener('click', async evt => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  chrome.scripting.insertCSS({
    target: {
        tabId: tab.id
    },
    files: ["main.css"],
},
() => {});
});