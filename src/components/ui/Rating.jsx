
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Rating({ rating }) {
    return (
        <div className="book__ratings">
            {
                rating % 1 === 0
                    ? Array(rating).fill(<FontAwesomeIcon icon="star" />)
                    : Array(Math.floor(rating)).fill(<FontAwesomeIcon icon="star" />).concat(<FontAwesomeIcon icon="star-half-alt" />)
            }
        </div>
    )
}

export default Rating
