import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { inject, observer } from "mobx-react";



import { Wrapper } from './ui/layout';
import Sidebar from './components/sidebar';
import NavBar from './components/navBar'

//routes
import UserDash from './routes/userDash.jsx';
import TeamDash from './routes/teamDash.jsx';
import Login from './routes/login'

let isAuth = false

export default class extends Component{
    componentDidMount(){
        this.props.getTasks()
    }

    render(){
        return(
           <React.Fragment>
            <Sidebar/>
            <Wrapper 
            style={{overflowY: "scroll"}}
                grow="1"
                direction="column"
                background="#F7F7F7">
                <NavBar />
                <Switch>
                    <Route 
                        component={UserDash}
                        path="/dash"
                        exact
                        />
                    <Route
                        component={TeamDash}
                        path="/team"
                        exact
                        />
                    <Route
                        component={Login}
                        path="/login"
                        exact
                    />
                    <Redirect to="/dash"/>
                </Switch>
            </Wrapper>
           </React.Fragment>
        )
    }
}