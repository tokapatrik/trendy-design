import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import MainPage from './pages/mainPage';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="*" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
