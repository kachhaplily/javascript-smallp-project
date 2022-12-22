class myLogin{
    

    constructor (entity,data){
        this.entity = entity;
        this.data = data;
    }
    getData(){
    
        fetch("http://localhost:4000/accounts/"+this.entity, {
            method: 'POST',
            body: JSON.stringify(this.data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(y => y.json())
            .then(y => {
    
                localStorage.setItem("token", JSON.stringify(y))
                console.log(y);
                display(y);            
            })
    
    }

    
    
}

module.extends = myLogin;
// export default myLogin;