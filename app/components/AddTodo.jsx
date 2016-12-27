var React = require('react');

var AddTodo = React.createClass({
    onAdd: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.onAdd}>
                    <input type="text" ref="todoText" placeholder="Todo Text ..." />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>

        );
    }
});

module.exports = AddTodo;