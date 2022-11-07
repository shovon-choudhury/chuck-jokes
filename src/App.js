import React from 'react'
import {
  Header,
  JokeSearch,
  JokeCategories,
  JokeByGroup,
  Footer,
  Categories,
  JokeByCategory
} from './components/AppComponents'
import './App.css'

function App() {
  return (<div className="App">
    <Header/>
    <JokeSearch/>
    <JokeCategories/>
    <JokeByGroup/>
    <Footer/>
  </div>);
}

export default App
