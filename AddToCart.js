let cartItems = JSON.parse(localStorage.getItem("addtocartDetails")) || [];

let addtocart = document.querySelector(".add-to-cart");

function renderAddToCart() {
  addtocart.innerHTML = ""; // Clear previous content

  cartItems.forEach((ele, index) => {
    const div = document.createElement("div");
    div.id = "product";
    div.style = "display:grid;background: #fff;border-radius: 15px;padding: 1rem;text-align: center;border: 1px solid darkslategrey;cursor: pointer;margin: 20px;";

    const img = document.createElement("img");
    img.src = ele.img;
    img.style = "width: 100%;max-height: 220px;object-fit: contain;border-radius: 10px;margin-bottom: 5px;";
    
    const name = document.createElement("p");
    name.innerText = ele.name;
    name.style = "font-weight:bold;font-size:1.1rem;color:black;";
    
    const price = document.createElement("button");
    price.innerText = ele.price;
    price.style = "margin:auto;color: white;font-size: 1.1rem;background-color:darkslategrey;padding: 0.5rem 0;border-radius: 15px;width: 80%;border:none;";

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.style = "margin:auto;background-color:rgba(208, 14, 53, 0.877);font-size: 1rem;color:white;padding:10px;border-radius:15px;margin-top:10px;border:none;width: 80%;";
    removeBtn.addEventListener("click", () => {
      cartItems.splice(index, 1);
      localStorage.setItem("addtocartDetails", JSON.stringify(cartItems));
      renderAddToCart(); // Refresh
    });

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(removeBtn);

    addtocart.appendChild(div);
  });
}

renderAddToCart();
