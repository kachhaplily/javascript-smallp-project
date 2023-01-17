
//    return "hello";
const funfetch = async () => {
    let a = await fetch(new Request("https://api.livecoinwatch.com/coins/list"), {
        method: "POST",
        headers: new Headers({
            "content-type": "application/json",
            "x-api-key": "44616435-fcc8-45c9-96f3-bb246f30a0b5",
        }),
        body: JSON.stringify({
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 20,
            meta: true,
        }),
    });
    d = await a.json();
   setInterval(funfetch,10000);
   postMessage(d)
}

funfetch();