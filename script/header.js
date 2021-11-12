
var files = ["",""];
var files_names = ["",""];

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}

function GetFiles(){
    var path = "https://headassbtw.github.io/headassbtw/pages.txt";
    var fil = loadFile(path);
    var lines = fil.split('\n');
    for(let i = 0; i < lines.length; i++){
        files_names[i] = lines[i].split(';')[0];
        files[i] = lines[i].split(';')[1];
    }
}
GetFiles();

var gradient = ["black","white","white","black","black"]

function sidebar_on() {
    document.getElementsByClassName("overlay")[0].style.display = "block";
    document.querySelector(":root").style.setProperty('--overlay-shift', 50);
}

function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delayInms);
        }, delayInms);
    });
}
function sidebar_off() {
    document.querySelector(":root").style.setProperty("--overlay-shift", -80);
    document.getElementsByClassName("overlay")[0].style.display = "none";
}

sidebar_pagediv = function(path, name){
    var iDiv = document.createElement('div');
    //iDiv.id = "r";
    iDiv.innerHTML  = "<a class='page-nav' href='" + path + "'>"
        + "<div id='c' style='align:center;width:100%; display: flex; align-items:stretch; flex-direction: row;'>"
        + "<div id='r' style='height:50px;background-color:white;'></div>"
        + "<div style='width:100%;text-align: center;'>" + name + "</div>"
        + "<div id='r' style='float:right;height:50px; background-color:white;'></div>"
        + "</div>" //ending of #c
        + "</a>";
    return iDiv;
}
navbar_pagecontainer = function(path, name){
    var iDiv = document.createElement('a');
    iDiv.className = "nav-container";
    iDiv.href = path;

    var bDiv = document.createElement('div');
    bDiv.className = "nav-b";
    iDiv.appendChild(bDiv);

    var cDiv = document.createElement('div');
    cDiv.className = "nav-content";
    cDiv.innerHTML = name;
    iDiv.appendChild(cDiv);

    var aDiv = document.createElement('div');
    aDiv.className = "nav-a";
    iDiv.appendChild(aDiv);

    var idx = files.indexOf(path);


    return iDiv;
}

function textWidth(text) {
    var tag = document.createElement('div')
    tag.style.position = 'absolute'
    tag.style.left = '-99in'
    tag.style.whiteSpace = 'nowrap'
    tag.innerHTML = text

    document.body.appendChild(tag)
    var result = tag.clientWidth
    document.body.removeChild(tag)
    return result;
}

var itemsFrac = 100 / files.length;
function addSideMenu(){

    document.open();
    document.write("<div class='overlay'>");
    document.write(    "<div class='overlay-element'>");
    document.write(        "<button onclick='sidebar_off()'><div class='fancy_button'></div>Close Menu</button>");
    document.write(    "</div>");
    document.write("</div>");
    document.write("<div style='height:30px; width:100%; pad-bottom:30px;position:fixed; display: flex;'>");
    document.write("<div style='width:100%;' class='nav-menu'></div><button style='margin-right:10px;' onclick='sidebar_on()'>More</button></div>");
    //putting this here for all the people snooping in the inspector :)
    document.write("<!-- a spacer div, to make up for the floating navbar -->");
    document.write("<div style='width:100%; height:30px;'></div>");
    document.close();
    sidebar_loadPages();
}


function navbar_addpage(bar, pages, pageTitles){
    for(let i = 0; i < pages.length; i++){
        var newitem = document.createElement('a');
        newitem.innerHTML = "<a class='nav-header' href='"+ pages[i] +"'><div>"+ pageTitles[i] +"</div></a>";
        bar.appendChild(newitem);
    }
}

function navbar(){
//i had a really clever auto-sizing thing for the options,
//which would get the amount of pages and get a fraction from it,
//BUT APPARENTLY FLEXBOX HANDLES THAT FOR ME SO IT WAS WORTHLESS
}
navbar();
addSideMenu();



function sidebar_loadPages(){
    var sidebar_div = document.getElementsByClassName("overlay")[0].getElementsByClassName("overlay-element")[0];
    var navbar = document.getElementsByClassName("nav-menu")[0];
    var path = window.location.pathname.split('/');
    var shortpath = path[path.length - 2] + '/' + path[path.length-1];
    if(path[path.length-1] == "index.html"){
        files[0] = "index.html";
        for(let l = 1; l < files.length;l++){
            files[l] = "pages/" + files[l];
        }
    }
    console.log(shortpath);
    var wi = 0;
    for(let i = 0; i < files.length; i++){
        if(files[i] != path){
            sidebar_div.appendChild(sidebar_pagediv(files[i], files_names[i]));
            wi += textWidth(files_names[i]) + (40 * (itemsFrac/100));
            var cw = navbar.clientWidth * (((itemsFrac * (i+1))/100));

            if(wi > cw){
                console.log("element overflowing! (combined text width of "+ wi +" vs box width of "+ cw +")");
            }
            else{
                navbar.appendChild(navbar_pagecontainer(files[i], files_names[i]));
            }
        }
    }
}
function headernav_load(){

}