let cartItems = JSON.parse(localStorage.getItem("addtocartDetails")) || [];

let addtocart = document.querySelector(".add-to-cart");

let totalprice = document.querySelector(".totalprice")


function renderAddToCart() {
  addtocart.innerHTML = ""; // Clear previous content

  if (cartItems.length === 0) {
    const cartmsg = document.createElement("h1");
    cartmsg.innerText = "🛒 Your Cart is Empty";
    cartmsg.style = "text-align:center;color:rgba(208, 14, 53, 0.877);";
    addtocart.appendChild(cartmsg);

    // Remove total price box if it exists
    const oldTotal = document.querySelector(".total-price");
    if (oldTotal) oldTotal.remove();



    return; // Exit the function early
  }

  
  let total=0
  
  cartItems.forEach((ele, index) => {
    
    const div = document.createElement("div");
    div.id = "product";
    div.style = "display:grid;background: #fff;border-radius: 15px;padding: 1rem;text-align: center;border: 2px solid darkslategrey;cursor: pointer;margin: 0 20px;"
    
    const img = document.createElement("img");
    img.src = ele.image || ele.img; // Use image or img property
    img.style = "width: 100%;max-height: 220px;object-fit: contain;border-radius: 10px;margin-bottom: 5px;";
    
    const names = document.createElement("p");
    names.innerText = ele.name;
    names.style = "font-weight:bold;font-size:1.1rem;color:black;";
    
    const price = document.createElement("button");
    price.innerText = ele.price;
    price.style = "margin:auto;color: white;font-size: 1.1rem;background-color:darkslategrey;padding: 0.5rem 0;border-radius: 15px;width: 80%;border:none;";
    
    const qty = ele.quantity || 1;
    const priceValue = Number(ele.price.replace('$', ''));
    const totalItemPrice = qty * priceValue;
    total += totalItemPrice;

    const qtyControls = document.createElement("div");
    qtyControls.style = "display:flex;align-items:center;justify-content:center;gap:10px;margin:15px 0;";

    const minusBtn = document.createElement("button");
    minusBtn.innerText = "−";
    minusBtn.style = "padding:5px 10px;font-size:1.2rem;background-color:darkslategrey;color:white;border:none;border-radius:8px;cursor:pointer;";

    const qtyText = document.createElement("span");
    qtyText.innerText = qty;
    qtyText.style = "font-size:1.1rem;font-weight:bold;";

    const plusBtn = document.createElement("button");
    plusBtn.innerText = "+";
    plusBtn.style = "padding:5px 10px;font-size:1.2rem;background-color:darkslategrey;color:white;border:none;border-radius:8px;cursor:pointer;";

    qtyControls.appendChild(minusBtn);
    qtyControls.appendChild(qtyText);
    qtyControls.appendChild(plusBtn);

    // functionality for adding (+) items

    plusBtn.addEventListener("click",()=>{

      cartItems[index].quantity= (cartItems[index].quantity || 1 )+1;
      localStorage.setItem("addtocartDetails",JSON.stringify(cartItems))
      renderAddToCart();
    })

    // functionality for substracting (-) items

    minusBtn.addEventListener("click", () => {
      if ((cartItems[index].quantity || 1) > 1) {
        cartItems[index].quantity -= 1;
        localStorage.setItem("addtocartDetails", JSON.stringify(cartItems));
        renderAddToCart();
      }
    });

    
    // Delete funtion
    
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.style = "margin:auto;background-color:rgba(208, 14, 53, 0.877);font-size: 1rem;color:white;padding:10px;border-radius:15px;margin-top:10px;border:none;width: 80%;";
    removeBtn.addEventListener("click", () => {
      cartItems.splice(index, 1);
      localStorage.setItem("addtocartDetails", JSON.stringify(cartItems));
      renderAddToCart(); // Refresh
    });


    div.appendChild(img);
    div.appendChild(names);
    div.appendChild(price);
    div.appendChild(removeBtn);
    div.appendChild(qtyControls);

    addtocart.appendChild(div);

  });

    // Design For Total cost and inputing the value 

    const oldTotal = document.querySelector(".total-price");
    if (oldTotal) oldTotal.remove();

    // Create new total container
    const totalContainer = document.createElement("div");
    totalContainer.className = "total-price";
    totalContainer.style.cssText = "display:flex;justify-content:space-between;align-items:center;background-color:rgba(208,14,53,0.08);border:2px solid rgba(208,14,53,0.877);border-radius:15px;padding:20px 30px;margin:30px auto;width:20%;font-family:'Segoe UI',sans-serif;box-shadow:0 8px 20px rgba(0,0,0,0.1);";

    const totalLabel = document.createElement("div");
    totalLabel.textContent = "Total Price:";
    totalLabel.style.cssText = "font-size:1.5rem;font-weight:600;color:darkslategrey;";

    const totalValue = document.createElement("div");
    totalValue.textContent = `$${total.toFixed(2)}`;
    totalValue.style.cssText = "font-size:1.8rem;font-weight:bold;color:rgba(208,14,53,0.877);";

    totalContainer.appendChild(totalLabel);
    totalContainer.appendChild(totalValue);

    document.body.appendChild(totalContainer); // or use addtocart.appendChild(...)




}

renderAddToCart();
