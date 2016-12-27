var React = require('react');
var TodoItem = require('TodoItem');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var TodoList = React.createClass({

    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            if (todos.length > 0) {
                return todos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} onDeleteTodo={this.props.onDeleteTodo} />
                    );
                    // {...todo} lets us pass all the properties of a todo as props of which name is equal
                    // to that of the property! ex: text={todo.text} date={todo.date} ...Etc. Really helpful
                });
            }
        };
        var displayMessage = () => {
            if (todos.length === 0) {
                return <p className="container__message">No todos to display!</p>;

            }
        };

        return (
            <div >
                <ReactCSSTransitionGroup
                    transitionName="todo-list"
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}
                    >
                    {renderTodos()}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionName="todo-list"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                    {displayMessage()}
                </ReactCSSTransitionGroup>

            </div >
        );

    }
});

module.exports = TodoList;
