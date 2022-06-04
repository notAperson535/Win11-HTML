let root = document.querySelector(":root")

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
    let fakemica = getCookie("fakemica");
    if (fakemica != "") {
      root.style.setProperty("--fakeMica", fakemica)
    } else {
      root.style.setProperty("--fakeMica", "#f3f3f3 radial-gradient(#eff4f9 75%,#f3f3f3 100%) no-repeat fixed")
    }

    function setCookieCSSProperties(){
      root.style.setProperty("--fakeMica", fakemica)
    }



    let lightOrDarkMode = getCookie("lightOrDarkMode")
    if(lightOrDarkMode == "dark"){
      darkMode()
    }
    if(lightOrDarkMode == "true"){
      lightMode()
    }
    else{
      lightMode()
    }

    // lightmode and darkmode functions

    function lightMode(){
      setCookie("lightOrDarkMode", "light", "365");

      root.style.setProperty("--explorer-shell-bg-color","rgba(255,255,255,.80)")
      root.style.setProperty("--icon-hover-color", "rgba(249, 249, 249, .67)")
      root.style.setProperty("--invert", "invert(0)")
      root.style.setProperty("--text-color", "black")
      root.style.setProperty("--background-color-opaque", "white")

      root.style.setProperty("--fakeMica", "#f3f3f3 radial-gradient(#eff4f9 75%,#f3f3f3 100%) no-repeat fixed");

      document.querySelectorAll(".app").forEach(elmnt => elmnt.style.border = "solid 1px #B4B4B4");

      document.querySelectorAll(".close").forEach(elmnt =>{
        elmnt.classList.remove("closedarkmode");
        elmnt.classList.add("closelightmode");
      });

      document.querySelectorAll(".searchtopapp").forEach(elmnt => {
        elmnt.style.border = "solid 1px lightgray"
        elmnt.style.backgroundColor = "white"
      });

      document.querySelector(".edgetab").style.boxShadow = "1px 3px 10px lightgrey"
      document.querySelector(".edgeurlbar").style.boxShadow = "0.1px 0.1px 5px rgb(230 230 230)"
      document.querySelectorAll(".edgetabright").forEach(elmnt =>{
        elmnt.classList.remove("edgetabrightdarkmode");
        elmnt.classList.add("edgetabrightlightmode");
      });

      document.querySelector(".storeentriesbackground").style.backgroundColor = "hsla(0,0%,100%,.5)"
      document.querySelectorAll(".storeentry").forEach(elmnt => {
        elmnt.style.border = "solid 1px lightgray"
        elmnt.style.backgroundColor = "white"
      });

      document.querySelector(".notepadtext").style.backgroundColor = "#f9f9f9"

    }

    function darkMode(){
      setCookie("lightOrDarkMode", "dark","365");

      root.style.setProperty("--explorer-shell-bg-color","rgba(32, 32, 32, .75)")
      root.style.setProperty("--icon-hover-color", "rgba(45, 45, 45,.67)")
      root.style.setProperty("--invert", "invert(1)")
      root.style.setProperty("--text-color", "white")
      root.style.setProperty("--background-color-opaque", "black")

      root.style.setProperty("--fakeMica", "#202020 radial-gradient(#1a1f35 25%, #202020 100%) no-repeat fixed");

      document.querySelectorAll(".app").forEach(elmnt => elmnt.style.border = "solid 1px #8d8d8d");

      document.querySelectorAll(".close").forEach(elmnt => {
        elmnt.classList.remove("closelightmode");
        elmnt.classList.add("closedarkmode");
      });

      document.querySelectorAll(".searchtopapp").forEach(elmnt => {
        elmnt.style.border = "solid 1px rgb(255 255 255 / 5%)"
        elmnt.style.backgroundColor = "rgb(255 255 255 / 5%)"
      });

      document.querySelector(".edgetab").style.boxShadow = "1px 3px 10px black"
      document.querySelector(".edgeurlbar").style.boxShadow = "0.1px 0.1px 5px black"
      document.querySelectorAll(".edgetabright").forEach(elmnt =>{
        elmnt.classList.remove("edgetabrightlightmode");
        elmnt.classList.add("edgetabrightdarkmode");
      });
      
      document.querySelector(".storeentriesbackground").style.backgroundColor = "rgb(255 255 255 / 3.33%)"
      document.querySelectorAll(".storeentry").forEach(elmnt => {
        elmnt.style.border = "solid 1px rgb(255 255 255 / 5%)"
        elmnt.style.backgroundColor = "rgb(255 255 255 / 5%)"
      });

      document.querySelector(".notepadtext").style.backgroundColor = "#282828"
    }
  