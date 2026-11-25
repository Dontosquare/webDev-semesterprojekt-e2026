const { Order, Product } = require("../models")
const { Op } = require("sequelize")

const getOrders = async( req, res) => {

    try {
        
        const orders = await Order.findAll({
            order: [["createdAt", "DESC"]]
        });
        res.render("admin", {orders})
    } catch (error) {
        
    }
}

module.exports = { getOrders }





