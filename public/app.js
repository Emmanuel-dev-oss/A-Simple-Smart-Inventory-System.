const API_URL = "/api/products"; // 🔥 SAME ORIGIN

async function fetchProducts() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const list = document.getElementById("productList");
  list.innerHTML = "";

  data.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name}: ${p.type} - $${p.price} Remaining Quantity(${p.quantity})`;
    list.appendChild(li);
  });
}

function loadProduct() {
  fetchProducts();
}

async function addProduct() {
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, type, price, quantity })
  });

  fetchProducts();
}
// fetchProducts();