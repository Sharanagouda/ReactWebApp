import React from "react";
import Routes from "./config/Routes";
import Header from "../src/components/Navbar";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />&nbsp;
                <Routes/>
            </div>
          
        );
    }

}

export default Main;