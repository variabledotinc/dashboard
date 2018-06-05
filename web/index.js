import React from 'react'
import {render} from 'react-dom'
import firebase from 'firebase/app'
import { BrowserRouter } from "react-router-dom";

import App from './src/App.jsx'


const firebaseConfigs = {
    apiKey: "AIzaSyDDEDhYZIjUgO-ZHeGS2EXEibz7wGVMjfw",
    authDomain: "dashboard-a2670.firebaseapp.com",
    databaseURL: "https://dashboard-a2670.firebaseio.com",
    projectId: "dashboard-a2670",
    storageBucket: "dashboard-a2670.appspot.com",
    messagingSenderId: "879652396502"

}

const Variable = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    )


firebase.initializeApp(firebaseConfigs)




render(Variable(), document.getElementById("app"))