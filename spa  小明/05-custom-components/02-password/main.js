$(function(){
  var $btnadd=$("#addpwd");
  var $btnget=$("#getpwd");
  var pwdArr=[];

  $btnadd.click(function(){
     var pwd=new passwordBox({'container':'div.main'});
     pwdArr.push(pwd);
     $btnget.removeAttr('disabled');
  });
  $btnget.click(function(){
    pwdArr.forEach(function(pwd){
      alert(pwd.getPwd());
    });
  });
});
