import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import App from './src/App.jsx'
import AppState from './store/appState.js'



const Variable = () => (
    <Provider appState={AppState} >
        <BrowserRouter>
            <App getTasks={AppState.getTasks}/>
        </BrowserRouter>
    </Provider>    
    )







render(Variable(), document.getElementById("app"))