document.getElementById('next').onclick=add;
function add(){
  var num = Math.round(Math.random()*7)
  document.getElementById('random').innerHTML="You got a random number! "+num;
}
