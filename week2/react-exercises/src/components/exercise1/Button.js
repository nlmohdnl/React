import React from 'react';

function Button({ onClick }) {
    return (
        <div>
            <button onClick={onClick}>
                Get a friend!
            </button>
        </div>
    );
}

export default Button 