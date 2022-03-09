var btn = document.querySelector("button");
var in1 = document.querySelector("i1");
var in2 = document.querySelector("i2");
function add(n1, n2) {
    return n1 + n2;
}
// THROWING ERROR DUE TO STRING 
// add('5','5');
btn.addEventListener("click", function () {
    console.log(add(+in1.value, +in2.value));
});


