let startbutton = document.getElementsByClassName("startbutton")[0]
var startmenu = document.getElementsByClassName("startmenu")[0]
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widgetsbutton = document.getElementsByClassName("widgetsbutton")[0]
let widgetsmenu = document.getElementsByClassName("widgetsmenu")[0]

startbutton.addEventListener("click", ()=>{
	console.log("clicked");
	if(startmenu.style.bottom == "50px"){
		startmenu.style.transition = "all 0.2s ease-in"
		startmenu.style.bottom = "-655px"
	}
	else{
		searchmenu.style.transition = "all 0.0s ease-in"
		searchmenu.style.bottom = "-655px"
		startmenu.style.transition = "all 0.2s ease-in"
		startmenu.style.bottom = "50px"
	}
})

searchbutton.addEventListener("click", ()=>{
	console.log("clicked");
	if(searchmenu.style.bottom == "50px"){
		searchmenu.style.transition = "all 0.2s ease-in"
		searchmenu.style.bottom = "-655px"
	}
	else{
		if(startmenu.style.bottom == "50px"){
			startmenu.style.transition = "all 0.0s ease-in"
			startmenu.style.bottom = "-655px"
			searchmenu.style.transition = "all 0.0s ease-in"
			searchmenu.style.bottom = "50px"
		}
		else{
			searchmenu.style.transition = "all 0.2s ease-in"
			searchmenu.style.bottom = "50px"
		}

	}
})

widgetsbutton.addEventListener("click", ()=>{
	console.log("clicked");
	if(widgetsmenu.style.left == "10px"){
		widgetsmenu.style.transition = "all 0.2s ease-in"
		widgetsmenu.style.left = "-1000px"
	}
	else{
		widgetsmenu.style.transition = "all 0.2s ease-in"
		widgetsmenu.style.left = "10px"
		}

	
})
