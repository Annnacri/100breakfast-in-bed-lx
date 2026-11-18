import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Utensils, Check, ArrowRight } from 'lucide-react';
import { ambientSound } from '../utils/audio';

export interface MenuGalleryPhoto {
  id: string;
  title: string;
  category: string;
  priceTag: string;
  image: string;
  description: string;
  highlights: string[];
  pairing: string;
}

export const MENU_GALLERY_PHOTOS: MenuGalleryPhoto[] = [
  {
    id: 'prego-mafra',
    title: 'Prego em Pão Rústico de Mafra',
    category: 'Especialidade de Lisboa',
    priceTag: 'Incluído na Prego Box (€13,90)',
    image: '/images/gallery/breakprego.jpg',
    description: 'Bife tenro grelhado no ponto com suculência incomparável, manteiga de alho dourada e mostarda aromática servido no tradicional pão de Mafra de fermentação lenta.',
    highlights: ['Pão rústico de Mafra com côdea estaladiça', 'Carne tenra e molho suave de alho', 'Ideal para um brunch reforçado'],
    pairing: 'Excelente com Sumo de Laranja Natural & Café de Especialidade',
  },
  {
    id: 'brunch-banquete',
    title: 'Grande Banquete Brunch na Cama',
    category: 'Para 2 Pessoas',
    priceTag: 'Miradouro Grand Brunch (€16,90)',
    image: '/images/gallery/brunch.jpg',
    description: 'A experiência de pequeno-almoço mais farta de Lisboa: panquecas douradas com açúcar em pó, ovos mexidos aveludados, bacon estaladiço, travessa de frutas frescas cortadas (meloa, morangos e laranjas) e croissants folhados.',
    highlights: ['Panquecas fofas com açúcar em pó', 'Ovos mexidos cremosos no ponto', 'Travessa de frutas da época frescas'],
    pairing: 'Perfeito para manhãs a dois em suítes e varandas com vista',
  },
  {
    id: 'pastéis-nata',
    title: 'Pastéis de Nata Estaladiços',
    category: 'Tradição Secular de Lisboa',
    priceTag: 'Incluído na Sunshine Box (€9,90)',
    image: '/images/gallery/pasteldenata.jpg',
    description: 'Folhado crocante em camadas finíssimas com creme de nata caramelizado no ponto certo, tépido e polvilhado de canela.',
    highlights: ['Fornadas matinais diárias', 'Massa folhada estaladiça', 'Creme aveludado e canela'],
    pairing: 'Harmoniza com café de especialidade ou galão cremoso',
  },
  {
    id: 'pastéis-bacalhau',
    title: 'Pastéis de Bacalhau Dourados',
    category: 'Petisco Artesanal Português',
    priceTag: 'Opção Tradicional',
    image: '/images/gallery/pastelinhodebacalhau.jpg',
    description: 'Receita caseira com bacalhau nobre desfiado à mão, batata aveludada e salsa fresca picada, fritos ao tom dourado perfeito.',
    highlights: ['Bacalhau nobre e batata fresca', 'Salsa aromática colhida no dia', 'Textura estaladiça por fora e macia por dentro'],
    pairing: 'Ideal como entrada ou acompanhamento salgado',
  },
  {
    id: 'sumo-vitamina-c',
    title: 'Sumo 100% Laranja do Algarve',
    category: 'Puro Sol de Portugal',
    priceTag: 'Em Todas as Nossas Boxes',
    image: '/images/gallery/menuvitaminaC.jpg',
    description: 'Laranjas colhidas no pomar do Algarve e espremidas na manhã da sua entrega às 06h00. Sem adição de água nem açúcares.',
    highlights: ['100% fruta pura e natural', 'Espremido a frio diariamente', 'Vitamina C e frescura imediata'],
    pairing: 'O despertar matinal essencial em todas as entregas',
  },
  {
    id: 'summer-baguette',
    title: 'Baguete Summer & Abacate Fresco',
    category: 'Opção Leve & Saudável',
    priceTag: 'Summer Light Box (€11,90)',
    image: '/images/gallery/menusummer.jpg',
    description: 'Baguete artesanal crocante com fatias generosas de abacate fresco, rábano roxo crocante, folhas verdes selecionadas e molho suave de ervas finas.',
    highlights: ['Abacate fresco fatiado', 'Rábano crocante e verdes selecionados', 'Nutritivo, leve e equilibrado'],
    pairing: 'Excelente com Sumo Detox e Granola Artesanal',
  },
];

