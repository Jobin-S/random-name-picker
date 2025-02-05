import { motion } from 'framer-motion';

interface NameCardProps {
  name: string;
  isHighlighted?: boolean;
  isWinner?: boolean;
  isCompact?: boolean;
  'data-name'?: string;
}

export default function NameCard({ 
  name, 
  isHighlighted, 
  isWinner, 
  isCompact,
  'data-name': dataName,
}: NameCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={`
        glass-card text-center transition-all duration-200
        ${isCompact ? 'p-3' : 'p-6'}
        ${isHighlighted 
          ? 'ring-2 ring-white shadow-lg shadow-white/40 bg-white/30 backdrop-blur-lg border-white/50' 
          : ''}
        ${isWinner 
          ? 'ring-2 ring-success shadow-lg shadow-success/40 bg-success/30 backdrop-blur-lg border-success/50' 
          : ''}
      `}
      data-name={dataName}
    >
      <span className={`
        ${isCompact ? 'text-sm' : 'text-lg'} 
        font-medium
        ${isHighlighted ? 'text-white drop-shadow-glow' : ''}
        ${isWinner ? 'text-success-light drop-shadow-success' : ''}
      `}>
        {name}
      </span>
    </motion.div>
  );
} 