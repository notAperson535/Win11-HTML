createsearchtopapp("edge", "img/edge.png", "Microsoft Edge");
createsearchtopapp("notepad", "img/notepad.ico", "Notepad")
createsearchtopapp("vscode", "img/vscode.ico", "VS Code")
createsearchtopapp("solitaire", "img/solitaire.ico", "Solitaire")
createsearchtopapp("store", "img/store.ico", "Microsoft Store")

function createsearchtopapp(appname, icon, visualappname) {
    var topapp = document.createElement("div");
    document.getElementsByClassName('searchtopapps')[0].appendChild(topapp);
    topapp.classList.add("searchtopapp");

    var topappicon = document.createElement("img");
    topapp.appendChild(topappicon);
    topappicon.src = icon;

    var topappvisualname = document.createElement("p");
    topapp.appendChild(topappvisualname);
    topappvisualname.classList.add("searchtopappslabel");
    topappvisualname.setAttribute("align", "center");
    topappvisualname.innerHTML = visualappname;
}