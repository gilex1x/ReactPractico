import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import Login from '../containers/Login';
import Layout from '../Layout/Layout';
import Recovery from '../containers/Recovery';
import '../styles/global.css'
const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/recover-password" component={Recovery}/>
                    <Route pat="*" component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;