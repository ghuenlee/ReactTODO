var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoItem = require('TodoItem');

describe('TodoItem', () => {
    it('Should exist', () => {
        expect(TodoItem).toExist();
    });
});