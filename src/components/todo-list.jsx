import * as _ from 'lodash';
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CheckIcon from 'material-ui/lib/svg-icons/navigation/check';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import SubmitIcon from 'material-ui/lib/svg-icons/content/send';
import Snackbar from 'material-ui/lib/snackbar';
import * as Colors from 'material-ui/lib/styles/colors';

import { todoStore } from '../app';
import styles from '../styles';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            validateSnackbarOpen: false,
            newTodo: '',
            todos: todoStore.getState()
        };

        this.unsubscribe = todoStore.subscribe(() => {
            this.setState({
                todos: todoStore.getState()
            });
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleValidateRequestClose = this.handleValidateRequestClose.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    componentDidMount() {
        todoStore.dispatch({ type: '' });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleValidateRequestClose() {
        this.setState({
            validateSnackbarOpen: false
        });
    }

    handleChange(event) {
        this.setState({
            newTodo: event.target.value
        });
    }

    markTodoCompleted(id) {
        todoStore.dispatch({
            type: 'TOGGLE_TODO',
            id: id
        });
    }

    clearCompleted() {
        todoStore.dispatch({
            type: 'REMOVE_COMPLETED_TODOS'
        });
    }

    submitAnswer() {
        if (this.state.newTodo !== '') {
            todoStore.dispatch({
                type: 'ADD_TODO',
                text: this.state.newTodo,
                id: _.uniqueId('todo_')
            });
            this.setState({
                newTodo: ''
            });
        }
        else {
            this.setState({
                validateSnackbarOpen: true
            });
        }
    }

    render() {
        var iconStyle = {
            fill: Colors.green500
        };
        var completedTodoStyle = {
            textDecoration: 'line-through'
        };

        var emptyTodoList = <p>There are no todos yet; add one above.</p>;

        var todos = this.state.todos.map(todo => {
            if (todo.completed) {
                return (
                    <ListItem
                        style={completedTodoStyle}
                        key={todo.id}
                        primaryText={todo.text}
                        rightIcon={<CheckIcon style={iconStyle} />} />
                );
            }
            else {
                return (
                    <ListItem
                        key={todo.id}
                        primaryText={todo.text}
                        onTouchTap={this.markTodoCompleted.bind(this, todo.id)}/>
                );
            }
        });

        return (
            <Card>
                <CardHeader
                    title="Todos" />
                <CardText>
                    <div style={styles.flexRow}>
                        <TextField
                            style={styles.flexItem}
                            floatingLabelText="Todo"
                            value={this.state.newTodo}
                            onChange={this.handleChange} />
                        <IconButton
                            tooltip="Submit"
                            onTouchTap={this.submitAnswer}>
                            <SubmitIcon />
                        </IconButton>
                        <Snackbar
                            open={this.state.validateSnackbarOpen}
                            message="Cannot add empty todo."
                            autoHideDuration={3000}
                            onRequestClose={this.handleValidateRequestClose} />
                    </div>
                    <List style={styles.spacerLg}>
                        {this.state.todos.length > 0 ? todos : emptyTodoList}
                    </List>
                </CardText>
                <CardActions>
                    <FlatButton
                        label="Clear Completed"
                        onTouchTap={this.clearCompleted} />
                </CardActions>
            </Card>
        );
    }
}
