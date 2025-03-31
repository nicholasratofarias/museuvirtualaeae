import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconButton } from './components/IconButton/IconButton';
import { items } from './data/itemsData';

interface ButtonPosition {
  x: number;
  y: number;
  itemIndex: number;
}

export function MainPage({ onBack }: { onBack: () => void }) {
  const icons = Array.from({ length: 15 }, (_, i) => 
    `/images/icons/icon${(i % 15) + 1}.jpg`
  );

  const buttonPositions: ButtonPosition[] = [
    { x: 33, y: -5, itemIndex: 0 }, { x: 45, y: -5, itemIndex: 1 },
    { x: 57, y: -5, itemIndex: 2 }, { x: 68, y: -5, itemIndex: 3 },
    { x: 80, y: -5, itemIndex: 4 },
    { x: 16, y: 2, itemIndex: 5 }, { x: 16, y: 92, itemIndex: 6 },
    { x: 82, y: 30, itemIndex: 7 }, { x: 82, y: 47, itemIndex: 8 },
    { x: 82, y: 66, itemIndex: 9 },
    { x: 33, y: 100, itemIndex: 10 }, { x: 45, y: 100, itemIndex: 11 },
    { x: 57, y: 100, itemIndex: 12 }, { x: 68, y: 100, itemIndex: 13 },
    { x: 80, y: 100, itemIndex: 14 }
  ];

  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const zoomLevel = 1.5;

  const handleButtonClick = (itemIndex: number) => {
    if (items[itemIndex]) {
      setSelectedItem(itemIndex);
    }
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-[#5D191D] flex items-center justify-center p-4">
      {/* Botão Voltar */}
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 z-50 px-4 py-2 bg-white text-[#5D191D] rounded-lg hover:bg-gray-100"
      >
        Voltar
      </button>

      {/* Container principal */}
      <div className="relative w-full max-w-4xl h-[600px]">
        {/* Imagem de fundo */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl shadow-2xl overflow-hidden"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center'
          }}
        >
          <img
            src="/images/plantabaixa.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Botões - SEM condição de renderização */}
        {buttonPositions.map((position, index) => (
          <motion.div
            key={`btn-${index}`}
            className="absolute z-10"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              opacity: selectedItem === null ? 1 : 0.7,
              scale: selectedItem === null ? 1 : 0.95
            }}
            transition={{ duration: 0.1 }}
          >
            <IconButton 
              icon={icons[index]} 
              index={index}
              onClick={() => handleButtonClick(position.itemIndex)}
              disabled={selectedItem !== null}
            />
          </motion.div>
        ))}
      </div>

      {/* Popup */}
      {selectedItem !== null && items[selectedItem] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-20"
            onClick={closePopup}
          />
          
          <div className="relative bg-white rounded-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-auto shadow-xl">
            <div className="flex flex-col md:flex-row gap-6">
              <img 
                src={items[selectedItem].image} 
                alt="Conteúdo"
                className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-lg"
              />
              <div className="w-full md:w-1/2">
                <p className="text-gray-800 text-lg">
                  {items[selectedItem].text}
                </p>
                <button
                  onClick={closePopup}
                  className="mt-6 px-6 py-2 bg-[#5D191D] text-white rounded-lg hover:bg-[#4a1418] transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}