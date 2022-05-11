let excelstartmenuicon = document.getElementsByClassName("excelstartmenuicon")[0]
let excelapp = document.getElementsByClassName("excelapp")[0]
let excelclose = document.getElementsByClassName("excelclose")[0]
let excelmaximize = document.getElementsByClassName("excelmaximize")[0]
let excelminimize = document.getElementsByClassName("excelminimize")[0]
let excelmaxmin = document.getElementsByClassName("excelmaxmin")[0]
let excelmaximizeimage = document.getElementById("excelmaximize")
let excelmaxminimage = document.getElementById("excelmaxmin")
let exceltaskbaricon = document.getElementsByClassName("exceltaskbaricon")[0]
let exceltaskbariconhighlight = document.querySelector(".exceltaskbaricon .taskbariconhighlight")
var exceltopminclose = "8%"
var excelleftminclose = "20%"
var excelwidthminclose = "60%"
var excelheightminclose = "75%"
var exceltopminmax = "8%"
var excelleftminmax = "20%"
var excelwidthminmax = "60%"
var excelheightminmax = "75%"

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".excelapp")) {
        excelapp.style.boxShadow = "none"
    }else{
		excelapp.style.boxShadow = "0 10px 20px rgb(0 0 0 / 25%)"
		zIndex = zIndex + 2
		excelapp.style.zIndex = zIndex;
	}
});

function getexcelproperties(){
	exceltopminclose = getComputedStyle(excelapp).getPropertyValue('top');
	excelleftminclose = getComputedStyle(excelapp).getPropertyValue('left');
	excelwidthminclose = getComputedStyle(excelapp).getPropertyValue('width');
	excelheightminclose = getComputedStyle(excelapp).getPropertyValue('height');
}

function getexcelpropertiesmax(){
	exceltopminmax = getComputedStyle(excelapp).getPropertyValue('top');
	excelleftminmax = getComputedStyle(excelapp).getPropertyValue('left');
	excelwidthminmax = getComputedStyle(excelapp).getPropertyValue('width');
	excelheightminmax = getComputedStyle(excelapp).getPropertyValue('height');
}

function excelminorclose(){
	getexcelproperties();
	excelapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	excelapp.style.left = "50%"
	excelapp.style.top = "50%"
	excelapp.style.width = "0%"
	excelapp.style.height = "0%"
	excelapp.style.opacity = "0"
}

function recoverexcelproperties(){
	excelapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	excelapp.style.top = exceltopminclose
	excelapp.style.left = excelleftminclose
	excelapp.style.width = excelwidthminclose
	excelapp.style.height = excelheightminclose
	excelapp.style.opacity = "1"
}

function recoverexcelpropertiesmaxmin(){
	excelapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	excelapp.style.top = exceltopminmax
	excelapp.style.left = excelleftminmax
	excelapp.style.width = excelwidthminmax
	excelapp.style.height = excelheightminmax
	excelapp.style.opacity = "1"
}

excelstartmenuicon.addEventListener("click", ()=>{

	if(excelapp.style.opacity == "1"){
		zIndex = zIndex + 2
		excelapp.style.zIndex = zIndex
	}
	else{
		recoverexcelproperties();
		exceltaskbaricon.style.display = "block"
		zIndex = zIndex + 2
		excelapp.style.zIndex = zIndex
		exceltaskbariconhighlight.style.opacity = "1"
		exceltaskbariconhighlight.style.width = "25%"
	}

})

exceltaskbaricon.addEventListener("click", ()=>{

	if(excelapp.style.opacity == "1"){
        excelminorclose();
		excelapp.style.top = "200%"
		zIndex = zIndex + 2
		excelapp.style.zIndex = zIndex
	}
	else{
		recoverexcelproperties();
		zIndex = zIndex + 2
		excelapp.style.zIndex = zIndex
		exceltaskbaricon.style.display = "block"
	}

})

excelclose.addEventListener("click", ()=>{
	excelminorclose();
	exceltaskbaricon.style.display = "none"
	exceltaskbaricon.style.opacity = "0"
	exceltaskbariconhighlight.style.width = "0px"
});

excelminimize.addEventListener("click", ()=>{
	excelminorclose();
	excelapp.style.top = "200%"
});

excelmaximize.addEventListener("click", ()=>{
	excelapp.style.transition = "all 0.2s ease-in"
	excelapp.style.left = "0px"
	excelapp.style.width = "100%"
	excelapp.style.height = "calc(100% - 48px)"
	excelapp.style.top = "0px"
	getexcelpropertiesmax();
	excelmaximizeimage.style.display = "none"
	excelmaxminimage.style.display = "block"
});

function excelshowmaximizehideminmax(){
	excelmaximizeimage.style.display = "block"
	excelmaxminimage.style.display = "none"
}

excelmaxmin.addEventListener("click", ()=>{
	excelapp.style.transition = "all 0.2s ease-in"
	recoverexcelpropertiesmaxmin();
	excelshowmaximizehideminmax();
});

function excelremovetransition(){
	excelapp.style.transition = "opacity 200ms linear"
}


//Make the DIV element draggagle:
dragElement(document.getElementById("excelapp"));

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
    excelremovetransition();
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
    excelshowmaximizehideminmax();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//resizable part


let exceldivs = Array.from(document.querySelectorAll('.excelapp')),
		excelminWidth = 400,
		excelminHeight = 65,
		excelmaxWidth = 100000,
		excelmaxHeight = 100000,
		excelisResizing = false;

exceldivs.forEach(div => {
	div.addEventListener('mousedown', mousedown);
	//select the excelresizers
	let excelresizers = div.querySelectorAll('.excelresizer');

	excelresizers.forEach(function(excelresizer) {
		excelresizer.addEventListener('mousedown', mousedownOnexcelresizer);
	})
	
	function mousedownOnexcelresizer(e) {
			let prevX = e.clientX,
					prevY = e.clientY,
					currentexcelresizer = e.target,
					rect = div.getBoundingClientRect(),
					prevLeft = rect.left,
					prevTop  = rect.top,
					newWidth,
					newHeight;
          excelremovetransition();

			excelisResizing = true;

			window.addEventListener('mousemove', mousemove);
			window.addEventListener('mouseup', mouseup);


			function mousemove(e){
				let newX = prevX - e.clientX, //negative to the right, positive to the left
						newY = prevY - e.clientY; //negative to the bottom, positive to the top
				if (currentexcelresizer.classList.contains('bottom-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height - newY;
					if (newWidth > excelminWidth && newWidth < excelmaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > excelminHeight && newHeight < excelmaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentexcelresizer.classList.contains('bottom-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height - newY;

					if (newWidth > excelminWidth && newWidth < excelmaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					} 
					if (newHeight > excelminHeight && newHeight < excelmaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentexcelresizer.classList.contains('top-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height + newY;

					if (newWidth > excelminWidth && newWidth < excelmaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > excelminHeight && newHeight < excelmaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentexcelresizer.classList.contains('top-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height + newY;

					if (newWidth > excelminWidth && newWidth < excelmaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					}
					if (newHeight > excelminHeight && newHeight < excelmaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}
				}
			}

			function mouseup() {
				excelshowmaximizehideminmax();
				excelisResizing = false;
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