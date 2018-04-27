/*
 * @Author: xiongjian 
 * @Date: 2018-04-27 14:38:39 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-04-27 15:56:29
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'

// 页面Home
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router> 
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                       
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);