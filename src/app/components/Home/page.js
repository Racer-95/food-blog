"use client";


import Image from 'next/image'
import styles from './main.module.css';
import { useContext } from 'react';
import {foodContext} from '../../data.js'

export default function Mainpage () {

  const foodData = useContext(foodContext)
  console.log(foodData)
    return (
    <div>


      <header className={styles.head}>
        <div>Tasty-Trail</div>
        <div className={styles.nav}>
            <div>Home</div>
            <div>Blogs</div>
            <div>Top Rated</div>
            <div>About Us</div>
        </div>
      </header>

      <div className={styles.line}>
        <h1>Serving Stories on a Plate - Where Every Bite Tells a Tale</h1>
      </div>

      <div className={styles.main}>
        <div>
            <h1>Welcome to Tasty-Trail one stop for all your Recipes</h1>
        </div>
        <Image src="/food1.jpg" alt="food image" width={600} height={300} />
      </div>

     
      <div className={styles.slide}>
        <h2>You may like</h2>
        <button>See All</button>
      </div>

      <div className={styles.cardrow}>
        <div className={styles.card}>
          <img  src='https://cdn.dummyjson.com/recipe-images/5.webp' width={180} height={200}></img>
          <h3>name</h3>
          <p>cusine</p>
          <p>difficulty</p>
        </div>

        <div className={styles.card}>
          <img src='https://cdn.dummyjson.com/recipe-images/5.webp' width={180} height={200}></img>
          <h3>name2</h3>
          <p>cusine2</p>
          <p>difficulty2</p>
        </div>

        <div className={styles.card}>
          <img src='https://cdn.dummyjson.com/recipe-images/5.webp' width={180} height={200}></img>
          <h3>name3</h3>
          <p>cusine3</p>
          <p>difficulty3</p>
        </div>
      </div>
     

      
      <footer className={styles.foot}>
        <div>
            <h2>Tasty-Trail</h2>
            <p>At Tasty-Trail, we bring you delicious recipes, food stories, and culinary adventures from around the world. Cook with love, eat with joy!</p>
        </div>
        
        <div>
            <h3>Links</h3>
            <ul>
                <li>Home</li>
                <li>Blogs</li>
                <li>About Us</li>
            </ul>
        </div>

        <div>
            <h3>Contact US</h3>
            <p>Contact No.: +91 3345872362</p>
            <p>Email: xyz@gmail.com</p>
        </div>
      </footer>

    </div>
    );
}