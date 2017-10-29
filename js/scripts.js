$(document).ready(function(event){
  $("form#numbers").submit(function(){

  var index = $("input#number-entered").val();
  alert(index);
  event.preventDefault();
  });
});
