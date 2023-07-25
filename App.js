import React from 'react';
import {useSelector} from 'react-redux'
import Login from './Views/Login/login'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Sidebar from './Views/sidebar/sidebar'

import viewBugPage from './Views/Pages/viewBugs'
import CreateBug from './Views/Components/Bug Create & edit/bugForm'

function App() {
    const {auth} = useSelector(state => state)
    return (
        <Router>
            {!auth.LoggedIn ? <Login /> :
            <>
                <Sidebar/>
                <Routes>
                  <Route path="/" ></Route>
                  <Route path="/viewbugs"><viewBugPage /></Route>
                  <Router path="/create"><div className='page-container'><CreateBug title="Create Bug" /></div></Router>  
                </Routes>
        </>
        }
        </Router>
    );
}

export default App;
