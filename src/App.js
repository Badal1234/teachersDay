import React from 'react';
import './App.css';
import { motion } from "framer-motion"

var width = window.innerHeight/2
console.log(width)

function App() {
  return (
   <div id="wrapper">
      <motion.div class="envelope" animate={{ translateY:width }} transition={{ duration: 4 }} >
        <img src = "https://online.images.greetingsisland.com/Ecards/e3555bca-1076-4f78-ae81-034bb180406c.jpg" className="closed"  alt="img" />


      </motion.div>
   </div>
  );
}

export default App;
