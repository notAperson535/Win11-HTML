//Make the DIV element draggagle:
dragElement(document.getElementById("edgeapp"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


window.onload = function() {
    goToPage(document.getElementById("URL").value)
    console.log(document.getElementById("edgeIframe").contentWindow.location.href)
};

const edgetext = document.getElementsByClassName("edgeURL")[0];
edgetext.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
     goToPage(document.getElementById("URL").value);
     //document.getElementById("URL").value = document.getElementById("edgeIframe").contentWindow.location.href
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
        document.getElementById("URL").value = document.getElementById("edgeIframe").contentWindow.location.href
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
