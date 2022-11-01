function createapp(appname, website, icon, visualappname) {
  buildapp(appname, icon, visualappname);
  createstartmenuicon(appname, icon, visualappname);
  createtaskbaricon(appname, icon);
  makeappusable(appname, website);
}

function createpremadeappwithtaskbaricon(appname, website, icon, visualappname) {
  createstartmenuicon(appname, icon, visualappname);
  makeappusable(appname, website);
}

function createpremadeapp(appname, website, icon, visualappname) {
  createstartmenuicon(appname, icon, visualappname);
  createtaskbaricon(appname, icon);
  makeappusable(appname, website);
}

function createstartmenuicon(appname, icon, visualappname) {

  var startmenuicondiv = document.createElement("div");
  document.getElementsByClassName('sApps')[0].appendChild(startmenuicondiv);
  startmenuicondiv.classList.add(appname + "startmenuicon", "starticons");

  var startmenuicondivimage = document.createElement("img")
  startmenuicondivimage.src = icon
  startmenuicondiv.appendChild(startmenuicondivimage)

  var startmenuicondivtext = document.createElement("p")
  startmenuicondiv.appendChild(startmenuicondivtext)
  startmenuicondivtext.classList.add("startlabels")
  startmenuicondivtext.setAttribute("align", "center")
  startmenuicondivtext.innerHTML = visualappname

}

function createtaskbaricon(appname, icon) {

  var taskbaricondiv = document.createElement("div");
  document.getElementsByClassName('taskbariconscenter')[0].appendChild(taskbaricondiv);
  taskbaricondiv.classList.add(appname + "taskbaricon", "taskbaricons", "hidden");

  var taskbaricondivimage = document.createElement("img")
  taskbaricondivimage.src = icon
  taskbaricondiv.appendChild(taskbaricondivimage)
  taskbaricondivimage.classList.add("taskbariconsimg")

  var centerdiv = document.createElement("div");
  centerdiv.classList.add("center");
  taskbaricondiv.appendChild(centerdiv);

  var taskbariconhighlightdiv = document.createElement("div");
  centerdiv.appendChild(taskbariconhighlightdiv);
  taskbariconhighlightdiv.classList.add("taskbariconhighlight");

}

