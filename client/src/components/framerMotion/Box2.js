

import React, {useState} from 'react'
import { motion } from "framer-motion";
import './box2.scss';



function Box2() {


    const [isAnimating, setAnimating] =useState(false)

    return (
        <div className="box_container2">

        <motion.div

animate={{ 

    x:isAnimating ? 2: 0,
    //   x: 590,
      opacity: isAnimating ? 1: 0.5,
     rotate: isAnimating ? 360 : 0
  }}      

  initial={{ 
      opacity:0.1
  } }

  transition={{
      type:'spring',
       stiffness:60,
       damping:100
    }}

    onClick={() => setAnimating(!isAnimating)}



         className="box2">
Pay
        </motion.div>
        
    </div>
    )
}

export default Box2
