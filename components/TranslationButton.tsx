"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocalisedHref } from "@/hooks/useLocalisedHref";

type TranslationButtonProps = {
  className?: string;
  ariaLabel?: string;
};

type Language = "en" | "fr";

export const TranslationButton = ({ className, ariaLabel }: TranslationButtonProps) => {
  const pathname = usePathname();
  
  const enHref = useLocalisedHref({ lang: "en" });
  const frHref = useLocalisedHref({ lang: "fr" });

  const getLangStyles = (lang: Language): string => {
    if (pathname.startsWith(`/${lang}`)) {
      return "font-bold underline";
    }
    return "";
  };

  return (
    <div className="flex place-items-center text-blue-400 gap-2">
      <Link
        href={enHref}
        scroll={false}
        aria-current={pathname.startsWith("/en") ? "page" : undefined}
        className={`${className || ""} ${getLangStyles("en")}`}
      >
        en
      </Link>
      <span className="font-semibold">|</span>
      <Link
        href={frHref}
        scroll={false}
        aria-current={pathname.startsWith("/fr") ? "page" : undefined}
        className={`${className || ""} ${getLangStyles("fr")}`}
      >
        fr
      </Link>
    </div>
  );
};
