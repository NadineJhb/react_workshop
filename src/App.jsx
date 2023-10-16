// import React from 'react';
import NavBar from './components/NavBar'
import Card from './components/Card';
import './App.css';

const liste = [
  {
    name: "Chaussettes Wild",
    price: 9.9,
    picture: "https://images.unsplash.com/photo-1564379976409-79bd0786fff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Your feet will thank you"
  },
  {
    name: "Gobelet Wild",
    price: 2.9,
    picture: "https://plus.unsplash.com/premium_photo-1678820985486-a4f09d344ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2702&q=80",
    description: "Be water"
  },
  {
    name: "Mug Wild",
    price: 4.9,
    picture: "https://images.unsplash.com/photo-1542556398-9e1da7ad3669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2526&q=80",
    description: "For the coffee addicts"
  },
  {
    name:"Sacs à dos",
    price: 20.9,
    picture: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Run wild"
  }
  ]

const App = () => {
  return (
    <div id="page">
      <NavBar />
      <div className="shop">
      {liste.map((item) => {
        return <Card key={item.name} name={item.name} price={item.price} picture={item.picture} description={item.description} />
      })}
      </div>
    </div>
  );
};

export default App;