export interface Car {
  id: number;
  name: string;
  price: number;
  img: string;
  category: 'SUV' | 'Sedan' | 'Sport' | 'Business';
  specs: {
    engine: string;
    hp: number;
    seats: number;
    transmission: 'Automatic' | 'Manual';
  };
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class S500',
    price: 450,
    img: 'https://images.unsplash.com/photo-1542362567-b052d007c0f1?q=80&w=2070&auto=format&fit=crop',
    category: 'Business',
    specs: { engine: '3.0L V6', hp: 429, seats: 5, transmission: 'Automatic' }
  },
  {
    id: 2,
    name: 'Range Rover Vogue HSE',
    price: 500,
    img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
    category: 'SUV',
    specs: { engine: '3.0L Turbo', hp: 395, seats: 5, transmission: 'Automatic' }
  },
  {
    id: 3,
    name: 'Porsche Cayenne GTS',
    price: 600,
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070',
    category: 'SUV',
    specs: { engine: '4.0L V8', hp: 453, seats: 5, transmission: 'Automatic' }
  },
  {
    id: 4,
    name: 'Bentley Continental GT',
    price: 900,
    img: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop',
    category: 'Sport',
    specs: { engine: '6.0L W12', hp: 626, seats: 4, transmission: 'Automatic' }
  },
  {
    id: 5,
    name: 'BMW 7 Series G11',
    price: 400,
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop',
    category: 'Business',
    specs: { engine: '3.0L I6', hp: 335, seats: 5, transmission: 'Automatic' }
  },
  {
    id: 6,
    name: 'Lamborghini Urus',
    price: 1200,
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop',
    category: 'Sport',
    specs: { engine: '4.0L V8 Bi-Turbo', hp: 641, seats: 5, transmission: 'Automatic' }
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Tural Məmmədov",
    role: "Biznesmen",
    content: "Caspian Rent hər zaman lüks və keyfiyyətin ünvanıdır. S-Class rezervasiya etdim, hər şey mükəmməl idi.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Elena Petrova",
    role: "Turist",
    content: "Baku is beautiful and driving Range Rover made it feel even more special. Great service!",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "John Smith",
    role: "CEO",
    content: "Professional drivers and top-notch fleet. Highly recommended for corporate needs.",
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

export const faqs = [
  {
    question: { AZ: "İcarə üçün hansı sənədlər lazımdır?", EN: "What documents are needed for rental?", RU: "Какие документы нужны для аренды?" },
    answer: { AZ: "Şəxsiyyət vəsiqəsi və sürücülük vəsiqəsi kifayətdir.", EN: "ID card and driving license are enough.", RU: "Удостоверение личности и водительские права достаточно." }
  },
  {
    question: { AZ: "Depozit tələb olunur?", EN: "Is a deposit required?", RU: "Требуется ли депозит?" },
    answer: { AZ: "Bəli, avtomobildən asılı olaraq depozit tələb oluna bilər.", EN: "Yes, a deposit may be required depending on the car.", RU: "Да, в зависимости от автомобиля может потребоваться депозит." }
  },
  {
    question: { AZ: "Sığorta daxildir?", EN: "Is insurance included?", RU: "Is insurance included?" },
    answer: { AZ: "Bəli, bütün maşınlar KASKO sığortalıdır.", EN: "Yes, all cars have CASCO insurance.", RU: "Да, все машины застрахованы КАСКО." }
  }
];
