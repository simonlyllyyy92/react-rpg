import {useState} from 'react'

export default function useWalk(maxSteps) {
    // 0 match the down dir
    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)
    const [position, setPos] = useState({x: 0, y: 0})


    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    }

    const stepSize = 16
    
    const modifier = {
        down: {x: 0, y: stepSize},
        left: {x: -stepSize, y: 0},
        right: {x: stepSize, y: 0},
        up: {x: 0, y: -stepSize}
    }

    const move = (dir) => {
        setPos(prev => {
            return {
                x: prev.x + modifier[dir].x, //x+16 = 16
                y: prev.y + modifier[dir].y
            }
        }
    )
    }

    const walk = (dir) => {
        //dir would be 'left, right, up, down'
        setDir(prev => {
            if(directions[dir] === prev) move(dir);        
            return directions[dir];
        })
        setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0)
    }

    return {
        walk,
        dir, 
        step,
        position
    }
}