let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widgetsbutton = document.getElementsByClassName("widgetsbutton")[0]
let widgetsmenu = document.getElementsByClassName("widgetsmenu")[0]
let edgebutton = document.getElementsByClassName("edgebutton")[0]
let edgeapp = document.getElementsByClassName("edgeapp")[0]
let edgeclose = document.getElementById("edgeclose")

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

edgeclose.addEventListener("click", function(e){
        edgeapp.style.opacity = '0';
});