const { Product } = require("../models")

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ raw: true})
        res.render("products", { products })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }
        res.json(product)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, sku, price, brand, variation, category, description, imagePath } = req.body;
        const product = await Product.create({ name, sku, price, brand, variation, category, description, imagePath })
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }
        const { name, sku, price, brand, variation, category, description, imagePath } = req.body;
        await product.update({ name, sku, price, brand, variation, category, description, imagePath })
        res.json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }
        await product.destroy()
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct }