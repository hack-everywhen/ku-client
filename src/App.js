import React from 'react';
import './App.css';
import ActionBar from "./components/actionBar";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Toolbar} from "@material-ui/core";

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {QuestionListProvider} from "./contexts/QuestionList.context";
import QuestionList from "./views/QuestionList";
import ScrollTop from "./components/ScrollToTopButton";
import {Route, Switch} from "react-router-dom";
import Question from "./views/Question";

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '2px 4px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyItems: "center"
        // width: 400,
        // position: "absolute",
    },
    root2: {
      // alignItems: "center",
      // justifyItems: "center",
      //   height: "100vh",
      // width: "100vw",

    },
    scrollTopButton: {
        // display: "grid",
        position: 'fixed',
        marginTop: 50,
        // center: 1,
        top: theme.spacing(4),
        // bottom: theme.spacing(4),
        // right: theme.spacing(8),
    },
    topAnchor: {
        // look into hiding this idiot toolbar
        // visibility: "collapse",
        // maxHeight: "0px",
    }
}));



function App() {
    const classes = useStyles();

  return (
      <QuestionListProvider>
          <div className={classes.root}>
              <Grid container className={classes.root2} style={{ minHeight: "100vh"}}
                    alignItems={"center"} direction={"column"}>
                  <ElevationScroll >
                      <ActionBar/>
                  </ElevationScroll>
                  <Toolbar id="back-to-top-anchor"className={classes.topAnchor}/>
                  {/*The next toolbar is needed to elevate the ActionBar*/}
                  <Toolbar />
                  <ScrollTop className={classes.scrollToTopButton}>
                      <Fab color="secondary" size="small" aria-label="scroll back to top">
                          <KeyboardArrowUpIcon />
                      </Fab>
                  </ScrollTop>
                  <Switch >
                      <Route exact path={"/"} render={() => <QuestionList/>} />
                      <Route path='/question/:questionId' render={(props) => <Question {...props}/>} />
                  </Switch>
                  {/*<QuestionList />*/}
              </Grid>
          </div>
      </QuestionListProvider>
  );
}

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default App;
