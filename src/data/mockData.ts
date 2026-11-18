import { BreakfastBox, MenuItemAddon, MorningScenario } from '../types';

import heroPlane from '../assets/images/hero_plane_arrival_1787298950276.jpg';
import lisbonAerial from '../assets/images/lisbon_aerial_sunrise_1787298963334.jpg';
import lisbonRoom from '../assets/images/lisbon_room_morning_1787298977080.jpg';
import portugueseBreakfast from '../assets/images/portuguese_breakfast_bed_1787298996710.jpg';
import lisbonBalcony from '../assets/images/lisbon_morning_moment_1787299013238.jpg';
import classicBoxImg from '../assets/images/menu_classic_box_1787299034697.jpg';
import deluxeBrunchImg from '../assets/images/menu_deluxe_brunch_1787299051374.jpg';

export const STORY_IMAGES = {
  heroPlane,
  lisbonAerial,
  lisbonRoom,
  portugueseBreakfast,
  lisbonBalcony,
  classicBox: classicBoxImg,
  deluxeBrunch: deluxeBrunchImg,
};

export const BREAKFAST_BOXES: BreakfastBox[] = [
  {
    id: 'menu-vitamina-c',
    name: 'Menu Vitamina C',
    portugueseSubtitle: 'Frescura, Energia & Vitalidade',
    tagline: 'Sumo de laranja fresco, torta caseira e croissants recheados',
    price: 10.90,
    serves: '1–2 Pessoas',
    category: 'vitality',
    image: classicBoxImg,
    popular: true,
    description: 'Um despertar cheio de frescura e sabor com sumo de laranja natural, torta de laranja caseira húmida, quiche artesanal de cogumelos e croissants recheados com queijo cottage e kiwi.',
    highlights: ['Sumo de Laranja Natural', 'Torta de Laranja Caseira', 'Quiche de Cogumelos', 'Croissants recheados c/ Queijo Cottage e Kiwi'],
    items: [
      { name: 'Sumo de Laranja Natural', description: 'Espremido na manhã com laranjas frescas e doces' },
      { name: 'Torta de Laranja Caseira', description: 'Receita tradicional húmida e aromática' },
      { name: 'Quiche de Cogumelos', description: 'Massa estaladiça com recheio cremoso de cogumelos frescos' },
      { name: 'Croissants com Queijo Cottage e Kiwi', description: 'Croissants folhados recheados com kiwi fresco e queijo cottage suave' },
    ],
  },
  {
    id: 'menu-portugues',
    name: 'Menu Português',
    portugueseSubtitle: 'O Clássico Tradicional',
    tagline: 'Tradição pura com pastel de nata e pastel de bacalhau',
    price: 9.90,
    serves: '1 Pessoa',
    category: 'heritage',
    image: portugueseBreakfast,
    popular: true,
    description: 'A essência dos pequenos-almoços e lanches portugueses: leite com chocolate reconfortante, pão de mistura fresco com presunto selecionado, pastel de bacalhau dourado e o icónico pastel de nata.',
    highlights: ['Leite com Chocolate', 'Pão de Mistura c/ Presunto', 'Pastel de Bacalhau Tradicional', 'Pastel de Nata'],
    items: [
      { name: 'Leite com Chocolate', description: 'Bebida reconfortante e clássica' },
      { name: 'Pão de Mistura com Presunto', description: 'Pão rústico de padaria com fatias finas de presunto' },
      { name: 'Pastel de Bacalhau', description: 'Frito na hora, dourado e estaladiço com bacalhau e salsa' },
      { name: 'Pastel de Nata', description: 'Massa folhada estaladiça com creme caramelizado' },
    ],
  },
  {
    id: 'menu-brunch',
    name: 'Menu Brunch',
    portugueseSubtitle: 'Banquete Completo & Generoso',
    tagline: 'Ovos com farinheira, salgadinhos artesanais e tarte de maçã',
    price: 15.90,
    serves: '1–2 Pessoas',
    category: 'luxury',
    image: deluxeBrunchImg,
    popular: true,
    description: 'Um banquete completo para um despertar sem pressa: sumo de laranja natural, ovos mexidos cremosos com farinheira tradicional, mini tostas com patê de sardinha, rissol de camarão, rissol de leitão e tarte caseira de maçã.',
    highlights: ['Ovos Mexidos c/ Farinheira', 'Rissol de Camarão & Rissol de Leitão', 'Patê de Sardinha c/ Mini Tostas', 'Tarte Caseira de Maçã + Sumo'],
    items: [
      { name: 'Sumo de Laranja Natural', description: 'Sumo fresco espremido ao acordar' },
      { name: 'Ovos Mexidos com Farinheira', description: 'Ovos cremosos preparados com farinheira tradicional portuguesa' },
      { name: 'Mini Tostas & Patê de Sardinha', description: 'Tostas estaladiças com patê de sardinha artesanal' },
      { name: 'Rissol de Camarão & Rissol de Leitão', description: 'Salgados tradicionais com recheio rico e casquinha crocante' },
      { name: 'Tarte Caseira de Maçã', description: 'Fatia generosa de tarte de maçã com canela' },
    ],
  },
  {
    id: 'menu-summer',
    name: 'Menu Summer',
    portugueseSubtitle: 'Leve, Cítrico & Refrescante',
    tagline: 'Sumo de limão fresco, pasta de atum e torta de limão',
    price: 10.90,
    serves: '1 Pessoa',
    category: 'summer',
    image: lisbonBalcony,
    popular: false,
    description: 'Perfeito para manhãs soalheiras de verão: sumo de limão fresco e revigorante, queijo fresco temperado, torrada crocante com pasta caseira de atum e alface fresca, finalizado com torta de limão.',
    highlights: ['Sumo de Limão Fresco', 'Queijo Fresco Temperado', 'Torrada c/ Pasta de Atum e Alface', 'Torta Caseira de Limão'],
    items: [
      { name: 'Sumo de Limão Fresco', description: 'Limonada natural refrescante e revigorante' },
      { name: 'Queijo Fresco Temperado', description: 'Queijo fresco com fio de azeite, pimenta e ervas' },
      { name: 'Torrada com Pasta de Atum e Alface', description: 'Pão torrado com pasta cremosa de atum e folhas de alface fresca' },
      { name: 'Torta de Limão Caseira', description: 'Sobremesa cítrica, fresca e equilibrada' },
    ],
  },
];

