import React, { useEffect, useRef, useState } from "react"

import {
    Application,
    extend,
} from '@pixi/react';
import {
    Container,
    Graphics,
    Sprite,
} from 'pixi.js';

import { BunnySprite } from './BunnySprite.tsx'

// extend tells @pixi/react what Pixi.js components are available
extend({
    Container,
    Graphics,
    Sprite,
});

type Coordinates = [number, number]

function Line({startPos, endPos, color} : {startPos: Coordinates, endPos: Coordinates, color: string}) {
    // Array of sine values

  return (
    <pixiGraphics
      draw={(graphics) => {
        graphics.clear();

        graphics
            .moveTo(startPos[0], startPos[1])

        for (let i = 0; i < 100; i++)
        {
            graphics.lineTo((i * 10)+ 100, 20*Math.sin(i/5) + 100)
        }

        graphics
        .stroke({
            width: 4,
            color: color,
        });
      }}
    />
  );
}

// Dot
function Dot({x}: {x:number}) {
  return (
    <pixiGraphics
      draw={(graphics) => {
        graphics.clear();

        graphics
            .circle(x, 200, 5)
            .fill({color: "#00f"})
      }}
    />
  );
}


export default function TestPixi() {
    const [count, setCount] = useState(0)

    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = useRef(0);

    const animate = () => {

        // Pass on a function to the setter of the state
        // to make sure we always have the latest state
        setCount(prevCount => (prevCount + 1) % 500);
        requestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once

    console.log(count)

    return (
        // We'll wrap our components with an <Application> component to provide
        // the Pixi.js Application context
        <Application backgroundColor={"#fff"}>
            <BunnySprite x={600} y={200}/>
            <Line startPos={[100, 100]} endPos={[400, 100]} color="#000"/>
            <Dot x={count}/>
        </Application>
    );
}
