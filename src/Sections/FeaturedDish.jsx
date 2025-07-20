import React from 'react';
import '../styles/FeaturedDish.css';
import FeaturedItem from '../Components/FeaturedItem.jsx';
import featuredImage from '../assets/featured-dish.jpg';
import featuredImage2 from '../assets/featured-dish2.jpg';
import featuredImage3 from '../assets/featured-dish3.jpg';
import featuredImage4 from '../assets/featured-dish4.jpg';

const featuredDishes = [
  {
    img: featuredImage,
    alt: "Mighty Super Cheesecake",
    tagline: "🔥 92% would make this again",
    title: "Mighty Super Cheesecake",
    desc: "Look no further for a creamy and ultra-smooth classic cheesecake recipe no one can deny. Pure indulgence!"
  },
  {
    img: featuredImage2,
    alt: "Italian Basil Spaghetti",
    tagline: "🔥 95% crowd Fave",
    title: "Italian Basil Spaghetti",
    desc: "A flavorful spaghetti tossed with juicy cherry tomatoes, garlic, olive oil, and fresh basil leaves — a simple yet indulgent Italian classic."
  },
  {
    img: featuredImage3,
    alt: "Cheesy Pepperoni Pizza",
    tagline: "🔥 98% loved this slice",
    title: "Cheesy Pepperoni Pizza",
    desc: "A mouthwatering pizza loaded with melty cheese, spicy pepperoni, and fresh basil. Perfectly baked for that golden crust and gooey middle!"
  },
  {
    img: featuredImage4,
    alt: "Ultimate Cheeseburger",
    tagline: "🔥 90% rated it top burger",
    title: "Ultimate Cheeseburger",
    desc: "Stack up the flavors with juicy beef patties, melty cheese, crisp lettuce, and tangy pickles — all inside a toasted sesame bun."
  }
];

export default function FeaturedDish() {
  return (
    <div className="featured">
      {featuredDishes.map((dish, i) => (
        <FeaturedItem key={i} {...dish} />
      ))}
    </div>
  );
}
