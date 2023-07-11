import './App.css';
import React from 'react'
import Header from './components/header'
import Card from './components/card'
import Delever from './components/delever'
import Discount from './components/discount'
import Footer from './components/footer'
import Policy from './components/policy'


function App() {
  return (
    <>
    <Header />
    <Card />
    <Delever />
    <Discount />
    <Footer />
    <Policy />
    </>
  );
}

export default App;