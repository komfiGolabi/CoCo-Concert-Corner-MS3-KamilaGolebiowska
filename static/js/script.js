$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('select').formSelect();
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 5,
      showClearBtn: true,
      i18n: {
          done: "Select"
      }
    });
    $(".dropdown-trigger").dropdown({ hover: false });
    
});


// Manually make all DOM with .collapsible collapsible 
function initialCollaps (){
  $('.collapsible').collapsible();
}
initialCollaps();

function eventDate(){
  $('.datepicker').datepicker();
}

eventDate();


validateMaterializeSelect();
function validateMaterializeSelect() {
    let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
    let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
    if ($("select.validate").prop("required")) {
        $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
    }
   
};

      