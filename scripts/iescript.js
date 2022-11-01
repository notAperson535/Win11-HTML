let IEonOrOff = getCookie("IEonOrOff")
if (IEonOrOff == "on") {
    createpremadeapp("internetexplorer", "https://google.com/?igu=1", "img/ie.png", "Internet Explorer");
    setCookie("IEonOrOff", "on", "365");
}

let searchbar = document.querySelector(".searchbar input");
searchbar.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        if (searchbar.value == "IE is best!") {
            if (IEonOrOff == "on") {
                alert("Hey! Stop trying to get browsers!")
            }
            else {
                alert("No it's not, but I'll let you have it anyway :)")
                createpremadeapp("internetexplorer", "https://google.com/?igu=1", "img/ie.png", "Internet Explorer");
                setCookie("IEonOrOff", "on", "365");
            }
        }
    }
})

let ieclose = document.getElementById("internetexplorerclose")
let ieminimize = document.getElementById("internetexplorerminimize")
let iemaximize = document.getElementById("internetexplorermaximize")

ieclose.addEventListener("mousedown", () => {
    ieclose.src = "img/ie/close_dep.png"
});
ieclose.addEventListener("mouseup", () => {
    ieclose.src = "img/ie/close.png"
});

ieminimize.addEventListener("mousedown", () => {
    ieminimize.src = "img/ie/minimize_dep.png"
});
ieminimize.addEventListener("mouseup", () => {
    ieminimize.src = "img/ie/minimize.png"
});

iemaximize.addEventListener("mousedown", () => {
    iemaximize.src = "img/ie/maximize_dep.png"
});
iemaximize.addEventListener("mouseup", () => {
    iemaximize.src = "img/ie/maximize.png"
});

var internetexplorerIframe = document.getElementsByClassName('internetexplorerappIframe')[0];
var urlList = new Array();
var pos = 0;

window.onload = goToIEPage(document.getElementsByClassName("internetexplorerURL")[0].value)

const internetexplorertext = document.getElementsByClassName("internetexplorerURL")[0];
internetexplorertext.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        goToIEPage(document.getElementsByClassName("internetexplorerURL")[0].value);
    }
})

function goToIEPage(pageUrl) {
    urlList[urlList.length] = pageUrl;
    pos = urlList.length - 1;
    document.getElementById('internetexplorerIframe').src = pageUrl;
}