var files = ["",""];
var files_names = ["",""];


var path = window.location.pathname;
var root_path = "https://dipshit.tech";
var fil = "Home;/\nProjects;/Projects/\nFAQ;/FAQ/";
var lines = fil.split('\n');
for(let i = 0; i < lines.length; i++){
    files_names[i] = lines[i].split(';')[0];
    files[i] = root_path + lines[i].split(';')[1];
}

console.log(files);
console.log(files_names);

var navbar = document.getElementsByClassName("nav-h2")[0];
console.log(navbar);
for(let i = 0; i < files.length; i++){
  var newitem = document.createElement('a');
    var divider = document.createElement('span');
    divider.innerHTML = "// ";
    divider.style = "user-select: none;";
    newitem.href = files[i];
    newitem.innerHTML = files_names[i] + " ";
  if(window.location != files[i]){
    
    navbar.appendChild(divider);
    navbar.appendChild(newitem);
  }
}

console.log(files);
console.log(files_names);