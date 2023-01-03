let a = [1, 8, 9, 10, 13, 02]

Array.prototype.mysorting = function () {
    return this.sort((a,b) => {
        if(a<b){
            return 1;
        }else{
            return -1;
        }

    })
}
console.log(a.mysorting());







