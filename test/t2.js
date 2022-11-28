function ana(a,b){
    if( a.length===b.length){
        let col=0;
        for(let i=0;i<a.length;i++){
            for(let j=0;j<b.length;j++){
                if(a[i]===b[j]){
                    col+=1;
                    b.slice(j,1);
                    break
                }
            }
        }
        if(col===a.length){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}
console.log(ana("gallnry","allergy"));