var Todos = require('../models/todoModel');

module.exports = function(app) {
	app.get('/api/setUpTodos', function(req, res){
		Todos.create(starterTodos, function(error, results){
			res.send(results);
		});
	});

var starterTodos = [
			{
				name: 'Adhithya',
				gender: 'male',
				age: '23',
				country: 'India',
				Occupation: 'Software Developer',
				City: 'Bangalore'
			},
			{
				name: 'Sundar',
				gender: 'male',
				age: '24',
				country: 'India',
				Occupation: 'Software Developer',
				City: 'Chennai'
			},
			{
				name: 'Aayushi',
				gender: 'female',
				age: '23',
				country: 'India',
				Occupation: 'Software Developer',
				City: 'Bangalore'
			},
			{
				name: 'Puvikaran',
				gender: 'male',
				age: '26',
				country: 'India',
				Occupation: 'Software Developer',
				City: 'Chennai'
			},
			{
				name: 'Vimal',
				gender: 'male',
				age: '24',
				country: 'India',
				Occupation: 'Software designer',
				City: 'Chennai'
			},
			{
				name: 'Pumba',
				gender: 'male',
				age: '24',
				country: 'India',
				Occupation: 'Software Developer',
				City: 'Mumbai'
			},
			{
				name: 'Kesavan',
				gender: 'male',
				age: '24',
				country: 'India',
				Occupation: 'Civil Engineer',
				City: 'Rajasthan'
				
			},
			{
				name: 'Saravan',
				gender: 'male',
				age: '24',
				country: 'India',
				Occupation: 'System Engineer',
				City: 'Chennai'
			},
			{
				name: 'Hari',
				gender: 'male',
				age: '26',
				country: 'India',
				Occupation: 'System Engineer',
				City: 'Bangalore'
			},
			{
				name: 'Kiran',
				gender: 'male',
				age: '24',
				country: 'India',
				Occupation: 'System Developer',
				City: 'Bangalore'
			},
			{
				name: 'Rajaguru',
				gender: 'male',
				age: '26',
				country: 'India',
				Occupation: 'System Developer',
				City: 'Rajasthan'
			},
			{
				name: 'Kani',
				gender: 'male',
				age: '23',
				country: 'India',
				Occupation: 'Civil Engineer',
				City: 'Rajasthan'
			},
			{
				name: 'Karthi',
				gender: 'male',
				age: '22',
				country: 'India',
				Occupation: 'Business Analyst',
				City: 'Bangalore'
			},
			{
				name: 'Nandha',
				gender: 'male',
				age: '23',
				country: 'India',
				Occupation: 'Business Analyst',
				City: 'Chennai'
			},
			{
				name: 'Sohil Shannu',
				gender: 'male',
				age: '23',
				country: 'India',
				Occupation: 'Search Enginee',
				City: 'Mumbai'
			},
			{
				name: 'Rajagopal',
				gender: 'male',
				age: '24',
				country: 'India',
				Occupation: 'Search Enginee',
				City: 'Mumbai'
			},
			{
				name: 'Somu',
				gender: 'male',
				age: '24',
				country: 'India',
				Occupation: 'Business Analyst',
				City: 'Chennai'
			},
			{
				name: 'Swetha Balu',
				gender: 'female',
				age: '24',
				country: 'India',
				Occupation: 'Software Developer',
				City: 'Bangalore'
			},
			{
				name: 'Dharani',
				gender: 'female',
				age: '24',
				country: 'India',
				Occupation: 'Business Analyst',
				City: 'Chennai'
			},
			{
				name: 'Jothi',
				gender: 'female',
				age: '24',
				country: 'India',
				Occupation: 'System Engineer',
				City: 'Chennai'
			}

		];

	app.get('/api/gender/female', function(req, res){
		Todos.create(starterTodos, function(error, results){
			var getVal = results.map((item) => {
				if(item.gender === 'female')
				{
					return item;
				}
			});
			res.send(getVal);
		});
	});

	app.get('/api/gender/male', function(req, res){
		Todos.create(starterTodos, function(error, results){
			var getVal = results.map((item) => {
				if(item.gender === 'male') {
					return item;
				}
			});
			res.send(getVal);
		});
	});

	app.get('/api/city/Chennai', function(req, res){
		Todos.create(starterTodos, function(error, results){
			var getVal = results.map((item) => {
				if(item.City === 'Chennai')
				{
					return item;
				} 
			});
			res.send(getVal);
		});
	});

		app.get('/api/city/Bangalore', function(req, res){
		Todos.create(starterTodos, function(error, results){
			var getVal = results.map((item) => {
				if(item.City === 'Bangalore')
				{
					return item;
				} 
			});
			res.send(getVal);
		});
	});

	app.get('/api/city/Rajasthan', function(req, res){
		Todos.create(starterTodos, function(error, results){
			var getVal = results.map((item) => {
				if(item.City === 'Rajasthan')
				{
					return item;
				} 
			});
			res.send(getVal);
		});
	});

	app.get('/api/city/Mumbai', function(req, res){
		Todos.create(starterTodos, function(error, results){
			var getVal = results.map((item) => {
				if(item.City === 'Mumbai')
				{
					return item;
				} 
			});
			res.send(getVal);
		});
	});
}