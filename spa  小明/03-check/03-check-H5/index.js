window.onload=function(){  
  var width=document.getElementById('width');
  var w=width.value;
  var height=document.getElementById('height');
  var h=height.value;
  var a=document.getElementById('a');
  var b=document.getElementById('b');
  var area=document.getElementById('area');
  var circ=document.getElementById('circ');
  var clu=document.getElementById("clu");
  clu.onclick=function(){
    circ.value="";
    area.value="";
    panw();
    if(a.innerHTML==""){
      panh();
      if(b.innerHTML==""){
        var width=document.getElementById('width');
        var w=width.value;
        var height=document.getElementById('height');
        var h=height.value;
        var cir=parseFloat((w*2+h*2).toFixed(5));
        var are=parseFloat((w*h).toFixed(5));   
        circ.value=cir;
        area.value=are;
      }else{
        panh();
      }
    }else{
      panw();
    }
  }
  function panw(){
     if(width.value==''){
       a.innerHTML="请填写一个数字！";
       width.focus();
     }
     else{
           if(width.value<0){
              a.innerHTML="值必须大于或等于零";
              width.focus();
            }else{
               a.innerHTML='';
            }
     }

  }
  function panh(){
     if(height.value==''){
       b.innerHTML="请填写一个数字！";
       height.focus();
     }
    else{
           if(height.value<0){
              b.innerHTML="值必须大于或等于零";
              height.focus();
            }else{
               b.innerHTML='';
            }
     }

  }
}
