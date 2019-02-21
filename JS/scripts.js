$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    
    
    var dob = $("#date").val();
    var dob = $("#time").val();
    
    $("#booking").show();
    $("#blanks").hide();
    
     event.preventDefault();
 });
});