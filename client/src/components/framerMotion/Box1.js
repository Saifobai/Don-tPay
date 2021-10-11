import React,{ useState} from "react";

import { motion } from "framer-motion";

import "./box1.scss";

function Box1() {

    const [isAnimating, setAnimating] =useState(false)


  return (


    <div className="box_container">
      <motion.div
     
      animate={{ 

        // x:isAnimating ? 590: 0,
           x: 660,
          opacity: 1,//isAnimating ? 1: 0.5,
         rotate: 360//isAnimating ? 360 : 0
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


       className="box">Don't</motion.div>
    </div>
  );
}

export default Box1;
