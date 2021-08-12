$(document).ready(function() {
  $("#height-form").submit(function(event) {
    event.preventDefault();
    const feet = parseInt($("#input-feet").val()); // $(...) is the jQuery selector for this element: "input#feet" (input html element with the id of feet)
    //.val() gets the user input value in that text input field (the default return value for .val() is a string)
    //parseInt() changes everything inside the parentheses to an integer.
    //then we assign the result to the constant variable "feet"
    const inches= parseInt ($("#input-inches").val());
    const totalHeight = feet * 12 + inches;
    
    if (totalHeight >= 72) {
      $("#tall").show();
      $("#everybody").show ();
    } else if (totalHeight < 63) {
      $("#short").show ();
      $("#everybody").show ();
    } else {
      $("#medium").show();
      $("#everybody").show();
    }
  });
});
