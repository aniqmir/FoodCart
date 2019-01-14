import React from 'react';
import {
    Router,
    Route
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Navbar from '../Navbar/Navbar.jsx';
import Page1 from '../DynamicPages/Page1.jsx';
import Page2 from '../DynamicPages/Page2.jsx';
import Page3 from '../DynamicPages/Page3.jsx';
import Cart from '../DynamicPages/Cart.jsx';

const customHistory = createBrowserHistory();

const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar history={customHistory} />
            <Route path='/page-1' component={Page1}/>
            <Route path='/page-2' component={Page2}/>
            <Route path='/page-3/:id_item' component={Page3}/>
            <Route exact path='/cart' component={Cart} history={customHistory}/>
        </div>
    </Router>
    )
    
export default CustomRoutes;