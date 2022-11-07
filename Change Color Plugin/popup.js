document.getElementById('color1').addEventListener('click', async evt => {
  evt.preventDefault(); // prevents `submit` event from reloading the popup
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  const color = document.getElementById('color1').value;
  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: (c) => {
      document.getElementsByTagName('img').array.forEach(element => {
        element.style.filter = "hue-rotate(45deg)";
      });
    },
    args: [color],
  });
});

document.getElementById('color2').addEventListener('click', async evt => {
  evt.preventDefault(); // prevents `submit` event from reloading the popup
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  const color = document.getElementById('color2').value;
  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: (c) => {
      document.body.style.backgroundColor = c;
    },
    args: [color],
  });
});

document.getElementById('color3').addEventListener('click', async evt => {
  evt.preventDefault(); // prevents `submit` event from reloading the popup
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  const color = document.getElementById('color3').value;
  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: (c) => {
      document.body.style.backgroundColor = c;
    },
    args: [color],
  });
});

document.getElementById('color4').addEventListener('click', async evt => {
  evt.preventDefault(); // prevents `submit` event from reloading the popup
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  const color = document.getElementById('color4').value;
  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: (c) => {
      document.body.style.backgroundColor = c;
    },
    args: [color],
  });
});

document.getElementById('color5').addEventListener('click', async evt => {
  evt.preventDefault(); // prevents `submit` event from reloading the popup
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  const color = document.getElementById('color5').value;
  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: (c) => {
      document.body.style.backgroundColor = c;
    },
    args: [color],
  });
});