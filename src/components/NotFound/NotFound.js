import React from 'react';
import './Style.css'
const NotFound = () => {
    return (
        <div className="pageBody">
            <div className="number">404</div>
            <div>
                <h1 className="text">Ooops...</h1>
                <p className="text">Page not found</p>
            </div>
        </div>
    );
};

export default NotFound;