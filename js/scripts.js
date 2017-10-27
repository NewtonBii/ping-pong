$("form.ping").submit(function(event){
  var answer=$("input").val();
  $("#output").text(answer);
  event.preventDefault();

});
