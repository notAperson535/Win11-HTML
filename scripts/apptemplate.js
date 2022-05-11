function makeanapp(appname){
let appnamestartmenuicon = document.getElementsByClassName("${appname}startmenuicon")[0]
let appnameapp = document.getElementsByClassName("${appname}app")[0]
let appnameclose = document.getElementsByClassName("${appname}close")[0]
let appnamemaximize = document.getElementsByClassName("${appname}maximize")[0]
let appnameminimize = document.getElementsByClassName("${appname}minimize")[0]
let appnamemaxmin = document.getElementsByClassName("${appname}maxmin")[0]
let appnamemaximizeimage = document.getElementById("${appname}maximize")
let appnamemaxminimage = document.getElementById("${appname}maxmin")
let appnametaskbaricon = document.getElementsByClassName("${appname}taskbaricon")[0]
let appnametaskbariconhighlight = document.querySelector(".appnametaskbaricon .taskbariconhighlight")
var appnametopminclose = "8%"
var appnameleftminclose = "20%"
var appnamewidthminclose = "60%"
var appnameheightminclose = "75%"
var appnametopminmax = "8%"
var appnameleftminmax = "20%"
var appnamewidthminmax = "60%"
var appnameheightminmax = "75%"

function appnameactive(){
	appnametaskbariconhighlight.style.backgroundColor = "blue"
	appnametaskbariconhighlight.style.width = "15px"
}

function appnamenotactive(){
	appnametaskbariconhighlight.style.backgroundColor = "grey"
	appnametaskbariconhighlight.style.width = "7.5px"
}

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".appnameapp")) {
        appnameapp.style.boxShadow = "none"
		appnamenotactive();
    }else{
		appnameactive();
		appnameapp.style.boxShadow = "0 10px 20px rgb(0 0 0 / 25%)"
		zIndex = zIndex + 2
		appnameapp.style.zIndex = zIndex;
	}
});

function getappnameproperties(){
	appnametopminclose = getComputedStyle(appnameapp).getPropertyValue('top');
	appnameleftminclose = getComputedStyle(appnameapp).getPropertyValue('left');
	appnamewidthminclose = getComputedStyle(appnameapp).getPropertyValue('width');
	appnameheightminclose = getComputedStyle(appnameapp).getPropertyValue('height');
}

function getappnamepropertiesmax(){
	appnametopminmax = getComputedStyle(appnameapp).getPropertyValue('top');
	appnameleftminmax = getComputedStyle(appnameapp).getPropertyValue('left');
	appnamewidthminmax = getComputedStyle(appnameapp).getPropertyValue('width');
	appnameheightminmax = getComputedStyle(appnameapp).getPropertyValue('height');
}

function appnameminorclose(){
	appnamenotactive();
	getappnameproperties();
	appnameapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	appnameapp.style.left = "50%"
	appnameapp.style.top = "50%"
	appnameapp.style.width = "0%"
	appnameapp.style.height = "0%"
	appnameapp.style.opacity = "0"
}

function recoverappnameproperties(){
	appnameapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	appnameapp.style.top = appnametopminclose
	appnameapp.style.left = appnameleftminclose
	appnameapp.style.width = appnamewidthminclose
	appnameapp.style.height = appnameheightminclose
	appnameapp.style.opacity = "1"
}

function recoverappnamepropertiesmaxmin(){
	appnameapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	appnameapp.style.top = appnametopminmax
	appnameapp.style.left = appnameleftminmax
	appnameapp.style.width = appnamewidthminmax
	appnameapp.style.height = appnameheightminmax
	appnameapp.style.opacity = "1"
}

appnamestartmenuicon.addEventListener("click", ()=>{

	appnameactive();
	startmenu.style.bottom = "-675px"

	if(appnameapp.style.opacity == "1"){
		zIndex = zIndex + 2
		appnameapp.style.zIndex = zIndex
	}
	else{
		recoverappnameproperties();
		appnametaskbaricon.style.display = "block"
		zIndex = zIndex + 2
		appnameapp.style.zIndex = zIndex
		appnametaskbariconhighlight.style.opacity = "1"
	}

})

