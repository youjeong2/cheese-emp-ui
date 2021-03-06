import React, { useState } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
// import { Nav } from './components'
import {Home, User, Cheese, Survey, Review} from './templates'
import {Login, Signup } from './containers/usr/user'
// import { Cart } from "./containers/cop/cart/Cart";


export default function App(){
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
        <BrowserRouter>

                {/* <Nav isAuth = {loggedIn}/> */}
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Redirect from = {'/home'} to={'/'}/> 
                    <Route path='/login' component={Login}></Route>
                    <Route path='/signup' component={Signup}></Route>
                    <Route path='/survey' component={Survey}></Route>
                    <Route path='/cheese' component={Cheese}></Route>
                    <Route path='/review' component={Review}></Route>
                    {/* <Route path="/cart" component={Cart} /> */}
                 </Switch>
        </BrowserRouter>

</>)}