import { FlipWords } from "./Flipwords"

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktopview */}
        <div className="flex-col hidden md:flex c-space">
            <h1 className="text-4xl font-medium">Hi I'm Prajesh</h1>
            <div className="flex flex-col items-start">
                <p className="text-5xl font-medium text-neutral-300">
                    Full-Stack Explorer<br/> with a Frontend Heart
                </p>
                <div>
                       <FlipWords words={["React.js","Next.js","Node.js","AWS","SQL"]} className='font-black text-white text-5xl'/>
                </div>
            </div>
        </div>
        {/* MobileView */}
        <div className="flex- flex-col space-y-6"> 

        </div>
    </div>
  )
}

export default HeroText