$("form.ping").submit(function(event){
  var number = parseInt($("input").val());
  for (var index = 0; index <= number; index+=1) {
  if (index%3==0) {
    alert("ping")
  } else {
    alert(index)
  }
  }
  event.preventDefault();
});
/*$("form.ping").submit(function(event){
  var answer=$("input").val();
  $("#output").text(answer);
  event.preventDefault();

});*/
