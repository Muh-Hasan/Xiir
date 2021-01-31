import React from 'react'

const Button = ({ text }) => {
    return (
        <button className='btn'>
            <span>
                {text}
            </span>
        </button>
    )
}

export default Button
