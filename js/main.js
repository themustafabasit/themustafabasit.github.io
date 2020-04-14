function snackbar(){
  var x = document.getElementById("snackbar");
  x.className = "show";
  
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000)
}

function doTask(){
  snackbar();

  //specify below the delay of download in micro seconds
  setTimeout(function(){window.open('./resources/resume.pdf')}, 2000);
}
