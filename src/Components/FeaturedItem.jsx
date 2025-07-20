export default function FeaturedItem({ img, alt, tagline, title, desc }) {
  return (
    <div className="featured-dish">
      <div className="featured-left">
        <img src={img} alt={alt} />
      </div>
      <div className="featured-right">
        <span className="tagline">{tagline}</span>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button className="view-recipe-btn">View Recipe</button>
      </div>
    </div>
  );
}
