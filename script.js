if (document.getElementById("pmalogo") != null){
    chrome.runtime.sendMessage({
        message: "message"
    }, function(response) {
        var pattern = response

        var getSelect = document.getElementById('select_server');
        var getIdx = getSelect.selectedIndex;
        var getServer = getSelect.options[getIdx].text;

        if (pattern.indexOf(getServer) >= 0){
            document.title = 'ステージ';
        } else {
            document.title = '本番';
            var pma_navigation = document.getElementById('pma_navigation_content');
            pma_navigation.style.backgroundColor = '#cd3232';
        }
    });
}
