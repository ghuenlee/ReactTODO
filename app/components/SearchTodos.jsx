var React = require('react');

var SearchTodos = React.createClass({
    handleChange: function () {
        var searchText = this.refs.searchText.value;
        var searchCompleted = this.refs.searchCompleted.checked;

        this.props.onSearch(searchText, searchCompleted);
    },

    render: function () {
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Type in search query..." onChange={this.handleChange} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="searchCompleted" onChange={this.handleChange} />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = SearchTodos;