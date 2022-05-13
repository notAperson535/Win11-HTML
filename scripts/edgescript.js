createedgeapp("edge", "https://bing.com", "img/edge.png");

window.onload = function() {
    goToPage(document.getElementById("URL").value)
};

const edgetext = document.getElementsByClassName("edgeURL")[0];
edgetext.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
     goToPage(document.getElementById("URL").value);
    }
})

var urlList = new Array();
var pos = 0;
function goToPage(pageUrl)
{
    urlList[urlList.length] = pageUrl;
    pos = urlList.length - 1;
    document.getElementById('edgeIframe').src = pageUrl;
}
function goBack()
{
    if (pos > 0)
    {
        pos--;
        document.getElementById('edgeIframe').src = urlList[pos];
    }
    else
        void 0;

}
function goForward()
{
    if (pos < (urlList.length-1))
    {
        pos++;
        document.getElementById('edgeIframe').src = urlList[pos];
    }
    else
        void 0;
}

function edgereload() {
    var ifr = document.getElementsByName('edgeIframe')[0];
    ifr.src = ifr.src;
}