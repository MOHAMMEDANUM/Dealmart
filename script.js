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
    { name: "Xiaomi 13", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 13 Pro", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 13T Pro", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 14 Pro", price: "$1299", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Xiaomi 14 Ultra", price: "$1499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" }
  ],
  OnePlus: [
    { name: "OnePlus 11 5G", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 11R 5G", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 12 5G", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "OnePlus 12R 5G", price: "$1499", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" }
  ],
  Pixel: [
    { name: "Pixel 7", price: "$699", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Pixel 8 Pro", price: "$999", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" }
  ],
  iPhone: [
    { name: "iPhone 13", price: "$799", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "iPhone 14 Pro", price: "$1299", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" }
  ],
  Samsung: [
    { name: "Galaxy S22", price: "$899", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" },
    { name: "Galaxy S24 Ultra", price: "$1399", image: "https://img.icons8.com/?size=100&id=11409&format=png&color=000000" }
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
