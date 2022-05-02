let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widgetsbutton = document.getElementsByClassName("widgetsbutton")[0]
let widgetsmenu = document.getElementsByClassName("widgetsmenu")[0]
let edgebutton = document.getElementsByClassName("edgebutton")[0]
let edgeapp = document.getElementsByClassName("edgeapp")[0]
let edgeclose = document.getElementsByClassName("edgeclose")[0]
let edgemaximize = document.getElementsByClassName("edgemaximize")[0]
let edgeminimize = document.getElementsByClassName("edgeminimize")[0]
let edgemaxmin = document.getElementsByClassName("edgemaxmin")[0]
let edgemaximizeimage = document.getElementById("edgemaximize")
let edgemaxminimage = document.getElementById("edgemaxmin")

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) 
        true;
}

startbutton.addEventListener("click", ()=>{

	if(startmenu.style.bottom == "50px"){
		startmenu.style.bottom = "-655px"
	}
	else{
		startmenu.style.bottom = "50px"
	}
})

searchbutton.addEventListener("click", ()=>{

	if(searchmenu.style.bottom == "50px"){
		searchmenu.style.bottom = "-655px"
	}
	else{
		searchmenu.style.bottom = "50px"
	}
})

widgetsbutton.addEventListener("click", ()=>{

	if(widgetsmenu.style.left == "10px"){
		widgetsmenu.style.left = "-1000px"
	}
	else{
		widgetsmenu.style.left = "10px"
	}
})

edgebutton.addEventListener("click", ()=>{

	if(edgeapp.style.opacity == "1"){
        	edgeapp.style.opacity = '0'
	}
	else{
        	edgeapp.style.opacity = '1'
	}

})

window.addEventListener('mouseup', function(e) {
    if (event.target != document.querySelector(".startbutton")) {
        startmenu.style.bottom = "-655px";
    }
});

window.addEventListener('mouseup', function(e) {
    if (event.target != document.querySelector(".searchbutton")) {
        searchmenu.style.bottom = "-655px";
    }
});

window.addEventListener('mouseup', function(e) {
    if (event.target != document.querySelector(".widgetsbutton")) {
        widgetsmenu.style.left = "-1000px";
    }
});

edgeclose.addEventListener("click", ()=>{
        edgeapp.style.opacity = "0"
});

edgemaximize.addEventListener("click", ()=>{
	edgeapp.style.transition = "opacity 200ms linear, all .3s"
	edgeapp.style.left = "0px"
	edgeapp.style.width = "100%"
	edgeapp.style.height = "100%"
	edgeapp.style.top = "0px"
	edgemaximizeimage.style.display = "none"
	edgemaxminimage.style.display = "block"
	edgeapp.style.resize = "none"
});

edgemaxmin.addEventListener("click", ()=>{
	edgeapp.style.width = "850px"
	edgeapp.style.height = "550px"
	edgeapp.style.left = "350px"
	edgeapp.style.top = "25%"
	edgemaximizeimage.style.display = "block"
	edgemaxminimage.style.display = "none"
	edgeapp.style.resize = "both"
	edgeapp.style.transition = "opacity 200ms linear"
});