export const MENU_ADDONS: MenuItemAddon[] = [
  {
    id: 'bifana-portuguesa',
    name: 'Bifana à Portuguesa no Pão',
    description: 'Bifana tenra marinada em molho tradicional no pão rústico',
    price: 4.90,
    category: 'food',
  },
  {
    id: 'prego-pao-pickles',
    name: 'Prego no Pão c/ Pickles',
    description: 'Carne suculenta com alho, mostarda e pickles no pão crocante',
    price: 4.90,
    category: 'food',
  },
  {
    id: 'croquete-vitela',
    name: 'Croquete de Vitela',
    description: 'Croquete artesanal com recheio cremoso e carne de vitela desfiada',
    price: 2.20,
    category: 'food',
  },
  {
    id: 'rissol-leitao',
    name: 'Rissol de Leitão',
    description: 'Rissol estaladiço com recheio farto de leitão tradicional',
    price: 3.90,
    category: 'food',
  },
  {
    id: 'pastel-nata-extra',
    name: 'Pastel de Nata',
    description: 'Pastel de nata estaladiço com canela',
    price: 1.80,
    category: 'bakery',
  },
  {
    id: 'pastel-bacalhau-extra',
    name: 'Pastel de Bacalhau',
    description: 'Pastel de bacalhau tradicional frito e dourado',
    price: 1.90,
    category: 'food',
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    description: 'Lata 330ml fresca',
    price: 1.90,
    category: 'beverage',
  },
  {
    id: 'fanta',
    name: 'Fanta',
    description: 'Lata 330ml fresca',
    price: 1.90,
    category: 'beverage',
  },
  {
    id: 'agua',
    name: 'Água',
    description: 'Garrafa 500ml',
    price: 1.50,
    category: 'beverage',
  },
];

