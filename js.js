const grid = document.querySelector(".grid");

const brand = document.title.includes("Xiaomi") ? "Xiaomi" :
              document.title.includes("OnePlus") ? "OnePlus" :
              document.title.includes("Pixel") ? "Pixel" :
              document.title.includes("iPhone") ? "iPhone" :
              document.title.includes("Samsung") ? "Samsung" : "";

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
    // Add Pixel, iPhone, Samsung the same way
};

function renderPhones(list) {
    grid.innerHTML = ""; // Clear
    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <div class="price">${product.price}</div><br>
            <button class="atc">Add to Cart</button><br><br>
            <button class="bn">Buy Now</button>
        `;
        const atcBtn = card.querySelector(".atc");
        atcBtn.addEventListener("click", () => {
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
        grid.appendChild(card);
    });
}

// Initialize
if (products[brand]) renderPhones(products[brand]);
