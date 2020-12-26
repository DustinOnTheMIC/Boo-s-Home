import React from 'react';
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


const router = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/notfound',
        exact: false,
        main: () => <NotFound />
    },
    {
        path: '/login',
        exact: true,
        main: ({history, location}) => <Login history={history} location={location} />
    },
    { 
        path: '/register',
        exact: true,
        main: ({history, location}) => <Register history={history} location={location}/>
    }
]

export default router