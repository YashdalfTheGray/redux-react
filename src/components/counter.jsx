import React from 'react';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { counterStore } from '../app';
import styles from '../styles';

export default class Counter extends React.Component {

    incrementCounter(index) {
        counterStore.dispatch({ type: 'INCREMENT', index: this.props.index });
    }

    decrementCounter(index) {
        counterStore.dispatch({ type: 'DECREMENT', index: this.props.index });
    }

    resetCounter(index) {
        counterStore.dispatch({ type: 'RESET', index: this.props.index });
    }

    removeCounter(index) {
        counterStore.dispatch({ type: 'REMOVE_COUNTER', index: this.props.index });
    }

    render() {
        return (
            <Card style={styles.card}>
                <CardTitle title={this.props.value} />
                <CardActions>
                    <FlatButton
                        label="Increment"
                        onTouchTap={this.incrementCounter.bind(this)} />
                    <FlatButton
                        label="Decrement"
                        onTouchTap={this.decrementCounter.bind(this)} />
                    <FlatButton
                        label="Reset"
                        onTouchTap={this.resetCounter.bind(this)} />
                    <FlatButton
                        label="Remove Counter"
                        onTouchTap={this.removeCounter.bind(this)} />
                </CardActions>
            </Card>
        );
    }
}
