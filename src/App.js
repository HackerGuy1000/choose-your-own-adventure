import './App.css';

import Home from './pages/Home';

import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
