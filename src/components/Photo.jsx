'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* img */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: 'easeIn' },
          }}
          className="w-[298px] h-[298px] lg:w-[400px] lg:h-[400px] mix-blend-lighten"
        >
          <Image
            src="/hero.png"
            priority
            alt="hero"
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1.5, ease: 'easeIn' }}
          id="circle"
          className="w-[300px] lg:w-[408px] h-[300px] lg:h-[408px] absolute top-0 left-0"
          fill="transparent"
          viewBox="0 0 506 506"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="gold"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              // strokeDasharray: ['4 11 8 20', '2 90 10 200', '4 2 150 14'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
