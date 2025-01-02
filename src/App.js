import './App.css'
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import HomePage from "./routes/HomePage/HomePage";

const url = "https://zelim-blog.onrender.com/categories";

function App() {
  const [getСategories, setGetCategories] = useState([]);

  useEffect(() => {
    axios.get(url).then((data) => {
      setGetCategories(data.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="App-header">

      <Link className='Naviget' to={"/"}>
        <header className="App-Head">
          <div className="Head">THE</div>
          <h1 className="Heading">Unicode</h1>
        </header>
      </Link>
      <div className="Category">
        {getСategories.map((getСategor) => {
          return <button className='Map-Category'>{getСategor.title}</button>;
        })}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
        </div>
    </div>
  );
}

export default App;
