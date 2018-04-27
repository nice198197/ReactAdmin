/*
 * @Author: xiongjian 
 * @Date: 2018-04-27 14:38:23 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-04-27 16:51:22
 */

import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import './index.scss';

class Home extends React.Component{
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页"/>
                <div className="row">
                    <div className="col-md-12">
                    body
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;