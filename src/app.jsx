import React from 'react';
import { createStore } from 'redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import counterReducer from './reducers/counterReducer';
import todoApp from './reducers/todosReducer';
import CounterList from './components/counter-list';
import TodoList from './components/todo-list';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class App extends React.Component {

    constructor(props) {
        super(props);

        this.childViews = {
            COUNTERS: 'Redux Counters',
            TODOS: 'Redux Todos'
        };

        this.state = {
            currentView: this.childViews.TODOS,
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
            viewToDisplay = <TodoList />;
        }
        return (
            <MuiThemeProvider muiTheme={lightMuiTheme}>
                <div>
                    <AppBar
                        title={this.state.currentView}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.navMenuClick} />
                    {viewToDisplay}
                    <Drawer
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
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

const counterStore = createStore(counterReducer);
const todoStore = createStore(todoApp);
export { counterStore, todoStore };
