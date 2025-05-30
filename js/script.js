// Sample food items
const menu = [
    { id: 1, name: "Burger", price: 5.99 },
    { id: 2, name: "Pizza", price: 8.99 },
    { id: 3, name: "Fries", price: 2.99 },
    { id: 4, name: "Soda", price: 1.99 }
  ];
  
  const cart = [];
  
  // Load menu
  function displayMenu() {
    const menuContainer = document.getElementById("menu-items");
    menu.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";
      itemDiv.innerHTML = `
        <span>${item.name} - $${item.price.toFixed(2)}</span>
        <button onclick="addToCart(${item.id})">Add</button>
      `;
      menuContainer.appendChild(itemDiv);
    });
  }
  
  // Add item to cart
  function addToCart(id) {
    const item = menu.find(food => food.id === id);
    cart.push(item);
    updateCart();
  }
  
  // Update cart display
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
  
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;
  }
  
  // Initialize
  displayMenu();
  