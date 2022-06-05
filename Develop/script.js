var today = moment().format('dddd, MMMM Do');
$(#currentDay).html(today);

function updateColor() {
  var currentHour = moment().hours();
  
  $('.time-row').each(function(){
      var hourRow = parseInt($(this).attr('id'));

      if(hourRow < currentHour){
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      }else if(hourRow === currentHour){
          $(this).removeClass('past');
          $(this).removeClass('future');
          $(this).addClass('present');
      }else{
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
      }
  })
};
