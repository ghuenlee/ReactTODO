var React = require('react');
var moment = require('moment');

var TodoItem = React.createClass({
    toggleCompleted: function () {
        var id = this.props.id;
        this.props.onToggle(id);
    },
    onDeleteTodo: function () {
        var id = this.props.id;
        this.props.onDeleteTodo(id);
    },
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created on: ';
            var timestamp = createdAt;
            // This is a nice trick. if completed is true, the message and timestamp change,
            // thus the message displayed is completed on: ...

            if (completed == true) {
                message = 'Completed on: ';
                timestamp = completedAt;
            }
            return message + moment.unix(timestamp).format('MMM Do, YYYY @ HH:mm');
        };
        return (
            <div className={todoClassName}   >
                <div onClick={this.toggleCompleted}>
                    <input type="checkbox" value checked={completed} />
                </div>
                <div onClick={this.toggleCompleted}>
                    <p>{text}</p>
                    <p className="todo__subtext" > {renderDate()} </p>
                </div>
                <div className="delete_todo_button">
                    <button onClick={this.onDeleteTodo} title="Remove todo">Remove</button>
                </div>
            </div>
        );
    }
});

module.exports = TodoItem;