$("form.ping").submit(function(event){
  var number = parseInt($("input").val());
  for (var index = 1; index <= number; index+=1) {
  if (index%3==0) {
    $("#output ul").append('<li>'+"ping"+'</li>')
  } else {
    $("#output ul").append('<li>'+index+'</li>')
  }
  }
  event.preventDefault();
});
/*$("form.ping").submit(function(event){
  var answer=$("input").val();
  $("#output").text(answer);
  event.preventDefault();

});*/
