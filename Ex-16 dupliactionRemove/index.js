// remove dupliaction using set object 

let string=["Apple" ,"banana","mangoo","watermaelon","apple","mangoo","litchi"];
let st1=[];
for (const val of string) {
    
    st1.push(val.toLowerCase());
}

let newstring=new Set(st1)
console.log(newstring);

// remove dupliaction using reduce

        let duplicate = string.reduce((pre, currvalue) => {
            if(!pre.includes(currvalue)) {
                return [...pre,currvalue];
            }
            return pre;
            
        }, []);
        console.log(duplicate);

        // remove dupliaction using filter;
        let repeat=string.filter((element ,index,array)=>{
            return(array.indexOf(element)==index);
         });
         console.log(repeat);
 