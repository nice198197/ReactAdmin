/*
 * @Author: xiongjian 
 * @Date: 2018-04-28 11:37:49 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-04-28 11:41:34
 */

import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

// 通用分页组件
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} 
                        hideOnSinglePage
                        showQuickJumper/>
                </div>
            </div>
        );
    }
}

export default Pagination;