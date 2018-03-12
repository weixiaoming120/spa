$(function(){
  $('pwNormal').on('input', function(){
    $('.pwDisplay').val($('#pwNormal').val());
  });

  $('#btnText').mouseover(function(){
    $('btnText').attr('src','images/eye.png');
    $('.pwDisplay').css('display','inline-block');
  });

  $('#btnText').mouseout(function(){
    $('#btnText').attr('src','images/eye-close.png');
    $('.pwDisplay').css('display','none');
  });


});