export const MORNING_SCENARIOS: MorningScenario[] = [
  {
    id: 'romantic-escape',
    title: 'The Romantic Getaway',
    category: 'For Couples',
    quote: 'No alarms. Just the sun touching the terracotta roofs and breakfast in bed.',
    story: 'You stayed up listening to Fado in Alfama. Today there is zero reason to leave the sheets. Sip chilled mimosas, share warm pastéis de nata, and watch the Tagus River glisten in the morning haze.',
    idealFor: 'Couples on honeymoons, anniversaries, and romantic Lisbon weekends',
    recommendedBoxId: 'menu-brunch',
    image: lisbonBalcony,
    locationTip: 'Best enjoyed with open French balcony doors in Alfama, Chiado, or Príncipe Real.',
  },
  {
    id: 'airbnb-slow-living',
    title: 'The Slow Airbnb Morning',
    category: 'For Independent Travelers',
    quote: 'The luxury of feeling at home in a foreign city.',
    story: 'Waking up in a sunlit Lisbon loft. The gentle sound of the yellow Tram 28 outside. Instead of hunting for a crowded cafe queue, gourmet Portuguese breakfast arrives silently at your door.',
    idealFor: 'Travelers staying in boutique Airbnbs and holiday rentals wanting effortless ease',
    recommendedBoxId: 'menu-portugues',
    image: lisbonRoom,
    locationTip: 'We deliver directly to your apartment door with custom door codes.',
  },
  {
    id: 'celebration-milestone',
    title: 'Birthday & Anniversary Mornings',
    category: 'Special Occasions',
    quote: 'Start a celebration before feet even touch the floor.',
    story: 'Surprise your partner or travel companion with a grand brunch spread, delicious savoury rissóis, warm pastéis de nata, and fresh citrus juices.',
    idealFor: 'Birthdays, proposals, and landmark celebrations in Lisbon',
    recommendedBoxId: 'menu-brunch',
    image: deluxeBrunchImg,
    locationTip: 'Optional handwritten greeting message included free.',
  },
  {
    id: 'remote-work-wellness',
    title: 'The Mindful Lisbon Workcation',
    category: 'For Remote Nomads',
    quote: 'High energy, pristine nutrition, zero friction.',
    story: 'Fuel your morning meetings with natural freshly squeezed orange juice, artisan quiche, cottage cheese croissants, and homemade orange tart.',
    idealFor: 'Digital nomads, business travelers, and wellness-focused creators',
    recommendedBoxId: 'menu-vitamina-c',
    image: classicBoxImg,
    locationTip: 'Select exact 15-minute delivery windows to fit around morning calls.',
  },
];

export const LISBON_NEIGHBORHOODS = [
  { id: 'alfama', name: 'Alfama & Graça', description: 'Historic cobblestones, Fado hills & river views' },
  { id: 'chiado', name: 'Chiado & Bairro Alto', description: 'Bohemian heart, chic apartments & opera squares' },
  { id: 'baixa', name: 'Baixa & Rossio', description: 'Grand Pombaline avenues & central boutique hotels' },
  { id: 'principe-real', name: 'Príncipe Real & Santos', description: 'Leafy gardens, concept lofts & antique mansions' },
  { id: 'avenida', name: 'Avenida da Liberdade', description: 'Luxury boulevard hotels & 5-star suites' },
  { id: 'estrada', name: 'Estrela & Lapa', description: 'Quiet embassy quarters, palace gardens & townhouses' },
  { id: 'belem', name: 'Belém & Restelo', description: 'Monumental riverside promenade & historic villas' },
  { id: 'parque-nacoes', name: 'Parque das Nações', description: 'Modern waterfront apartments & river towers' },
  { id: 'cascais', name: 'Cascais & Estoril (Express)', description: 'Atlantic coast villas & luxury seaside suites' },
];

export const LOCAL_PRODUCERS = [
  {
    name: 'Queijaria das Ilhas',
    product: 'São Jorge DOP 12-Month Raw Cheese',
    location: 'São Jorge Island, Azores',
    description: 'Crafted by third-generation cheesemakers using high-altitude volcanic pasture milk.',
  },
  {
    name: 'Padaria da Ribeira',
    product: 'Slow-Fermentation Sourdough & Pastéis',
    location: 'Lisboa, Portugal',
    description: 'Naturally leavened with wild yeast cultures, wood-fired at 5:00 AM every single morning.',
  },
  {
    name: 'Quinta dos Pomares',
    product: 'Valencia Late Sweet Oranges',
    location: 'Silves, Algarve',
    description: 'Sun-drenched citrus hand-picked and cold-pressed without added sugar or preservatives.',
  },
];

export const GUEST_REVIEWS = [
  {
    name: 'Emma & Charlotte',
    origin: 'London, UK',
    stay: 'Boutique Airbnb in Alfama',
    rating: 5,
    comment: 'Waking up to warm pastéis de nata and fresh orange juice on our balcony overlooking the red rooftops was the absolute highlight of our Lisbon trip. Truly exceptional service.',
  },
  {
    name: 'Marc & Helena',
    origin: 'Munich, Germany',
    stay: 'Hotel Heritage Avenida Liberdade',
    rating: 5,
    comment: 'The Menu Brunch was perfection. Freshly made scrambled eggs with farinheira and delicate pastries right in our room. Zero stress, 100% gourmet luxury.',
  },
  {
    name: 'Sofia & Lucas',
    origin: 'São Paulo, Brazil',
    stay: 'Apartment in Príncipe Real',
    rating: 5,
    comment: 'No waiting in long bakery queues. They followed our building door code instructions perfectly and breakfast was waiting outside our door at 8:30 sharp.',
  },
];

