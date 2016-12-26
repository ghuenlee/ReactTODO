var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

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
        var newTodo = {
            id: uuid(),
            text: text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
        };

        this.setState({
            todos: [
                ...this.state.todos,
                newTodo
            ]
        });
    },
    handleTodoDelete: function (id) {
        var todos = this.state.todos;
        var newTodos = todos.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            }
        });
        this.setState({
            todos: newTodos
        });
    },
    handleToggle: function (id) {
        var updTodos = this.state.todos;
        updTodos.map((todo) => {
            if (todo.id == id) {
                todo.completed = !todo.completed;
                if (todo.completed == true) {
                    todo.completedAt = moment().unix();
                } else {
                    todo.completedAt = undefined;
                }
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
                <TodoList todos={filteredTodos} onToggle={this.handleToggle} onDeleteTodo={this.handleTodoDelete} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;
