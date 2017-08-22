var results = [];   
  
function resultReceiver(event) {   
  results.push(event.data);   
  if (results.length == 2) {   
    postMessage(results[0] + results[1]);   
  }   
}   
  
function errorReceiver(event) {   
  throw event.data;   
}   
  
onmessage = function(event) {   
  var n = event.data;   
  
  if (n == 0 || n == 1) {   
    postMessage(n);   
    return;   
  }   
  
  for (var i = 1; i <= 2; i++) {   
    var worker = new Worker("fibonacci1.js");   
    worker.onmessage = resultReceiver;   
    worker.onerror = errorReceiver;   
    worker.postMessage(n - i);   
  }   
 };  

