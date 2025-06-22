
// Electronics setection

const grid = document.querySelector(".grid");
const addBtn = document.querySelector("#add")

let electronics = JSON.parse(localStorage.getItem("electronicsProducts")) || [

    {
        image :"https://img.icons8.com/?size=100&id=11409&format=png&color=000000",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/SmartPhones/SmartPhones.html",
        name:"Smartphones",
        price:"$299 - $699"
    },
    {
        image :"https://img.icons8.com/ios/100/laptop.png",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/Laptop/Laptop.html",
        name:"Laptop",
        price:"$699 - $1199"
    },
    {
        image :"https://img.icons8.com/ios/100/apple-watch-apps.png",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/SmartWatches/SmartWatches.html",
        name:"Smartwatch",
        price:"$99 - $399"
    },
    {
        image :"https://img.icons8.com/ios/100/airpods-pro.png",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/HeadPhones/HeadPhones.html",
        name:"Headphones",
        price:"$59 - $299"
    },
    {
        image :"https://img.icons8.com/?size=100&id=2318&format=png&color=000000",
        href:"F:/WEB PROJECTS/Dealmart/Electronics/Tablet/Tablet.html",
        name:"Tablet",
        price:"$199 - $499"
    }
]



function updatelocalStorage(){
    localStorage.setItem("electronicsProducts",JSON.stringify(electronics))
}

function renderElectronics() {
    grid.innerHTML = "";
      electronics.forEach((ele, index) => displayElectronicsProduct(ele, index));
    }
    
    function displayElectronicsProduct (ele,index){
        const {name,price,image,href}=ele
        
        let img =document.createElement("img")
        img.style="width: 100%;max-height: 220px;object-fit: contain;border-radius: 10px;margin-bottom: 5px;"
        img.src=image;
        
        let names=document.createElement("a")
        names.style="text-decoration:none;color:black;font-size:1.1rem;margin-top: 1rem;margin: 0.5rem 0 0.2rem;font-weight: bold;"
        names.href=href
        names.innerHTML=name
        
        let prices = document.createElement("button")
        prices.style="margin:auto;color: white;font-size: 1.1rem;margin-top: 1rem;background-color:darkslategrey;padding: 0.5rem 0;border-radius: 15px;width: 80%;;border:none;"
        prices.innerHTML=price
        
        let deleteimg = document.createElement("img")
        deleteimg.style="margin:auto;margin-top:1rem;display:none"
        deleteimg.src="F:/WEB PROJECTS/Dealmart/assets/photo/icons8-delete-48.png"
        
        let div = document.createElement("div")
        div.id="product"
        div.style="display:grid;background: #fff;border-radius: 15px;padding: 1rem;text-align: center;border: 1px solid darkslategrey;cursor: pointer;margin-left: 20px;margin-bottom: 20px;"
        
        div.appendChild(img)
        div.appendChild(names)
        div.appendChild(prices)
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
        
        // delete function
        
        deleteimg.addEventListener("click",()=>{
            
            electronics.splice(index,1)
            
            updatelocalStorage();
            renderElectronics();
            
        })
    }
    electronics.map(displayElectronicsProduct)
    
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
    let newProduct = { image, href, name, price };
    
    // Push to array and update local storage
    electronics.push(newProduct);
    updatelocalStorage();
    renderElectronics();
});




// Logout function

const logout=document.querySelector("#logout")

logout.addEventListener("click",()=> {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
})







