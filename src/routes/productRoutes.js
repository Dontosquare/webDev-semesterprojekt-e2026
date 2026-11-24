const express = require("express")
const router = express.Router()
const { getAllProducts, search, getProductById, createProduct, updateProduct, deleteProduct } = require ("../controllers/productController")

router.get("/products", getAllProducts)
router.get("/products/search", search)
router.get("/products/:id", getProductById)
router.post("/products", createProduct)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

module.exports = router