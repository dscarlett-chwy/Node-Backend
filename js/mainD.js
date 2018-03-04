console.log("hello")
document.getElementById("clickMe").onclick = makeReq;

function makeReq(){
console.log("hello");
  var hairType = document.getElementById("hair").value;

  var request = new XMLHttpRequest();
  request.open('GET', '/api?profile='+hairType, true);

  request.onload = function() {
      console.log("works")
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data)
        document.getElementById("hairType").innerHTML = data.hairType
        document.getElementById("personName").innerHTML = data.name
        document.getElementById("status").innerHTML = data.status
       document.getElementById("favoriteFood").innerHTML = data.favoriteFood
      } else {
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
}
