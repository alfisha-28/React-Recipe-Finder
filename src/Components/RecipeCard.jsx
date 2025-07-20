import '../Styles/RecipeCard.css';

export default function RecipeCard({ title, image, rating }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <h4>{title}</h4>
        <p>⭐ {rating} / 5</p>
      </div>
    </div>
  );
}
