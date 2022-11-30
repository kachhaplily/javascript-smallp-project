
let myCartData = [];
let products = [];

fetch(" https://fakestoreapi.com/products").then((response) => response.json()).then((value) => { display(value) })


    display = (value) => {
        products = value;
        let productdata = value.map((element, index) => {
            // console.log(element);
            return (
                `  <div class="card">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <span> price ${element.price}</span>
                    <br>
                    <a href="#" class="btn btn-primary"  onclick="additem(${index})">Add To Cart</a>
                </div>
         
            </div>
               `
            );
        });
    
        document.getElementById("productsId").innerHTML = productdata.join(" ");
    }


function additem (index)
     {
        let data = products[index];

        // data["qty"];

        if(myCartData.length == 0)
        {
            data.qty=1;
            myCartData.push(data);
        }
       
        else
        {   
        
            let findProduct = myCartData.find((v)=> {
                return v.id == data.id;
            });

            if(findProduct == undefined || findProduct == null)
            {
                    data.qty=1;
                    myCartData.push(data);
            }
            else{
                let myneearray = myCartData.map((c)=> {
                    if(c.id == data.id)
                    {
                        c.qty = c.qty+1;
                    }

                    return c;
                })

               myCartData=myneearray;
              
            }   
        }
        // console.log(myCartData)
        cartcounter(myCartData)
     }
     cartcounter=(myCartData)=>{
        document.getElementById('cartCountrt').innerHTML = myCartData.length;
    
    }
    display1 = () =>{
        document.getElementById("productsId").innerHTML = '';
        
        let productdata = myCartData.map((element, index) => {
            // console.log(element);
            return (
                `  <div class="card">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${element.title}</h5>
                    <span> price ${element.price}</span>
                    <div> Qty ${element.qty} <button  onclick="incr(${element.qty})"> increment<button>  </div>

                    <a href="index.html" class="btn btn-primary"  >Go To Back</a>
                    <button  onclick="remove(${index})"><i class="fa fa-times" aria-hidden="true"></i></button>
                  
                    </div>
                  
            </div> 
          `

            );
            
           
        });
        var totalcost = myCartData.reduce((accum,item) => accum + item.price *item.qty, 0)
        // console.log(total);

        document.getElementById("productsId").innerHTML = productdata  +` <section class="totalcost"> total price<span>${totalcost}</span> </section>`;
    }

    remove=(index)=>{
        myCartData.splice(index,1);
        display1();
        cartcounter(myCartData)
    }


    // increment 
    incr=(incval)=>{
        console.log(incval);
    }

