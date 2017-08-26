//<script src="./js/marked.js"></script>
importScripts('./js/marked.js', './js/highlight.pack.js')
onmessage = function (event) {
  var data = event.data;
  if (data.type == 'md') {
    var result = { type: 'O_html',data: marked(data.data) }
    postMessage(result)
  }
  else if (data.type == 'code') {
    //console.log(data.data)
    postMessage({ type: 'C_html', data: hljs.highlightAuto(data.data), index: data.index })
  }


};

