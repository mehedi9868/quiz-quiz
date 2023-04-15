import React, { useState } from 'react';
import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({ item }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleShowAnswer = () => {
        setShowAnswer(true);
    }

    return (
        <div className='bg-indigo-100 border rounded-lg p-6'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold mb-3'>Quiz: {item.question}</h2>
                <button className='flex-col gap-2' onClick={handleShowAnswer}>
                    <p>Answer:</p>
                    <EyeIcon className="h-6 w-6 text-blue-500" />
                </button>
            </div>
            <div>
                {
                    showAnswer && <h5 className='text-green-600 text-base font-bold mb-2'>Correct: {item.correctAnswer}</h5>
                }
                {
                    item.options.map((option, index) => (
                        <Option
                            key={index}
                            option={option}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default QuizDetails;
