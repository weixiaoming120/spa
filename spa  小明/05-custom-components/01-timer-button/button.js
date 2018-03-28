$(function(){
  var $btn=timerButton({
    'container':'div.main',
    'title':'同意',
    'tlength':9,
    'enable':false
  });
  $btn.on('clickBtn',function(){
    alert('同意了！');
  });
  var $btn2=timerButton({
    'container':'div.main',
    'title':'发短信',
    'tlength':9,
    'enable':true
  });
  $btn2.on('clickBtn',function(){
    alert('同意了！');
  });
  var $btn3=timerButton({
    'container':'div.main',
    'title':'发短信',
    'tlength':4,
    'enable':false
  });
  $btn3.on('clickBtn',function(){
    alert('成功！');
  });
 });
