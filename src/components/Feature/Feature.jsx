import React from 'react'
import './feature.css'
function Feature({ title, discription }) {
    return (
        <div className='feature'>
            <div className="feature_bar" />
            <h1 className='feature_heading'>
                {title}
            </h1>
            <p>
                {discription}
            </p>
        </div>
    )
}

export default Feature