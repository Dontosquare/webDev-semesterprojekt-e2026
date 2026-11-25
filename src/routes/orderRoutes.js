const express = require("express")
const router = express.Router()
const { getOrders, postOrders } = require ("../controllers/orderController")

router.get("/admin", getOrders)
router.post("/orders", postOrders)