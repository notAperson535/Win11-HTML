let root = document.querySelector(":root")

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
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


let lightOrDarkMode = getCookie("lightOrDarkMode")
if (lightOrDarkMode == "dark") {
  darkMode()
}
else if (lightOrDarkMode == "light") {
  lightMode()
}
else {
  lightMode()
}

// lightmode and darkmode functions

function lightMode() {
  setCookie("lightOrDarkMode", "light", "365");

  root.style.setProperty("--explorer-shell-bg-color", "rgba(255,255,255,.80)")
  root.style.setProperty("--fakeMica", "#f3f3f3 radial-gradient(#eff4f9 75%,#f3f3f3 100%) no-repeat fixed");
  root.style.setProperty("--hover-color", "rgba(255,255,255,.8)")
  root.style.setProperty("--invert", "invert(0)")
  root.style.setProperty("--text-color", "black")
  root.style.setProperty("--calendar-hover-color", "lightgray")
  root.style.setProperty("--background-color", "white")
  root.style.setProperty("--solid-background-color", "white")
  root.style.setProperty("--border-color", "lightgray")

  document.querySelector("body").style.backgroundImage = "url(https://raw.githubusercontent.com/notAperson535/Win11-HTML/main/img/backgroundlight.jpg)"

  document.querySelectorAll(".explorerarrow").forEach(elmnt => elmnt.style.color = "#555")
  document.querySelectorAll(".explorermainsectionheader").forEach(elmnt => elmnt.style.color = "#393C5C")

  document.querySelectorAll(".app").forEach(elmnt => elmnt.style.border = "solid 1px #B4B4B4");

  document.querySelectorAll(".close").forEach(elmnt => {
    elmnt.classList.remove("closedarkmode");
    elmnt.classList.add("closelightmode");
  });

  document.querySelector(".calendarheader").style.backgroundColor = "rgba(218, 226, 242,.95)"
  document.querySelector(".actioncenterbottom").style.backgroundColor = "rgba(218, 226, 242,.95)"

  document.querySelector(".edgetab").style.boxShadow = "1px 3px 10px lightgrey"
  document.querySelector(".edgeurlbar").style.boxShadow = "0.1px 0.1px 5px rgb(230 230 230)"
  document.querySelectorAll(".edgetabright").forEach(elmnt => {
    elmnt.classList.remove("edgetabrightdarkmode");
    elmnt.classList.add("edgetabrightlightmode");
  });

  document.querySelector(".storeentriesbackground").style.backgroundColor = "hsla(0,0%,100%,.5)"

  document.querySelector(".notepadtext").style.backgroundColor = "#f9f9f9"
}

function darkMode() {
  setCookie("lightOrDarkMode", "dark", "365");

  root.style.setProperty("--explorer-shell-bg-color", "rgba(32, 32, 32, .75)")
  root.style.setProperty("--fakeMica", "#202020 radial-gradient(#1a1f35 25%, #202020 100%) no-repeat fixed");
  root.style.setProperty("--hover-color", "rgb(255 255 255 / 5%)")
  root.style.setProperty("--invert", "invert(1)")
  root.style.setProperty("--text-color", "white")
  root.style.setProperty("--calendar-hover-color", "rgba(55,55,55,.67)")
  root.style.setProperty("--background-color", "rgb(255 255 255 / 5%)")
  root.style.setProperty("--solid-background-color", "black")
  root.style.setProperty("--border-color", "rgb(255 255 255 / 5%)")

  document.querySelector("body").style.backgroundImage = "url(https://raw.githubusercontent.com/notAperson535/Win11-HTML/main/img/backgrounddark.jpg)"

  document.querySelectorAll(".explorerarrow").forEach(elmnt => elmnt.style.color = "#aaa")
  document.querySelectorAll(".explorermainsectionheader").forEach(elmnt => elmnt.style.color = "#B2B4B2")

  document.querySelectorAll(".app").forEach(elmnt => elmnt.style.border = "solid 1px #8d8d8d");

  document.querySelectorAll(".close").forEach(elmnt => {
    elmnt.classList.remove("closelightmode");
    elmnt.classList.add("closedarkmode");
  });

  document.querySelector(".calendarheader").style.backgroundColor = "rgba(28,28,28,.95)"
  document.querySelector(".actioncenterbottom").style.backgroundColor = "rgba(28,28,28,.95)"

  document.querySelector(".edgetab").style.boxShadow = "1px 3px 10px black"
  document.querySelector(".edgeurlbar").style.boxShadow = "0.1px 0.1px 5px black"
  document.querySelectorAll(".edgetabright").forEach(elmnt => {
    elmnt.classList.remove("edgetabrightlightmode");
    elmnt.classList.add("edgetabrightdarkmode");
  });

  document.querySelector(".storeentriesbackground").style.backgroundColor = "rgb(255 255 255 / 3.33%)"

  document.querySelector(".notepadtext").style.backgroundColor = "#282828"
}
