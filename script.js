// 📦 Unified JS for All Phone Categories
const grid = document.querySelector(".grid");

// Detect brand from <title>
const brand = document.title.includes("Xiaomi") ? "Xiaomi" :
              document.title.includes("OnePlus") ? "OnePlus" :
              document.title.includes("Pixel") ? "Pixel" :
              document.title.includes("iPhone") ? "iPhone" :
              document.title.includes("Samsung") ? "Samsung" : "";

// 📱 Product Data
const products = {
  Xiaomi: [
    { name: "Xiaomi 12", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 12 Pro", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 12T", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 12T Pro", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 13 Lite", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 13", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 13 Pro", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 13T Pro", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 14", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 14 Lite", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 14 Pro", price: "$1299", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 14 Ultra", price: "$1499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
  ],
  OnePlus: [
    { name: "OnePlus Nord 2T", price: "$399", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 9", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 9 Pro", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 9R", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 10", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 10 Pro", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 10T", price: "$749", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 11", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 11 Pro", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 11R", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 11T", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 12", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },

  ],
  Pixel: [
    { name: "Pixel 4", price: "$499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 5", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 5a", price: "$449", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 6", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 6a", price: "$449", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },  
    { name: "Pixel 6 Pro", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 7", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 7a", price: "$499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 7 Pro", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 8", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 8a", price: "$499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 8 Pro", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },

  ],
  iPhone: [
    
    { name: "iPhone 6", price: "$299", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 6 Plus", price: "$399", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 6s", price: "$399", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 6s Plus", price: "$499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 7", price: "$399", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 7s", price: "$459", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 7 Plus", price: "$499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 8", price: "$499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 8 Plus", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone X", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone XR", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone XS", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone XS Max", price: "$1099", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 11", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 11 Pro", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 12", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 12 Mini", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 12 Pro", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 13", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 13 Mini", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 13 Pro", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 14", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 14 Plus", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 14 Pro", price: "$1099", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 15", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 15 Plus", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 15 Pro", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 16", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 16 Plus", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 16 Pro", price: "$1099", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" }
  ],
  Samsung: [
    { name: "Galaxy S4", price: "$299", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S5", price: "$399", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S6", price: "$499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S6 Edge", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S7", price: "$499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S7 Edge", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S8", price: "$599", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S8+", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S9", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S9+", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S10", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S10+", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S10e", price: "$749", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S20", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S21", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S21 FE", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S22", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S23", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    
  ]
};

// Render products dynamically
function renderPhones(list) {
  grid.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.id = "product";
    div.style = `
      display: grid;
      background: #fff;
      border-radius: 15px;
      padding: 1rem;
      text-align: center;
      border: 1px solid darkslategrey;
      cursor: pointer;
      margin-left: 20px;
      margin-bottom: 20px;
    `;

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.onerror = () => {
      img.src = "F:/WEB PROJECTS/Dealmart/assets/photo/default.png"; // fallback
    };
    img.style = `
      width: 100%;
      max-height: 220px;
      object-fit: contain;
      border-radius: 10px;
      margin-bottom: 5px;
    `;

    const nameP = document.createElement("p");
    nameP.innerText = product.name;
    nameP.style = `
      text-decoration: none;
      color: black;
      font-size: 1.1rem;
      margin: 0.5rem 0 0.2rem;
      font-weight: bold;
    `;

    const priceBtn = document.createElement("button");
    priceBtn.innerText = product.price;
    priceBtn.style = `
      margin: auto;
      color: white;
      font-size: 1.1rem;
      margin-top: 1rem;
      background-color: darkslategrey;
      padding: 0.5rem 0;
      border-radius: 15px;
      width: 80%;
      border: none;
    `;

    const addBtn = document.createElement("button");
    addBtn.innerText = "Add to Cart";
    addBtn.style = `
      margin: auto;
      background-color: #e56717;
      font-size: 1rem;
      color: white;
      border: none;
      padding: 10px 10px;
      border-radius: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
      width: 80%;
    `;
    addBtn.addEventListener("click", () => {
      let cartItems = JSON.parse(localStorage.getItem("addtocartDetails")) || [];
      const exists = cartItems.find(item => item.name === product.name);
      if (exists) {
        exists.quantity = (exists.quantity || 1) + 1;
      } else {
        cartItems.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("addtocartDetails", JSON.stringify(cartItems));
      window.location.href = "F:/WEB PROJECTS/Dealmart/AddToCart.html";
    });

    div.appendChild(img);
    div.appendChild(nameP);
    div.appendChild(priceBtn);
    div.appendChild(addBtn);
    grid.appendChild(div);
  });
}

// 🚀 Run if valid brand found
if (products[brand]) {
  renderPhones(products[brand]);
} else {
  grid.innerHTML = "<h2 style='color:red;text-align:center;'>Brand not found</h2>";
}
