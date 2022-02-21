const router = require("express").Router();

//import routers
const productRoutes= require("./productRoutes");
const locationRoutes = require("./locationRoutes");
const vendorRoutes = require("./vendorRoutes");


// define router paths
router.use("/products", productRoutes);
router.use("/locations", locationRoutes);
router.use("/vendors", vendorRoutes);

module.exports = router;