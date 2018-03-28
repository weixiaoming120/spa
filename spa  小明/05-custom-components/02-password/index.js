$(function(){
  var $p=$('.main input[type="password"]');
  var $ptext=$('.main input[type="text"]');
  var $img=$('.main img');
  $p.on('input',function(e){
    $ptext.val($p.val());
  });
  $img.mouseover(function(){
    $ptext.css('z-index','10');
    $img.attr('src','./pcone.png');
  });
  $img.mouseout(function(){
    $ptext.css('z-index','-10');
    $img.attr('src','./pctwo.png');
  });
});
