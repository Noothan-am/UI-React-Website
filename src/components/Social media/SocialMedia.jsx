import React from 'react'
import './socialMedia.css'

import dropbox from '../../img/dropbox.png'
import google from '../../img/google.png'
import shopify from '../../img/shopify.png'
import slack from '../../img/slack.png'

function SocialMedia() {
  return (
    <>
    <div className="socialMedia">
      <img src={dropbox} alt="" />
      <img src={shopify} alt="" />
      <img src={google} alt="" />
      <img src={slack} alt="" />
    </div>
    </>
  )
}

export default SocialMedia