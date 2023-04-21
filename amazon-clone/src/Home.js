import React from "react";
import Header from "./Header";
import "./Home.css"
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/81d5OrWJAkL._SX3000_.jpg" },
    // { url: "images/6.jpg" },
    // { url: "images/7.jpg" },
  ];

function Home(){
    return <div className="home">
        <Header />
        {/* <img className="home_image" src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt=""></img> */}
            <div className="home_image">
            <SimpleImageSlider
            width="100%"
            height={504}
            images={images}
            showBullets={false}
            showNavs={true}
            />
            </div>    
            <h1>Welcome to HomePage</h1>
    </div>
  }

export default Home;