//11111111111111111111111111111111111111111111
let text="которая получает на входе строку и возвращает новую";
let a = text.split(' ');
function increase(text){
    let text_new="";
    for (let i=0;i<a.length;i++) {
        let r = a[i][0].toUpperCase();
        if(i!=0){
            text_new=text_new+" "+r;
        }
        else {
            text_new=text_new+r;
        }
        for(let j=1;j<a[i].length;j++){
            text_new=text_new+a[i][j];
        }
    }

    return text_new;
}
console.log(increase(text));


//222222222222222222222222222222222222222
let text2="которая%$& получ&*(ает на в543ходе dfgdsf стро%^&*(ку и  67865 возвращает нов))ую#";
// Напишите функцию, которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
function deleteSymbol(text){
    let text_new=""
    for(let i=0;i<text.length;i++){
        if (text[i].toUpperCase()!=text[i].toLowerCase() || (text[i]>='0'&& text[i]<='9') || text[i]==" "){
            text_new=text_new+text[i];
        }
    }
    return text_new;
}
console.log(deleteSymbol(text2));


//3333333333333333333333333333333333333333333333333
// Напишите функцию, которая проверяет является ли строка палиндромом или нет (возвращает true или false).
let text3="Лена набила pожy мyжy - мyж оpал и банан ел"
function palindrome(text){
    let text_new=""
    for(let i=0;i<text.length;i++) {
        if (text[i].toUpperCase()!=text[i].toLowerCase() || (text[i]>='0' && text[i]<='9')) {
            text_new = text_new + text[i].toLowerCase();
        }
    }
    let text_reverse = text_new.split('').reverse().join('');;

    if (text_reverse==text_new){
        return true;
    } else {
        return false;
    }
}
console.log(palindrome(text3));


//444444444444444444444444444444444444
let text4="Напишите функцию, которая возвращает строку, оставив в ней только "
function filterSymbol(text){
    let new_text="";
    new_text=new_text+text[0];
    for(let i=1;i<text.length;i++){
        let c=new_text.indexOf(text[i])
            if (c<0){
                new_text=new_text+text[i];
            }
    }
    return new_text;
}
console.log(filterSymbol(text4));


//55555555555555555555555555555555
// Напишите функцию replaceAll(find, replace, str), которая заменяет в строке str все вхождение подстроки find на подстроку replace.
let find="qwert "
let replace=" zxcv"
str="qwert cvb qwert fgffngdsf dgdfsdzqwert"
function replaceAll(find, replace, str){
    while(str.indexOf(find)>0) {
        str = str.replace(find, replace);
    }
    return str;
}
console.log(replaceAll(find, replace, str));


//Работа с массивами

//11111111111111111111111111111111
//Напишите функцию, которая убирает повторяющиеся значения в массиве  findIndex
let arr=[1,4,52,1,4,6,2,6,7,1,3,5,8,9];
function deleteRepeat(arr){
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])!==i){
            delete arr[i];
        }
        if(arr[i]!==undefined){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
console.log(deleteRepeat(arr));

//2222222222222222222222222222222222222
//Напишите функцию, которая суммирует все значения элементов массива.
//переделать
let arr2=[1,2,3,4,5,6,8];
function sum (arr){
    let s=0;
    for(let i=0; i<arr.length;i++){
        s=s+arr[i];
    }
    return s;
}
console.log(sum(arr2));

//33333333333333333333333333
//Напишите функцию, которая находит пересечение двух массивов.
let arr31=[1,2,3,3,4,5];
let arr32=[8,3,9,3,4,6];
function findIntersection (arr1,arr2){
    let new_arr=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if (arr1[i]===arr2[j]){
                new_arr.push(arr1[i]);
                delete arr2[j];
            }
        }
    }
    return new_arr;
}
console.log(findIntersection(arr31,arr32));

//4444444444444444444444444444444
//Напишите функцию, которая осуществляет поиск в
//отсортированном массиве с помощью алгоритма бинарного
//поиска.
let arr4=[1,2,3,5,6,7,11,14,16];
let n=6;
function binarySearch(arr,n) {
    let left=0;
    let right=arr.length-1;
    while (left<=right) {
        let middle = Math.floor((left+right)/2);
        if (arr[middle]===n) {
            return middle;
        }
        else if (arr[middle]<n) {
            left=middle+1;
        }
        else {
            right=middle-1;
        }
    }
    return -1;
}

console.log(binarySearch(arr4, n))
//55555555555555555555555555555
//Напишите функцию, которая
//сортирует массив алгоритмом слияния.
let arr5=[13,6,4,3,8,4,9,6,12,3,2,5,6,3,8];
function mergeSort(arr){
    if(arr.length===1){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(arr1, arr2){
    let comb=[];
    let i=0;
    let j=0;
    while (i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            comb.push(arr1[i]);
            i++;
        }
        else{
            comb.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        comb.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        comb.push(arr2[j]);
        j++;
    }
    return comb;
}
console.log(mergeSort(arr5));
