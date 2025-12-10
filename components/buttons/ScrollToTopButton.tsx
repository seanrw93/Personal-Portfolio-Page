"use client";

import { useScroll } from "@/hooks/useScroll";
import { useTranslation } from "@/hooks/useTranslation";
import { BsArrowUp } from "react-icons/bs";

export const ScrollToTopButton = () => {
  const isVisible = useScroll(300);
  const { common } = useTranslation();
  const aria = common?.aria.navigation;

  return (
    <button
      className={`btn-scroll-top transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={aria?.scrollToTop}
      aria-hidden={!isVisible}
    >
      <BsArrowUp />
    </button>
  );
};