import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientType => [...Array(props.ingredients[ingredientType])] // Create an array of ingredient size for each ing.
            .map((_, index) => <BurgerIngredient key={ingredientType + index} type={ingredientType}/> // Render for each ingredient
            )
        );

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;