interface MenuGallerySliderProps {
  onOpenBooking: () => void;
}

export const MenuGallerySlider: React.FC<MenuGallerySliderProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = MENU_GALLERY_PHOTOS[currentIndex];

  const handleNext = () => {
    ambientSound.playCupClick();
    setCurrentIndex((prev) => (prev + 1) % MENU_GALLERY_PHOTOS.length);
  };

  const handlePrev = () => {
    ambientSound.playCupClick();
    setCurrentIndex((prev) => (prev - 1 + MENU_GALLERY_PHOTOS.length) % MENU_GALLERY_PHOTOS.length);
  };

  const handleSelect = (index: number) => {
    ambientSound.playCupClick();
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MENU_GALLERY_PHOTOS.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  return (
    <div
      className="my-12 bg-white border border-amber-900/15 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-amber-900/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Carrossel de Especialidades & Sabores</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221a14]">
            Fotografias dos Nossos Pratos & Ingredientes
          </h3>
          <p className="text-sm text-[#5a4d43] mt-1 font-normal">
            Conheça ao detalhe o que chega quentinho e fresco à sua cama em Lisboa.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Foto anterior"
            className="p-2.5 rounded-full border border-amber-900/20 bg-[#faf7f2] hover:bg-amber-600 hover:text-white text-[#221a14] transition-all cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-bold text-amber-900 px-2">
            0{currentIndex + 1} / 0{MENU_GALLERY_PHOTOS.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Próxima foto"
            className="p-2.5 rounded-full border border-amber-900/20 bg-[#faf7f2] hover:bg-amber-600 hover:text-white text-[#221a14] transition-all cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Large Image Showcase */}
        <div className="lg:col-span-7 relative group">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-amber-50 border border-amber-900/15 shadow-md">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-in fade-in zoom-in-95 duration-400"
            />
            {/* Category Pill */}
            <div className="absolute top-4 left-4 bg-[#221a14]/90 backdrop-blur-md text-amber-300 text-xs font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm border border-amber-500/30">
              {current.category}
            </div>

            {/* Price Pill */}
            <div className="absolute bottom-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {current.priceTag}
            </div>
          </div>
        </div>

        {/* Slide Info & Booking Trigger */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-1">
              {current.category}
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#221a14] mb-3 leading-tight">
              {current.title}
            </h4>
            <p className="text-sm sm:text-base text-[#5a4d43] leading-relaxed font-normal mb-5">
              {current.description}
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-2 mb-5">
              {current.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4a3f36]">
                  <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Pairing Note */}
            <div className="bg-[#faf7f2] border border-amber-900/10 p-3.5 rounded-xl flex items-start gap-2.5">
              <Utensils className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
              <p className="text-xs text-[#5a4d43]">
                <strong className="text-[#221a14]">Sugestão:</strong> {current.pairing}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                ambientSound.playGoldenChime();
                onOpenBooking();
              }}
              className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-full transition-all duration-200 uppercase tracking-wider shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span>Pedir Esta Experiência</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="mt-8 pt-6 border-t border-amber-900/10 grid grid-cols-3 sm:grid-cols-6 gap-3">
        {MENU_GALLERY_PHOTOS.map((photo, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={photo.id}
              onClick={() => handleSelect(idx)}
              className={`group relative rounded-xl overflow-hidden aspect-4/3 border-2 transition-all cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isSelected
                  ? 'border-amber-600 ring-2 ring-amber-300 shadow-md scale-102'
                  : 'border-amber-900/10 opacity-70 hover:opacity-100 hover:border-amber-400'
              }`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                <span className="text-[10px] font-bold text-white line-clamp-1">
                  {photo.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
