const saveDataName = "SaveData";
$(function(){
    chrome.runtime.onMessage.addListener(
        function(request, sender, callback) {
            const data = JSON.parse(localStorage.getItem(saveDataName));
            callback(data.CopyFormat);
            return true;
        }
    );
});
