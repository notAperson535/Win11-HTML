let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widgetsbutton = document.getElementsByClassName("widgetsbutton")[0]
let taskbariconsleft = document.getElementsByClassName("taskbariconsleft")[0]
let widgetsmenu = document.getElementsByClassName("widgetsmenu")[0]
let timeanddate = document.getElementsByClassName("timeanddate")[0]
let calendar = document.getElementsByClassName("calendar")[0]

function startbuttonhighlight(){
	startbutton.style.backgroundColor = "rgba(255,255,255,.80)"
  	startbutton.style.borderRadius = "5px"
}

function startbuttonnohighlight(){
	startbutton.style.backgroundColor = ""
  	startbutton.style.borderRadius = ""
}

function searchbuttonhighlight(){
	searchbutton.style.backgroundColor = "rgba(255,255,255,.80)"
  	searchbutton.style.borderRadius = "5px"
}

function searchbuttonnohighlight(){
	searchbutton.style.backgroundColor = ""
  	searchbutton.style.borderRadius = ""
}

function widgetsbuttonhighlight(){
	widgetsbutton.style.backgroundColor = "rgba(255,255,255,.80)"
  	widgetsbutton.style.borderRadius = "5px"
}

function widgetsbuttonnohighlight(){
	widgetsbutton.style.backgroundColor = ""
  	widgetsbutton.style.borderRadius = ""
}

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) 
        true;
}

startbutton.addEventListener("click", ()=>{

	if(startmenu.style.bottom == "55px"){
		startmenu.style.bottom = "-675px"
		startbuttonnohighlight();
	}
	else{
		startmenu.style.bottom = "55px"
		startbuttonhighlight();
	}
})

searchbutton.addEventListener("click", ()=>{

	if(searchmenu.style.bottom == "55px"){
		searchmenu.style.bottom = "-95%"
		searchbuttonnohighlight();
	}
	else{
		searchmenu.style.bottom = "55px"
		searchbuttonhighlight();
	}
})

widgetsbutton.addEventListener("click", ()=>{

	if(widgetsmenu.style.left == "10px"){
		widgetsmenu.style.left = "-1000px"
		widgetsbuttonnohighlight();
	}
	else{
		widgetsmenu.style.left = "10px"
		widgetsbuttonhighlight
	}
})

timeanddate.addEventListener("click", ()=>{

	if(calendar.style.right == "3px"){
		calendar.style.right = "-95%"
		timeanddate.style.backgroundColor = ""
  		timeanddate.style.borderRadius = ""
	}
	else{
		calendar.style.right = "3px"
		timeanddate.style.backgroundColor = "rgba(255,255,255,.80)"
  		timeanddate.style.borderRadius = "3px"
	}
})

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".startmenu") && !event.target.closest(".startbutton")){
        startmenu.style.bottom = "-675px";
		startbuttonnohighlight();
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".searchmenu") && !event.target.closest(".searchbutton")){
        searchmenu.style.bottom = "-95%";
		searchbuttonnohighlight();
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".widgetsmenu") && !event.target.closest(".widgetsbutton")){
        widgetsmenu.style.left = "-1000px";
		widgetsbuttonnohighlight();
    }
});

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest(".calendar") && !event.target.closest(".timeanddate")){
        calendar.style.right = "-95%";
		timeanddate.style.backgroundColor = ""
  		timeanddate.style.borderRadius = ""
    }
});