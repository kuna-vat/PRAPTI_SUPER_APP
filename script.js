const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Auto Product ID
    const productId = "PRD" + Date.now();

    // Get Form Data
    const product = {
        product_id: productId,
        product_name: document.getElementById("name").value.trim(),
        brand: document.getElementById("brand").value.trim(),
        category: document.getElementById("category").value,
        purchase_price: Number(document.getElementById("purchase").value),
        retail_price: Number(document.getElementById("retail").value),
        wholesale_price: Number(document.getElementById("wholesale").value),
        stock: Number(document.getElementById("stock").value),
        unit: document.getElementById("unit").value,
        status: "ACTIVE",
        created_at: new Date().toISOString()
    };

    // Load Existing Products
    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Save Product
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    alert("✅ Product Added Successfully!");

    // Reset Form
    document.getElementById("productForm").reset();

    console.log(products);
});
