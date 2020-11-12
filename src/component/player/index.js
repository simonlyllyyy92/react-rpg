import React from 'react'
import Actor from '../actor'
import useKeyPress from '../../hooks/use-key-press'
import useWalk from '../../hooks/use-walk'

const Player = ({skins}) => {

    const {dir, step, walk, position} = useWalk(3)
    // console.log(position) // run multiple fucking times...!!!!! Figure out :  because of the strict mode
    const data = {
        h: 32,
        w: 32
    }


    useKeyPress((e) => {
        walk(e.key.replace('Arrow', '').toLowerCase())
        //prevent the browser move with the arrow button
        e.preventDefault()
    })

    return (
        <Actor 
            sprite={`/asset/${skins}.png`}
            data={data}
            step={step}
            dir={dir}
            position={position}
        />
    )
}
export default Player