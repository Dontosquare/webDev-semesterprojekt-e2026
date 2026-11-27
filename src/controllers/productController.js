const { Product, Color, Brand, Category, Condition, Stock } = require("../models")
const { Op } = require("sequelize")

const getAllProducts = async (req, res) => {

    const page = Number(req.query.page) || 1
    const pageSize = Number(req.query.pageSize) || 10
    const where = {}

    try {

        const { count, rows } = await Product.findAndCountAll({
            where,
            include: [
                { model: Color },
                { model: Brand },
                { model: Category },
                { model: Condition },
                { model: Stock },
            ],
            order: [["createdAt", "DESC"]],
            limit: pageSize,
            offset: (page - 1) * pageSize,
        })
        const totalPages = Math.ceil(count / pageSize)

        res.render("products", {
            products: rows.map((p) => p.get({ plain: true })),
            page,
            pageSize,
            totalItems: count,
            totalPages,
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const search = async (req, res) => {
    const search = req.query.q
    try {
        where = {}

        if (search) {
            where = { name: { [Op.substring]: search } }
        }
        const products = await Product.findAll({ where, raw: true })
        res.render("products", { products })
    }

    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: [
                { model: Color },
                { model: Brand },
                { model: Category },
                { model: Condition },
                { model: Stock },
            ],
        }

        )
        if (!product) {
            return res.status(404).json({ error: "Product not found" })
        }
        res.render("product", { product: product.get({ plain: true }) })
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

module.exports = { getAllProducts, search, getProductById, createProduct, updateProduct, deleteProduct }