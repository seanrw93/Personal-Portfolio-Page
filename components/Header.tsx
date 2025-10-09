"use client";

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';

export const Header = () => {
  const { common } = useTranslation();
  const links = common?.nav ? Object.entries(common.nav) : [];

  const navLinks = links.map(([key, label]) => {});

  return (
    <header className='header-container'>
        <motion.div 
          className="header-nav"
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          transition={{ type: 'spring' }}
        >
        </motion.div>

        <nav className="header-nav__content">
          <ul>
            
          </ul>
        </nav>
    </header>
  )
};