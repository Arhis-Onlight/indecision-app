'use strict';

console.info("Developed by Arhis Onlight");
var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
var nums = [66, 23, 54];
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // Prevents default submitting and run the following code

    var option = e.target.elements.option.value;
    var isMatch = option.trim().match(/^.{1,30}$/g);
    if (option && isMatch) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options.length = 0;
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNumber];
    alert(option);
};

var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        { id: 'indecision' },
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here is your options:' : 'no options'
        ),
        React.createElement(
            'button',
            { className: 'btn btn-primary', disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        '\xA0',
        React.createElement(
            'button',
            { type: 'button', className: 'btn btn-outline-danger', 'data-toggle': 'modal', 'data-target': '#exampleModalCenter' },
            'Remove all options'
        ),
        React.createElement(
            'div',
            { className: 'modal fade', id: 'exampleModalCenter', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'exampleModalCenterTitle', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalCenterTitle' },
                            'Remove All Options'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                            React.createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '\xD7'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'p',
                            null,
                            'Are you sure? Changes won\'t be ',
                            React.createElement(
                                'span',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'undone'
                                )
                            ),
                            '.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'strong',
                                null,
                                'Remove all options?'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-success', 'data-dismiss': 'modal' },
                            'Close'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', 'data-dismiss': 'modal', onClick: onRemoveAll, className: 'btn btn-danger' },
                            'Remove all'
                        )
                    )
                )
            )
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                !app.id ? (app.id = 0, app.id++) : undefined;
                app.id++;
                return React.createElement(
                    'li',
                    { key: app.id },
                    option
                );
            }),
            delete app.id
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', placeholder: 'Option' }),
            '\xA0',
            React.createElement(
                'button',
                { className: 'btn btn-sm btn-outline-success' },
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
