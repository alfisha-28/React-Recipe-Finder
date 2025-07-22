import featuredImage from '../assets/featured-dish.jpg';
import featuredImage2 from '../assets/featured-dish2.jpg';
import featuredImage3 from '../assets/featured-dish3.jpg';
import featuredImage4 from '../assets/featured-dish4.jpg';

const recipes = [
  {
    id: 'cheesecake',
    title: 'Mighty Super Cheesecake',
    image: featuredImage,
    description: 'Ultra-smooth classic cheesecake no one can deny.',
    tagline: '92% would make this again',
    instructions: 'Mix, bake, chill, and serve!'
  },
  {
    id: 'spaghetti',
    title: 'Italian Basil Spaghetti',
    image: featuredImage2,
    description: 'Juicy cherry tomatoes with basil and olive oil.',
    tagline: '95% crowd fave',
    instructions: 'Boil pasta, stir fry garlic, toss and serve!'
  },
  {
    id: 'pizza',
    title: "Cheesy Pepperoni Pizza",
    image: featuredImage3,
    description: "A mouthwatering pizza loaded with melty cheese, spicy pepperoni, and fresh basil. Perfectly baked for that golden crust and gooey middle!",
    tagline: "🔥 98% loved this slice",
  },
  {
    id: 'burger',
    title: "Ultimate Cheeseburger",
    image: featuredImage4,
    description: "Stack up the flavors with juicy beef patties, melty cheese, crisp lettuce, and tangy pickles — all inside a toasted sesame bun.",
    tagline: "🔥 90% rated it top burger",
  }
];

export default recipes;
