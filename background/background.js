
var popupWindowId,  isOpen = null; 
var savedSwitchToTrendTab;

// createPopup(true);


chrome.browserAction.onClicked.addListener((tab)=> isOpen ? focusPopup() : createPopup());
chrome.runtime.onMessage.addListener(incomingMessages);
chrome.tabs.onUpdated.addListener(tabsStatus());
chrome.windows.onRemoved.addListener((id) => id == popupWindowId ? isOpen = false : null);

function incomingMessages(msg, sender){


}

function tabsStatus(savedTabId){
    chrome.tabs.query({}, scrollIntoPosition);  
    function scrollIntoPosition(tabs) {
        for(var i = 0; i<tabs.length; i++){
            if(tabs[i].id == savedTabId && tabs[i].status == "complete"){
                chrome.tabs.sendMessage( savedTabId, {
                    from: 'bg',
                    subject: 'scroll_to_position',
                });
            }
        }
    }
}
function createPopup(minimized = false){
    return ( 
        chrome.windows.create(
            {
                url: chrome.runtime.getURL("../popup/popup.html"),
                type: "popup",
                focused: false,
                width: 420, 
                height: 680,
                state : "normal"
            }, 
            function callback(data){
                popupWindowId = data.id;
                isOpen = true;

                if(minimized == true){
                    let updateInfo= {
                        state : "minimized"
                    }
    
                    chrome.windows.update(popupWindowId,  updateInfo);
                }

            }
        )
    )
}
function focusPopup() {
    chrome.windows.update(popupWindowId, {
        focused: true
    });
}

