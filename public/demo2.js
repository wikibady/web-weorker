
onmessage = function(event) {   
    var data = event.data;
    var v2 = new Int32Array(data)
    console.log('in worker:',v2)
    
    postMessage(data,[data]);
    //console.log(n)
    

  
 };  

