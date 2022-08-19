// 1. Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, повертає площу прямокутника.
function calc(a,b){
let square;

  return square = a*b;
}


console.log(calc(4,5));


//2. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола (длина окружности по диаметру)

function circle(a){
let r;
r= a/2; 
return c=2*r*3,14; 
}

console.log(circle(4));

//3. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.

function culindr(a,h){
let V;
let r= a/2;

return V=3.14*(r*r)*h;
}

console.log(culindr(4,10));

//4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.


function diapason(a,b){

  for(let i=a;i<b;i++){ 
  if(i%5===0){
  console.log(i);
}
}
}

diapason(10,20);


//5. Реалізовати гру FizzBuzz для 100 чисел.

function FizzBuzz(){
  let a=[];
  let i=0;
  for(i;i<100;i++){
  switch (true){
  case i%5===0&&i%3===0:
    a[i]="FizzBuzz";
    break;
  case i%3===0:
    a[i]="Fizz";
    break;
  case i%5===0:
    a[i]="Buzz";
    break;
  default:
    a[i]=i;
}
}
 return a;
}

console.log(FizzBuzz());











