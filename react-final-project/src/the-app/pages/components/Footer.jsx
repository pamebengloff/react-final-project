import React from 'react';
import "./footer-styles.css"
import {BsMailbox} from "react-icons/bs"
import {FiHeart} from "react-icons/fi"
import {BsPencil} from "react-icons/bs"

function Footer(props) {
    return (

    <footer className="fixed-bottom" >
           
    <div className="container">
        <div className="row">
            <div className="col-sm col-footer">
                <FiHeart/> Made by: Pamela Sechslingloff <br />
                <BsMailbox/> <a href="mailto:pamebengloff@gmail.com">pamebengloff@gmail.com</a> 
            </div>
            <div className="col-sm col-footer">
            <BsPencil/> Upskilling: Front-End Development
            </div>
        </div>
    </div>
        </footer>
    );
}

export default Footer;