"use client"
import {motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

function Animation() {
    const ref = useRef(null)
   const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6,1]);
    return ( <>
    <div className="max-w-7xl py-10 mx-auto hero_section flex flex-col justify-center gap-2 items-center "
    >
        <motion.div ref={ref} className="flex flex-col justify-center gap-2 items-center "
        style={{
        scale:scaleProgress,
        // y:scrollYProgress,
        // initial:{x:-100},
        // x:scaleProgress,
        opacity:opacityProgress,
    }}>

      <h2 className="text-2xl">Animation</h2>
      <p className="text-gray-600">This is a simple animation component.</p>
      <div className="flex gap-2">
        <div className="w-[50%] flex flex-col justify-evenly items-center">
            <h2 className="text-5xl font-bold ">Hellow World</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore voluptas fugit magnam fugiat laboriosam quas eius cupiditate sint voluptatem facilis minus, assumenda nam quis veniam quibusdam, excepturi architecto natus?</p>
        </div>
        <div className="w-[50%]">
            <Image className="w-full" src="/images/about_us/about_us.png" alt="Animation" width={"500"} height={"200"} />
        </div>
      </div>
        </motion.div>
    </div>
    </> );
}

export default Animation;