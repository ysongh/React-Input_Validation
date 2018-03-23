import React from 'react';

const validation = (props) => {
    let size;
    
    if (props.length < 5){
        size = "Text too short";
    }
    else{
        size = "Text long enough";
    }
    return (size);
};

export default validation;