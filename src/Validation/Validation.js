import React from 'react';

const validation = (props) => {
    let validationMessage = "Text long enough";
    
    if(props.inforLength <= 5){
        validationMessage = "Text too short";
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;

// Other way of doing if statement
/*
{
    props.inforLength > 5 ?
        <p>Text long enough</p> :
        <p>Text too short</p>
}
*/