import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'


import { Wrapper } from './ui/Layout';
import Sidebar from './components/sidebar';
import NavBar from './components/navBar'

//routes
import UserDash from './routes/userDash';
import TeamDash from './routes/teamDash';

export default class extends Component{
    render(){
        return(
           <React.Fragment>
            <Sidebar/>
            <Wrapper 
                style={{flex:1}} 
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
                        />
                    <Redirect to="/dash"/>    
                </Switch>
            </Wrapper>
           </React.Fragment>
        )
    }
}