import React from 'react';
import { createStore } from 'redux';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

import Counter from './components/counter';
import counterReducer from './reducers/counterReducer';

class App extends React.Component {

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
        var counters = this.state.counters.map((c, i) => {
            return <Counter key={i} index={i} />
        });

        var counterListStyle = {
            marginTop: '16px'
        }
        return (
            <div>
                <AppBar
                    title="Redux Counters" />
                <div style={counterListStyle}>
                    {counters}
                </div>
                <RaisedButton
                    style={{ margin: '0px 16px', marginTop: '24px' }}
                    label="Add Counter"
                    primary={true}
                    onTouchTap={this.addCounter} />
            </div>
        );
    }
}

export default App;

const counterStore = createStore(counterReducer);
export { counterStore };
