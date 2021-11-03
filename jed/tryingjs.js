function add(){
    var a,b,c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = a + b;
    document.getElementById("answer").value= c;
}
function subtract(){
    var a1,b1,c1;
    a1 = Number(document.getElementById("first1").value);
    b1 = Number(document.getElementById("second1").value);
    c1 = a1 - b1;
    document.getElementById("answer1").value= c1;
}