import { useParams } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import recipes from '../Data/Recipes';
import '../Styles/RecipePage.css';

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <h2>Recipe Not Found</h2>;

  return (
    <div>
    <Header/>
    <div className="recipe-page">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} style={{ width: '400px' }} />
      <p>{recipe.description}</p>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
    <Footer/>
    </div>
  );
}
