import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import NameCard from "./NameCard";

interface NameListProps {
  names: string[];
  highlightedName?: string;
  winner?: string;
  onRemoveName?: (name: string) => void;
}

export default function NameList({
  names,
  highlightedName,
  winner,
  onRemoveName,
}: NameListProps) {
  // Use compact mode if there are more than 12 names
  const isCompact = names.length > 12;
  const containerRef = useRef<HTMLDivElement>(null);
  const lastHighlightedRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!highlightedName || !containerRef.current) return;

    // Find the highlighted card element
    const highlightedCard = containerRef.current.querySelector(
      `[data-name="${highlightedName}"]`
    );
    if (!highlightedCard) return;

    // Get the current index and last highlighted index
    const currentIndex = names.indexOf(highlightedName);
    const lastIndex = lastHighlightedRef.current
      ? names.indexOf(lastHighlightedRef.current)
      : -1;

    // Only scroll if we're moving downward
    if (currentIndex > lastIndex) {
      highlightedCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }

    lastHighlightedRef.current = highlightedName;
  }, [highlightedName, names]);

  return (
    <div className="relative w-full">
      <motion.div
        ref={containerRef}
        className={`
          grid gap-4 max-h-[80vh] overflow-y-auto
          p-4 rounded-xl bg-card-background/30
          ${
            isCompact
              ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          }
        `}
      >
        <AnimatePresence>
          {names.map((name) => (
            <NameCard
              key={name}
              name={name}
              isHighlighted={name === highlightedName}
              isWinner={name === winner}
              isCompact={isCompact}
              data-name={name}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
