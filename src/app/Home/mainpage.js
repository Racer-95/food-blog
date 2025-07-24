"use client";

import Image from 'next/image'
import styles from './main.module.css';
import { useContext } from 'react';
import { foodContext } from '../data.js'
import Link from 'next/link'


export default function Mainpage() {

  const foodData = useContext(foodContext)
  console.log(foodData)

  if (!foodData) {
    return <p>Loading...</p>
  }

  if (!foodData.recipes || foodData.recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <div className={styles.line}>
        <h1>Serving Stories on a Plate - Where Every Bite Tells a Tale</h1>
      </div>

      <div className={styles.main}>
        <div>
          <h1>Welcome to TastyTrail one stop for all your Recipes</h1>
        </div>
        <Image src="/food1.jpg" alt="food image" width={600} height={300} />
      </div>


      <div className={styles.slide}>
        <h2>You may like</h2>
        <Link href='/boxpage'><button>See All</button></Link>
      </div>

      <div className={styles.cardrow}>
        {foodData.recipes.slice(0, 4).map(recipe => (
          <div className={styles.card} key={recipe.id}>
            <img src={recipe.image} width={200} height={200}></img>
            <h3>{recipe.name}</h3>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} Minutes</p>
            <p><strong>Rating:</strong> {recipe.rating}</p>
          </div>
        ))}
      </div>

    </div>
  );
}