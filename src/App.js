import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css'
import Header from "./Components/Header"
import Slider from "./Components/Slider"
import HomeProduct from "./Components/HomeProduct"
import Footer from "./Components/Footer"
import {Link,Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
    <div>
      <Header/>
        <Route path ="/Slider" component = {Slider}/>
        <Route path ="/HomeProduct" render = {() => <HomeProduct keyword=""/>}/>
        <Route path ="/micro" render = {() => <HomeProduct keyword="Micro_Bus"/>}/>
        <Route path ="/medium" render = {() => <HomeProduct keyword="Medium_Bus"/>}/>
        <Route path ="/big" render = {() => <HomeProduct keyword="Big_Bus"/>}/>        
      <Footer/>
    </div>
    );
  }
}
export default App;
