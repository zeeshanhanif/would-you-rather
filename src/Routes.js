import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import ScoreCard from "./components/ScoreCard";
import Question from "./components/Question";
import PollResults from "./components/PollResults";
import history from "./History";;

class Routers extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/newquestion" component={NewQuestion} />
                        <Route exact path="/leaderboard" component={LeaderBoard} />
                        <Route exact path="/pollresult/:id" component={PollResults} />
                        <Route exact path="/question/:id" component={Question} />
                        <Route exact path="/scorecard" component={ScoreCard} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>

            </Router>
        );
    }
}

export default Routers;
