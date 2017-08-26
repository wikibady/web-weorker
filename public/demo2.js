
onmessage = function(event) {   
    var data = event.data;
    var v2 = new Int32Array(data.buffer)
   
    console.log('in worker:',data)
    if(data.time)
        console.log(new Date().getTime()-data.time)
    //postMessage(v2,[v2]);
    //console.log(n)
    

  
 };  

