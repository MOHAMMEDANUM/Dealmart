//  Login Setection

const email = document.querySelector("#email");
const password = document.querySelector("#password")

const submitBtn=document.querySelector("#submit")

submitBtn.addEventListener("click",()=>{
    
    if(email.value=="admin@gmail.com" && password.value=="admin@123"){

        console.log("welcome owner");

        // ✅ Save login state
        localStorage.setItem("loggedIn", "true");

        // ✅ Redirect to electronics page
        window.location.href = "Dealmart\index.html";
    }
    else{
        window.location.href = "Dealmart\index.html";
        
    }
})
