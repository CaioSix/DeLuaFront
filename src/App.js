import React from 'react';
import './App.css';
import Home from './pages/home';
import Header from './components/Header/Index';
import Checkout from './pages/checkout';
import Footer from './components/Footer';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Router>
        <Content> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Content>
      </Router>
      <Footer />
    </AppContainer>
  );
}

export default App;
