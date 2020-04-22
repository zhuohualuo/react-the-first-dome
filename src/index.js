import React ,{Component,Fragment} from 'react';

import ReactDom from 'react-dom';

import TodoList from './TodoList';

import {BrowserRouter,Router,Route,Link} from 'react-router-dom'
import Counter from './Counter'

// @import '~antd/dist/antd.css';  

class App extends Component{
    render() {
        return(
            <Fragment>
                <BrowserRouter>
                    <Router path='/home' component={TodoList}>
                    </Router>
                    <Router path='/about' component={Counter}>
                    </Router>
                </BrowserRouter>
            </Fragment>
        )
    }
}


ReactDom.render( <App/>,document.getElementById('root'))