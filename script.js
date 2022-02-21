let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

startbutton.addEventListener("click", ()=>{
	console.log("clicked");
	if(startmenu.style.bottom == "50px"){
		startmenu.style.bottom = "-655px"
	}
	else{
		startmenu.style.bottom = "50px"
	}
})

let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]

searchbutton.addEventListener("click", ()=>{
	console.log("clicked");
	if(searchmenu.style.bottom == "50px"){
		searchmenu.style.bottom = "-655px"
	}
	else{
		searchmenu.style.bottom = "50px"
	}
})
