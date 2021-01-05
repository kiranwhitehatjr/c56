function calculate() {
        var l = Number(document.getElementById("length").value);
    var a = l*l;
    var p = 4*l;
    document.getElementById("area").innerHTML=a;
    document.getElementById("peri").innerHTML=p;
}