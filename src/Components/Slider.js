import React, { Component } from 'react';
import "../styles/Slider.css"
import bus1 from "../Images/Bus1.jpg"
import bus2 from "../Images/bus3.jpg"
import bus3 from "../Images/Bus2.jpg"
import pariwisata from "../Images/pariwisata.jpg"
import wonderful from "../Images/wonderful.jpg"
import trans from "../Images/trans.jpg"
import mcd from "../Images/mcd.jpg"
import purwadika from "../Images/purwadika.jpg"
import chevron from "../Images/chevron.jpg"
import pertamina from "../Images/pertamina.jpg"
import dufan from "../Images/dufan.jpg"
import ipb from "../Images/ipb.png"
import marvel from "../Images/marvel.jpg"
import pno from "../Images/pno.png"
import wika from "../Images/wika.png"

export default class Slider extends Component {
  render() {
    return (
      <div>
    <div className="container-fluid">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  {/* <!-- Indicators --> */}
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src={bus1} alt=""/>
      <div class="carousel-caption">
        Bus 1
      </div>
    </div>
    <div class="item">
      <img src={bus2} alt="..."/>
      <div class="carousel-caption">
        Bus 2
      </div>
    </div>
    <div class="item">
      <img src={bus3} alt="..."/>
      <div class="carousel-caption">
        Bus 3
      </div>
    </div>
  </div>
</div>
    <center>
      <h1> Why Us ??? </h1>
        
        <div className="pelayanan">
            <div> 
                <i class="glyphicon glyphicon-check"></i> 
                <p>24/7 Costumer Services</p>
            </div>
            <div> 
                <i class="fa fa-car"></i>
                <p> With the Latest Fleet  </p>
            </div>
            <div> 
                <i class="fa fa-credit-card"></i>
                <p> Best Service and Price  </p>
            </div>
            <div> 
                <i class="glyphicon glyphicon-usd"></i>
                <p> Unforgettable Experience </p>
            </div>
        </div>   

        <h3 >Our Partner</h3>
            <div className="Partner"> 
              <img src ={pariwisata} width="250" height="200" />
              <img src ={wonderful} width="250" height="200" />
              <img src ={trans} width="250" height="200" />
              <img src ={mcd} width="250" height="200" /> 
              <img src ={purwadika} width="250" height="200" /> 
              <img src ={chevron} width="250" height="200" />
              <img src ={pertamina} width="250" height="200" />
              <img src ={dufan} width="250" height="200" />
              <img src ={ipb} width="250" height="200" />
              <img src ={marvel} width="250" height="200" />
              <img src ={pno} width="250" height="200" />
              <img src ={wika} width="250" height="200" />
              
              
              
              
              
              
                
               
               
            </div>
        
      </center>
  
  {/* <!-- Controls --> */}
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>  
    </div>
    );
  }
}
