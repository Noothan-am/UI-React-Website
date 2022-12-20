import React from 'react'
import './main.css'
import { Feature } from '../../components'

const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia numquam illo illum harum sed, consequuntur impedit! Veniam nesciunt quis qui ut iste inventore aperiam reprehenderit cumque beatae ab, atque amet."
function Main() {
  return (
    <>
      <div className="main_container">
        <div className="main_part1-feature">
          <Feature title={"OpenAI ??"} discription={description} />
        </div>
        <div className="main_part2">
          <h1>OPEN AI FEATURES</h1>
          <p>--Explore</p>
        </div>
        <div className="main_part3-feature">
          <Feature title={"Playground"} discription={description} />
          <Feature title={"ChatGPT"} discription={description} />
          <Feature title={"DALL-E2"} discription={description} />
        </div>
      </div>
    </>
  )
}

export default Main