appnametaskbaricon.addEventListener("click", ()=>{

	if(appnameapp.style.zIndex != zIndex){
		appnameactive();
		zIndex = zIndex + 2
		appnameapp.style.zIndex = zIndex;
		return;
	}
	if(appnameapp.style.opacity == "1"){
        appnameminorclose();
		appnameapp.style.top = "200%"
		zIndex = zIndex + 2
		appnameapp.style.zIndex = zIndex
	}
	else{
		appnameactive();
		recoverappnameproperties();
		zIndex = zIndex + 2
		appnameapp.style.zIndex = zIndex
		appnametaskbaricon.style.display = "block"
	}

})

appnameclose.addEventListener("click", ()=>{
	appnameminorclose();
	appnametaskbaricon.style.display = "none"
	appnametaskbariconhighlight.style.opacity = "0"
	appnametaskbariconhighlight.style.width = "0px"
});

appnameminimize.addEventListener("click", ()=>{
	appnameminorclose();
	appnameapp.style.top = "200%"
});

appnamemaximize.addEventListener("click", ()=>{
	appnameapp.style.borderRadius = "0px"
	appnameapp.style.transition = "all 0.2s ease-in"
	appnameapp.style.left = "0px"
	appnameapp.style.width = "100%"
	appnameapp.style.height = "calc(100% - 48px)"
	appnameapp.style.top = "0px"
	getappnamepropertiesmax();
	appnamemaximizeimage.style.display = "none"
	appnamemaxminimage.style.display = "block"
});

function appnameshowmaximizehideminmax(){
	appnamemaximizeimage.style.display = "block"
	appnamemaxminimage.style.display = "none"
}

appnamemaxmin.addEventListener("click", ()=>{
	appnameapp.style.borderRadius = "5px"
	appnameapp.style.transition = "all 0.2s ease-in"
	recoverappnamepropertiesmaxmin();
	appnameshowmaximizehideminmax();
});

function appnameremovetransition(){
	appnameapp.style.transition = "opacity 200ms linear"
}


//Make the DIV element draggagle:
dragElement(document.getElementById("appnameapp"));

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
    appnameremovetransition();
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
    appnameshowmaximizehideminmax();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//resizable part


let appnamedivs = Array.from(document.querySelectorAll('.appnameapp')),
		appnameminWidth = 400,
		appnameminHeight = 30,
		appnamemaxWidth = 100000,
		appnamemaxHeight = 100000,
		appnameisResizing = false;

appnamedivs.forEach(div => {
	div.addEventListener('mousedown', mousedown);
	//select the appnameresizers
	let appnameresizers = div.querySelectorAll('.appnameresizer');

	appnameresizers.forEach(function(appnameresizer) {
		appnameresizer.addEventListener('mousedown', mousedownOnappnameresizer);
	})
	
	function mousedownOnappnameresizer(e) {
			let prevX = e.clientX,
					prevY = e.clientY,
					currentappnameresizer = e.target,
					rect = div.getBoundingClientRect(),
					prevLeft = rect.left,
					prevTop  = rect.top,
					newWidth,
					newHeight;
          appnameremovetransition();

			appnameisResizing = true;

			window.addEventListener('mousemove', mousemove);
			window.addEventListener('mouseup', mouseup);


			function mousemove(e){
				let newX = prevX - e.clientX, //negative to the right, positive to the left
						newY = prevY - e.clientY; //negative to the bottom, positive to the top
				if (currentappnameresizer.classList.contains('bottom-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height - newY;
					if (newWidth > appnameminWidth && newWidth < appnamemaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > appnameminHeight && newHeight < appnamemaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentappnameresizer.classList.contains('bottom-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height - newY;

					if (newWidth > appnameminWidth && newWidth < appnamemaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					} 
					if (newHeight > appnameminHeight && newHeight < appnamemaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentappnameresizer.classList.contains('top-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height + newY;

					if (newWidth > appnameminWidth && newWidth < appnamemaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > appnameminHeight && newHeight < appnamemaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentappnameresizer.classList.contains('top-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height + newY;

					if (newWidth > appnameminWidth && newWidth < appnamemaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					}
					if (newHeight > appnameminHeight && newHeight < appnamemaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}
				}
			}

			function mouseup() {
				appnameshowmaximizehideminmax();
				appnameisResizing = false;
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
}