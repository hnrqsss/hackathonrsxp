import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Login from '../screen/Login'

import Home from '../screen/Home'
import StudentRegister from '../screen/StudentRegister'
import List from '../screen/List'

function RoutesContainer() {

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/studentRegister">
                    <StudentRegister />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
            </Switch>
        </Router>  
    )
}

export default RoutesContainer