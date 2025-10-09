"use client";

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Header = () => {
  const { common } = useTranslation();
  const links = common?.nav ? Object.entries(common.nav) : [];

  const navLinks = links.map(([key, label], index) => (
    <motion.li 
      key={key} 
      className="header-nav__item"
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: 0.1 * (index + 1),
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20
        }
      }}
    >
      <Link href={`#${key}`} className="header-nav__link">{label}</Link>
    </motion.li>
  ));

  return (
    <header className='header-container'>
        <motion.div 
          className="header-nav"
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          transition={{ type: 'spring' }}
        >
          <nav className="header-nav__content">
            <ul className="flex w-full flex-wrap items-center justify-center gap-y-1 font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
              {navLinks}
            </ul>
          </nav>
        </motion.div>
    </header>
  )
};