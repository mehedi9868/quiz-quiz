import React from 'react';
import Option from './Option';

const QuizDetails = ({ item }) => {
    return (
        <div className='bg-indigo-100 border rounded-lg p-6'>
            <h2 className='text-xl font-semibold mb-3'>Quiz: {item.question}</h2>
            {
                item.options.map((option, index) => <Option
                    key={index}
                    option={option}
                ></Option>)
            }
        </div>
    );
};

export default QuizDetails;