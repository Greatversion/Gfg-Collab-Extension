// background.js

// Listen for browser startup
chrome.runtime.onStartup.addListener(function() {
    // Check if the extension window should be open
    if (localStorage.getItem('extensionWindowState') === 'open') {
        openExtensionWindow();
    }
});

// Listen for tab switch events
chrome.tabs.onActivated.addListener(function(activeInfo) {
    // Check if the extension window should be open
    if (localStorage.getItem('extensionWindowState') === 'open') {
        openExtensionWindow();
    }
});

// Function to open the extension window
function openExtensionWindow() {
    // Check if the window is already open
    if (!chrome.extension.getViews({ type: 'popup' }).length) {
        // Open the extension window
        chrome.windows.create({
            url: 'index.html',
            type: 'popup',
            width: 400,
            height: 600
        });
    }
}