function buildapp(appname, icon, visualappname) {

  var appdiv = document.createElement("div");
  document.body.appendChild(appdiv);
  appdiv.classList.add(appname + "app", "app");

  var resizertopleft = document.createElement("div");
  resizertopleft.classList.add(appname + "resizer", "resizer", "top-left");
  appdiv.appendChild(resizertopleft);
  var resizertopright = document.createElement("div");
  resizertopright.classList.add(appname + "resizer", "resizer", "top-right");
  appdiv.appendChild(resizertopright);
  var resizerbottomleft = document.createElement("div");
  resizerbottomleft.classList.add(appname + "resizer", "resizer", "bottom-left");
  appdiv.appendChild(resizerbottomleft);
  var resizerbottomright = document.createElement("div");
  resizerbottomright.classList.add(appname + "resizer", "resizer", "bottom-right");
  appdiv.appendChild(resizerbottomright);

  var resizertop = document.createElement("div");
  resizertop.classList.add(appname + "resizer", "resizer", "resizertopbottom", "top");
  appdiv.appendChild(resizertop);
  var resizerleft = document.createElement("div");
  resizerleft.classList.add(appname + "resizer", "resizer", "resizerleftright", "left");
  appdiv.appendChild(resizerleft);
  var resizerbottom = document.createElement("div");
  resizerbottom.classList.add(appname + "resizer", "resizer", "resizertopbottom", "bottom");
  appdiv.appendChild(resizerbottom);
  var resizerright = document.createElement("div");
  resizerright.classList.add(appname + "resizer", "resizer", "resizerleftright", "right");
  appdiv.appendChild(resizerright);

  var appheader = document.createElement("div");
  appheader.id = appname + "appheader";
  appheader.classList.add(appname + "appheader", "appheader");
  appdiv.appendChild(appheader)

  var headerleftside = document.createElement("div");
  headerleftside.classList.add(appname + "headerleftside", "headerleftside");
  appheader.appendChild(headerleftside);

  var appicon = document.createElement("img");
  appicon.src = icon;
  headerleftside.appendChild(appicon);
  appicon.classList.add("appheadericon")
  headerleftside.appendChild(document.createTextNode(visualappname));

  var headerrightside = document.createElement("div");
  headerrightside.classList.add(appname + "headerrightside", "headerrightside", "invert");
  appheader.appendChild(headerrightside);

  var minimizediv = document.createElement("div");
  minimizediv.classList.add(appname + "minimize", "minimize");
  headerrightside.appendChild(minimizediv);
  var minimizedivimage = document.createElement("img");
  minimizedivimage.src = "img/minimize.png";
  minimizediv.appendChild(minimizedivimage);

  var maximizeandrestore = document.createElement("div");
  maximizeandrestore.classList.add(appname + "maximizeandrestore", "maximizeandrestore");
  headerrightside.appendChild(maximizeandrestore);

  var maximizediv = document.createElement("div");
  maximizediv.classList.add(appname + "maximize", "maximize")
  maximizeandrestore.appendChild(maximizediv);
  var maximizedivimage = document.createElement("img");
  maximizedivimage.src = "img/maximize.png";
  maximizedivimage.id = appname + "maximize"
  maximizediv.appendChild(maximizedivimage);

  var restorediv = document.createElement("div");
  restorediv.classList.add(appname + "restore", "restore")
  maximizeandrestore.appendChild(restorediv);
  var restoredivimage = document.createElement("img");
  restoredivimage.src = "img/restore.png";
  restoredivimage.classList.add("restoreimage")
  restoredivimage.id = appname + "restore"
  restorediv.appendChild(restoredivimage);

  var closediv = document.createElement("div");
  closediv.classList.add(appname + "close", "close");
  headerrightside.appendChild(closediv);
  var closedivimage = document.createElement("img");
  closedivimage.src = "img/close.png";
  closediv.appendChild(closedivimage);

  //var loadingimgcontainer = document.createElement("div");
  //loadingimgcontainer.classList.add(appname + "loadingimg", "loadingimg");
  //appdiv.appendChild(loadingimgcontainer);
  //var loadingimg = document.createElement("img");
  //loadingimg.classList.add("loadinggif");
  //loadingimg.src = "img/loading.gif";
  //document.getElementsByClassName(appname + "loadingimg")[0].appendChild(loadingimg);

  var appiframe = document.createElement("iframe");
  appiframe.classList.add(appname + "Iframe", "appIframe")
  appiframe.id = appname + "Iframe"
  appdiv.appendChild(appiframe)
  appiframe.setAttribute("data-responsive", "true");
  if (appname == "calculator") {
    appiframe.classList.add("invert")
  }

}

