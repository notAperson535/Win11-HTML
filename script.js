let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]

startbutton.addEventListener("click", ()=>{
	console.log("clicked");
	if(startmenu.style.bottom == "50px"){
		startmenu.style.transition = "all 0.3s ease-in"
		startmenu.style.bottom = "-655px"
	}
	else{
		if(searchmenu.style.bottom == "50px"){
			startmenu.style.transition = "all 0.0s ease-in"
			searchmenu.style.bottom = "-655px"
			startmenu.style.transition = "all 0.0s ease-in"
			startmenu.style.bottom = "50px"
		}
		else{
			startmenu.style.transition = "all 0.3s ease-in"
			startmenu.style.bottom = "50px"
		}
	}
})

searchbutton.addEventListener("click", ()=>{
	console.log("clicked");
	if(searchmenu.style.bottom == "50px"){
		searchmenu.style.transition = "all 0.3s ease-in"
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
			searchmenu.style.transition = "all 0.3s ease-in"
			searchmenu.style.bottom = "50px"
		}

	}
})
