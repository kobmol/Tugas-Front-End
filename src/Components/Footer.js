import React, { Component } from 'react';
import gambar from '../Images/bayar.png'
import  "../styles/Footer.css"

class Footer extends Component {
  render() {
    return (
    <div>
       <footer>
                    <ul id="Footer">
                        <li>
                           <span>Contact Us :</span>
                           <p/><i className="fa fa-envelope" aria-hidden="true">&emsp;Info@Busmania.com</i>
                           <p/><i className="fa fa-phone-square" aria-hidden="true">&emsp;0821-4551-7711</i>
                           <p/><i className="fa fa-facebook-official" aria-hidden="true">&emsp;BusMania</i>
                           <p/><i className="fa fa-map-marker" aria-hidden="true">&emsp;Jalan Tomang Raya, No. 63 Jakbar</i>
                           <p/><i className="fa fa-twitter" aria-hidden="true">&emsp;Bus Mania</i>  
                        </li>
                         <li>
                         <span>Payment Method :</span>
                         <img src={gambar} width="350" height="200px"/>

                        </li>
                     </ul>
        </footer>
    </div>
    );
  } 
}

export default Footer;
