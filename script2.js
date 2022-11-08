//Замыкание и область видимости
//111111111111111111111111111
//Сделайте функцию, которая считает и выводит количество своих вызовов
function sumCull(){
    let s=1;
    return function (){
        return s++;
    }

}
let f=sumCull();
console.log(f());
console.log(f());
console.log(f());
//222222222222222222222222
//Реализуйте функцию сложения элементов sum(x)(y)(z)
function sum(x){
    return function (y){
        return function (z){
            return(x+y+z);
        }
    }
}
console.log(sum(5)(2)(3))
//33333333333333333333333333333
//Сделайте функцию, каждый вызов который будет генерировать случайные числа
// от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен
// хранится массив чисел, которые уже были сгенерированы функцией.
let arr3=[];
function random(){
    return function fun () {
        if(arr3.length===100){
            return "No";
        }
        let n=Math.floor(Math.random()*100)+1;
        for (let i=0;i<arr3.length;i++){
            if(n===arr3[i]){
                return fun();
            }
        }
        arr3.push(n);
        return n;
    }
}
for (let w=0;w<105;w++){
    console.log(w,random()());
}
//44444444444444444444
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
