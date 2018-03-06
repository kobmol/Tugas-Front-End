import React, { Component } from 'react';
import "../styles/HomeProduct.css"
import katalog from "../katalog.json"


export default class HomeProduct extends Component {
  render() {
    return (
      <div className="container">
            {/* product */}
            <section className="busproduct">
            {katalog.filter(x => (new RegExp(this.props.keyword, 'gi')).test(x.kategori)).map(x => 
                <div className="col-md-3">
                <div className="owl-item">
                    <div className="welcome-single-slide">
                        <img className="img-responsive img-rounded" src={`./img/${x.images}`} alt="" />
                        <div className="project_title">
                            <div className="post-date-commnents d-flex">      
                                <a className="ui label">
                                    {x.price} | Order Now
                                </a>
                                <br/>
                                <a href="">{x.merk}</a>
                            </div>
                            <p>{x.sheet}</p>
                        </div>
                    </div>
                </div> 
                </div>
            )} 
            </section>   
      </div>
    );
  }
}