/*
 * @Author: xiongjian 
 * @Date: 2018-04-27 14:38:45 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-05-02 17:08:23
 */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const lists = [
    { link: '/', title: '首页', icon: 'fa fa-home'},
    {
        link: '/product', title: '商品', icon: 'fa fa-list',
        sub: [
            { link: '/product', title: '商品管理', icon: ''},
            { link: '/product-category', title: '品类管理', icon: ''}
        ],
    },
    {
        link: '/order', title: '订单', icon: 'fa fa-check-square-o',
        sub: [
            { link: '/order', title: '订单管理', icon: ''}
        ],
    },
    {
        link: '/user', title: '用户', icon: 'fa fa-user-o',
        sub: [
            { link: '/user', title: '用户管理', icon: ''}
        ],
    }
];
class NavSide extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasClassIn: false,
            curentIndex: 0
        }
    }
    handleClick(index) {
        if(index===this.state.curentIndex) {
            this.setState({
                hasClassIn: !this.state.hasClassIn,
                curentIndex: index
            })
        } else {
            this.setState({
                hasClassIn: true,
                curentIndex: index
            })
        }  
    }
    render(){
        let menu = lists.map((list, index) => {
            if(list.sub) {
                return (
                    <li key={index}>
                        <Link to={list.link} onClick={(e)=>{this.handleClick(index)}}>
                            <i className={list.icon}></i>
                            <span>{list.title}</span>
                            <span className={this.state.curentIndex===index&&this.state.hasClassIn? "fa fa-angle-down arrow":"fa fa-angle-left arrow"}></span>
                        </Link>
                        <ul className={this.state.curentIndex===index&&this.state.hasClassIn? "nav nav-second-level collapse in":"nav nav-second-level collapse"}>
                            {list.sub.map((sublist,index) => {
                                return (
                                    <li key={index}>
                                    <NavLink to={sublist.link} activeClassName="active-menu">{sublist.title}</NavLink>
                                </li>
                                )  
                            })}
                        </ul>    
                    </li>
                );
            } else {
                return (
                    <li key={index}>
                        <NavLink exact activeClassName="active-menu" to={list.link}>
                            <i className={list.icon}></i>
                            <span>{list.title}</span>
                        </NavLink>
                    </li>
                );
            }
            
        });
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        {menu}
                    </ul>

                </div>

            </div>
        );
    }
}

export default NavSide;