var passwordBox=function(config){
   var $p=$('<input type="password">');
   var $img=$('<img src="./pctwo.png" alt="密码">');
   var $div=$('<div class="zm-main">密码：</div>');
   var $ptext=$('<input type="text">');

   $div.append($p);
   $div.append($img);
   $div.append($ptext);
   $(config.container).append($div);

   $p.on('input',function(){
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
   this.getPwd=function(){
      return $ptext.val();
   }



};
