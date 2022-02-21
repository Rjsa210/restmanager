const router = require("express").Router();

const {Location, Product } = require("../../models");

router.get("/", (req, res) => {
  Location.findAll({})
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(404).send(err))
})

router.post("/", (req, res) => {
  Location.create({
    location_name: req.body.location_name
  })
  .then((data) => res.status(201).send(data))
  .catch((err) => res.status(500).send(err))
})

module.exports = router;