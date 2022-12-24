import React from 'react'
import vrImg from '../../img/vr.png'
import './earlyAccess.css'
function EarlyAccess() {
    return (
        <div className="earlyAccess">
            <div className="earlyAccess_img">
                <img src={vrImg} alt="Random image" />
            </div>
            <div className="earlyAccess_content">
                <h5>Get Early Access!!</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis facilis quisquam, tempora reprehenderit ipsum explicabo distinctio ipsam laudantium assumenda. Perspiciatis minima odio iste, explicabo adipisci illum placeat quia deleniti impedit?</p>
                <button>JOIN NOW !!</button>
            </div>
        </div>
    )
}

export default EarlyAccess