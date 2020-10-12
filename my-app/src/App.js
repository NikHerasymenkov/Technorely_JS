import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Main} from "./Main";
import Redux from "./Redux/Redux";


function App() {
    return (
        <div className='wrapper'>
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/redux" component={Redux}/>
                    </Switch>
                </Router>
            </>
        </div>
    )
}

export default App;
