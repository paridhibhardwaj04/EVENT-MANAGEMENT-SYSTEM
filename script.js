function goLogin(){
    window.location.href="login.html";
}

function login(){
    const role = document.getElementById("role").value;

    if(role==="admin"){
        window.location.href="admin/admin-dashboard.html";
    }
    else if(role==="vendor"){
        window.location.href="vendor/vendor-main.html";
    }
    else if(role==="user"){
        window.location.href="user/user-portal.html";
    }
    else{
        alert("Select Role");
    }
}

function logout(){
    window.location.href="../login.html";
}

// Vendor Add Item
function addItem(){
    let name=document.getElementById("itemName").value;
    let price=document.getElementById("itemPrice").value;

    let items=JSON.parse(localStorage.getItem("items"))||[];
    items.push({name,price});
    localStorage.setItem("items",JSON.stringify(items));
    alert("Item Added");
}

// Cart System
function addToCart(name,price){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    cart.push({name,price});
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Added to Cart");
}

function checkout(){
    alert("Payment Successful");
    localStorage.removeItem("cart");
}

function clearCart(){
    localStorage.removeItem("cart");
    alert("Cart Cleared");
}