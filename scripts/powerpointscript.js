let powerpointstartmenuicon = document.getElementsByClassName("powerpointstartmenuicon")[0]
let powerpointapp = document.getElementsByClassName("powerpointapp")[0]
let powerpointclose = document.getElementsByClassName("powerpointclose")[0]
let powerpointmaximize = document.getElementsByClassName("powerpointmaximize")[0]
let powerpointminimize = document.getElementsByClassName("powerpointminimize")[0]
let powerpointmaxmin = document.getElementsByClassName("powerpointmaxmin")[0]
let powerpointmaximizeimage = document.getElementById("powerpointmaximize")
let powerpointmaxminimage = document.getElementById("powerpointmaxmin")
let powerpointtaskbaricon = document.getElementsByClassName("powerpointtaskbaricon")[0]
let powerpointtaskbariconhighlight = document.querySelector(".powerpointtaskbaricon .taskbariconhighlight")
var powerpointtopminclose = "8%"
var powerpointleftminclose = "20%"
var powerpointwidthminclose = "60%"
var powerpointheightminclose = "75%"
var powerpointtopminmax = "8%"
var powerpointleftminmax = "20%"
var powerpointwidthminmax = "60%"
var powerpointheightminmax = "75%"

function powerpointactive(){
	powerpointtaskbariconhighlight.style.backgroundColor = "blue"
	powerpointtaskbariconhighlight.style.width = "15px"
}

function powerpointnotactive(){
	powerpointtaskbariconhighlight.style.backgroundColor = "grey"
	powerpointtaskbariconhighlight.style.width = "7.5px"
}

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".powerpointapp")) {
        powerpointapp.style.boxShadow = "none"
		powerpointnotactive();
    }else{
		powerpointactive();
		powerpointapp.style.boxShadow = "0 10px 20px rgb(0 0 0 / 25%)"
		zIndex = zIndex + 2
		powerpointapp.style.zIndex = zIndex;
	}
});

function getpowerpointproperties(){
	powerpointtopminclose = getComputedStyle(powerpointapp).getPropertyValue('top');
	powerpointleftminclose = getComputedStyle(powerpointapp).getPropertyValue('left');
	powerpointwidthminclose = getComputedStyle(powerpointapp).getPropertyValue('width');
	powerpointheightminclose = getComputedStyle(powerpointapp).getPropertyValue('height');
}

function getpowerpointpropertiesmax(){
	powerpointtopminmax = getComputedStyle(powerpointapp).getPropertyValue('top');
	powerpointleftminmax = getComputedStyle(powerpointapp).getPropertyValue('left');
	powerpointwidthminmax = getComputedStyle(powerpointapp).getPropertyValue('width');
	powerpointheightminmax = getComputedStyle(powerpointapp).getPropertyValue('height');
}

function powerpointminorclose(){
	powerpointnotactive();
	getpowerpointproperties();
	powerpointapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	powerpointapp.style.left = "50%"
	powerpointapp.style.top = "50%"
	powerpointapp.style.width = "0%"
	powerpointapp.style.height = "0%"
	powerpointapp.style.opacity = "0"
}

function recoverpowerpointproperties(){
	powerpointapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	powerpointapp.style.top = powerpointtopminclose
	powerpointapp.style.left = powerpointleftminclose
	powerpointapp.style.width = powerpointwidthminclose
	powerpointapp.style.height = powerpointheightminclose
	powerpointapp.style.opacity = "1"
}

function recoverpowerpointpropertiesmaxmin(){
	powerpointapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	powerpointapp.style.top = powerpointtopminmax
	powerpointapp.style.left = powerpointleftminmax
	powerpointapp.style.width = powerpointwidthminmax
	powerpointapp.style.height = powerpointheightminmax
	powerpointapp.style.opacity = "1"
}

powerpointstartmenuicon.addEventListener("click", ()=>{

	powerpointactive();
	startmenu.style.bottom = "-675px"

	if(powerpointapp.style.opacity == "1"){
		zIndex = zIndex + 2
		powerpointapp.style.zIndex = zIndex
	}
	else{
		recoverpowerpointproperties();
		powerpointtaskbaricon.style.display = "block"
		zIndex = zIndex + 2
		powerpointapp.style.zIndex = zIndex
		powerpointtaskbariconhighlight.style.opacity = "1"
	}

})

