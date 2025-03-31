import { motion, AnimatePresence } from 'framer-motion';

interface InfoBoxProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    image: string;
    text: string;
  };
}

export const InfoBox = ({ isOpen, onClose, content }: InfoBoxProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            className="absolute inset-0 bg-black opacity-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl z-10"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={content.image}
                  alt="Conteúdo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 overflow-y-auto">
                <p className="text-gray-800">{content.text}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};