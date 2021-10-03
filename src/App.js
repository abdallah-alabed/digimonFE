import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./Main";
import Favourites from "./components/Favourites";
import { withAuth0 } from "@auth0/auth0-react";
import { Alert } from "react-bootstrap";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/Favourites">
              { <Favourites />}
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default withAuth0(App);
