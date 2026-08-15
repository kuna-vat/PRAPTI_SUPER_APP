/* ==========================================
PRAPTI SUPER APP
Professional JavaScript v2.0
========================================== */


/* ==========================================
AUTO HERO SLIDER
========================================== */

let heroImages = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg"
];

let heroIndex = 0;

function heroSlider(){

    const hero = document.querySelector(".hero");

    if(!hero) return;

    hero.style.backgroundImage =
    `linear-gradient(rgba(108,62,244,.75),
    rgba(81,45,168,.75)),
    url('${heroImages[heroIndex]}')`;

    heroIndex++;

    if(heroIndex >= heroImages.length){
        heroIndex = 0;
    }

}

setInterval(heroSlider,4000);


/* ==========================================
SEARCH PRODUCT
========================================== */

function searchProduct(){

    let input =
    document.querySelector(".search-box input");

    if(!input) return;

    let value =
    input.value.toLowerCase();

    let cards =
    document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        let text =
        card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

}


/* ==========================================
SEARCH BUTTON
========================================== */

const searchButton =
document.querySelector(".search-box button");

if(searchButton){

searchButton.addEventListener(
"click",
searchProduct
);

}


/* ==========================================
LIVE SEARCH
========================================== */

const searchInput =
document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener(
"keyup",
searchProduct
);

}
/* ==========================================
CART SYSTEM
========================================== */

let cart =
JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name,price,image){

    let product = cart.find(
        item => item.name === name
    );

    if(product){

        product.quantity++;

    }else{

        cart.push({

            name:name,
            price:price,
            image:image,
            quantity:1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(name + " Added To Cart");

}



/* ==========================================
UPDATE CART COUNT
========================================== */

function updateCartCount(){

    let count = 0;

    cart.forEach(item=>{

        count += item.quantity;

    });

    let icon =
    document.querySelector(".cart-count");

    if(icon){

        icon.innerHTML = count;

    }

}



/* ==========================================
SHOW CART
========================================== */

function displayCart(){

let cartBox =
document.getElementById("cart-items");

if(!cartBox) return;

cartBox.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total += item.price * item.quantity;

cartBox.innerHTML += `

<div class="cart-item">

<img src="${item.image}" alt="">

<div>

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<p>Qty : ${item.quantity}</p>

<button onclick="removeCart(${index})">

Remove

</button>

</div>

</div>

`;

});

let totalBox =
document.getElementById("cart-total");

if(totalBox){

totalBox.innerHTML =
"Total : ₹"+total;

}

}



/* ==========================================
REMOVE CART
========================================== */

function removeCart(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

displayCart();

updateCartCount();

}



/* ==========================================
SCROLL TO TOP
========================================== */

window.addEventListener(
"scroll",
function(){

const topBtn =
document.querySelector(".scroll-top");

if(!topBtn) return;

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

}
);



function scrollTopPage(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}



/* ==========================================
ANIMATION
========================================== */

const cards =
document.querySelectorAll(

".product-card,.category-card,.service-card"

);

cards.forEach(card=>{

card.addEventListener(

"mouseenter",

function(){

this.style.transform="translateY(-10px)";

}

);

card.addEventListener(

"mouseleave",

function(){

this.style.transform="translateY(0px)";

}

);

});
/* ==========================================
CUSTOMER CARE CHAT
========================================== */

function openCustomerCare(){

alert(

"Welcome to PRAPTI Customer Care\n\n" +

"1. Order Support\n" +

"2. Delivery Support\n" +

"3. Product Information\n" +

"4. Return & Refund\n" +

"5. Payment Help\n\n" +

"Customer Care will be available soon."

);

}


/* ==========================================
FAQ
========================================== */

function toggleFAQ(id){

let faq=document.getElementById(id);

if(!faq) return;

if(faq.style.display==="block"){

faq.style.display="none";

}else{

faq.style.display="block";

}

}


/* ==========================================
NEWSLETTER
========================================== */

function subscribeNewsletter(){

let email=document.getElementById("newsletter-email");

if(!email) return;

if(email.value==""){

alert("Please Enter Your Email");

return;

}

alert("Thank You For Subscribing!");

email.value="";

}


/* ==========================================
WELCOME MESSAGE
========================================== */

window.addEventListener(

"load",

function(){

console.log(

"PRAPTI SUPER APP Loaded Successfully"

);

}

);


/* ==========================================
INITIALIZE WEBSITE
========================================== */

document.addEventListener(

"DOMContentLoaded",

function(){

updateCartCount();

displayCart();

heroSlider();

}

);


/* ==========================================
COMING SOON
========================================== */

function comingSoon(feature){

alert(

feature +

"\n\nComing Soon..."

);

}


/* ==========================================
ADVERTISEMENT CLICK
========================================== */

function advertise(){

alert(

"Advertise With PRAPTI\n\n" +

"Contact Customer Care"

);

}


/* ==========================================
BECOME SELLER
========================================== */

function becomeSeller(){

alert(

"Seller Registration\n\n" +

"Available Soon."

);

}


/* ==========================================
DELIVERY PARTNER
========================================== */

function deliveryPartner(){

alert(

"Delivery Partner Registration\n\n" +

"Available Soon."

);

}


/* ==========================================
ONLINE STATUS
========================================== */

window.addEventListener(

"online",

function(){

console.log("Internet Connected");

}

);

window.addEventListener(

"offline",

function(){

alert(

"No Internet Connection"

);

}

};

let slides = document.querySelectorAll(".slide");

let index = 0;


function showSlide(){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });


    slides[index].classList.add("active");


    index++;

    if(index >= slides.length){
        index=0;
    }

}


setInterval(showSlide,3000);
/* ==========================================
END OF FILE
========================================== */
