import React, { Component } from 'react';
import "../styles/Kategori.css"

export default class Kategori extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="navbar-right">
            <button className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown">
                Pilih Menu <div className="caret"></div>
            </button>
            <ul className="dropdown-menu">
                <li><a href="#"> Beranda </a> </li>
                <li><a href="#"> Galeri </a> </li>
                <li><a href="#"> Destinasi </a> </li>
                <li><a href="#"> One Day Trip </a> </li>
                <li><a href="#"> Tentang </a> </li>
                <li><a href="#"> Kontak </a> </li>            
            </ul>
        </div>
</div>   
    );
  }
}
