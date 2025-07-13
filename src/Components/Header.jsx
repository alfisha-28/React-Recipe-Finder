import logo from '../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import '../Styles/Header.css'

export default function Header(){
    return(
        <div className='header'>
            <img src={logo} alt="logo" style={{ width: '130px' }}/>
            <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
            placeholder="Search Recipes"
            type="text"
            />
            </div>
            <div className='auth-buttons'>
                <button>Sign-up</button>
                <button>Login</button>
            </div>
        </div>
    );
}