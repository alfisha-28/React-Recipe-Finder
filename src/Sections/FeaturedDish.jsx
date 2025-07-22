import { Link } from 'react-router-dom';
import recipes from '../Data/Recipes.js';
import '../styles/FeaturedDish.css';

export default function FeaturedDish() {
  return (
    <div className="featured">
      {recipes.map((recipe) => (
        <div className="featured-dish" key={recipe.id}>
          <div className="featured-left">
            <img src={recipe.image} alt={recipe.title} />
          </div>
          <div className="featured-right">
            <span className="tagline">🔥 {recipe.tagline} </span>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>
              <button className="view-recipe-btn">View Recipe</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
