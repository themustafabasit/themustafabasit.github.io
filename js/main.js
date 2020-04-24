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

function form_action(){
  alert("Thanks for messaging Me,\n" + "Currently I'm Recieving Forms via E-mail. An App will open in a while, do HIT that \"Send\" button");
  
  var name = document.getElementById('sender_name').value;  
  var mailid = document.getElementById('sender_mailid').value;
  var message = "Username: " + name + "<br>"+ "<br>Message: <br>"+ document.getElementById('sender_message').value;
  
  var mailto = "mailto:mailtobasit74@gmail.com?subject=" + "New mail from Portfolio by -\"" + name + "\"&body=" + message + "<br><br>Reply Me here: " + mailid;
  window.open(mailto);

}
