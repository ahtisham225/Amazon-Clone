import React from "react";
import Header from "./Header";
import "./Home.css"
import SimpleImageSlider from "react-simple-image-slider";
import Product from './Product';
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
            <div className="homeProducts_row">
            <Product 
                id="5266"
                title="Toy"
                price={20}
                rating={5}
                image = "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Product 
                id="5266"
                title="Toy"
                price={20}
                rating={5}
                image = "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Product 
                id="5266"
                title="Toy"
                price={20}
                rating={5}
                image = "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Product 
                id="5266"
                title="Toy"
                price={20}
                rating={5}
                image = "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
            />

            </div>
            <div className="homeProducts_row">
            <Product 
                id="5266"
                title="Toy"
                price={20}
                rating={5}
                image = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Product 
                id="5266"
                title="Toy"
                price={20}
                rating={5}
                image = "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Product 
                id="5266"
                title="Toy"
                price={20}
                rating={5}
                image = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Product 
                id="5266"
                title="Toy"
                price={20}
                rating={5}
                image = "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />

            </div>
    </div>
  }

export default Home;