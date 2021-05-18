import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
