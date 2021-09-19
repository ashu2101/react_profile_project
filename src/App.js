import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Posts from "./Components/Posts";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
// import Comments from "./Components/Comments";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="mt-5 pt-3 cusotm-bg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts">
              <Posts />
            </Route>
            {/* <Route path="/comments">
              <Comments />
            </Route> */}
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
