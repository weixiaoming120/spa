$(function(){
  var $btn=$('.main input');
  var t=9;
  var timer;
  disableBtn();
  function enableBtn(){
    $btn.val('同意');
    $btn.removeAttr('disabled');
  }
  function disableBtn(){
    $btn.attr('disabled','disabled').val('同意('+t+')s');
    timer=window.setInterval(function(){
       t--; 
       if(t===0){
         enableBtn();
         window.clearInterval(timer);
         return;
       }

       $btn.val('同意('+t+')s');
    },1000);
  }
});
