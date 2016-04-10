import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';

import { counterStore } from '../app';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: counterStore.getState()
        };

        counterStore.subscribe(() => {
            this.setState({
                value: counterStore.getState()
            });
        });
    }

    incrementCounter() {
        counterStore.dispatch({ type: 'INCREMENT' });
    }

    decrementCounter() {
        counterStore.dispatch({ type: 'DECREMENT' });
    }

    resetCounter() {
        counterStore.dispatch({ type: 'RESET' });
    }

    render() {
        var counterStyle = {
            margin: '0px 16px',
            marginBottom: '16px'
        }
        return (
            <Card style={counterStyle}>
                <CardTitle title={this.state.value} />
                <CardActions>
                    <FlatButton
                        label="Increment"
                        onTouchTap={this.incrementCounter} />
                    <FlatButton
                        label="Decrement"
                        onTouchTap={this.decrementCounter} />
                    <FlatButton
                        label="Reset"
                        onTouchTap={this.resetCounter} />
                </CardActions>
            </Card>
        );
    }
}
