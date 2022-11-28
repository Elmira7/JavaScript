function extradition (n){
    let c=0;
    if(n>=1 && n<=1500){
        while(n-1000>0){
            n=n-1000;
            c=c+1;
        }
        while(n-500>0){
            n=n-500;
            c=c+1;
        }
        while(n-200>0){
            n=n-200;
            c=c+1;
        }
        while(n-100>0){
            n=n-100;
            c=c+1;
        }
        while(n-50>0){
            n=n-50;
            c=c+1;
        }
        return c;
    }

    else{
        return -1;
    }

}
console.log(extradition(1200));