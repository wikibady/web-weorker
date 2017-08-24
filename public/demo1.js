
 
  
onmessage = function(event) {   
  var n = Number(event.data);   
  console.log(typeof(n))
  setInterval(function(){
     n = n+1
    postMessage(n);
    //console.log(n)
    
  },1000)
  
 };  

