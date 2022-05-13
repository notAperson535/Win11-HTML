function createapp(appname, website, icon, visualappname){
  buildapp(appname,website,icon,visualappname);
  addstartmenuandtaskbaricons(appname, icon, visualappname);
  makeappusable(appname,website);
}

function addstartmenuandtaskbaricons(apname, icon, visualappname){
  void 0;
}

function createedgeapp(appname, website, icon, visualappname){
  makeappusable(appname,website);
}

function buildapp(appname, website, icon, visualappname) {

  var appdiv = document.createElement("div");
  document.getElementsByClassName('body')[0].appendChild(appdiv);
  appdiv.classList.add(appname + "app", "app");

  var resizertopleft = document.createElement("div");
  resizertopleft.classList.add(appname + "resizer", "resizer", "top-left");
  document.getElementsByClassName(appname + "app")[0].appendChild(resizertopleft);
  var resizertopright = document.createElement("div");
  resizertopright.classList.add(appname + "resizer", "resizer", "top-right");
  document.getElementsByClassName(appname + "app")[0].appendChild(resizertopright);
  var resizerbottomleft = document.createElement("div");
  resizerbottomleft.classList.add(appname + "resizer", "resizer", "bottom-left");
  document.getElementsByClassName(appname + "app")[0].appendChild(resizerbottomleft);
  var resizerbottomright = document.createElement("div");
  resizerbottomright.classList.add(appname + "resizer", "resizer", "bottom-right");
  document.getElementsByClassName(appname + "app")[0].appendChild(resizerbottomright);

  var appheader = document.createElement("div");
  appheader.id = appname + "appheader";
  appheader.classList.add(appname + "appheader", "appheader");
  document.getElementsByClassName(appname + "app")[0].appendChild(appheader)

  var headerleftside = document.createElement("div");
  headerleftside.classList.add(appname + "headerleftside", "headerleftside");
  document.getElementsByClassName(appname + "appheader")[0].appendChild(headerleftside);
  
  var appicon = document.createElement("img");
  appicon.src = icon;
  document.getElementsByClassName(appname + "headerleftside")[0].appendChild(appicon);
  headerleftside.appendChild(document.createTextNode(visualappname));

  var headerrightside = document.createElement("div");
  headerrightside.classList.add(appname + "headerrightside", "headerrightside");
  document.getElementsByClassName(appname + "appheader")[0].appendChild(headerrightside);

  var minimizediv = document.createElement("div");
  minimizediv.classList.add(appname + "minimize", "minimize");
  document.getElementsByClassName(appname + "headerrightside")[0].appendChild(minimizediv);
  var minimizedivimage = document.createElement("img");
  minimizedivimage.src = "img/minimize.png";
  document.getElementsByClassName(appname + "minimize")[0].appendChild(minimizedivimage);

  var maximizeandminimize = document.createElement("div");
  maximizeandminimize.classList.add(appname + "maximizeandmaxmin", "maximizeandmaxmin");
  document.getElementsByClassName(appname + "headerrightside")[0].appendChild(maximizeandminimize);

  var maximizediv = document.createElement("div");
  maximizediv.classList.add(appname + "maximize", "maximize")
  document.getElementsByClassName(appname + "maximizeandmaxmin")[0].appendChild(maximizediv);
  var maximizedivimage = document.createElement("img");
  maximizedivimage.src = "img/maximize.png";
  document.getElementsByClassName(appname + "maximize")[0].appendChild(maximizedivimage);

  var maxmindiv = document.createElement("div");
  maxmindiv.classList.add(appname + "maxmin", "maxmin")
  document.getElementsByClassName(appname + "maximizeandmaxmin")[0].appendChild(maxmindiv);
  var maxmindivimage = document.createElement("img");
  maxmindivimage.src = "img/maxmin.png";
  maxmindivimage.classList.add("maxminimage")
  document.getElementsByClassName(appname + "maxmin")[0].appendChild(maxmindivimage);

  var closediv = document.createElement("div");
  closediv.classList.add(appname + "close", "close");
  document.getElementsByClassName(appname + "headerrightside")[0].appendChild(closediv);
  var closedivimage = document.createElement("img");
  closedivimage.src = "img/close.png";
  document.getElementsByClassName(appname + "close")[0].appendChild(closedivimage);

  //var loadingimgcontainer = document.createElement("div");
  //loadingimgcontainer.classList.add(appname + "loadingimg", "loadingimg");
  //document.getElementsByClassName(appname + "app")[0].appendChild(loadingimgcontainer);
  //var loadingimg = document.createElement("img");
  //loadingimg.classList.add("loadinggif");
  //loadingimg.src = "img/loading.gif";
  //document.getElementsByClassName(appname + "loadingimg")[0].appendChild(loadingimg);

  var appiframe = document.createElement("iframe");
  appiframe.classList.add(appname + "Iframe", "appIframe")
  appiframe.id = appname + "Iframe"
  document.getElementsByClassName(appname + "app")[0].appendChild(appiframe)
  appiframe.setAttribute("data-responsive", "true");

}

