let mydata = [];
let w;
startworker = () => {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("worker.js");
        }
        w.onmessage = function (event) {
            mydata = event.data;
            display(mydata);
        };
    }
}
startworker();


display = (d) => {
    document.getElementById('tbody').innerHTML = d.map((ele) => {
        return `<tr>
        <td> ${ele.code}</td>
        <td>${ele.rate} </td>
        <td>${ele.volume} </td>
        <td>${ele.delta.hour} </td>
        <td>${ele.delta.day} </td>
        <td>${ele.delta.week} </td>
        </tr>`
    }).join(" ")
}

