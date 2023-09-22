const express = require("express");
const contact = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contact.create)
    .delete(contact.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contact.update)
    .delete(contact.delete);

module.exports = router;
