$("form.ping").submit(function(event){
  var number = parseInt($("input").val());
  for (var index = 1; index <= number; index+=1) {
  if (index%3==0) {
    $("#output ul").append('<li>'+"Ping"+'</li>')
  }
  else if (index%5==0) {
    $("#output ul").append('<li>'+"Pong"+'</li>')
  }
  else if (index%15==0) {
    $("#output ul").append('<li>'+"PingPong"+'</li>')
  }
  else {
    $("#output ul").append('<li>'+index+'</li>')
  }

  }

  event.preventDefault();
});
