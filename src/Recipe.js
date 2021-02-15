import React from 'react'; 
import style from './searchComponent.module.css'

const Recipe = ({title,image, ingredients}) => {

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image}/>
            <ol>
                {ingredients.map(
                    ingredient =>(
                        <li>{ingredient.text}</li>
                    )
                )}
            </ol>

        </div>

    );

}

export default Recipe;