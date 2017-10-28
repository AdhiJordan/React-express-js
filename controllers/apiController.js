var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	app.get('/api/todos/:username', function(req, res){

		Todos.findById({ username: req.params.username }, function(err, todos){
			console.log("adithya---->", todos);
			if(err)
				throw err;
			
			res.send(todos);
		});
	});

	app.get('/api/todo/:id', function(req, res) {
		Todos.findById({_id: req.params.id}, function(err, todo){
			if(err) throw err;
			res.send(todo);
		});
	});

	// app.get('/api/gender/:gender', function(req, res) {
		
	// 	Todos.findById({_id: req.params.id,
	// 	name: req.params.name}, function(err, todo){

	// 		if(err) throw err;
	// 		res.send(todo);
	// 	});
	// });

	app.post('/api/todo', function(req, res){
		if(req.body.id){
			Todos.findByIdAndUpdate(req.body.id, {
				todo: req.body.todo,
				isDone: req.body.isDone,
				hasAttachment: req.body.hasAttachment
			});
		}
		else{
			var newTodo = Todos({
				username: 'test',
				todo: req.body.todo,
				isDone: req.body.isDone,
				hasAttachment: req.body.hasAttachment
			});
			newTodo.save(function(err){
				if(err) throw err;
				res.send('Success');
			});
		}
	});

	app.delete('/api/todo', function(req, res){
		Todos.findByIdAndRemove(req.body.id, function(err){
			if(err) throw err;
			res.send('Success');
		});
	});
}