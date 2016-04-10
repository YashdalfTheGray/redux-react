import React from 'react';
import { createStore } from 'redux';
import AppBar from 'material-ui/lib/app-bar';

import Counter from './components/counter';
import counterReducer from './stores/counterReducer';

class App extends React.Component {

    render() {
        var counterListStyle = {
            marginTop: '16px'
        }
        return (
            <div>
                <AppBar
                    title="Redux" />
                <div style={counterListStyle}>
                    <Counter />
                </div>
            </div>
        );
    }
}

export default App;

const counterStore = createStore(counterReducer);
export { counterStore };
