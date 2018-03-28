window.onload=function(){
  document.getElementById('width').focus();
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
       a.innerHTML="宽度不能为空！";
       width.focus();
     }
     else{
        if(isNaN(width.value)==true){
          a.innerHTML='宽度必须是数值！';
          width.focus();
        }else{
           if(width.value<0){
              a.innerHTML="宽度必须大于零";
              width.focus();
            }else{
               a.innerHTML='';
            }
        }
     }

  }
  function panh(){
     if(height.value==''){
       b.innerHTML="宽度不能为空！";
       height.focus();
     }
     else{
        if(isNaN(height.value)==true){
          b.innerHTML='宽度必须是数值！';
          height.focus();
        }else{
           if(height.value<0){
              b.innerHTML="宽度必须大于零";
              height.focus();
            }else{
               b.innerHTML='';
            }
        }
     }

  }

}

