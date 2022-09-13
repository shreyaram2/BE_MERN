const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trainingSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  employeeID: { type: Number, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Training', trainingSchema);
