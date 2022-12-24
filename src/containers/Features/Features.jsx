import React from 'react'
import './features.css'
import { Comp } from '../../components/index'
function Features() {

    const data = [
        {
            title: "Noothan",
        },
        {
            title: "Noothan",
        },
        {
            title: "Noothan",
        },
        {
            title: "Noothan",
        },
    ]

    return (
        <>
            <div className="features">
                <div className="features_left-part">
                    <h1>Features we provide</h1>
                </div>
                <div className="features_right-part">
                    {data.map((element) => {
                        return(
                        <Comp title={element.title} discription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga et suscipit totam accusantium amet explicabo ipsam pariatur ducimus consequatur nulla labore cumque, nesciunt quasi ratione hic fugiat repellendus cupiditate iure."} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Features