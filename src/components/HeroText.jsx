import { FlipWords } from "./FlipWords"
import { motion } from 'motion/react'; 



const HeroText = () => {

const words = ["React.js","Next.js","Node.js","AWS","SQL"];
const variants = {
  hidden: { opacity: 0, x: -50},
  visible: { opacity: 1, x: 0}
}

  return (
    <div className="z-10 mt-13 text-center md:mt-50 md:text-left rounded-3xl bg-clip-text">
        {/* Desktopview */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay: 1}}>Hi I'm Prajesh</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className="text-5xl font-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay: 1.25}}>
                    Full-Stack Explorer<br/> with a Frontend Heart
                </motion.p>
                <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay: 1.5}}>
                       <FlipWords words={words} className='font-black text-white text-5xl'/>
                </motion.div>
            </div>
        </div>
        {/* MobileView */}
        <div className="flex- flex-col space-y-6 md:hidden"> 
          <motion.p className="text-3xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay: 1}}>
            Hi I'm Prajesh
          </motion.p>
          <div>
             <motion.p className="text-4xl font-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay: 1.25}}>
                    Full-Stack Explorer<br/> with a Frontend Heart
                </motion.p>
                <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay: 1.5}}>
                       <FlipWords words={words} className='font-black text-white text-4xl'/>
                </motion.div>
          </div>
        </div>
    </div>
  )
}

export default HeroText