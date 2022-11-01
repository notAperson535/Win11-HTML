createpremadeappwithtaskbaricon("edge", "https://google.com/?igu=1", "img/edge.png", "Edge");
var edgeIframe = document.getElementsByClassName('edgeappIframe')[0];
var urlList = new Array();
var pos = 0;

window.onload = goToEdgePage(document.getElementsByClassName("edgeURL")[0].value);

const edgetext = document.getElementsByClassName("edgeURL")[0];
edgetext.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        goToEdgePage(document.getElementsByClassName("edgeURL")[0].value);
    }
})

function goToEdgePage(pageUrl) {
    urlList[urlList.length] = pageUrl;
    pos = urlList.length - 1;
    document.getElementById('edgeIframe').src = pageUrl;
}
function goBack() {
    if (pos > 0) {
        pos--;
        document.getElementById('edgeIframe').src = urlList[pos];
        document.getElementsByClassName("edgeURL")[0].value = edgeIframe.src;
    }
    else
        void 0;

}
function goForward() {
    if (pos < (urlList.length - 1)) {
        pos++;
        document.getElementById('edgeIframe').src = urlList[pos];
        document.getElementsByClassName("edgeURL")[0].value = edgeIframe.src;
    }
    else
        void 0;
}

function edgereload() {
    edgeIframe.src = edgeIframe.src;
}
