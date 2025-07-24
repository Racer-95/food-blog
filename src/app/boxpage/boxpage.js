"use client";

import styles from './box.module.css';
import { useContext } from 'react';
import { foodContext } from '../data.js'
import Link from 'next/link';


export default function Boxpage() {

    const foodData = useContext(foodContext)

    if (!foodData) {
        return <p>Loading...</p>
    }

    if (!foodData.recipes || foodData.recipes.length === 0) {
        return <p>No recipes found.</p>;
    }

    return (
        <div className={styles.page}>
            <h1>Recipes from all around the world on one page</h1>
            <div className={styles.cardrow}>
                {foodData.recipes.map(recipe => (
                    <Link href={`/recipe/${recipe.id}`} key={recipe.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className={styles.card} key={recipe.id}>
                            <img src={recipe.image} width={250} height={200}></img>
                            <h3>{recipe.name}</h3>
                            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} Minutes</p>
                            <p><strong>Rating:</strong> {recipe.rating}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}