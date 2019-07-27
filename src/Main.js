import React from "react";
import Routes from "./config/Routes";
import Header from "../src/components/Navbar";
import Footer from "../src/containers/footer";


class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />&nbsp;
                <Routes/>
                <Footer/>
            </div>
          
        );
    }

}

export default Main;