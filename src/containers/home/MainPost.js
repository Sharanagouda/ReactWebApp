import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Navbar from "../../components/Navbar";
import Posts from "./Posts"

function MainPost() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title"
            color="inherit"
          >
            My header
           </TypoGraphy>
          <Navbar/>
        </Toolbar>
      </AppBar>
      <Posts/>
    </div>
  );
}

export default MainPost;
