window.onload=function(){
   var xData=[],yData=[];
   for(var i=0;i<=1;i+=0.1){
     xData.push(roundFun(i,1));
     yData.push(roundFun(h(i),2));
   }
   var option = {
      title: {
         text: '二进熵函数曲线'                
      },
      tooltip: {},
      legend: {
         data:['信息量']               
      },
      xAxis: {
         data: xData                
       },
      yAxis: {},
       series: [{
           name: '信息量',
           type: 'line',
           smooth: 'true',
           data: yData                                   
        }]   
    };
   function roundFun(x,n){
     return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
   }
   function h(p){
     return -1*(plog(p)+plog(1-p));
   }
   function plog(p){
     return (p==0)?0:p*Math.log2(p);
   }
   var myChart = echarts.init(document.getElementById("main"));
   myChart.setOption(option);
}
