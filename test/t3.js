let arr=[0,2,5,0,5,2,0];
function shift(arr){
    let dop_arr=[];
    let c=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            dop_arr.push(arr[i]);
        }
        else{
            c+=1;
        }
    }
    while (c>0){
        dop_arr.push(0);
        c-=1;
    }
    return dop_arr;
}
console.log(shift(arr));