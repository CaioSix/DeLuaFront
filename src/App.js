import React from 'react';
import "./App.css";
import Header from './components/Header/Index'
import Product from './components/products'
import Footer from './components/Footer';
import styled from "styled-components";

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
      <Content>
        <Product />
      </Content>
      <Footer />
    </AppContainer>
  );
}

export default App;
