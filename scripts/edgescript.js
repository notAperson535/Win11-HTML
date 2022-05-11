let edgestartmenuicon = document.getElementsByClassName("edgestartmenuicon")[0]
let edgeapp = document.getElementsByClassName("edgeapp")[0]
let edgeclose = document.getElementsByClassName("edgeclose")[0]
let edgemaximize = document.getElementsByClassName("edgemaximize")[0]
let edgeminimize = document.getElementsByClassName("edgeminimize")[0]
let edgemaxmin = document.getElementsByClassName("edgemaxmin")[0]
let edgemaximizeimage = document.getElementById("edgemaximize")
let edgemaxminimage = document.getElementById("edgemaxmin")
let edgetaskbariconhighlight = document.querySelector(".edgetaskbaricon .taskbariconhighlight")
let edgetaskbaricon = document.getElementsByClassName("edgetaskbaricon")[0]
var edgetopminclose = "8%"
var edgeleftminclose = "20%"
var edgewidthminclose = "60%"
var edgeheightminclose = "75%"
var edgetopminmax = "8%"
var edgeleftminmax = "20%"
var edgewidthminmax = "60%"
var edgeheightminmax = "75%"

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".edgeapp")) {
        edgeapp.style.boxShadow = "none"
    }else{
		edgeapp.style.boxShadow = "0 10px 20px rgb(0 0 0 / 25%)"
		zIndex = zIndex + 2
		edgeapp.style.zIndex = zIndex;
	}
});

function getedgeproperties(){
	edgetopminclose = getComputedStyle(edgeapp).getPropertyValue('top');
	edgeleftminclose = getComputedStyle(edgeapp).getPropertyValue('left');
	edgewidthminclose = getComputedStyle(edgeapp).getPropertyValue('width');
	edgeheightminclose = getComputedStyle(edgeapp).getPropertyValue('height');
}

function getedgepropertiesmax(){
	edgetopminmax = getComputedStyle(edgeapp).getPropertyValue('top');
	edgeleftminmax = getComputedStyle(edgeapp).getPropertyValue('left');
	edgewidthminmax = getComputedStyle(edgeapp).getPropertyValue('width');
	edgeheightminmax = getComputedStyle(edgeapp).getPropertyValue('height');
}

function edgeminorclose(){
	getedgeproperties();
	edgeapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	edgeapp.style.opacity = "0"
	edgeapp.style.left = "50%"
	edgeapp.style.top = "50%"
	edgeapp.style.width = "0%"
	edgeapp.style.height = "0%"
}

function recoveredgeproperties(){
	edgeapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	edgeapp.style.top = edgetopminclose
	edgeapp.style.left = edgeleftminclose
	edgeapp.style.width = edgewidthminclose
	edgeapp.style.height = edgeheightminclose
}

function recoveredgepropertiesmaxmin(){
	edgeapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	edgeapp.style.top = edgetopminmax
	edgeapp.style.left = edgeleftminmax
	edgeapp.style.width = edgewidthminmax
	edgeapp.style.height = edgeheightminmax
}

edgestartmenuicon.addEventListener("click", ()=>{

	if(edgeapp.style.opacity == "1"){
		zIndex = zIndex + 2
		edgeapp.style.zIndex = zIndex
	}
	else{
		recoveredgeproperties();
		edgeapp.style.opacity = "1"
		zIndex = zIndex + 2
		edgeapp.style.zIndex = zIndex
		edgetaskbariconhighlight.style.width = "25%"
		edgetaskbariconhighlight.style.opacity = "1"
	}

})

edgetaskbaricon.addEventListener("click", ()=>{

	if(edgeapp.style.opacity == "1"){
		zIndex = zIndex + 2
		edgeapp.style.zIndex = zIndex
        edgeminorclose();
		edgeapp.style.top = "200%"
	}
	else{
		zIndex = zIndex + 2
		edgeapp.style.zIndex = zIndex
		recoveredgeproperties();
		edgeapp.style.opacity = "1"
		edgetaskbariconhighlight.style.width = "25%"
		edgetaskbariconhighlight.style.opacity = "1"
	}

})

edgeclose.addEventListener("click", ()=>{
	edgeminorclose();
	edgetaskbariconhighlight.style.opacity = "0"
	edgetaskbariconhighlight.style.width = "0px"
});

edgeminimize.addEventListener("click", ()=>{
	edgeminorclose();
	edgeapp.style.top = "200%"
});

edgemaximize.addEventListener("click", ()=>{
	edgeapp.style.transition = "all 0.2s ease-in"
	edgeapp.style.left = "0px"
	edgeapp.style.width = "100%"
	edgeapp.style.height = "calc(100% - 48px)"
	edgeapp.style.top = "0px"
	getedgepropertiesmax();
	edgemaximizeimage.style.display = "none"
	edgemaxminimage.style.display = "block"
});

function edgeshowmaximizehideminmax(){
	edgemaximizeimage.style.display = "block"
	edgemaxminimage.style.display = "none"
}

edgemaxmin.addEventListener("click", ()=>{
	edgeapp.style.transition = "all 0.2s ease-in"
	recoveredgepropertiesmaxmin();
	edgeshowmaximizehideminmax();
});

function edgeremovetransition(){
	edgeapp.style.transition = "opacity 200ms linear"
}

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
    edgeremovetransition();
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
    edgeshowmaximizehideminmax();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//resizable part


let edgedivs = Array.from(document.querySelectorAll('.edgeapp')),
		edgeminWidth = 400,
		edgeminHeight = 65,
		edgemaxWidth = 100000,
		edgemaxHeight = 100000,
		edgeisResizing = false;

edgedivs.forEach(div => {
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
          edgeremovetransition();

			edgeisResizing = true;

			window.addEventListener('mousemove', mousemove);
			window.addEventListener('mouseup', mouseup);


			function mousemove(e){
				let newX = prevX - e.clientX, //negative to the right, positive to the left
						newY = prevY - e.clientY; //negative to the bottom, positive to the top
				if (currentedgeresizer.classList.contains('bottom-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height - newY;
					if (newWidth > edgeminWidth && newWidth < edgemaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > edgeminHeight && newHeight < edgemaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentedgeresizer.classList.contains('bottom-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height - newY;

					if (newWidth > edgeminWidth && newWidth < edgemaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					} 
					if (newHeight > edgeminHeight && newHeight < edgemaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentedgeresizer.classList.contains('top-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height + newY;

					if (newWidth > edgeminWidth && newWidth < edgemaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > edgeminHeight && newHeight < edgemaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentedgeresizer.classList.contains('top-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height + newY;

					if (newWidth > edgeminWidth && newWidth < edgemaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					}
					if (newHeight > edgeminHeight && newHeight < edgemaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}
				}
			}

			function mouseup() {
				edgeshowmaximizehideminmax();
				edgeisResizing = false;
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