import heading from '../assets/heading.png';
import favicon from '../assets/favicon.png'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Header.css'
import { useState } from 'react';

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInputChange = (e) => {
       setSearchTerm(e.target.value);
    // 🔍 You can implement filter logic here later
    };

    return(
        <div className='header'>
            <FaBars className='menu-icon' onClick={() => setMenuOpen(true)}  />

            <div className='Heading'>
            <img src={favicon} alt="favicon" style={{ width: '150px' }}/>
            <img src={heading} alt="logo" style={{ width: '300px' }}/>
            </div>
            <FaSearch className="search-icon" onClick={() => setSearchVisible(!searchVisible)} />

             {/* 🔍 Show Search Bar if Visible */}
            {searchVisible && (
                    <div className="search-bar">
                    <input
                       type="text"
                       placeholder="Search Recipes..."
                       value={searchTerm}
                       onChange={handleSearchInputChange}
                    />
                    <FaTimes className="close-icon" onClick={() => setSearchVisible(false)} />
                    </div>
                    )}

            {/* Sidebar Menu */}
            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
            <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
            <ul className="menu-items">
              <li>Home</li>
              <li>Recipes</li>
              <li>Favorites</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            </div>
        </div>
    );
}