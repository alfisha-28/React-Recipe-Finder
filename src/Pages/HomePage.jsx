import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import FeaturedDish from '../Sections/FeaturedDish.jsx';
import Categories from '../Sections/Categories.jsx';

export default function HomePage(){
    return(
        <div>
            <Header/>
            <FeaturedDish/>
            <Categories/>
            <Footer/>
        </div>
    );
}