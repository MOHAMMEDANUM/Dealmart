// Add to cart functionality

let addToCartButtons = document.querySelectorAll('.add-to-cart');
let addToCartName = document.getElementById("name-added");
let addToCartPrice = document.getElementById("price-added");
let addToCartButton=document.getElementById("atc")




// Function to add items to the cart for xiomi13
let imgs = document.getElementById("")
let names = document.getElementById("name")
let prices =document.getElementById("price")

// Add to cart array

const addToCart = [

    {
        name  : names.innerText,
        price :  prices.innerText,
    }
]



let cartFunctionXiomi13 = () => {
    console.log("dhasjhbkjdb");
    
    addToCartName.innerText=names.innerText
    addToCartPrice.innerText=prices.innerText
}
addToCartButton.addEventListener('click',cartFunctionXiomi13);



