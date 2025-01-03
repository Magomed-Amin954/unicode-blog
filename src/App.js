import './App.css'
import Header from './routes/Header/Header';
import {  Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