function makeappusable(appname, website) {
  let startmenuicon = document.getElementsByClassName(appname + "startmenuicon")[0]
  let app = document.getElementsByClassName(appname + "app")[0]
  let appheader = document.getElementsByClassName(appname + "appheader")[0]
  let close = document.getElementsByClassName(appname + "close")[0]
  let edgetabright = document.getElementsByClassName("edgetabright")[0]
  let maximize = document.getElementsByClassName(appname + "maximize")[0]
  let minimize = document.getElementsByClassName(appname + "minimize")[0]
  let restore = document.getElementsByClassName(appname + "restore")[0]
  let maximizeimage = document.getElementById(appname + "maximize")
  let restoreimage = document.getElementById(appname + "restore")
  let taskbaricon = document.getElementsByClassName(appname + "taskbaricon")[0]
  let taskbariconhighlight = document.querySelector("." + appname + "taskbaricon" + " " + ".taskbariconhighlight")
  var topminclose = "8%"
  var leftminclose = "20%"
  var widthminclose = "60%"
  var heightminclose = "75%"
  var topminmax = "8%"
  var leftminmax = "20%"
  var widthminmax = "60%"
  var heightminmax = "75%"
  app.style.zIndex = zIndex

  app.style.width = "0%"

  document.querySelectorAll(".taskbaricons").forEach(elmnt => {
    elmnt.addEventListener("mousedown", () => {
      elmnt.querySelector(".taskbariconsimg").style.margin = "3.125px"
      elmnt.querySelector(".taskbariconsimg").style.width = "18.75px"
    });
  });

  document.querySelectorAll(".taskbaricons").forEach(elmnt => {
    window.addEventListener('mouseup', function (event) {
      elmnt.querySelector(".taskbariconsimg").style.width = "25px"
      elmnt.querySelector(".taskbariconsimg").style.margin = "0px"
    });
  });

  document.querySelectorAll(".starticons").forEach(elmnt => {
    elmnt.addEventListener("mousedown", () => {
      elmnt.querySelector("img").style.margin = "3.75px"
      elmnt.querySelector("img").style.marginTop = "15.75px"
      elmnt.querySelector("img").style.width = "22.5px"
    });
  });

  document.querySelectorAll(".starticons").forEach(elmnt => {
    window.addEventListener('mouseup', function (event) {
      elmnt.querySelector("img").style.width = "30px"
      elmnt.querySelector("img").style.margin = "0px"
      elmnt.querySelector("img").style.marginTop = "12px"
    });
  });

  function sleep(ms) {
    return new Promise(resolver => setTimeout(resolver, ms));
  };

  function bringtofront() {
    zIndex = zIndex + 2
    app.style.zIndex = zIndex;
  }

  function goToPage(pageUrl) {
    if (appname == "edge" || appname == "notepad" || appname == "store" || appname == "explorer" || appname == "internetexplorer" || appname == "terminal") {
      return;
    }
    document.getElementById(appname + 'Iframe').src = pageUrl;
  }

  function roundedcorners() {
    app.style.borderRadius = "10px"
  }

  function active() {
    taskbariconhighlight.style.backgroundColor = "var(--accent-color)"
    taskbariconhighlight.style.width = "15px"
    app.style.boxShadow = "0 10px 20px rgb(0 0 0 / 25%)"
    taskbaricon.style.backgroundColor = "var(--hover-color)"
  }

  function notactive() {
    taskbariconhighlight.style.backgroundColor = "grey"
    taskbariconhighlight.style.width = "7.5px"
    app.style.boxShadow = "none"
    taskbaricon.style.backgroundColor = ""
  }

  window.addEventListener('mousedown', function (e) {
    if (!event.target.closest("." + appname + "app")) {
      notactive();
    } else {
      active();
      bringtofront();
    }
  });

  function getproperties() {
    topminclose = getComputedStyle(app).getPropertyValue('top');
    leftminclose = getComputedStyle(app).getPropertyValue('left');
    widthminclose = getComputedStyle(app).getPropertyValue('width');
    heightminclose = getComputedStyle(app).getPropertyValue('height');
  }

  function getpropertiesmax() {
    topminmax = getComputedStyle(app).getPropertyValue('top');
    leftminmax = getComputedStyle(app).getPropertyValue('left');
    widthminmax = getComputedStyle(app).getPropertyValue('width');
    heightminmax = getComputedStyle(app).getPropertyValue('height');
  }

  function minorclose() {
    notactive();
    getproperties();
    app.style.transition = "all .17s cubic-bezier(.85,.14,.14,.85), opacity 80ms linear"
    app.style.left = "50%"
    app.style.top = "50%"
    app.style.width = "0%"
    app.style.height = "0%"
    app.style.opacity = "0"
  }

  function recoverproperties() {
    app.style.transition = "all .17s cubic-bezier(.85,.14,.14,.85), opacity 80ms linear"
    app.style.top = topminclose
    app.style.left = leftminclose
    app.style.width = widthminclose
    app.style.height = heightminclose
    app.style.opacity = "1"
  }

  function recoverpropertiesrestore() {
    app.style.transition = "all .17s cubic-bezier(.85,.14,.14,.85), opacity 80ms linear"
    app.style.top = topminmax
    app.style.left = leftminmax
    app.style.width = widthminmax
    app.style.height = heightminmax
    app.style.opacity = "1"
  }

  startmenuicon.addEventListener("click", () => {

    active();
    startmenu.style.bottom = "-100%"
    nohighlight(startbutton);

    if (app.style.opacity == "1") {
      active();
      bringtofront();
      return;
    }
    if (app.style.width = "0%") {
      goToPage(website);
      recoverproperties();
      taskbaricon.style.display = "block"
      active();
      bringtofront();
      taskbariconhighlight.style.opacity = "1"
    }
    else {
      recoverproperties();
      taskbaricon.style.display = "block"
      active();
      bringtofront();
      taskbariconhighlight.style.opacity = "1"
    }

  })

  taskbaricon.addEventListener("click", () => {

    active();
    taskbariconhighlight.style.opacity = "1"
    startmenu.style.bottom = "-100%"

    if (app.style.width == "0%") {
      active();
      bringtofront();
      recoverproperties();
      taskbaricon.style.display = "block"
    }
    else if (app.style.zIndex != zIndex) {
      active();
      bringtofront();
    }
    else if (app.style.opacity == "1") {
      active();
      bringtofront();
      minorclose();
      app.style.top = "200%"
    }

  })

  close.addEventListener("click", () => {

    minorclose();
    taskbariconhighlight.style.opacity = "0"
    taskbariconhighlight.style.width = "0px"
    if (appname == "edge" || appname == "store" || appname == "explorer") {
      void 0;
    } else {
      taskbaricon.style.display = "none"
      sleep(1000).then(() => {
        goToPage();
      })
    }

  });

  edgetabright.addEventListener("click", () => {

    if (appname == "edge") {
      minorclose();
      taskbariconhighlight.style.opacity = "0"
      taskbariconhighlight.style.width = "0px"
    }

  });

  minimize.addEventListener("click", () => {
    active();
    bringtofront();
    minorclose();
    app.style.top = "200%"
  });

  maximize.addEventListener("click", () => {
    app.style.borderRadius = "0px"
    app.style.transition = "all .17s cubic-bezier(.85,.14,.14,.85)"
    app.style.left = "0px"
    app.style.width = "100%"
    app.style.height = "calc(100% - 48px)"
    app.style.top = "0px"
    app.style.border = "none"
    getpropertiesmax();
    getproperties();
    maximizeimage.style.display = "none"
    restoreimage.style.display = "block"
  });

  function showmaximizehideminmax() {
    maximizeimage.style.display = "block"
    restoreimage.style.display = "none"
  }

  restore.addEventListener("click", () => {
    roundedcorners();
    app.style.border = "1.5px solid #B4B4B4"
    app.style.transition = "all .17s cubic-bezier(.85,.14,.14,.85)"
    recoverpropertiesrestore();
    showmaximizehideminmax();
  });

  function removetransition() {
    app.style.transition = "opacity 80ms linear"
  }

  // quick searches

  let thisdayinhistory = document.getElementsByClassName("thisdayinhistory")[0]
  let marketstoday = document.getElementsByClassName("marketstoday")[0]
  let newmovies = document.getElementsByClassName("newmovies")[0]
  let topnews = document.getElementsByClassName("topnews")[0]

  thisdayinhistory.addEventListener("click", () => {
    openedgewithcustomsearch("This Day In History");
  })

  marketstoday.addEventListener("click", () => {
    openedgewithcustomsearch("Markets Today");
  })

  newmovies.addEventListener("click", () => {
    openedgewithcustomsearch("New Movies");
  })

  topnews.addEventListener("click", () => {
    openedgewithcustomsearch("Top News");
  })

  function openedgewithcustomsearch(searchterm) {
    if (appname == "edge") {
      nohighlight(searchbutton);
      searchmenu.style.bottom = "-100%"
      document.getElementsByClassName("edgeurlbar")[0].value = "https://www.bing.com/search?q=" + searchterm
      goToEdgePage(document.getElementsByClassName("edgeURL")[0].value);
      active();
      taskbariconhighlight.style.opacity = "1"
      startmenu.style.bottom = "-100%"

      if (app.style.width == "0%") {
        active();
        bringtofront();
        recoverproperties();
        taskbaricon.style.display = "block"
      }
      else if (app.style.zIndex != zIndex) {
        active();
        bringtofront();
      }
    }
  }


  // draggable

  dragElement();

  function dragElement() {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    appheader.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    removetransition();
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    getproperties();
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    app.style.top = (app.offsetTop - pos2) + "px";
    app.style.left = (app.offsetLeft - pos1) + "px";
    showmaximizehideminmax();
    roundedcorners();
  }

  function closeDragElement() {
    getproperties();
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }



  // resizable

  let divs = Array.from(document.getElementsByClassName(appname + "app")),
    minWidth = 420,
    minHeight = 73,
    isResizing = false;

  divs.forEach(div => {
    div.addEventListener('mousedown', mousedown);
    //select the resizers
    let resizers = div.querySelectorAll('.resizer');

    resizers.forEach(function (resizer) {
      resizer.addEventListener('mousedown', mousedownOnresizer);
    })

    function mousedownOnresizer(e) {
      let prevX = e.clientX,
        prevY = e.clientY,
        currentresizer = e.target,
        rect = div.getBoundingClientRect(),
        prevLeft = rect.left,
        prevTop = rect.top,
        newWidth,
        newHeight;

      isResizing = true;

      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);


      function mousemove(e) {
        removetransition();
        roundedcorners();
        showmaximizehideminmax();
        let newX = prevX - e.clientX, //negative to the right, positive to the left
          newY = prevY - e.clientY; //negative to the bottom, positive to the top
        if (currentresizer.classList.contains('bottom-right')) {
          newWidth = rect.width - newX;
          newHeight = rect.height - newY;
          if (newWidth > minWidth) {
            div.style.width = newWidth + 'px';
          }
          if (newHeight > minHeight) {
            div.style.height = newHeight + 'px';
          }

        }
        else if (currentresizer.classList.contains('bottom-left')) {
          newWidth = rect.width + newX;
          newHeight = rect.height - newY;

          if (newWidth > minWidth) {
            div.style.left = prevLeft - newX + 'px';
            div.style.width = newWidth + 'px';
          }
          if (newHeight > minHeight) {
            div.style.height = newHeight + 'px';
          }

        }
        else if (currentresizer.classList.contains('top-right')) {
          newWidth = rect.width - newX;
          newHeight = rect.height + newY;

          if (newWidth > minWidth) {
            div.style.width = newWidth + 'px';
          }
          if (newHeight > minHeight) {
            div.style.top = prevTop - newY + 'px';
            div.style.height = newHeight + 'px';
          }

        }
        else if (currentresizer.classList.contains('top-left')) {
          newWidth = rect.width + newX;
          newHeight = rect.height + newY;

          if (newWidth > minWidth) {
            div.style.left = prevLeft - newX + 'px';
            div.style.width = newWidth + 'px';
          }
          if (newHeight > minHeight) {
            div.style.top = prevTop - newY + 'px';
            div.style.height = newHeight + 'px';
          }
        }
        else if (currentresizer.classList.contains('top')) {
          newHeight = rect.height + newY;

          if (newHeight > minHeight) {
            div.style.top = prevTop - newY + 'px';
            div.style.height = newHeight + 'px';
          }
        }
        else if (currentresizer.classList.contains('left')) {
          newWidth = rect.width + newX;

          if (newWidth > minWidth) {
            div.style.left = prevLeft - newX + 'px';
            div.style.width = newWidth + 'px';
          }
        }
        else if (currentresizer.classList.contains('bottom')) {
          newHeight = rect.height - newY;

          if (newHeight > minHeight) {
            div.style.height = newHeight + 'px';
          }
        }
        else if (currentresizer.classList.contains('right')) {
          newWidth = rect.width - newX;

          if (newWidth > minWidth) {
            div.style.width = newWidth + 'px';
          }
        }
      }


      function mouseup() {
        getproperties();
        isResizing = false;
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
      }
    }
  })


  function mousedown(e) {
    //get the initial mouse corrdinates and the position coordinates of the element
    let div = this,
      prevX = e.clientX,
      prevY = e.clientY,
      rect = div.getBoundingClientRect(),
      prevLeft = rect.left,
      prevTop = rect.top;

    function mousemove(e) {
      //get horizontal and vertical distance of the mouse move
      let newX = prevX - e.clientX, //negative to the right, positive to the left
        newY = prevY - e.clientY; //negative to the bottom, positive to the top

      //set coordinates of the element to move it to its new position
      div.style.left = prevLeft - newX + 'px';
      div.style.top = prevTop - newY + 'px';
    }
  }
}