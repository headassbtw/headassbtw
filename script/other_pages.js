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
  var path = window.location.pathname;
  var root_path = path.substring(0,path.lastIndexOf('headassbtw/')+10);
  var path = "https://github.com/headassbtw/headassbtw/pages.txt";
  var fil = loadFile(path);
  //var fil = "Home;/index.html\nProjects;/Projects/index.html";
  var lines = fil.split('\n');
  for(let i = 0; i < lines.length; i++){
      files_names[i] = lines[i].split(';')[0];
      files[i] = root_path + lines[i].split(';')[1];
  }
}
GetFiles();

console.log(files);
console.log(files_names);

var navbar = document.getElementsByClassName("nav-h2")[0];
console.log(navbar);
for(let i = 0; i < files.length; i++){
  var newitem = document.createElement('a');
  newitem.href = files[i];
  newitem.innerHTML = files_names[i];
  console.log(window.location.pathname);
  if(window.location.pathname != files[i]){

    navbar.appendChild(newitem);
  }
}