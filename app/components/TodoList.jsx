var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({

    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} />
                );
                // {...todo} lets us pass all the properties of a todo as props of which name is equal
                // to that of the property! ex: text={todo.text} date={todo.date} ...Etc. Really helpful
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );

    }
});

module.exports = TodoList;
