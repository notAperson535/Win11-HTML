createstoreentry("calendar", "img/calendar.ico", "Calendar", "App", "An app to manage your calendar")

function createstoreentry(appname, icon, visualappname, type, description) {
    buildstoreentry(appname, icon, visualappname, type);
    makestoreentryusable();
}

function buildstoreentry(appname, icon, visualappname, type) {
    storeentrydiv = document.createElement("div");
    storeentrydiv.classList.add("storeentry");
    document.getElementsByClassName("storeentries")[0].appendChild(storeentrydiv);

    storeentryicon = document.createElement("img");
    storeentryicon.src = icon;
    storeentryicon.classList.add("storeentryicon");
    storeentrydiv.appendChild(storeentryicon);

    storeentryname = document.createElement("p");
    storeentryname.innerHTML = visualappname;
    storeentryname.classList.add("storeentryname");
    storeentrydiv.appendChild(storeentryname);

    storeentrytype = document.createElement("p");
    storeentrytype.innerHTML = type;
    storeentrytype.classList.add("storeentrytype");
    storeentrydiv.appendChild(storeentrytype);

    storeentryprice = document.createElement("p");
    storeentryprice.innerHTML = "Free";
    storeentryprice.classList.add("storeentryprice");
    storeentrydiv.appendChild(storeentryprice);
}

function makestoreentryusable() {

}