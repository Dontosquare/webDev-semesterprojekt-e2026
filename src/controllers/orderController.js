const { Order, Product } = require("../models")
const { Op } = require("sequelize")

const getOrders = async( req, res) => {

    try {
        
        const orders = await Order.findAll({
            order: [["createdAt", "DESC"]],
            include: [
                 { model: User }
            ]
        });
        res.render("admin", {orders})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const postOrders = async( req, res) => {
    try {
        const { timeOfPurchase, invoiceNumber } = req.body
        const postOrder = await Order.create({ timeOfPurchase, invoiceNumber })
        res.status(201).json(order)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = { getOrders }





