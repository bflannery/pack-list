const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: [true, 'An item name is required'] },
  quantity: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('item', schema);
