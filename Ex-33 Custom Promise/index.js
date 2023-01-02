promisefun=()=>{
    return new Promise((resolve,reject)=>{
        const error=true;
        if(error){
            console.log("Resolved the problem succesfully");
            resolve();
        }
        else{
            console.log(" not fulfilResolveed");
            reject();
        }

    })

    
}
promisefun().then(() => {
    console.log("okey");
}).catch(() => {
    console.log("sorry");
});