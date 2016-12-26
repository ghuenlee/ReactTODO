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
            <div>
                <label>
                    <input type="checkbox" value checked={completed} onChange={this.toggleCompleted} />
                    {text}
                    <button className="button alert tiny hollow" onClick={this.onDeleteTodo}>delete</button>
                    <p> {renderDate()} </p>
                </label>


            </div>
        );
    }
});

module.exports = TodoItem;