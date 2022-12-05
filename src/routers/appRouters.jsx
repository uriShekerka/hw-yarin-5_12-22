import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../components/main';
import Page1 from '../components/pages/page1';
import Page2 from '../components/pages/page2';
import Layout from '../layout/layout';
const AppRouters = () => {

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Layout/>}>

          <Route index element={<Main/>}/>
          <Route path='/page1' element={<Page1/>}/> 
          <Route path='/page2' element={<Page2/>}/> 
        </Route>
        
        <Route path='/*' element={<h1>Not Found 404</h1>}/>
      </Routes>

     
    </Router>
  )
}

export default AppRouters