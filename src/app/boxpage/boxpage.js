"use client";

import styles from './box.module.css';
import { useContext } from 'react';
import {foodContext} from '../data.js'


export default function Boxpage () {

    const foodData = useContext(foodContext)

    if (!foodData) {
        return <p>Loading...</p>
    }

    if (!foodData.recipes || foodData.recipes.length === 0) {
        return <p>No recipes found.</p>;
    }

    return (
        <div>
            <div className={styles.cardrow}>
                {foodData.recipes.map(recipe => (
                    <div className={styles.card} key={recipe.id}>
                        <img  src={recipe.image} width={250} height={200}></img>
                        <h3>{recipe.name}</h3>
                        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} Minutes</p>
                        <p><strong>Rating:</strong> {recipe.rating}</p>
                    </div>
                ))}      
            </div>
        </div>
    )
}