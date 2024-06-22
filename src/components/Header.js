import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Header = () => {
    const [inputData, setInputData] = useState({name:'',description:'',url:''});
    const { handleSubmit } = useForm();
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [media, setProducts] = useState([]);


    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        if (value.length > 1) {
          const filteredSuggestions = media.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        } else {
          setSuggestions([]);
        }
      };
    
      const handleSuggestionClick = (name) => {
        setSearchTerm(name);
        setSuggestions([]);
      };
    
    

    const onSubmit = () => {
        axios.post('http://localhost:3001/media', inputData)
        .then(res => {
            alert("Data sent successfully");
        })
        .catch(err => {
            alert("Error sending data");
        });
    };


    const handleInputChange = (e, field) => {
        setInputData({ ...inputData, [field]: e.target.value });
    };

    return (
        <header className="header">
            <div className="logo">
                <span className="logo-text">x64</span>
            </div>
            <nav className="nav">
                <div className="search">
                    <input type="text" placeholder="Поиск" value={searchTerm} onChange={handleSearchChange} className='search-input' />
                </div>
            </nav>
            <div className="user-actions">
                <Link className="icon-button" to="/Favorites">❤️</Link>
                <Link className="icon-button" to="/Cart">🛒</Link>
            </div>
        </header>

    );
};

export default Header;
