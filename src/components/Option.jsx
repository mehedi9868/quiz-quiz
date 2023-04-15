import React from 'react';

const Option = ({ option }) => {
    return (
        <div>
            <input type="radio" name="option" /> {option}
        </div>
    );
};

export default Option;