
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

updateColor()