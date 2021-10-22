import React from 'react'
import Login from '../containers/Login';
import Layout from '../Layout/Layout';
import Recovery from '../containers/Recovery';
import '../styles/global.css'
const App = () => {
    return (
        <Layout>
            <Login/>
            <Recovery/>
        </Layout>
    );
}

export default App;