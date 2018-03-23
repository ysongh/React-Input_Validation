import React from 'react';

const char = (props) => {
    const style = {
        display: inline-block, 
        padding: 16px, 
        text-align: center,
        margin: 16px, 
        border: 1px solid black
    }
    
    return (
        <div className="style">
            <p>{props}</p>
        </div>
    );
};

export default char;