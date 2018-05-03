$(function(){
  $('#image1').click(function(){
    $('#frame').slideUp(500);
  });
  $('#btn1').click(function(){
    $('#frame').slideDown(500);
  });
});



$(function(){
  $('#image2').click(function(){
    $('#frame').toggle(500);
  });
});
