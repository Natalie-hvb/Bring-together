var myBtn = document.getElementById('btn')
var myInput = document.getElementById('input')
var title = document.getElementById('title')
var err = document.getElementById('err')

myBtn.addEventListener('click', function(){

    if(myInput.value !=="") {
        err.innerText = "";
        title.innerText = "Hello " + myInput.value
    } else {
        err.innerText = "The field id required"
    }
})

var a = 1;
var b = 2;

function sum(x, y) {
  return x + y;
}
console.log(sum(a, b));
console.log(sum(5, 8))
