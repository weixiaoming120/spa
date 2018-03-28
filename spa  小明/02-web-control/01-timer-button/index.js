var num=9;
function func(){
  var result=document.getElementById('btn');
  if(num<=0){
    btn.removeAttribute('disabled');
    result.innerHTML='同意';
    clearInterval(time);
  }else{
    btn.setAttribute('disabled',true);
    result.innerHTML='同意('+num+'s)';
    num--;
  }
}
time=setInterval('func()',1000);
function clickbtn(){
  alert("就知道你会同意！");
}
