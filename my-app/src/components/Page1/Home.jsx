import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion/dist/framer-motion';




const Home = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1543502708-eb29f9b35f17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
      title: 'theyyam',
    },
    {
      img: 'https://media.istockphoto.com/id/480371499/photo/warli-painting-india.jpg?s=2048x2048&w=is&k=20&c=WuuAKbsL5Y9MIFsToPrppw9tH0-Jgzz2v_sP7IQSVps=',
      title: 'warli painting',
    },
    {
      img: 'https://grazia.wwmindia.com/content/2020/aug/nationalhandloomday111596785725.jpg',
      title: 'weaving',
    },
    {
      img: 'https://gumlet.assettype.com/knocksense%2Fimport%2F26024934%2Forigin.jpg?auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6',
      title: 'kathputli',
    },
  ];

  const itemData2 = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Karzok_Tso_Moriri.jpg',
      title: 'Ladakh',
    },
    {
      img: 'https://static.toiimg.com/thumb/msid-82997043,width-748,height-499,resizemode=4,imgsize-1137981/.jpg',
      title: 'Malari',
    },
    {
      img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/11/Mawlynnong.jpg',
      title: 'Mawlynnong',
    },
    {
      img: 'https://img.etimg.com/photo/msid-96396438/malana.jpg',
      title : 'Malana',
    }
  ];

  const itemData3 = [
    {
      img: 'https://ihplb.b-cdn.net/wp-content/uploads/2018/07/bishnoi-villages.jpg',
      title: 'Bishnoi',
    },
    {
      img: 'https://img.etimg.com/photo/msid-96396438/malana.jpg',
      title : 'Malana',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cropped_Tripuri.jpg/640px-Cropped_Tripuri.jpg',
      title: 'Mawlynnong',
    },
    
  ];


  return (
    <motion.div 
    className='body'
                    
    initial={{width: '50%'}}
    animate={{width: '100%', transition: {duration: 0.8}} }
    exit={{ x: window.innerWidth, transition: {duration: 0.5} }}
      > 

     
    
      <main className="home">
        <div className="container_1">
          {/* <img id="bg" src="./landscape1.jpg" alt="landscape" /> */}
          <div className="container_2">
              <h3><b>Exploring the richness of </b></h3>
            <h1>Rural India</h1>
            <p id="para1">
             <b>Ever danced to the tunes of the traditional Indian folk music? Or
              tried your hands on Warli painting? An average Urban Indian is
              unaware of the joys of a quieter, less polluted, and less crowded
              way of life that can be found outside of the cities."</b>
            </p>
            <p><b>
              Let's embark on a journey to explore the rural areas of India and
              discover the richness of its cultural heritage.
            </b></p>
          </div>
          <div className="explore">
          <Link to="/search"> <button id="explore"><b> Explore </b> </button></Link> 
          </div>
        </div>
        
 
      </main>
      <div className="below">
      <div className="vision">
          <h2> Our Vision </h2>
          
          <p><b>Our vision is to harness the cultural and natural resources of rural areas to develop a sustainable tourism sector that provides engaging and authentic experiences for visitors, while promoting local employment, preserving local heritage and culture, and empowering rural communities.</b> </p>
        </div>

        <div className="quiet">
          <p> <b>Experience the peacefulness </b> </p>

          <div class="images">
          <ImageList cols={4}>
            {itemData2.map((item) => (
              <ImageListItem key={item.img}>
                <img id="img2"
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="text">
                   {item.title}
                </div>
              </ImageListItem>

            ))}
          </ImageList>
          </div>
        </div>

        <div className="culture">
        <p> <b>Discover the rich cultural heritage</b> </p>
        <div class="images">
          <ImageList cols={4}>
            {itemData3.map((item) => (
              <ImageListItem key={item.img}>
                <img id="img"
                  src={`${item.img}`}
                  alt={item.title}
                />
                <div className="text">
                   {item.title} 
                </div>
              </ImageListItem>

            ))}
          </ImageList>
          </div>

          </div>

        
        <div className="people">
        <p> <b>Interact with the local community</b> </p>
        <div class="images">
          <ImageList cols={4}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img id="img"
                  src={`${item.img}`}
                  alt={item.title}
                />
                <div className="text">
                   {item.title} 
                </div>
              </ImageListItem>

            ))}
          </ImageList>
          </div>

          </div>
        </div>
    </motion.div>
  );
};

export default Home;