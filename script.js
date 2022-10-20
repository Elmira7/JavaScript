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
function delete_symbol(text){
    let text_new=""
    for(let i=0;i<text.length;i++){
        if (text[i].toUpperCase()!=text[i].toLowerCase() || (text[i]>='0'&& text[i]<='9') || text[i]==" "){
            text_new=text_new+text[i];
        }
    }
    return text_new;
}
console.log(delete_symbol(text2));


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
function filter_symbol(text){
    let new_text="";
    new_text=new_text+text[0];
    for(let i=1;i<text.length;i++){
        let c=new_text.indexOf(text[i])
        console.log(c,text[i]);
            if (c<0){
                new_text=new_text+text[i];
            }
    }
    return new_text;
}
console.log(filter_symbol(text4));


//55555555555555555555555555555555