import React from 'react';

const Question = ({ question, options }) => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold">{question}</h2>
            <div>
                {options.map((option, index) => (
                    <button key={index} className="block p-2 m-2 bg-gray-200 rounded">
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;

