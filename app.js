let d = window.fetch("https://fakestoreapi.com/products");
//fetch method to fetch data through API -> returns JS PROMISE

//since the promise is resolved, directly using then()
d.then((data)=>{
    data.json().then( //json() converts json file into js object, since data.json() also gives a promise, then() used directly
        (v)=>{
            console.log(v)
            let tbody = document.querySelector("tbody");

            //mapping through the elements
            v.map(
                (m, i)=>{
                    let {id, title, description, image, rating, price} = m;
                    //template literals for multi line query
                    tbody.innerHTML+=`
                    <tr>
                        <td>${id}</td>
                        <td><img src=${image} alt=${i+1}</td>
                        <td>${title}</td>
                        <td>${description}</td>
                        <td>${price}</td>
                        <td>${rating.rate}</td>
                    </tr>
                    `
                }
            )
        }
    )

    }
)
