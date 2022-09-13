import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TogetherMain from "./main/TogetherMain";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={TogetherMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;