import { useInView } from "react-intersection-observer";

type Options = {
  disabled?: boolean; 
  rootMargin?: string; 
  threshold?: number;   
  onActive?: (id: string) => void; 
};

export const useSectionInView = (
  id: string,
  {
    disabled = false,
    rootMargin = "-30% 0px -50% 0px",
    threshold = 0, 
    onActive,
  }: Options = {}
) => {
  const { ref } = useInView({
    rootMargin,
    threshold,
    onChange: (inView) => {
      if (disabled || !inView) return;

      if (typeof window !== "undefined") {
        console.log(`Activating section: ${id}`); // Debug line

        window.history.replaceState(null, "", `#${id}`);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }

      onActive?.(id);
    },
  });

  return { ref };
};