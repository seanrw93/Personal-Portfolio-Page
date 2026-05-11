"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/context/TranslationContext";

type TranslationButtonProps = {
  className?: string;
  ariaLabel?: string;
};

export const TranslationButton = ({ className = "", ariaLabel = "" }: TranslationButtonProps) => {
  const pathname = usePathname();
  const { locale } = useTranslation();

  const pathWithoutHash = pathname.split('#')[0];
  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  const enHref = pathWithoutHash.replace(/^\/(en|fr)/, "/en");
  const frHref = pathWithoutHash.replace(/^\/(en|fr)/, "/fr");

  const handleLinkClick = (newLocale: string) => {
    if (currentHash) {
      window.history.replaceState(null, "", `/${newLocale}${currentHash}`);
    }
  };

  return (
    <div className="flex place-items-center text-blue-400 gap-2">
      {ariaLabel && <span className="sr-only">{ariaLabel}</span>}
      <Link
        href={enHref}
        scroll={false}
        aria-current={locale === "en" ? "true" : undefined}
        aria-label="English"
        className={
          className +
          (pathname.startsWith("/en") ? " font-bold underline" : " ")
        }
        onClick={() => handleLinkClick("en")}
      >
        en
      </Link>
      <span className="text-base-gray" aria-hidden="true">|</span>
      <Link
        href={frHref}
        scroll={false}
        aria-current={locale === "fr" ? "true" : undefined}
        aria-label="Français"
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
