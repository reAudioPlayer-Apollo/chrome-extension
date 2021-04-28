const download = document.getElementById("download");
const synchronise = document.getElementById("synchronise");

download.addEventListener("click", async () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        if (url.indexOf("youtube.com") <= -1)
        {
            return;
        }
        fetch("http://localhost:8080/api/youtube/download/" + encodeURIComponent(url)).then(() => window.close());
    });
});

synchronise.addEventListener("click", async () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        if (url.indexOf("youtube.com") <= -1)
        {
            return;
        }
        fetch("http://localhost:8080/api/youtube/sync/" + encodeURIComponent(url)).then(() => window.close());
    });
});