"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "@/context/TranslationContext";
import { motion } from "framer-motion";
import Link from "next/link";

import { TranslationButton } from "@/components/buttons/TranslationButton";

export const Header = () => {
  const { translations } = useTranslation();
  const common = translations.common;
  const links = common?.nav ? Object.entries(common.nav) : [];
  const aria = common?.aria.navigation as { [key: string]: string };

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [navOpen, setNavOpen] = useState(false);
  const toggleMenu = () => setNavOpen(prev => !prev);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveSection(hash);
    } else {
      setActiveSection("home");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && navOpen) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navOpen]);

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
    >
      <Link
        href={`#${key}`}
        className={"header-nav__link" + (activeSection === key ? " header-nav__link--active" : "")}
        aria-current={activeSection === key ? "page" : undefined}
        onClick={() => {
          setActiveSection(key);
          setNavOpen(false);
        }}
        aria-label={aria.link.replace("{{section}}", label.toLowerCase())}
      >
        {label}
      </Link>
    </motion.li>
  ));

  return (
    <header className={'header-container' + (navOpen ? ' header-nav--open' : '')}>
      <motion.div
        className="header-nav"
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ type: "spring" }}
      >
        <button 
          className="header-nav__burger" 
          onClick={toggleMenu}
        >
          <span className={navOpen ? "open" : ""}></span>
        </button>
        <nav className="header-nav__content" aria-label={aria.primary}>
          <ul className="nav-list">
            {navLinks}
            <motion.li
              className="header-nav__item"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.7,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              tabIndex={-1}
              role="none"
            >
              <TranslationButton className="header-nav__link hover:text-blue-600" ariaLabel={aria.translationButton} />
            </motion.li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};
