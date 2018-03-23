import React from 'react';

const inforInput = (props) => {
    
    return <input 
        type="text"
        onChange={props.changed}
        value={props.currentInfor} />;
};

export default inforInput;