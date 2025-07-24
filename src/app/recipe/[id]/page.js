"use client";
import DataFetcher from '../../data'; 
import { useParams } from 'next/navigation';
import { useContext } from 'react';
import { foodContext } from '../../data.js'; 
import styles from './recipe.module.css';
import Footer from '../../footer/Footer.js';
import Header from '../../header/Header.js';
import Image from 'next/image';

export default function RecipeDetail() {
  const params = useParams();
  const id = params.id;
  const foodData = useContext(foodContext);

  if (!foodData || !foodData.recipes) return <p>Loading...</p>;

  const recipe = foodData.recipes.find(r => r.id == id);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <DataFetcher>
      
      <Header/>

      <div className={styles.container}>
        <div className={styles.card}>
          <Image src={recipe.image} width={400} height={300} className={styles.image} alt={recipe.name} />
          <div className={styles.content}>
            <h1 className={styles.title}>{recipe.name}</h1>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} Minutes</p>
            <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} Minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Rating:</strong> {recipe.rating}</p>
            <p className={styles.instructions}><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        </div>
      </div>

      <Footer/>

    </DataFetcher>
  );
}
