createpremadeapp("terminal", "", "img/terminal.ico", "Terminal")

let terminalmainsection = document.getElementsByClassName("terminalmainsection")[0]

var titlenode = document.createTextNode('Terminal');
document.querySelector(".terminalappheader .headerleftside").appendChild(titlenode);

eventListener();

function printLine(text) {
    var textdiv = document.createElement("div");
    terminalmainsection.appendChild(textdiv);
    textdiv.classList.add("terminaltext");

    var textdivp = document.createElement("pre");
    textdiv.appendChild(textdivp);
    textdivp.innerHTML = text
}

function newtypebox() {

    var typesectiondiv = document.createElement("div");
    terminalmainsection.appendChild(typesectiondiv);
    typesectiondiv.classList.add("terminaltypesection", "active");

    var typesectionp = document.createElement("p");
    typesectiondiv.appendChild(typesectionp);
    typesectionp.innerHTML = "C:\\Users\\notAperson\\>"

    var typesectioninput = document.createElement("input");
    typesectiondiv.appendChild(typesectioninput);
    typesectioninput.setAttribute("type", "text")

    eventListener();
    document.querySelector(".terminaltypesection.active input").scrollIntoView();
    document.querySelector(".terminaltypesection.active input").focus();
}

function eventListener() {
    typebox = document.querySelector(".terminaltypesection.active input")
    typebox.addEventListener("keyup", ({ key }) => {
        if (key === "Enter") {

            typebox.setAttribute("readonly", "true");
            document.querySelector(".terminaltypesection.active").classList.remove("active");

            if (typebox.value.toLowerCase() == "help") {
                printLine("CLS            Clears the screen.")
                printLine("DATE           Displays or sets the date.")
                printLine("DIR            Displays a list of files and subdirectories in a directory.")
                printLine("ECHO           Displays messages, or turns command echoing on or off.")
                printLine("TIME           Displays or sets the system time.")
            }
            else if (typebox.value.toLowerCase() == "dir") {
                printLine("Directory of C:\\Users\\notAperson\\");
                printLine("‎")
                printLine("<code>&lt;DIR&gt;</code>         Desktop");
                printLine("<code>&lt;DIR&gt;</code>         Documents");
                printLine("<code>&lt;DIR&gt;</code>         Downloads");
                printLine("<code>&lt;DIR&gt;</code>         Pictures");
                printLine("<code>&lt;DIR&gt;</code>         Music")
                printLine("<code>&lt;DIR&gt;</code>         Videos")
                printLine("<code>&lt;DIR&gt;</code>         not-an-easter-egg.txt")
            }
            else if (typebox.value.toLowerCase() == "cls") {
                terminalmainsection.innerHTML = ""
            }
            else if (typebox.value.startsWith("echo ")) {
                var echotext = typebox.value.slice(typebox.value.indexOf("echo ") + "echo ".length);
                printLine(echotext)
            }
            else if (typebox.value.toLowerCase() == "date") {
                var date = new Date()
                var year = date.getYear()
                if (year < 1000) {
                    year += 1900
                }
                var monthArray = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12")
                var currentdate = monthArray[date.getMonth()] + "/" + date.getDate() + "/" + year
                printLine("The current date is: " + currentdate);
            }
            else if (typebox.value.startsWith("title ")) {
                title = typebox.value.slice(typebox.value.indexOf("title ") + "title ".length);
                document.querySelector(".terminalappheader .headerleftside").removeChild(titlenode);
                titlenode = document.createTextNode(title);
                document.querySelector(".terminalappheader .headerleftside").appendChild(titlenode);
            }
            else if (typebox.value == "") {

            }
            else {
                printLine("Invalid command, type \"help\" for more commands")
            }
            newtypebox();
            return;
        }
    })
}