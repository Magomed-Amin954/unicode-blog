import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";

const png = "https://zelim-blog.onrender.com/posts";

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(png).then((data) => {
      setPosts(data.data);
    });
  });
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Wrapper">
      <div className="Posts">
        <div className="Post-left">
          <div className="">
            <img className="Post-Img--left" src={posts[0]?.image} />
          </div>
          <div className="Post-Left__name">
            {posts[0].title.substring(0, 20) + "..."}
          </div>
          <div className="Post-Left__text">
            {posts[0].text.substring(0, 20) + "..."}
          </div>
        </div>
        <div className="Post-right">
          <div className="">
            <div className="">
              <img className="Post-Right__img" src={posts[1]?.image} />
            </div>
            <div className="Post-Blok__right">
              {posts[1].title.substring(0, 20) + "..."}
            </div>
            <div className="Post-Blok__right">
              {posts[1].text.substring(0, 20) + "..."}
            </div>
          </div>
          <div className="Post-Right__Bottom">
            <div className="">
              <img className="Post-Right__Png" src={posts[2]?.image} />
            </div>
            <div className="Post-Blok__right">
              {posts[2].title.substring(0, 20) + "..."}
            </div>
            <div className="Post-Blok__right">
              {posts[2].text.substring(0, 20) + "..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
