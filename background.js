
chrome.browserAction.onClicked.addListener(function (tab) {
    //gửi mess sang content.js tại trang tab hiện tại  
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "clicked_browser_action"
        });
    });
});

designIt = function(info, tab){
    // gửi mess sang content.js cùng với url của ảnh đc chọn khi bấm chuột phải
    var url = info.srcUrl
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "context_clicked", //nội dung
            "url" : url //truyền url
        });
    });
 };

//thêm option vào menu chuột phải, chỉ thêm khi chuột phải vào ảnh, gọi hàm designIt
chrome.contextMenus.create({
 title: "DesignIt",
 contexts:["image"],  // ContextType
 onclick: designIt // A callback function
});