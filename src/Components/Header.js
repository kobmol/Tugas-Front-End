import React, { Component } from 'react';
import "../styles/Header.css"
import {Link,Route} from "react-router-dom";
import slider from "../Components/Slider"
import homeProduct from "../Components/HomeProduct"


export default class Header extends Component {
  render() {
    return (
    <div className="container-fluid top"> 
        <div className="navbar-left">
            <p className="logo">
               <i className="glyphicon glyphicon-road"></i> Busmania.com
            </p>
        </div>
         <div className="navbar-right">
            <ul class="nav nav-pills">
                <li role="presentation"><Link to="/slider" >Home</Link></li>
                <li role="presentation"><Link to="/homeProduct">Product</Link></li>         
                <li role="presentation"><Link to="/micro">Micro Bus</Link></li>                             
                <li role="presentation"><Link to="/medium">Medium Bus</Link></li>
                <li role="presentation"><Link to="/big">Big Bus</Link></li>  
                <li role="presentation"><a href="#">About Us</a></li>
                <li role="presentation"><a href="#">Contact</a></li>         
            </ul>
        </div>
    </div>
    );
  }
}
