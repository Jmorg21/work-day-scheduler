
$('#currentDay').text(moment().format('dddd, MMMM Do'));

function updateColor() {
  var currentHour = moment().hour();
  
  $('.time-block').each(function(){
      var hourRow = parseInt($(this).attr("id"));

      if(hourRow < currentHour) {
        $(this).addClass('past');
      }
      else if(hourRow === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
      }
      else{
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
      }
  })
};

$(document).ready(function () {
  $(".saveBtn").on('click', function () {
    var text = $(this).siblings('description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
  })

  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  updateColor()
})
