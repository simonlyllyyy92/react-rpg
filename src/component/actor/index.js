import React from 'react'
import Sprite from '../sprite'



const Actor = ({
    sprite, 
    data, 
    step = 0, 
    dir = 0, 
    position={x:0,y:0} 
}) => {
    const {h, w} = data
    return (
        <Sprite 
            image={sprite} 
            position = {position}
            data={{
                x: w * step,
                y: h * dir, 
                w: w,
                h: h
            }}
    />
    )
 
}

export default Actor