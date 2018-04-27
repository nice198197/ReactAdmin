/*
 * @Author: xiongjian 
 * @Date: 2018-04-27 14:38:33 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-04-27 14:40:13
 */

import React from 'react';
import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';
import './theme.css';
import './index.scss';

class Layout extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div id="wrapper">
                    <NavTop/>
                    <NavSide/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Layout;