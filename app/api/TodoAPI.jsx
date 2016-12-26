var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            // Local storage can only store JSON objects. 
            // Thus we convert our array to a JSOn object.
            localStorage.setItem('todos', JSON.stringify(todos));
            // this isn't necessary (the return). I think ... 
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        // we use the try catch block to catch any error that could
        // result from parsing the stringTodos variable.
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e);
        }
        // this is called a turnary statement. basically, if the first statement
        // is true, the code after the '?' is executed. else, the code after the ':' 
        // is executed. simple, right?
        return $.isArray(todos) ? todos : [];

    },
    filterTodos: function (todos, searchText, showCompleted) {
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            // This is VERY confusing.
            // Here's how to interpret it:
            // basically, we wanna filter out the todos based on their completed status.
            // ## if the todo's completed status is false, and showCompleted is false, we display
            //    only the todos that are not completed
            // ## if show completed is true, we display all todos, no matter their
            //    their completed status. Hence the OR (||) operator!

            return !todo.completed || showCompleted;
        });

        // Filter by searchText

        filteredTodos = filteredTodos.filter((todo) => {
            if (searchText.length > 0) {
                var todoText = (todo.text).toLowerCase();
                if (todoText.indexOf(searchText) > -1) {
                    // indexOf returns a value equal or superior to 0 if the text was found,
                    // Else, it returns -1 if nothing is found.
                    return todo;
                }
            } else {
                return todo;
            }
        });
        // Sort todos

        filteredTodos.sort((a, b) => {
            if (a.completed && !b.completed) {
                return 1;
            } else if (!a.completed && b.completed) {
                return -1;
            } else {
                return 0;
            }
        });
        return filteredTodos;
    }
};