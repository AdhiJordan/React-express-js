var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
		name: String,
		gender: String,
		age: Number,
		country: String,
		Occupation: String,
		City: String
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;