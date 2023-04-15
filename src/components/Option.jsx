import React from 'react';

const Option = ({ option }) => {
    return (
        <div>
            <input type="radio" name="option" className='mb-3' /> {option}
        </div>
    );
};

export default Option;