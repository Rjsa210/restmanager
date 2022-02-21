const router = require("express").Router();

const { Vendor } = require("../../models/index");

router.get('/', (req, res) => {
  Vendor.findAll({})
  .then((data) => res.status(200).json(data))
  .catch((err) => res.status(404).send(err))
})

router.post('/', (req, res) => {
  Vendor.create({
    vendor_name: req.body.vendor_name
  })
  .then((data) => res.status(201).json(data))
  .catch((err) => res.status(500).send(err))
})

module.exports = router;