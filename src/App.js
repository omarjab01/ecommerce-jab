import './App.css';
import './categories.styles.scss'
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';

import React from 'react'
import SignIn from './routes/sign-in/sign-in';

const Shop = () => {
  return (
    <div>Shop</div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
