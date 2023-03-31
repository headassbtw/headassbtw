var files = ["",""];
var files_names = ["",""];

function GetFiles(){
  var path = window.location.pathname;
  var root_path = path.substring(0,path.lastIndexOf('headassbtw/')+10);
  var fil = "Home;/\nProjects;/Projects/\nFAQ;/FAQ/";
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
  newitem.innerHTML = files_names[i] + " ";
  console.log(window.location.pathname);
  console.log(files[i]);
  if(window.location.pathname != files[i]){
    navbar.appendChild(newitem);
  }
}