function makeappusable(appname, website){
let startmenuicon = document.getElementsByClassName(appname + "startmenuicon")[0]
let app = document.getElementsByClassName(appname + "app")[0]
let close = document.getElementsByClassName(appname + "close")[0]
let maximize = document.getElementsByClassName(appname + "maximize")[0]
let minimize = document.getElementsByClassName(appname + "minimize")[0]
let maxmin = document.getElementsByClassName(appname + "maxmin")[0]
let maximizeimage = document.getElementById(appname + "maximize")
let maxminimage = document.getElementById(appname + "maxmin")
let taskbaricon = document.getElementsByClassName(appname + "taskbaricon")[0]
let taskbariconhighlight = document.querySelector("." + appname + "taskbaricon" + " " + ".taskbariconhighlight")
var topminclose = "8%"
var leftminclose = "20%"
var widthminclose = "60%"
var heightminclose = "75%"
var topminmax = "8%"
var leftminmax = "20%"
var widthminmax = "60%"
var heightminmax = "75%"
app.style.zIndex = zIndex

function bringtofront(){
  zIndex = zIndex + 2
	app.style.zIndex = zIndex;
}

function goToPage(pageUrl)
{
  document.getElementById(appname + 'Iframe').src = pageUrl;
}

function roundedcorners(){
	app.style.borderRadius = "5px"
}

function active(){
	taskbariconhighlight.style.backgroundColor = "blue"
	taskbariconhighlight.style.width = "15px"
}

function notactive(){
	taskbariconhighlight.style.backgroundColor = "grey"
	taskbariconhighlight.style.width = "7.5px"
}

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest("." + appname + "app")) {
        app.style.boxShadow = "none"
		    notactive();
    }else{
		    active();
		    app.style.boxShadow = "0 10px 20px rgb(0 0 0 / 25%)"
		    bringtofront();
	}
});

function getproperties(){
	topminclose = getComputedStyle(app).getPropertyValue('top');
	leftminclose = getComputedStyle(app).getPropertyValue('left');
	widthminclose = getComputedStyle(app).getPropertyValue('width');
	heightminclose = getComputedStyle(app).getPropertyValue('height');
}

function getpropertiesmax(){
	topminmax = getComputedStyle(app).getPropertyValue('top');
	leftminmax = getComputedStyle(app).getPropertyValue('left');
	widthminmax = getComputedStyle(app).getPropertyValue('width');
	heightminmax = getComputedStyle(app).getPropertyValue('height');
}

function minorclose(){
	notactive();
	getproperties();
	app.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	app.style.left = "50%"
	app.style.top = "50%"
	app.style.width = "0%"
	app.style.height = "0%"
	app.style.opacity = "0"
}

function recoverproperties(){
	app.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	app.style.top = topminclose
	app.style.left = leftminclose
	app.style.width = widthminclose
	app.style.height = heightminclose
	app.style.opacity = "1"
}

function recoverpropertiesmaxmin(){
	app.style.transition = "all .25s cubic-bezier(.85,.14,.14,.85), opacity 200ms linear"
	app.style.top = topminmax
	app.style.left = leftminmax
	app.style.width = widthminmax
	app.style.height = heightminmax
	app.style.opacity = "1"
}

