var React = require('react');
var uuid = require('node-uuid');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SearchTodos = require('SearchTodos');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            searchText: '',
            showCompleted: false,
            todos: TodoAPI.getTodos()
        };
    },
    componentDidUpdate: function () {
        // Why we use componentDidUpdate ? when we update a todo, we do it 
        // through updating the state, not the original todos on the API.
        // to do both, we implement this line of code here in order to update the
        // todos of the API whenever the props/states of the App are updated.
        TodoAPI.setTodos(this.state.todos);
    },
    handleSearch: function (searchText, showCompleted) {
        this.setState({ searchText: searchText.toLowerCase(), showCompleted: showCompleted });
    },
    handleAddTodo: function (text) {
        var newTodo = {};
        newTodo.id = uuid();
        newTodo.text = text;
        newTodo.completed = false;

        this.setState({
            todos: [
                ...this.state.todos,
                newTodo
            ]
        });
    },
    handleToggle: function (id) {
        var updTodos = this.state.todos;
        updTodos.map((todo) => {
            if (todo.id == id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({
            todos: updTodos,
        });
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, searchText, showCompleted);
        return (
            <div>
                <SearchTodos onSearch={this.handleSearch} />
                <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;
