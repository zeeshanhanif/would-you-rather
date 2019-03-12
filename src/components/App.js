import React, { Component } from 'react';
import { connect } from "react-redux";
import Routers from '../Routes'
import { handleIntialData  } from "../store/actions/shared";

import './App.css';

class App extends Component {

    componentDidMount(){
        this.props.initilizeData();
    }

    render() {
        return (
            <div>
                <Routers/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initilizeData: () => {
            dispatch(handleIntialData());
        }
    };
}

export default connect(null, mapDispatchToProps)(App);
