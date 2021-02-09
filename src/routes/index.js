import React from 'react'
import { Router } from '@reach/router'

// pages
import Home from '../pages/home'
import Partners from '../pages/partners'
import TestDrive from '../pages/testDrive'
import Contact from '../pages/contact'
import Blog from '../pages/blog'

const Routes = () => {
    return (
        <Router basepath='/'>
            <Home path='/' />
            <Partners path='/partners' />
            <TestDrive path='/testdrive' />
            <Contact path='/contact' />
            <Blog path='/blog' />
        </Router>
    )
}

export default Routes
