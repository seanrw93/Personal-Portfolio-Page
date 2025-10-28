"use client";

import React from "react";
import { useTranslation } from "@/context/TranslationContext";
import { motion } from "framer-motion";
import Link from "next/link";

export const Header = () => {
  const { translations } = useTranslation();
  const common = translations.common;
  const links = common?.nav ? Object.entries(common.nav) : [];
  const aria = common?.aria.navigation as { [key: string]: string };

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
          damping: 20,
        },
      }}
      tabIndex={-1}
      role="none"
    >
      <Link
        href={`#${key}`}
        className="header-nav__link"
        aria-label={aria.link.replace('{{section}}', label.toLowerCase())}
      >
        {label}
      </Link>
    </motion.li>
  ));

  return (
    <header className="header-container">
      <motion.div
        className="header-nav"
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ type: "spring" }}
      >
        <nav
          className="header-nav__content"
          aria-label={aria.primary}
        >
          <ul className="nav-list">
            {navLinks}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};
