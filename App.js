import React, { useState } from 'react';
import Navigate from './components/Navigate';
import NavigationBar from './components/NavigationBar';
import './App.css';

function App() {
  

  return (
    <div>
      <NavigationBar />
      <center>E-com</center>
      
      <img src=""></img>
     
         <div class="card">
         <div class="container">
          <h4><b>laptop1</b></h4>
          <img src="lap.com" ></img>
         <p>price: 2200</p>
         <p>rating: 3.8</p>
         <p>discount: 33</p>
         <p>availability: "yes" </p>

        </div> 
     
      </div>
      <div class="card">
         <div class="container">
          <h4><b>laptop1</b></h4>
          <img src="lap.com" ></img>
         <p>price: 500</p>
         <p>rating: 3.8</p>
         <p>discount: 33</p>
         <p>availability: "not-available" </p>

        </div> 
     
      </div>
      <div class="card">
         <div class="container">
          <h4><b>laptop1</b></h4>
          <img src="lap.com" ></img>
         <p>price: 5320</p>
         <p>rating: 3.7</p>
         <p>discount: 58</p>
         <p>availability: "yes" </p>

        </div> 
     
      </div>
      <div class="card">
         <div class="container">
          <h4><b>laptop1</b></h4>
          <img src="lap.com" ></img>
         <p>price: 2500</p>
         <p>rating: 3.8</p>
         <p>discount: 25</p>
         <p>availability: "yes" </p>

        </div> 
     
      </div>
      
    </div>
  );
}

export default App;
