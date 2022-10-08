import React from 'react'
import Home from './pages/Home';
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import About from './pages/About';
import Boda from './pages/Boda';
import Ride from './pages/Ride';
import Ferry from './pages/Ferry';
import Privacy from './pages/Privacy';
import RegDriver from './pages/RegDriver';
import RegPassenger from './pages/RegPassenger';
import RegBusiness from './pages/RegBusiness';
import SignIn from './pages/SignIn';
import Nav from './components/Nav';
import { CssBaseline } from '@mui/material';
import License from './pages/Licence';
import Business from './pages/Business';
import Login from './pages/Login';
import DigitalMarketting from './pages/DigitalMarketting';
import ResearchLab from './pages/ResearchLab';
import Profile from './pages/Profile';




function App() {
	return (
<>
	
			<CssBaseline />
			<Nav/>

			<Switch >
				<Route exact path="/" component={Home}></Route>
				<Route path="/Signup" component={Signup}></Route>
				<Route path='/SignIn' component={SignIn}></Route>
				<Route path="/About" component={About}></Route>
				<Route path="/Business" component={Business}></Route>
				<Route path="/Boda" component={Boda}></Route>
				<Route path="/Ride" component={Ride}></Route>
				<Route path="/Ferry" component={Ferry}></Route>
				<Route path="/Privacy" component={Privacy}></Route>
				<Route path="/RegDriver" component={RegDriver}></Route>
				<Route path='/RegPassenger' component={RegPassenger}></Route>
				<Route path='/RegBusiness' component={RegBusiness}></Route>  
				<Route path="/license" component={License}></Route>
				<Route path='/Login' component={Login}></Route>
				<Route path="/DigitalMarketting" component={DigitalMarketting}></Route>
				<Route path="/ResearchLab" component={ResearchLab}></Route>
				<Route path="/Profile" component={Profile}></Route>
				
			</Switch>
			</>	

	)
}

export default App;

