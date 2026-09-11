import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());


// Read products from JSON file
function getProducts() {
    return JSON.parse(fs.readFileSync("product.json", "utf-8"));
}


// Write products to JSON file
function saveProducts(products) {
    fs.writeFileSync(
        "product.json",
        JSON.stringify(products, null, 2)
    );
}


// ================= HOME =================

app.get("/", (req, res) => {
    res.json({
        message: "Product REST API is running",
        endpoints: [
            "GET /products",
            "GET /products/:id",
            "POST /products",
            "PUT /products/:id",
            "DELETE /products/:id"
        ]
    });
});


// ================= GET ALL PRODUCTS =================

app.get("/products", (req, res) => {

    const products = getProducts();

    res.status(200).json(products);
});


// ================= GET SINGLE PRODUCT =================

app.get("/products/:id", (req, res) => {

    const products = getProducts();

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
});


// ================= POST PRODUCT =================

app.post("/products", (req, res) => {

    const { name, category, price, stock } = req.body;

    if (!name || !category || price === undefined || stock === undefined) {
        return res.status(400).json({
            message: "Name, category, price and stock are required"
        });
    }

    const products = getProducts();

    const newId = products.length > 0
        ? Math.max(...products.map(p => p.id)) + 1
        : 1;

    const newProduct = {
        id: newId,
        name: name,
        category: category,
        price: Number(price),
        stock: Number(stock)
    };

    products.push(newProduct);

    saveProducts(products);

    res.status(201).json(newProduct);
});


// ================= PUT PRODUCT =================

app.put("/products/:id", (req, res) => {

    const products = getProducts();

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, category, price, stock } = req.body;

    if (!name || !category || price === undefined || stock === undefined) {
        return res.status(400).json({
            message: "Name, category, price and stock are required"
        });
    }

    product.name = name;
    product.category = category;
    product.price = Number(price);
    product.stock = Number(stock);

    saveProducts(products);

    res.status(200).json(product);
});


// ================= DELETE PRODUCT =================

app.delete("/products/:id", (req, res) => {

    const products = getProducts();

    const id = parseInt(req.params.id);

    const productExists = products.some(p => p.id === id);

    if (!productExists) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const updatedProducts = products.filter(p => p.id !== id);

    saveProducts(updatedProducts);

    res.status(200).json({
        message: "Product deleted successfully"
    });
});


// ================= SERVER =================

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});