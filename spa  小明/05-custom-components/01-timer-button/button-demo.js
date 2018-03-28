var timerButton=function(config){
  var $btn=$('<input type="button">'),
      timer,
      t=config.tlength;
    
  disableBtn();
  $(config.container).append($btn);
 
  $btn.click(function(){
    $btn.trigger('clickBtn');
    if(config.enable)  disableBtn();
  });


  function enableBtn(){
    $btn.val(config.title);
    $btn.removeAttr('disabled');
    t=config.tlength;
  }


  function disableBtn(){
    $btn.attr('disabled','disabled').val(config.title+'('+t+')s');
    timer=window.setInterval(function(){
       t--; 
       if(t===0){
         enableBtn();
         window.clearInterval(timer);
         return;
       }

       $btn.val(config.title+'('+t+')s');
    },1000);
  }
  return $btn;
};
