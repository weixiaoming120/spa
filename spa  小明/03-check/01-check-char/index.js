window.onload=function(){
var width=document.getElementById("width");
var height=document.getElementById("height");
var clu=document.getElementById("clu");
var area=document.getElementById("area");
var circ=document.getElementById("circ");
width.onkeypress=function(e) {
      validateKey(e);      
}
height.onkeypress=function(e) {
      validateKey(e);       
}
function validateKey(e){
      if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();

}
width.onblur=function(){
  var width=document.getElementById('width');
  if(width.value==''){
     var a=document.getElementById('a');
      a.innerHTML="宽度不能为空！";
      width.focus();
  }
  else{ 
    if(isNaN(width.value)==true){
      var a=document.getElementById("a");
      a.innerHTML="宽度必须是数值";
      width.focus();
    } else{
      if(width.value<0){
        var a=document.getElementById('a');
        a.innerHTML="宽度必须大于零";
        width.focus();
      }else{
        var a=document.getElementById('a');
        a.innerHTML='';
      }
    }
  }
}
height.onblur=function(){
  var height=document.getElementById('height');
  if(height.value==''){
     var b=document.getElementById('b');
      b.innerHTML="宽度不能为空！";
      height.focus();
  }
  else{
    if(isNaN(height.value)==true){
      var b=document.getElementById("b");
      b.innerHTML="宽度必须是数值";
      height.focus();
    }else{
      if(height.value<0){
        var b=document.getElementById('b');
        b.innerHTML="高度必须大于零";
        height.focus();
      }else{
        var b=document.getElementById('b');
        b.innerHTML='';
      }
    }
  }
}

clu.onclick=function(){
   var area=document.getElementById('area');
   var circ=document.getElementById('circ');
   circ.value="";
   area.value="";
   if(a.innerHTML=='' && b.innerHTML==''){
     var width=document.getElementById('width');
     var w=width.value;
     var height=document.getElementById('height');
     var h=height.value;
     var area=document.getElementById('area');
     var circ=document.getElementById('circ');
     var jcirc=parseFloat((w*2+h*2).toFixed(5));
     var jarea=parseFloat((w*h).toFixed(5));
     circ.value=jcirc;
     area.value=jarea;
  }
}
}
