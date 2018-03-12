var $progress,timer = 0,i=0;

$(function(){
  $progress = $('#download');

  $('#btnstart').click(function(){
    if(timer !==0)return;

    timer = window.setInterval(function(){
    $progress.attr('value',i++);
    },100);
  });

  $('#btnstop').click(function(){
    window.clearInterval(timer);
    timer = 0;
  });

  $('btnreset').click(function(){
    $progress.attr('value',i=0);
  });


});
