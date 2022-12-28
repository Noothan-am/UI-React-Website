import React from 'react'

import './documentations.css'
import { Card } from '../../components/index'

import ChatGPT from '../../img/chatgpt.png'
import Playground from '../../img/gpt-playground.png'
import Dalle from '../../img/dalle.png'
import OpenAI from '../../img/openai.png'

function Documentations() {

    const data = [
        {
            img: OpenAI,
            heading: "OpenAI",
            paragraph: "sample"
        },
        {
            img: Dalle,
            heading: "DALL·E 2",
            paragraph: "sample"
        },
        {
            img: ChatGPT,
            heading: "ChatGPT",
            paragraph: "sample"
        },
        {
            img: Playground,
            heading: "Playground",
            paragraph: "sample"
        }
    ]



    return (
        <>

            <div className="documentation">
                <div className="documentation_heading">
                    <h1>Visit out websites from here !!</h1>
                </div>
                <div className="documentation_cards">
                    {data.map(e => {
                        return <Card img={e.img} heading={e.heading} paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit."} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Documentations