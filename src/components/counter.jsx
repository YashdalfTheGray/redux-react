import React from 'react';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { counterStore } from '../app';
import styles from '../styles';

export default class Counter extends React.Component {

    incrementCounter(index) {
        counterStore.dispatch({ type: 'INCREMENT', index: index });
    }

    decrementCounter(index) {
        counterStore.dispatch({ type: 'DECREMENT', index: index });
    }

    resetCounter(index) {
        counterStore.dispatch({ type: 'RESET', index: index });
    }

    removeCounter(index) {
        counterStore.dispatch({ type: 'REMOVE_COUNTER', index: index });
    }

    render() {
        return (
            <Card style={styles.card}>
                <CardTitle title={this.props.value} />
                <CardActions>
                    <FlatButton
                        label="Increment"
                        onTouchTap={this.incrementCounter.bind(this, this.props.index)} />
                    <FlatButton
                        label="Decrement"
                        onTouchTap={this.decrementCounter.bind(this, this.props.index)} />
                    <FlatButton
                        label="Reset"
                        onTouchTap={this.resetCounter.bind(this, this.props.index)} />
                    <FlatButton
                        label="Remove Counter"
                        onTouchTap={this.removeCounter.bind(this, this.props.index)} />
                </CardActions>
            </Card>
        );
    }
}
