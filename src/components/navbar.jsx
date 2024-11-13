'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
const Navbar = () => {
  const links = [
    { url: '/', title: 'Home' },
    { url: '/resume', title: 'Resume' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
  ];

  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 35,
      backgroundColor: 'accent',
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -35,
      backgroundColor: 'accent',
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  // sm:px-8 md:px-12 lg:px-20 xl:px-48
  return (
    <div
      className="h-full flex items-center justify-items-start  px-4 

text-xl"
    >
      {/* LOGO */}
      <div className="mr-auto">
        <Link href="/" className="text-3xl p-1 font-semibold ">
          <span className="bg-gradient-to-r from-[#b27f1f] via-[#fefe68] to-[#f3a80a] bg-clip-text text-transparent">
            S.Gurung
          </span>
        </Link>
      </div>
      {/* LINKS */}
      <div className="hidden md:flex gap-10 mr-auto">
        {links.map((link) => (
          <Link
            key={link.title}
            className={`rounded p-1 font-semibold  bg-clip-text text-transparent ${
              pathName === link.url ? 'bg-gold-sharp' : 'bg-silver-light'
            }`}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* <div className="md:hidden flex justify-around w-full"> */}

      {/* RESPONSIVE MENU */}
      <div className="md:hidden z-10">
        {/* MENU BUTTON */}
        <button
          className="w-10 flex flex-col gap-[6px] z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-8 h-[3px] bg-accent rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-8 h-[3px] bg-accent rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-8 h-[3px] bg-accent rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
