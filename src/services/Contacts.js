const Contact = require("../models/Contact");

const getAllContacts = () => {
  return Contact.find({});
};

const getContactByPhone = (phone) => {
  return Contact.findOne({ phone });
};

const addContact = (data) => {
  const contact = new Contact(data);
  return contact.save();
};

const updateContact = (phone, data) => {
  return Contact.findOneAndUpdate({ phone }, data);
};

const removeContact = (phone) => {
  return Contact.findOneAndDelete({ phone });
};

module.exports = {
  getAllContacts,
  getContactByPhone,
  addContact,
  updateContact,
  removeContact,
};
