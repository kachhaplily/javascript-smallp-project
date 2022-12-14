var mydata = [


    {

        countyName: 'India',
        state: [
            {
                name: "gujrat",
                city: ["vadodara", "anand", "rajkot"]
            },
            {
                name: "mahrastra",
                city: ["pune", "mumbai"]
            }

        ]

    },

    {

        countyName: 'Canada',
        state: [
            {
                name: "Ontario",
                city: ["Toronto", "Bramtomp"]
            },
            {
                name: "Alberta",
                city: ["Calgary"]
            }

        ]

    }



];





function bindCountry() {
    let mycountry = mydata.map((elelment) => {
        return `<option value=${elelment.countyName}>${elelment.countyName} </option>`;
    });

    document.getElementById("country").innerHTML = mycountry.join(" ");


    document.getElementById("country").onchange();
    document.getElementById("state").onchange();

}

function bindState() {
    // alert("country");
    let mycountry = document.getElementById("country").value;

    let mystate = mydata.find((elelment) => {

        return elelment.countyName == mycountry
    }).state.map((value) => {

        return `<option value=${value.name}>${value.name} </option>`;
    });

    document.getElementById("state").innerHTML = mystate.join(" ");




}

function bindCity() {

    let mycountry = document.getElementById("country").value;
    let mystateD = document.getElementById("state").value;

    let mystate = mydata.find((elelment) => {

        return elelment.countyName == mycountry
    }).state.find((y) => {
        return y.name == mystateD;
    }).city.map((value) => {

        return `<option value=${value}>${value} </option>`;
    });

    document.getElementById("city").innerHTML = mystate.join(" ");




}



bindCountry();