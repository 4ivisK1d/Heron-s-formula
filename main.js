let a = prompt('Введите число а');
let b = prompt('Введите число b');
let c = prompt('Введите число c');
a=+a;
b=+b;
c=+c;
function formula(a,b,c) {
    let p = (a + b + c)/2;
    console.log(Math.sqrt(p*(p-a)*(p-b)*(p-c))); 
}
formula(a,b,c);