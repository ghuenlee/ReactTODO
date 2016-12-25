var React = require('react');

var TodoItem = React.createClass({
    toggleCompleted: function () {
        var id = this.props.id;
        this.props.onToggle(id);
    },
    render: function () {
        var {id, text, completed} = this.props;
        return (
            <div>
                <label>
                    <input type="checkbox" value checked={completed} onChange={this.toggleCompleted} />
                    {text}
                </label>


            </div>
        );
    }
});

module.exports = TodoItem;