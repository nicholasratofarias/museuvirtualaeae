import { motion } from 'framer-motion';

interface IconButtonProps {
  icon: string;
  index: number;
  onClick: () => void;
  disabled?: boolean;
}

export const IconButton = ({ icon, index, onClick, disabled }: IconButtonProps) => {
  return (
    <motion.button
      onClick={!disabled ? onClick : undefined}
      className={`w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg ${
        disabled ? 'opacity-70 cursor-default' : 'cursor-pointer hover:scale-110'
      }`}
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400 }}
      disabled={disabled}
    >
      <img 
        src={icon} 
        alt={`Ícone ${index}`}
        className="w-full h-full object-cover"
      />
    </motion.button>
  );
};