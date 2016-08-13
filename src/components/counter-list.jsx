import React from 'react';

import Counter from './counter';
import styles from '../styles';

export default class CounterList extends React.Component {

    render() {
        return (
            <div style={styles.cardList}>
                {this.props.counters.map((c, i) => {
                    return <Counter key={i} index={i} />
                })}
            </div>
        );
    }
}
