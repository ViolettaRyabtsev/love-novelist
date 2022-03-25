import "./App.css";

// import Home from "./navBarLinks/Home.js";
import { Parallax, Background } from "react-parallax";
import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import BrowseComponent from "./browse-components/BrowseComponent";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
const apiKey = "7jx760knTn1ryx0GHhxgijkgeQoruRWG";

function App() {
  // const store = useSelector((state) => state);
  // console.log(store, "store");

  // const dispatch = useDispatch();

  // const { setBooks } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <Router>
        <Header />
        <Parallax bgImage={"./wrinkled.jpg"} strength={500}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/categories/:name">
              <BrowseComponent />
            </Route>
          </Switch>
        </Parallax>
      </Router>
    </div>
  );
}

export default App;
