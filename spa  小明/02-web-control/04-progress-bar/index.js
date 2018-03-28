var result=0;
function start(){  
  var range=document.getElementById('pro');
  if(result==0){
    result= setInterval(function(){
       if(range.value!=100){
       range.value++;
       }
    },100);

  }
 }
function stop(){
  clearInterval(result);
  result=0;
}
function reset(){
  var range=document.getElementById('pro');
  pro.value=0;
}
