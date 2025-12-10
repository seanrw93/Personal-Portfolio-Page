"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/context/TranslationContext";

type TranslationButtonProps = {
  className?: string;
};

export const TranslationButton = ({ className }: TranslationButtonProps) => {
  const pathname = usePathname();
  const { locale } = useTranslation();

  // Remove hash from pathname for href generation
  const pathWithoutHash = pathname.split('#')[0];
  
  // Get current hash if it exists
  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  // Generate hrefs without hash
  const enHref = pathWithoutHash.replace(/^\/(en|fr)/, "/en");
  const frHref = pathWithoutHash.replace(/^\/(en|fr)/, "/fr");

  const handleLinkClick = (newLocale: string) => {
    // Preserve hash when switching languages
    if (currentHash) {
      window.history.replaceState(null, "", `/${newLocale}${currentHash}`);
    }
  };

  return (
    <div className="flex place-items-center text-blue-400 gap-2">
      <Link
        href={enHref}
        scroll={false}
        aria-current={pathname.startsWith("/en") ? "page" : undefined}
        className={
          className +
          (pathname.startsWith("/en") ? " font-bold underline" : " ")
        }
        onClick={() => handleLinkClick("en")}
      >
        en
      </Link>
      <span className="text-base-gray">|</span>
      <Link
        href={frHref}
        scroll={false}
        aria-current={pathname.startsWith("/fr") ? "page" : undefined}
        className={
          className +
          (pathname.startsWith("/fr") ? " font-bold underline" : " ")
        }
        onClick={() => handleLinkClick("fr")}
      >
        fr
      </Link>
    </div>
  );
};