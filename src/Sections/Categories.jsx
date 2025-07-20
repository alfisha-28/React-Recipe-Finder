import RecipeCard from '../Components/RecipeCard.jsx';
import '../Styles/Categories.css';

const spinachImg = "https://i.pinimg.com/1200x/9e/01/05/9e01057b1d5bdab5ccc42d1c6625a5c0.jpg";
const dumplingImg = "https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg";
const ravioliImg = "https://i.pinimg.com/736x/5d/ba/9d/5dba9dd0f4578bbf41b58f32d8b5f281.jpg";
const chickenWingsImg = "https://i.pinimg.com/1200x/ec/8a/ee/ec8aee3d078af75d59d2065bb774903b.jpg";
const garlicBreadImg = "https://i.pinimg.com/1200x/3b/f7/11/3bf71193666074c21826e70b7d5cfda7.jpg";
const crossiantImg = "https://i.pinimg.com/1200x/52/7f/43/527f432b31637f152ee316283fa2b7b4.jpg";

const milkshakeImg = "https://i.pinimg.com/1200x/bd/de/69/bdde6982203758aa0f92621e5d9c3986.jpg";
const pancakeImg = "https://i.pinimg.com/1200x/3d/d0/d5/3dd0d5e8fe8ac76862a2fb5545431964.jpg";
const donutImg = "https://i.pinimg.com/736x/69/bb/a7/69bba74c328cd669cca79bd400ecde4a.jpg";
const cookiesImg = "https://i.pinimg.com/736x/b2/23/64/b22364152daa82ab76a3a5b769be2932.jpg";
const chocoStawberryImg = "https://i.pinimg.com/1200x/60/81/00/6081000db7705c4bd345f50a228619a4.jpg";
const bananaCakeImg ="https://i.pinimg.com/736x/c4/64/f5/c464f5841dfce4f2e5e42f0b14ebb39d.jpg";

 
export default function Categories() {
return(
<div className="scroll-section">
  <h2>Super Delicious</h2>
  <div className="scroll-container">
    <RecipeCard title="Spinach and Cheese Pasta" image={spinachImg} rating={4.5} />
    <RecipeCard title="Chicken Dumplings" image={dumplingImg} rating={5} />
    <RecipeCard title="Sausage Ravioli" image={ravioliImg} rating={4.7} />
    <RecipeCard title="Chicken Wings" image={chickenWingsImg} rating={4.3} />
    <RecipeCard title="Garlic Bread Bombs" image={garlicBreadImg} rating={4.6} />
    <RecipeCard title="Savoury Crossiant" image={crossiantImg} rating={4.8} />
  </div>

  <h2>Sweet Tooth</h2>
  <div className="scroll-container">
    <RecipeCard title="Strawberry Milkshake" image={milkshakeImg} rating={4.8} />
    <RecipeCard title="Blueberry Pancakes" image={pancakeImg} rating={4.9} />
    <RecipeCard title="glazed Donuts" image={donutImg} rating={4.4} />
    <RecipeCard title="Chocolate Cookies" image={cookiesImg} rating={4.9} />
    <RecipeCard title="Chocolate Stawberry" image={chocoStawberryImg} rating={4.5} />
    <RecipeCard title="Banana Caramel Cheesecake" image={bananaCakeImg} rating={4.3} />
  </div>
</div>
);

}