startmenuicon.addEventListener("click", ()=>{

	active();
	startmenu.style.bottom = "-675px"

	if(app.style.opacity == "1"){
		bringtofront();
	}
  if(app.style.width = "0px"){
    goToPage(website);
    recoverproperties();
		taskbaricon.style.display = "block"
		bringtofront();
		taskbariconhighlight.style.opacity = "1"
    document.getElementsByClassName(appname + "loadingimg")[0].style.display = "block"
  }
	else{
		recoverproperties();
		taskbaricon.style.display = "block"
		bringtofront();
		taskbariconhighlight.style.opacity = "1"
	}

})

taskbaricon.addEventListener("click", ()=>{

  active();
  taskbariconhighlight.style.opacity = "1"
	startmenu.style.bottom = "-675px"

  if(app.style.zIndex != zIndex){
    bringtofront();
    recoverproperties();
    app.style.opacity = "1"
    return;
  }
  if(app.style.width = "0px"){
    goToPage(website);
    recoverproperties();
		taskbaricon.style.display = "block"
		bringtofront();
		taskbariconhighlight.style.opacity = "1"
    document.getElementsByClassName(appname + "loadingimg")[0].style.display = "block"
    }
	if(app.style.opacity == "1"){
    minorclose();
		app.style.top = "200%"
		bringtofront();
	}
	else{
		active();
		recoverproperties();
		bringtofront();
		taskbaricon.style.display = "block"
	}

})

close.addEventListener("click", ()=>{

  minorclose();
	taskbariconhighlight.style.opacity = "0"
	taskbariconhighlight.style.width = "0px"
	taskbaricon.style.display = "none"
  goToPage();
});

minimize.addEventListener("click", ()=>{
	minorclose();
	app.style.top = "200%"
});

maximize.addEventListener("click", ()=>{
	app.style.borderRadius = "0px"
	app.style.transition = "all 0.2s ease-in"
	app.style.left = "0px"
	app.style.width = "100%"
	app.style.height = "calc(100% - 48px)"
	app.style.top = "0px"
	getpropertiesmax();
	maximizeimage.style.display = "none"
	maxminimage.style.display = "block"
});

function showmaximizehideminmax(){
	maximizeimage.style.display = "block"
	maxminimage.style.display = "none"
}

maxmin.addEventListener("click", ()=>{
	roundedcorners();
	app.style.transition = "all 0.2s ease-in"
	recoverpropertiesmaxmin();
	showmaximizehideminmax();
});

function removetransition(){
	app.style.transition = "opacity 200ms linear"
}

// draggable

    dragElement();

    function dragElement() {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(app.id + "header")) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(app.id + "header").onmousedown = dragMouseDown;
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          app.onmousedown = dragMouseDown;
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
          app.style.top = (app.offsetTop - pos2) + "px";
          app.style.left = (app.offsetLeft - pos1) + "px";
          showmaximizehideminmax();
          roundedcorners();
        }
      
        function closeDragElement() {
          getproperties();
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }


// resizable

  let divs = Array.from(document.getElementsByClassName(appname + "app")),
  minWidth = 400,
  minHeight = 65,
  maxWidth = 100000,
  maxHeight = 100000,
  isResizing = false;

divs.forEach(div => {
div.addEventListener('mousedown', mousedown);
//select the resizers
let resizers = div.querySelectorAll('.resizer');

resizers.forEach(function(resizer) {
  resizer.addEventListener('mousedown', mousedownOnresizer);
})

function mousedownOnresizer(e) {
    let prevX = e.clientX,
        prevY = e.clientY,
        currentresizer = e.target,
        rect = div.getBoundingClientRect(),
        prevLeft = rect.left,
        prevTop  = rect.top,
        newWidth,
        newHeight;

    isResizing = true;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);


    function mousemove(e){
              removetransition();
              roundedcorners();
              showmaximizehideminmax();
      let newX = prevX - e.clientX, //negative to the right, positive to the left
          newY = prevY - e.clientY; //negative to the bottom, positive to the top
      if (currentresizer.classList.contains('bottom-right')) {
        newWidth = rect.width - newX;
        newHeight = rect.height - newY;
        if (newWidth > minWidth && newWidth < maxWidth) {
          div.style.width = newWidth + 'px';
        }
        if (newHeight > minHeight && newHeight < maxHeight) {
          div.style.height = newHeight + 'px';
        }

      }
      else if (currentresizer.classList.contains('bottom-left')) {
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
      else if (currentresizer.classList.contains('top-right')) {
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
      else if (currentresizer.classList.contains('top-left')) {
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
      getproperties();
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
}