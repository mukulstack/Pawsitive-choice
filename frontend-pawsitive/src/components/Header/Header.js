import React from 'react';
import './Header.css';  

function Header({children}) {
    return (
        <header className="header">
            <div className="logo">
                <h1>Pawsitive Choice</h1>  
            </div>
            <div className="buttons-container">
                {children}
            </div>
        </header>
    );
}

export default Header;
