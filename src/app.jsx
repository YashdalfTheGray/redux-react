import React from 'react';
import { createStore } from 'redux';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import counterReducer from './reducers/counterReducer';
import CounterList from './components/counter-list';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.childViews = {
            COUNTERS: 'Redux Counters',
            TODOS: 'Redux Todos'
        };

        this.state = {
            currentView: this.childViews.COUNTERS,
            navMenuOpen: false
        };

        this.navMenuClick = this.navMenuClick.bind(this);
        this.onRequestChange = this.onRequestChange.bind(this);
    }

    navMenuClick() {
        this.setState({
            navMenuOpen: true
        });
    }

    onRequestChange(open) {
        this.setState({ open });
    }

    switchView(state) {
        this.setState({
            currentView: state,
            navMenuOpen: false
        });
    }

    render() {
        var viewToDisplay;
        if (this.state.currentView === this.childViews.COUNTERS) {
            viewToDisplay = <CounterList />;
        }
        else if (this.state.currentView === this.childViews.TODOS) {
            viewToDisplay = (
                <div>
                    <h2>Todos go here</h2>
                </div>
            );
        }
        return (
            <div>
                <AppBar
                    title={this.state.currentView}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.navMenuClick} />
                {viewToDisplay}
                <LeftNav
                    docked={false}
                    open={this.state.navMenuOpen}
                    onRequestChange={this.onRequestChange}>
                    <MenuItem
                        onTouchTap={this.switchView.bind(this, this.childViews.COUNTERS)}>
                        Redux Counters
                    </MenuItem>
                    <MenuItem
                        onTouchTap={this.switchView.bind(this, this.childViews.TODOS)}>
                        Redux Todos
                    </MenuItem>
                </LeftNav>
            </div>
        );
    }
}

export default App;

const counterStore = createStore(counterReducer);
export { counterStore };
