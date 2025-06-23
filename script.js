// XiaomiPhones setection

const grid = document.querySelector(".grid");

const addBtn = document.querySelector("#add") 

let xiaomiPhones = JSON.parse(localStorage.getItem("xiaomiPhonesProducts")) || [

    {
        image :"https://img.icons8.com/?size=100&id=11409&format=png&color=000000",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/SmartPhones/SmartPhones.html",
        name:"Xiaomi 13",
        price:"$699"
    },
    {
        image :"https://img.icons8.com/?size=100&id=11409&format=png&color=000000",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/Laptop/Laptop.html",
        name:"Xiaomi 13 Pro",
        price:"$799"
    },
    {
        image :"https://img.icons8.com/?size=100&id=11409&format=png&color=000000",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/SmartWatches/SmartWatches.html",
        name:"Xiaomi 13T Pro",
        price:"$999"
    },
    {
        image :"https://img.icons8.com/?size=100&id=11409&format=png&color=000000",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/HeadPhones/HeadPhones.html",
        name:"Xiaomi 14 Pro",
        price:"$1299"
    },
    {
        image :"https://img.icons8.com/?size=100&id=11409&format=png&color=000000",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/Tablet/Tablet.html",
        name:"Xiaomi 14 Ultra",
        price:"$1499"
    }
]


function updatelocalStorage(){
    localStorage.setItem("xiaomiPhonesProducts",JSON.stringify(xiaomiPhones))
}

function renderxiaomiPhones() {
    grid.innerHTML = "";
      xiaomiPhones.forEach((ele, index) => displayxiaomiPhonesProduct(ele, index));
}

function displayxiaomiPhonesProduct (ele,index){
        const {name,price,image,href}=ele
        
        let img =document.createElement("img")
        img.style="width: 100%;max-height: 220px;object-fit: contain;border-radius: 10px;margin-bottom: 5px;"
        img.src=image;
        
        let names=document.createElement("p")
        names.style="text-decoration:none;color:black;font-size:1.1rem;margin-top: 1rem;margin: 0.5rem 0 0.2rem;font-weight: bold;"
        names.innerHTML=name
        
        let prices = document.createElement("button")
        prices.style="margin:auto;color: white;font-size: 1.1rem;margin-top: 1rem;background-color:darkslategrey;padding: 0.5rem 0;border-radius: 15px;width: 80%;border:none;"
        prices.innerHTML=price

        let addtocart=document.createElement("button")
        addtocart.style="margin:auto;background-color: #e56717;font-size: 1rem;color: white;border: none;padding: 10px 10px;border-radius: 15px;cursor: pointer;transition: all 0.3s ease;margin-top: 1rem;width: 80%;"
        addtocart.innerHTML="Add to Cart"
        
        let deleteimg = document.createElement("img")
        deleteimg.style="margin:auto;margin-top:1rem;display:none"
        deleteimg.src="F:/WEB PROJECTS/Dealmart/assets/photo/icons8-delete-48.png"
        
        let div = document.createElement("div")
        div.id="product"
        div.style="display:grid;background: #fff;border-radius: 15px;padding: 1rem;text-align: center;border: 1px solid darkslategrey;cursor: pointer;margin-left: 20px;margin-bottom: 20px;"
        
        div.appendChild(img)
        div.appendChild(names)
        div.appendChild(prices)
        div.appendChild(addtocart)
        div.appendChild(deleteimg)
        
        grid.appendChild(div)
        
        // ✅ Check login state
        if (localStorage.getItem("loggedIn") == "true") {
            deleteimg.style="margin:auto;margin-top:1rem;display:block"
            addBtn.style="display:block"
        }
        else{
            deleteimg.style="display:none"
            addBtn.style="display:none"
        
        }
        
        // Add to cart option 
        
        addtocart.addEventListener("click", () => {
            let cartItems = JSON.parse(localStorage.getItem("addtocartDetails")) || [];

            const getimage = xiaomiPhones[index].image;
            const getname = xiaomiPhones[index].name;
            const getprice = xiaomiPhones[index].price;

                    // Check if item already exists
            let existingItem = cartItems.find(item => item.name === getname);

            if (existingItem) {
                // If found, increase quantity
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                // If not found, add new with quantity 1
                cartItems.push({
                    img: getimage,
                    name: getname,
                    price: getprice,
                    quantity: 1
                });
            }

            localStorage.setItem("addtocartDetails", JSON.stringify(cartItems));
            window.location.href = "F:/WEB PROJECTS/Dealmart/AddToCart.html";
        });

        //     const newItem = {
        //         img: getimage,
        //         name: getname,
        //         price: getprice
        //     };

        //     addtocartList.push(newItem);
        //     localStorage.setItem("addtocartDetails", JSON.stringify(addtocartList));
        //     window.location.href = "F:/WEB PROJECTS/Dealmart/AddToCart.html";
        // });



        // delete function
        
        deleteimg.addEventListener("click",()=>{
            
            xiaomiPhones.splice(index,1)
            
            updatelocalStorage();
            renderxiaomiPhones();
            
        })
    }
    xiaomiPhones.map(displayxiaomiPhonesProduct)
    
    //  Adding new contains
    
    
    addBtn.addEventListener("click", () => {
        
        let image = prompt("Enter image path:");
        let href = prompt("Enter href path:");
        let name = prompt("Enter product name:");
        let price = prompt("Enter price:");

        if (!image || !href || !name || !price) {
            alert("All fields are required!");
            return;
        }

        // Create new product object with string values
        let newxiaomiPhonesProduct = { image, href, name, price };
        
        // Push to array and update local storage
        xiaomiPhones.push(newxiaomiPhonesProduct);
        updatelocalStorage();
        renderxiaomiPhones();
    });

// Logout function

const logout=document.querySelector("#logout")

logout.addEventListener("click",()=> {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
})












