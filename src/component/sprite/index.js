import React from 'react'

const Sprite = ({image, data, position}) => {
    const {x, y, h, w} = data
    //image allow us to use different sprite image
    return (
        <div style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            height: `${h}px`,
            width:`${w}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `-${x}px -${y}px`,
        }} />
    )    
}
export default Sprite