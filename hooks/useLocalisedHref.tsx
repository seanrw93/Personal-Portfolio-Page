"use client";

import { usePathname } from "next/navigation";

type UseLocalisedHrefProps = {
  lang: "en" | "fr";
};

export const useLocalisedHref = ({ lang }: UseLocalisedHrefProps) => {
  const pathname = usePathname();
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, "") || "/";
  return `/${lang}${pathWithoutLocale}${hash}`;
};