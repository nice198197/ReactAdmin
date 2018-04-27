/*
 * @Author: xiongjian 
 * @Date: 2018-04-27 14:38:56 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-04-27 16:53:27
 */
import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - QinhuaIt Admin';
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;