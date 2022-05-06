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
let timeanddate = document.getElementsByClassName("timeanddate")[0]
let calendar = document.getElementsByClassName("calendar")[0]

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

timeanddate.addEventListener("click", ()=>{

	if(calendar.style.right == "3px"){
		calendar.style.right = "-655px"
	}
	else{
		calendar.style.right = "3px"
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
    if (!event.target.closest(".startmenu")) {
        startmenu.style.bottom = "-655px";
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".searchmenu")) {
        searchmenu.style.bottom = "-655px";
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".widgetsmenu")) {
        widgetsmenu.style.left = "-1000px";
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".calendar")) {
        calendar.style.right = "-655px";
    }
});

edgeclose.addEventListener("click", ()=>{
        edgeapp.style.opacity = "0"
});

edgeminimize.addEventListener("click", ()=>{
	edgeapp.style.opacity = "0"
});

edgemaximize.addEventListener("click", ()=>{
	edgeapp.style.transition = "all 0.2s ease-in"
	edgeapp.style.left = "0px"
	edgeapp.style.width = "100%"
	edgeapp.style.height = "100%"
	edgeapp.style.top = "0px"
	edgemaximizeimage.style.display = "none"
	edgemaxminimage.style.display = "block"
});

function showmaximizehideminmax(){
	edgemaximizeimage.style.display = "block"
	edgemaxminimage.style.display = "none"
}

edgemaxmin.addEventListener("click", ()=>{
	edgeapp.style.transition = "all 0.2s ease-in"
	edgeapp.style.width = "60%"
	edgeapp.style.height = "75%"
	edgeapp.style.left = "20%"
	edgeapp.style.top = "7%"
	showmaximizehideminmax();
});

function removetransition(){
	edgeapp.style.transition = "opacity 200ms linear"
}