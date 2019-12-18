if (document.getElementById("pmalogo") != null){
    chrome.runtime.sendMessage({
        message: "message"
    }, function(response) {
        console.log(response);
        var pattern = response

        var getPageTitle = document.title;
        var setIp = getPageTitle.match(/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/);
        if (!setIp){
            setIp = 'localhost'
        }

        console.log(setIp);

        if (pattern.indexOf(setIp) >= 0){
            document.title = 'ステージ';
        } else {
            document.title = '本番';
            var pma_navigation = document.getElementById('pma_navigation_content');
            pma_navigation.style.backgroundColor = '#cd3232';
        }
    });
}
