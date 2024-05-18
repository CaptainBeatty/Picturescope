import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Styles/index.css';
import Main from './Pages/Main';
import LoginPage from './Pages/LoginPage';
import ErrorPage from './Pages/ErrorPage';
import TextPage from './Pages/TextPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NewimagePage from './Pages/NewimagePage';

//import CardPage from './Pages/CardPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/loginpage/" element={LoginPage} />
    <Route path="/textpage/:id" element={<TextPage/>} />
    <Route path="/newimagepage/" element={NewimagePage} />
    <Route path = "*" element ={<ErrorPage/>} /> 
    </Routes>
    <Footer/>
    </BrowserRouter>
    </React.StrictMode>
);


