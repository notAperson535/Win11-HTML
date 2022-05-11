let wordstartmenuicon = document.getElementsByClassName("wordstartmenuicon")[0]
let wordapp = document.getElementsByClassName("wordapp")[0]
let wordclose = document.getElementsByClassName("wordclose")[0]
let wordmaximize = document.getElementsByClassName("wordmaximize")[0]
let wordminimize = document.getElementsByClassName("wordminimize")[0]
let wordmaxmin = document.getElementsByClassName("wordmaxmin")[0]
let wordmaximizeimage = document.getElementById("wordmaximize")
let wordmaxminimage = document.getElementById("wordmaxmin")
let wordtaskbaricon = document.getElementsByClassName("wordtaskbaricon")[0]
let wordtaskbariconhighlight = document.querySelector(".wordtaskbaricon .taskbariconhighlight")
var wordtopminclose = "8%"
var wordleftminclose = "20%"
var wordwidthminclose = "60%"
var wordheightminclose = "75%"
var wordtopminmax = "8%"
var wordleftminmax = "20%"
var wordwidthminmax = "60%"
var wordheightminmax = "75%"

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".wordapp")) {
        wordapp.style.boxShadow = "none"
    }else{
		wordapp.style.boxShadow = "0 10px 20px rgb(0 0 0 / 25%)"
		zIndex = zIndex + 2
		wordapp.style.zIndex = zIndex;
	}
});

function getwordproperties(){
	wordtopminclose = getComputedStyle(wordapp).getPropertyValue('top');
	wordleftminclose = getComputedStyle(wordapp).getPropertyValue('left');
	wordwidthminclose = getComputedStyle(wordapp).getPropertyValue('width');
	wordheightminclose = getComputedStyle(wordapp).getPropertyValue('height');
}

function getwordpropertiesmax(){
	wordtopminmax = getComputedStyle(wordapp).getPropertyValue('top');
	wordleftminmax = getComputedStyle(wordapp).getPropertyValue('left');
	wordwidthminmax = getComputedStyle(wordapp).getPropertyValue('width');
	wordheightminmax = getComputedStyle(wordapp).getPropertyValue('height');
}

function wordminorclose(){
	getwordproperties();
	wordapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	wordapp.style.left = "50%"
	wordapp.style.top = "50%"
	wordapp.style.width = "0%"
	wordapp.style.height = "0%"
	wordapp.style.opacity = "0"
}

function recoverwordproperties(){
	wordapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	wordapp.style.top = wordtopminclose
	wordapp.style.left = wordleftminclose
	wordapp.style.width = wordwidthminclose
	wordapp.style.height = wordheightminclose
	wordapp.style.opacity = "1"
}

function recoverwordpropertiesmaxmin(){
	wordapp.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	wordapp.style.top = wordtopminmax
	wordapp.style.left = wordleftminmax
	wordapp.style.width = wordwidthminmax
	wordapp.style.height = wordheightminmax
	wordapp.style.opacity = "1"
}

wordstartmenuicon.addEventListener("click", ()=>{

	if(wordapp.style.opacity == "1"){
		zIndex = zIndex + 2
		wordapp.style.zIndex = zIndex
	}
	else{
		recoverwordproperties();
		wordtaskbaricon.style.display = "block"
		zIndex = zIndex + 2
		wordapp.style.zIndex = zIndex
		wordtaskbariconhighlight.style.opacity = "1"
		wordtaskbariconhighlight.style.width = "25%"
	}

})

wordtaskbaricon.addEventListener("click", ()=>{

	if(wordapp.style.opacity == "1"){
        wordminorclose();
		wordapp.style.top = "200%"
		zIndex = zIndex + 2
		wordapp.style.zIndex = zIndex
	}
	else{
		recoverwordproperties();
		zIndex = zIndex + 2
		wordapp.style.zIndex = zIndex
		wordtaskbaricon.style.display = "block"
	}

})

