chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  var msg = { text: "activate web tag" };
  chrome.tabs.sendMessage(tab.id, msg, (response) => {
    console.log(response.message)
  });
}
