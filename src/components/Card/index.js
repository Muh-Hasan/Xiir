import React from 'react'

const Card = ({ img , title , description }) => {
    return (
        <div>
            <div>
                <img src={img} alt={title} />
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}

export default Card
