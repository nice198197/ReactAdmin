/*
 * @Author: xiongjian 
 * @Date: 2018-04-27 14:38:39 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-04-28 11:59:05
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'

// 页面Home
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import Layout from 'component/layout/index.jsx';
import ErrorPage from 'page/error/index.jsx';
import UserList from 'page/user/index.jsx';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router> 
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={props=>(
                        <Layout> 
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                {/* <Route path="/product" component={ProductRouter}/>
                                <Route path="/product-category" component={ProductRouter}/>*/}
                                <Route path="/user/index" component={UserList}/>
                                <Redirect exact from="/user" to="/user/index"/>
                                <Route component={ErrorPage}/>
                            </Switch>
                        </Layout>
                    )}/>
                </Switch> 
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);