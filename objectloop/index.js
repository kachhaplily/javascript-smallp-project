fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then(data => display(data));


display = (data) => {
    //   console.log(data);

    let tb = data.map((value) => {
        //  console.log(value);
        let tdata = "";
        let obj1 = {};
        let obj2 = {};
        for (const key1 in value) {
              obj1 = value[key1];
            if (typeof obj1 === "object") {
                for (const key2 in obj1) {
                    // tdata += `<td> ${obj1[key2]}</td>`
                    obj2 = obj1[key2];
                    if (typeof obj2 === "object") {

                        for (const key3 in obj2) {
                            tdata += `<td>${obj2[key3]} </td>`
                        }
                    }
                    else {
                        tdata += `<td>${obj1[key2]}</td>`
                    }
                }
            }
            else {
                tdata += `<td>${value[key1]}</td>`
            }
        }
        return (`<tr>${tdata}</tr>`)
    })
    document.getElementById("tb").innerHTML = tb.join(" ");
}