wordclose.addEventListener("click", ()=>{
	wordminorclose();
	wordtaskbaricon.style.display = "none"
	wordtaskbariconhighlight.style.opacity = "0"
	wordtaskbariconhighlight.style.width = "0px"
});

wordminimize.addEventListener("click", ()=>{
	wordminorclose();
	wordapp.style.top = "200%"
});

wordmaximize.addEventListener("click", ()=>{
	wordapp.style.transition = "all 0.2s ease-in"
	wordapp.style.left = "0px"
	wordapp.style.width = "100%"
	wordapp.style.height = "calc(100% - 48px)"
	wordapp.style.top = "0px"
	getwordpropertiesmax();
	wordmaximizeimage.style.display = "none"
	wordmaxminimage.style.display = "block"
});

function wordshowmaximizehideminmax(){
	wordmaximizeimage.style.display = "block"
	wordmaxminimage.style.display = "none"
}

wordmaxmin.addEventListener("click", ()=>{
	wordapp.style.transition = "all 0.2s ease-in"
	recoverwordpropertiesmaxmin();
	wordshowmaximizehideminmax();
});

function wordremovetransition(){
	wordapp.style.transition = "opacity 200ms linear"
}


//Make the DIV element draggagle:
dragElement(document.getElementById("wordapp"));

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
    wordremovetransition();
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
    wordshowmaximizehideminmax();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//resizable part


let worddivs = Array.from(document.querySelectorAll('.wordapp')),
		wordminWidth = 400,
		wordminHeight = 65,
		wordmaxWidth = 100000,
		wordmaxHeight = 100000,
		wordisResizing = false;

worddivs.forEach(div => {
	div.addEventListener('mousedown', mousedown);
	//select the wordresizers
	let wordresizers = div.querySelectorAll('.wordresizer');

	wordresizers.forEach(function(wordresizer) {
		wordresizer.addEventListener('mousedown', mousedownOnwordresizer);
	})
	
	function mousedownOnwordresizer(e) {
			let prevX = e.clientX,
					prevY = e.clientY,
					currentwordresizer = e.target,
					rect = div.getBoundingClientRect(),
					prevLeft = rect.left,
					prevTop  = rect.top,
					newWidth,
					newHeight;
          wordremovetransition();

			wordisResizing = true;

			window.addEventListener('mousemove', mousemove);
			window.addEventListener('mouseup', mouseup);


			function mousemove(e){
				let newX = prevX - e.clientX, //negative to the right, positive to the left
						newY = prevY - e.clientY; //negative to the bottom, positive to the top
				if (currentwordresizer.classList.contains('bottom-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height - newY;
					if (newWidth > wordminWidth && newWidth < wordmaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > wordminHeight && newHeight < wordmaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentwordresizer.classList.contains('bottom-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height - newY;

					if (newWidth > wordminWidth && newWidth < wordmaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					} 
					if (newHeight > wordminHeight && newHeight < wordmaxHeight) {
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentwordresizer.classList.contains('top-right')) {
					newWidth = rect.width - newX;
					newHeight = rect.height + newY;

					if (newWidth > wordminWidth && newWidth < wordmaxWidth) {
						div.style.width = newWidth + 'px';
					}
					if (newHeight > wordminHeight && newHeight < wordmaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}

				}
				else if (currentwordresizer.classList.contains('top-left')) {
					newWidth = rect.width + newX;
					newHeight = rect.height + newY;

					if (newWidth > wordminWidth && newWidth < wordmaxWidth) {
						div.style.left = prevLeft - newX + 'px';
						div.style.width = newWidth + 'px';
					}
					if (newHeight > wordminHeight && newHeight < wordmaxHeight) {
						div.style.top = prevTop - newY + 'px';
						div.style.height = newHeight + 'px';
					}
				}
			}

			function mouseup() {
				wordshowmaximizehideminmax();
				wordisResizing = false;
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