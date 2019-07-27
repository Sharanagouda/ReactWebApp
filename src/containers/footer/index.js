import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer style={footer}>
                <div className="developed-by"> Copyright ©2019 All rights reserved @Sharanagouda K</div>
            </footer>
        );
    }
}

const footer = {

    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#004165",
    color: "white",
    textAlign: "center",
    padding: "10px",

}
const container = {
    marginLeft: "-15px"
}
export default Footer;