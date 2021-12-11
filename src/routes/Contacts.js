const express = require("express");

const { createContact } = require("../validations/Contacts");
const validate = require("../middlewares/validator");

const ContactsController = require("../controllers/Contacts");

const router = express.Router();

router.route("/").get(ContactsController.listAllContacts);
router
  .route("/")
  .post(validate(createContact, "body"), ContactsController.createContact);
router.get("/:id", ContactsController.getContactByPhone);
router.patch("/:id", ContactsController.updateContact);
router.delete("/:id", ContactsController.deleteContact);

module.exports = router;
