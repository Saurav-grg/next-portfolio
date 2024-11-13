'use client';
import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
// import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  // const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div class="relative h-screen w-full  ">
        <div
          class="absolute h-full bottom-0 -z-20 left-0 right-0 top-0 overflow-hidden
      bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        >
          <div class="absolute left-0 -z-10 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
        {/* <motion.div
          className="h-screen w-screen fixed rounded-b-[100px] z-40"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed rounded-t-[100px] bottom-0 z-30"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        /> */}
        <div className="h-20 z-10 sm:w-3/4 w-[95%] mx-auto">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
