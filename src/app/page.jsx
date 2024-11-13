'use client';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import { motion } from 'framer-motion';
const Homepage = () => {
  return (
    <div className="h-full w-3/4 mx-auto">
      <div className="mb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 ">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring' }}
            className="text-center lg-text-left order-2 lg:order-none"
          >
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="mb-6">
              Hello I'm <br />
              <span className="bg-gold-light bg-clip-text text-transparent">
                Saurav Gurung
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting digital experiences and I am proficient in
              various programming languages and technologies.
            </p>
            {/* buttons and socials */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
              <button className="border border-accent/80 p-1 px-4 rounded-full text-accent hover:bg-accent/80 hover:text-white transition-all duration-300">
                Download CV
              </button>
              <div className="mb-8 lg:mb-0">
                <Socials />
              </div>
            </div>
          </motion.div>
          {/* photo */}
          <div className="order-1 lg:order-none lg:mb-8 mb-2">
            <Photo />
          </div>
        </div>
      </div>
      {/* stats */}
      {/* <Stats /> */}
    </div>
  );
};

export default Homepage;
