import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context.js/notes/NoteState";
import Alert from "./components/Alert";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Alert/>
          <div className="container">
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
