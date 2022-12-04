function giai(){
    var x1,x2;
    var a,b,c, delta;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;

    delta=(b*b-4*a*c)
        if(delta == 0){
            x1=-b/(2*a) ;
            x2=-b/(2*a);
            a.value=eval(x1);
            b.value=eval(x2);
            document.getElementById('ketqua').innerText = 'Nghiệm kép x1 = x2 = ' + x1;
        }
        else if(delta < 0){
            document.getElementById('ketqua').innerText = "Phương trình vô nghiệm!";
        } 
        else{
            x1=(-b+Math.sqrt(delta))/(2*a);
            x2=(-b-Math.sqrt(delta))/(2*a);
            a.value=eval(x1);
            b.value=eval(x2);
            document.getElementById('ketqua').innerText = "Hai nghiệm x1 = " + x1 + ", x2 = " + x2;
        }
        event.preventDefault()
}

// function tiep() {

//     var a,b,c,kq;
//     a = document.getElementById('a').value;
//     b = document.getElementById('b').value;
//     c = document.getElementById('c').value;
//     kq = document.getElementById('ketqua').value;

//     var phanTu = []

//     phanTu.push(a);
//     phanTu.push(b);
//     phanTu.push(c);
//     phanTu.push(kq);

//     var a = document.getElementById("test");
//     phanTuCon.parentNode.removeChild(phanTuCon);
// }   