import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientType => [...Array(props.ingredients[ingredientType])] // Create an array of ingredient size for each ing.
            .map((_, index) => <BurgerIngredient key={ingredientType + index} type={ingredientType}/> // Render for each ingredient
            ))
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []); // Flatten the arrays

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;