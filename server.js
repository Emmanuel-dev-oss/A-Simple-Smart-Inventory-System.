import express from 'express'
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT  = process.env.PORT || 5000;

app.use(express.json());

// Fake database
let products = [
  { id: 1, name: "Laptop", type: "Dell lattitude 365", price: 1000, quantity: 5 },
  { id: 2, name: "Phone", type: "Samsung Galaxy A05", price: 500, quantity: 10 }
];

// API Routes
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body
  };
  products.push(newProduct);
  res.json(newProduct);
});

// 🔥 Serve frontend
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});