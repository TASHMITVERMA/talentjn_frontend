import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CandidateHome from "./components/CandidateHome";
import Company from "./components/Company";
import ExploreJobs from "./components/ExploreJobs"; // Import the ExploreJobs component

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/CandidateHome" component={CandidateHome} />
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/Company" component={Company} />
          <Route path="/ExploreJobs"> {/* New route for Explore Jobs */}
            <ExploreJobs />
          </Route>
        </Switch>
      </Router>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