powerpointtaskbaricon.addEventListener("click", ()=>{

	if(powerpointapp.style.zIndex != zIndex){
		powerpointactive();
		zIndex = zIndex + 2
		powerpointapp.style.zIndex = zIndex;
		return;
	}
	if(powerpointapp.style.opacity == "1"){
        powerpointminorclose();
		powerpointapp.style.top = "200%"
		zIndex = zIndex + 2
		powerpointapp.style.zIndex = zIndex
	}
	else{
		powerpointactive();
		recoverpowerpointproperties();
		zIndex = zIndex + 2
		powerpointapp.style.zIndex = zIndex
		powerpointtaskbaricon.style.display = "block"
	}

})

powerpointclose.addEventListener("click", ()=>{
	powerpointminorclose();
	powerpointtaskbaricon.style.display = "none"
	powerpointtaskbariconhighlight.style.opacity = "0"
	powerpointtaskbariconhighlight.style.width = "0px"
});

powerpointminimize.addEventListener("click", ()=>{
	powerpointminorclose();
	powerpointapp.style.top = "200%"
});

powerpointmaximize.addEventListener("click", ()=>{
	powerpointapp.style.borderRadius = "0px"
	powerpointapp.style.transition = "all 0.2s ease-in"
	powerpointapp.style.left = "0px"
	powerpointapp.style.width = "100%"
	powerpointapp.style.height = "calc(100% - 48px)"
	powerpointapp.style.top = "0px"
	getpowerpointpropertiesmax();
	powerpointmaximizeimage.style.display = "none"
	powerpointmaxminimage.style.display = "block"
});

function powerpointshowmaximizehideminmax(){
	powerpointmaximizeimage.style.display = "block"
	powerpointmaxminimage.style.display = "none"
}

powerpointmaxmin.addEventListener("click", ()=>{
	powerpointapp.style.borderRadius = "5px"
	powerpointapp.style.transition = "all 0.2s ease-in"
	recoverpowerpointpropertiesmaxmin();
	powerpointshowmaximizehideminmax();
});

function powerpointremovetransition(){
	powerpointapp.style.transition = "opacity 200ms linear"
}


//Make the DIV element draggagle:
dragElement(document.getElementById("powerpointapp"));

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
    powerpointremovetransition();
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
    powerpointshowmaximizehideminmax();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//resizable part


let powerpointdivs = Array.from(document.querySelectorAll('.powerpointapp')),
		powerpointminWidth = 400,
		powerpointminHeight = 30,
		powerpointmaxWidth = 100000,
		powerpointmaxHeight = 100000,
		powerpointisResizing = false;

powerpointdivs.forEach(div => {
	div.addEventListener('mousedown', mousedown);
	//select the powerpointresizers
	let powerpointresizers = div.querySelectorAll('.powerpointresizer');

	powerpointresizers.forEach(function(powerpointresizer) {
		powerpointresizer.addEventListener('mousedown', mousedownOnpowerpointresizer);
	})
	
	function mousedownOnpowerpointresizer(e) {
			let prevX = e.clientX,
					prevY = e.clientY,
					currentpowerpointresizer = e.target,
					rect = div.getBoundingClientRect(),
					prevLeft = rect.left,
					prevTop  = rect.top,
					newWidth,
					newHeight;
          powerpointremovetransition();

			powerpointisResizing = true;

			window.addEventListener('mousemove', mousemove);
			window.addEventListener('mouseup', mouseup);


			function mousemove(e){
				let newX = prevX - e.clientX, //negative to the right, positive to the left
						newY = prevY - e.clientY; //negative to the bottom, positive to the top
				if (currentpowerpointresizer.classList.contains('bottom-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height - newY;
					if (newWidth > powerpointminWidth && newWidth < powerpointmaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > powerpointminHeight && newHeight < powerpointmaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentpowerpointresizer.classList.contains('bottom-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height - newY;

					if (newWidth > powerpointminWidth && newWidth < powerpointmaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					} 
					if (newHeight > powerpointminHeight && newHeight < powerpointmaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentpowerpointresizer.classList.contains('top-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height + newY;

					if (newWidth > powerpointminWidth && newWidth < powerpointmaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > powerpointminHeight && newHeight < powerpointmaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentpowerpointresizer.classList.contains('top-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height + newY;

					if (newWidth > powerpointminWidth && newWidth < powerpointmaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					}
					if (newHeight > powerpointminHeight && newHeight < powerpointmaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}
				}
			}

			function mouseup() {
				powerpointshowmaximizehideminmax();
				powerpointisResizing = false;
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