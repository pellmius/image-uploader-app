import React from 'react';
import Home from './Home.js'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/home'><Home/></Route>
                <Route path='/'><Home/></Route>
            </Switch>
        </Router>
    );
    
}
export default App;