let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
   
startbutton.addEventListener("click", ()=>{ console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})