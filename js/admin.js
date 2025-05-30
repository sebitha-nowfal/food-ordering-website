const form = document.getElementById("menu-form");
const menuList = document.getElementById("admin-menu-list");

let menuItems = JSON.parse(localStorage.getItem("menu")) || [];

const renderMenu = () => {
  menuList.innerHTML = "";
  menuItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${item.name}</strong> - $${item.price}
      <p>${item.description}</p>
    `;
    menuList.appendChild(div);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("item-name").value;
  const desc = document.getElementById("item-desc").value;
  const price = document.getElementById("item-price").value;

  menuItems.push({ name, description: desc, price });
  localStorage.setItem("menu", JSON.stringify(menuItems));
  renderMenu();

  form.reset();
});

renderMenu();
