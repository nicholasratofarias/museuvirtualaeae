import { useState, useRef } from 'react';
import { motion } from 'framer-motion'; // Removemos AnimatePresence pois não está sendo usado

interface IntroPageProps {
  onStart: () => void;
}

export function IntroPage({ onStart }: IntroPageProps) { // Adicionamos export explícito
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#5D191D] flex flex-col items-center justify-center p-8 text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Container do vídeo */}
      <div className="relative w-full max-w-4xl mb-12 rounded-xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-auto"
          poster="/images/video-poster.jpg"
          onClick={togglePlay}
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30"
          >
            <motion.div
              className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1" />
            </motion.div>
          </button>
        )}
      </div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
      >
        Tour Virtual Interativo
      </motion.h1>

      <motion.p
        className="text-xl mb-8 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Assista ao vídeo acima para iniciar
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button
          onClick={onStart}
          className="px-8 py-3 bg-white text-[#5D191D] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pular Introdução
        </motion.button>

        <motion.button
          onClick={togglePlay}
          className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-[#5D191D] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? 'Pausar Vídeo' : 'Assistir Vídeo'}
        </motion.button>
      </div>

      {isPlaying && (
        <div className="mt-4 text-sm opacity-80">
          Clique no vídeo para pausar/continuar
        </div>
      )}
    </motion.div>
  );
}