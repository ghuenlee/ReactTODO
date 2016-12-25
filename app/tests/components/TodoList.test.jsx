var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

describe('TodoList', () => {
    it('Should exist', () => {
        expect(TodoList).toExist();
    });
    it('Should render the correct number of TodoItems', () => {
        var todos = [
            {
                id: 1,
                text: 'Caligula'
            },
            {
                id: 2,
                text: 'Gilgamesh'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

        expect(todosComponents.length).toBe(todos.length);
    });
});