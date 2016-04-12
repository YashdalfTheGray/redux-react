import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

import Counter from './counter';
import styles from '../styles';
import { counterStore } from '../app';

export default class CounterList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counters: counterStore.getState()
        };

        this.unsubscribe = counterStore.subscribe(() => {
            this.setState({
                counters: counterStore.getState()
            });
        });
    }

    componentDidMount() {
        counterStore.dispatch({ type: '' });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    addCounter() {
        counterStore.dispatch({ type: 'ADD_COUNTER' });
    }

    render() {
        return (
            <div>
                <div style={styles.cardList}>
                    {this.state.counters.map((c, i) => {
                        return <Counter key={i} index={i} />
                    })}
                </div>
                <RaisedButton
                    style={{ margin: '0px 16px', marginTop: '24px' }}
                    label="Add Counter"
                    secondary={true}
                    onTouchTap={this.addCounter} />
            </div>
        );
    }
}
