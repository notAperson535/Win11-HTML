let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widgetsbutton = document.getElementsByClassName("widgetsbutton")[0]
let widgetsmenu = document.getElementsByClassName("widgetsmenu")[0]
let timeanddate = document.getElementsByClassName("timeanddate")[0]
let calendar = document.getElementsByClassName("calendar")[0]

function startbuttonhighlight(){
	startbutton.style.backgroundColor = "white"
  	startbutton.style.border = "solid 7px white"
  	startbutton.style.borderRadius = "5px"
  	startbutton.style.margin = "-7px 2.5px"
}

function startbuttonnohighlight(){
	startbutton.style.backgroundColor = ""
  	startbutton.style.border = ""
  	startbutton.style.borderRadius = ""
  	startbutton.style.margin = ""
}

function searchbuttonhighlight(){
	searchbutton.style.backgroundColor = "white"
  	searchbutton.style.border = "solid 7px white"
  	searchbutton.style.borderRadius = "5px"
  	searchbutton.style.margin = "-7px 2.5px"
}

function searchbuttonnohighlight(){
	searchbutton.style.backgroundColor = ""
  	searchbutton.style.border = ""
  	searchbutton.style.borderRadius = ""
  	searchbutton.style.margin = ""
}

function widgetsbuttonhighlight(){
	widgetsbutton.style.backgroundColor = "white"
  	widgetsbutton.style.border = "solid 7px white"
  	widgetsbutton.style.borderRadius = "5px"
  	widgetsbutton.style.margin = "-7px 2.5px"
}

function widgetsbuttonnohighlight(){
	widgetsbutton.style.backgroundColor = ""
  	widgetsbutton.style.border = ""
  	widgetsbutton.style.borderRadius = ""
  	widgetsbutton.style.margin = ""
}

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) 
        true;
}

startbutton.addEventListener("click", ()=>{

	if(startmenu.style.bottom == "50px"){
		startmenu.style.bottom = "-675px"
		startbuttonnohighlight();
	}
	else{
		startmenu.style.bottom = "50px"
		startbuttonhighlight();
	}
})

searchbutton.addEventListener("click", ()=>{

	if(searchmenu.style.bottom == "50px"){
		searchmenu.style.bottom = "-655px"
		searchbuttonnohighlight();
	}
	else{
		searchmenu.style.bottom = "50px"
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
		calendar.style.right = "-655px"
		timeanddate.style.backgroundColor = ""
  		timeanddate.style.borderRadius = ""
	}
	else{
		calendar.style.right = "3px"
		timeanddate.style.backgroundColor = "white"
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
        searchmenu.style.bottom = "-655px";
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
        calendar.style.right = "-655px";
		timeanddate.style.backgroundColor = ""
  		timeanddate.style.borderRadius = ""
    }
});