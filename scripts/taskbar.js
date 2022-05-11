let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widgetsbutton = document.getElementsByClassName("widgetsbutton")[0]
let widgetsmenu = document.getElementsByClassName("widgetsmenu")[0]
let timeanddate = document.getElementsByClassName("timeanddate")[0]
let calendar = document.getElementsByClassName("calendar")[0]

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) 
        true;
}

startbutton.addEventListener("click", ()=>{

	if(startmenu.style.bottom == "50px"){
		startmenu.style.bottom = "-675px"
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

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".startmenu")){
        startmenu.style.bottom = "-675px";
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".searchmenu")){
        searchmenu.style.bottom = "-655px";
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".widgetsmenu")){
        widgetsmenu.style.left = "-1000px";
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".calendar")){
        calendar.style.right = "-655px";
    }
});