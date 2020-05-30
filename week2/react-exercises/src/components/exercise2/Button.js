import React from 'react';

function Button({ onClick }) {
    return (
            <div>
            <button onClick={onClick}>
                Click to get a dog!
            </button>
            </div>
    );
}

export default Button 