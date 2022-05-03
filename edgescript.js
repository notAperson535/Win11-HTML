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
    removetransition();
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
    showmaximizehideminmax();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


window.onload = function() {
    goToPage(document.getElementById("URL").value)
    console.log(document.getElementById("edgeIframe").edgeheaderWindow.location.href)
};

const edgetext = document.getElementsByClassName("edgeURL")[0];
edgetext.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
     goToPage(document.getElementById("URL").value);
     //document.getElementById("URL").value = document.getElementById("edgeIframe").edgeheaderWindow.location.href
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
        document.getElementById("URL").value = document.getElementById("edgeIframe").edgeheaderWindow.location.href
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


//resizable part


let divs = Array.from(document.querySelectorAll('.edgeapp')),
		minWidth = 400,
		minHeight = 65,
		maxWidth = 100000,
		maxHeight = 100000,
		isResizing = false;

divs.forEach(div => {
	div.addEventListener('mousedown', mousedown);
	//select the edgeresizers
	let edgeresizers = div.querySelectorAll('.edgeresizer');

	edgeresizers.forEach(function(edgeresizer) {
		edgeresizer.addEventListener('mousedown', mousedownOnedgeresizer);
	})
	
	function mousedownOnedgeresizer(e) {
			let prevX = e.clientX,
					prevY = e.clientY,
					currentedgeresizer = e.target,
					rect = div.getBoundingClientRect(),
					prevLeft = rect.left,
					prevTop  = rect.top,
					newWidth,
					newHeight;
          removetransition();

			isResizing = true;

			window.addEventListener('mousemove', mousemove);
			window.addEventListener('mouseup', mouseup);


			function mousemove(e){
				let newX = prevX - e.clientX, //negative to the right, positive to the left
						newY = prevY - e.clientY; //negative to the bottom, positive to the top
				if (currentedgeresizer.classList.contains('bottom-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height - newY;
					if (newWidth > minWidth && newWidth < maxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > minHeight && newHeight < maxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentedgeresizer.classList.contains('bottom-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height - newY;

					if (newWidth > minWidth && newWidth < maxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					} 
					if (newHeight > minHeight && newHeight < maxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentedgeresizer.classList.contains('top-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height + newY;

					if (newWidth > minWidth && newWidth < maxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > minHeight && newHeight < maxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentedgeresizer.classList.contains('top-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height + newY;

					if (newWidth > minWidth && newWidth < maxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					}
					if (newHeight > minHeight && newHeight < maxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}
				}
			}

			function mouseup() {
				isResizing = false;
				window.removeEventListener('mousemove', mousemove);
				window.removeEventListener('mouseup', mouseup);
			}
		}
})
	

function mousedown(e) {
	//get the initial mouse corrdinates and the position coordinates of the element
	let div = this,
			prevX = e.clientX,
			prevY = e.clientY,
			rect = div.getBoundingClientRect(),
			prevLeft = rect.left,
			prevTop  = rect.top;
	
	function mousemove(e) {
			//get horizontal and vertical distance of the mouse move
			let newX = prevX - e.clientX, //negative to the right, positive to the left
					newY = prevY - e.clientY; //negative to the bottom, positive to the top

			//set coordinates of the element to move it to its new position
			div.style.left = prevLeft - newX + 'px';
			div.style.top = prevTop - newY + 'px';
	}
}


