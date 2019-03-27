import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <header>
                <h1>{ props.titulo }</h1>
            </header>
        </div>       
    );
};

export default Header;