import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';

import { counterStore } from '../app';
import styles from '../styles';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: counterStore.getState()[this.props.index]
        };

        this.unsubscribe = counterStore.subscribe(() => {
            this.setState({
                value: counterStore.getState()[this.props.index]
            });
        });

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.removeCounter = this.removeCounter.bind(this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    incrementCounter() {
        counterStore.dispatch({ type: 'INCREMENT', index: this.props.index });
    }

    decrementCounter() {
        counterStore.dispatch({ type: 'DECREMENT', index: this.props.index });
    }

    resetCounter() {
        counterStore.dispatch({ type: 'RESET', index: this.props.index });
    }

    removeCounter() {
        counterStore.dispatch({ type: 'REMOVE_COUNTER', index: this.props.index });
    }

    render() {
        return (
            <Card style={styles.card}>
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
                    <FlatButton
                        label="Remove Counter"
                        onTouchTap={this.removeCounter} />
                </CardActions>
            </Card>
        );
    }
}
