let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widgetsbutton = document.getElementsByClassName("widgetsbutton")[0]
let taskbariconsleft = document.getElementsByClassName("taskbariconsleft")[0]
let widgetsmenu = document.getElementsByClassName("widgetsmenu")[0]
let timeanddate = document.getElementsByClassName("timeanddate")[0]
let calendarandnotifications = document.getElementsByClassName("calendarandnotifications")[0]
let actioncentericons = document.getElementsByClassName("actioncentericons")[0]
let actioncenter = document.getElementsByClassName("actioncenter")[0]

function highlight(buttonname) {
	buttonname.style.backgroundColor = "var(--hover-color)"
}

function nohighlight(buttonname) {
	buttonname.style.backgroundColor = ""
}

startbutton.addEventListener("click", () => {

	if (startmenu.style.bottom == "55px") {
		startmenu.style.bottom = "-100%"
		nohighlight(startbutton);
	}
	else {
		startmenu.style.bottom = "55px"
		highlight(startbutton);
	}
})

searchbutton.addEventListener("click", () => {

	if (searchmenu.style.bottom == "55px") {
		searchmenu.style.bottom = "-100%"
		nohighlight(searchbutton);
	}
	else {
		searchmenu.style.bottom = "55px"
		highlight(searchbutton);
	}
})

widgetsbutton.addEventListener("click", () => {

	if (widgetsmenu.style.left == "10px") {
		widgetsmenu.style.left = "-1000px"
		nohighlight(widgetsbutton);
	}
	else {
		widgetsmenu.style.left = "10px"
		highlight(widgetsbutton);
	}
})

timeanddate.addEventListener("click", () => {

	if (calendarandnotifications.style.right == "3px") {
		calendarandnotifications.style.right = "-100%"
		nohighlight(timeanddate);
	}
	else {
		calendarandnotifications.style.right = "3px"
		highlight(timeanddate);
	}
})

actioncentericons.addEventListener("click", () => {

	if (actioncenter.style.right == "3px") {
		actioncenter.style.right = "-100%"
		nohighlight(actioncentericons);
	}
	else {
		actioncenter.style.right = "3px"
		highlight(actioncentericons);
	}
})

window.addEventListener('mouseup', function (e) {
	if (!event.target.closest(".startmenu") && !event.target.closest(".startbutton")) {
		startmenu.style.bottom = "-100%";
		nohighlight(startbutton);
	}
});

window.addEventListener('mouseup', function (e) {
	if (!event.target.closest(".searchmenu") && !event.target.closest(".searchbutton")) {
		searchmenu.style.bottom = "-100%";
		nohighlight(searchbutton);
	}
});

window.addEventListener('mouseup', function (e) {
	if (!event.target.closest(".widgetsmenu") && !event.target.closest(".widgetsbutton")) {
		widgetsmenu.style.left = "-1000px";
		nohighlight(widgetsbutton);
	}
});

window.addEventListener('mouseup', function (e) {
	if (!event.target.closest(".calendarandnotifications") && !event.target.closest(".timeanddate")) {
		calendarandnotifications.style.right = "-100%";
		nohighlight(timeanddate);
	}
});

window.addEventListener('mouseup', function (e) {
	if (!event.target.closest(".actioncenter") && !event.target.closest(".actioncentericons")) {
		actioncenter.style.right = "-100%";
		nohighlight(actioncentericons);
	}
});