$(document).ready(function() {

  console.log("File linked");
  $(".table-hide").click(function() {
    var selectedTable = $(this).attr("data-table-for");
    $("#" + selectedTable).find("tbody").toggle();

    if ($("#" + selectedTable).find("tbody").is(":visible")) {
      $(this).html("<span id='description-table-hide' class='glyphicon glyphicon-minus-sign'></span> Hide");
    } else {
      $(this).html("<span id='description-table-hide' class='glyphicon glyphicon-plus-sign'></span> Show");
    }
  });

});
