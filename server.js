var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1,
	description: 'whats for lunch today',
	completed: false
},
	{
		id: 2,
		description: ' pick up the food',
		completed: false
	},
	{
		id: 3,
		description: ' was it goog ',
		completed: true
	}
];

app.get('/', function (req, res) {
	res.send('Todo API');
});

// Get /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	
	var todoId = parseInt(req.params.id , 10);
	var matchedTodo;
	
	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	});
	
	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
	
	
	// res.send('Asking for todo with id of ' + req.params.id)
});


app.listen(3000, function () {
	console.log('Express listening on port ' + PORT + ' !');
});