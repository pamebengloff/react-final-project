import React from 'react';
import "./footer-styles.css"
import {BsMailbox} from "react-icons/bs"
import {FiHeart} from "react-icons/fi"
import {BsPencil} from "react-icons/bs"

function Footer(props) {
    return (
//flag comment

    <footer className="fixed-bottom" >           
    <div className="container footer-container">
        <div className="row row-footer">
         
                <p> <FiHeart/> Made by: Pamela Sechslingloff </p>
           
            <div className="row row-footer">
                
                <a href="mailto:pamebengloff@gmail.com"><BsMailbox/> pamebengloff@gmail.com</a> 
              
            </div> 
            <div className="row row-footer">
               
                 <p><BsPencil/> 3Pillar Global Apprentice Program. Upskilling: Front-End Development</p>
                <p>Copyright © 2022 Benglofffyy</p>
               
            </div>   
        </div>
    </div>
        </footer>
    );
}

export default Footer;