/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Car, 
  Users, 
  RefreshCcw, 
  Trophy, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Settings,
  BarChart3,
  LogOut,
  Calendar,
  CreditCard,
  User,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Language = 'AZ' | 'EN' | 'RU' | 'عربي';

const translations = {
  AZ: {
    heroTitle: 'Lüks Avtomobillərin İcarəsi',
    heroSub: 'Premium nəqliyyat, premium xidmət. Azərbaycanın hər yerinə çatdırılma.',
    viewCars: 'MAŞINLARA BAX',
    latestModels: 'Ən Son Modellər',
    viewAll: 'Hamısına Bax',
    rentNow: 'İcarə et',
    fleet: 'Filo',
    satisfaction: 'MÜŞTƏRİ MƏMNUNİYYƏTİ',
    stats: { car: 'AVTOMOBİL', clients: 'MÜŞTƏRİ', happy: 'MƏMNUNİYYƏT', exp: 'İLLİK TƏCRÜBƏ' },
    nav: ['Ana Səhifə', 'Avtomobillər', 'Xidmətlər', 'Əlaqə', 'İcarə Şərtləri'],
    booking: {
      title: 'Rezervasiya',
      name: 'Ad və Soyad',
      phone: 'Telefon',
      date: 'Tarix',
      days: 'Gün sayı',
      confirm: 'Təsdiqlə',
      success: 'Sifarişiniz qəbul olundu! Sizinlə tezliklə əlaqə saxlanılacaq.'
    },
    servicesTitle: 'Xidmətlərimiz',
    services: [
      { title: 'Gündəlik İcarə', desc: 'Qısa müddətli səfərlər üçün ideal seçim.', icon: '🚗' },
      { title: 'Həftəlik İcarə', desc: 'Endirimli qiymətlərlə həftəlik icarə.', icon: '📆' },
      { title: 'Aylıq İcarə', desc: 'Uzunmüddətli icarə üçün ən yaxşı seçim.', icon: '📅' },
      { title: 'Hava Limanı', desc: 'Aeroportdan transfer xidməti.', icon: '✈️' },
      { title: 'Sürücü Xidməti', desc: 'Professional sürücü ilə premium xidmət.', icon: '🤵' },
      { title: 'Toy Karvanı', desc: 'Özəl günləriniz üçün lüks maşınlar.', icon: '💍' }
    ],
    termsTitle: 'İcarə Şərtləri',
    terms: [
      { title: 'Yaş Həddi', desc: 'Minimum 21 yaş və 2 illik sürücülük təcrübəsi.', icon: '👤' },
      { title: 'Sənədlər', desc: 'Şəxsiyyət vəsiqəsi və sürücülük vəsiqəsi.', icon: '📄' },
      { title: 'Sığorta', desc: 'KASKO və icbari sığorta daxildir.', icon: '🛡️' },
      { title: 'Ödəniş', desc: 'Nağd və ya kart ilə ödəniş mümkündür.', icon: '💳' }
    ]
  },
  EN: {
    heroTitle: 'Luxury Car Rental',
    heroSub: 'Premium transport, premium service. Delivery throughout Azerbaijan.',
    viewCars: 'VIEW CARS',
    latestModels: 'Latest Models',
    viewAll: 'View All',
    rentNow: 'Rent Now',
    fleet: 'Fleet',
    satisfaction: 'CUSTOMER SATISFACTION',
    stats: { car: 'CARS', clients: 'CLIENTS', happy: 'SATISFACTION', exp: 'YEARS EXP' },
    nav: ['Home', 'Cars', 'Services', 'Contact', 'Rental Terms'],
    booking: {
      title: 'Reservation',
      name: 'Full Name',
      phone: 'Phone',
      date: 'Date',
      days: 'Days',
      confirm: 'Confirm',
      success: 'Reservation received! We will contact you shortly.'
    },
    servicesTitle: 'Our Services',
    services: [
      { title: 'Daily Rental', desc: 'Ideal choice for short-term trips.', icon: '🚗' },
      { title: 'Weekly Rental', desc: 'Weekly rental with discounted prices.', icon: '📆' },
      { title: 'Monthly Rental', desc: 'The best choice for long-term rental.', icon: '📅' },
      { title: 'Airport Transfer', desc: 'Transfer service from the airport.', icon: '✈️' },
      { title: 'Driver Service', desc: 'Premium service with a professional driver.', icon: '🤵' },
      { title: 'Wedding Convoy', desc: 'Luxury cars for your special days.', icon: '💍' }
    ],
    termsTitle: 'Rental Terms',
    terms: [
      { title: 'Age Limit', desc: 'Minimum 21 years and 2 years driving experience.', icon: '👤' },
      { title: 'Documents', desc: 'ID card and driving license.', icon: '📄' },
      { title: 'Insurance', desc: 'CASCO and mandatory insurance included.', icon: '🛡️' },
      { title: 'Payment', desc: 'Payment in cash or by card is possible.', icon: '💳' }
    ]
  },
  RU: {
    heroTitle: 'Аренда Люкс Автомобилей',
    heroSub: 'Премиум транспорт, премиум сервис. Доставка по всему Азербайджану.',
    viewCars: 'ПОСМОТРЕТЬ МАШИНЫ',
    latestModels: 'Последние Модели',
    viewAll: 'Посмотреть Все',
    rentNow: 'Арендовать',
    fleet: 'Парк',
    satisfaction: 'УДОВЛЕТВОРЕННОСТЬ КЛИЕНТОВ',
    stats: { car: 'АВТОМОБИЛИ', clients: 'КЛИЕНТЫ', happy: 'УДОВЛЕТВОРЕННОСТЬ', exp: 'ЛЕТ ОПЫТА' },
    nav: ['Главная', 'Машины', 'Услуги', 'Контакты', 'Условия'],
    booking: {
      title: 'Бронирование',
      name: 'Имя и Фамилия',
      phone: 'Телефон',
      date: 'Дата',
      days: 'Количество дней',
      confirm: 'Подтвердить',
      success: 'Бронирование получено! Мы скоро с вами свяжемся.'
    },
    servicesTitle: 'Наши Услуги',
    services: [
      { title: 'Посуточная Аренда', desc: 'Идеальный выбор для краткосрочных поездок.', icon: '🚗' },
      { title: 'Еженедельная Аренда', desc: 'Аренда на неделю по сниженным ценам.', icon: '📆' },
      { title: 'Помесячная Аренда', desc: 'Лучший выбор для длительной аренды.', icon: '📅' },
      { title: 'Трансфер из Аэропорта', desc: 'Услуга трансфера из аэропорта.', icon: '✈️' },
      { title: 'Услуги Водителя', desc: 'Премиум сервис с профессиональным водителем.', icon: '🤵' },
      { title: 'Свадебный Кортеж', desc: 'Люксовые машины для ваших особых дней.', icon: '💍' }
    ],
    termsTitle: 'Условия Аренды',
    terms: [
      { title: 'Возрастное Ограничение', desc: 'Минимум 21 год и 2 года стажа вождения.', icon: '👤' },
      { title: 'Документы', desc: 'Удостоверение личности и водительские права.', icon: '📄' },
      { title: 'Страхование', desc: 'КАСКО и обязательное страхование включены.', icon: '🛡️' },
      { title: 'Оплата', desc: 'Возможна оплата наличными или картой.', icon: '💳' }
    ]
  },
  'عربي': {
    heroTitle: 'تأجير السيارات الفاخرة',
    heroSub: 'النقل المتميز والخدمة المتميزة. التوصيل في جميع أنحاء أذربيجان.',
    viewCars: 'عرض السيارات',
    latestModels: 'أحدث الموديلات',
    viewAll: 'عرض الكل',
    rentNow: 'استأجر الآن',
    fleet: 'أسطول',
    satisfaction: 'رضا العملاء',
    stats: { car: 'سيارة', clients: 'عميل', happy: 'رضا', exp: 'سنوات الخبرة' },
    nav: ['الرئيسية', 'السيارات', 'الخدمات', 'اتصل بنا', 'شروط الإيجار'],
    booking: {
      title: 'حجز',
      name: 'الاسم الكامل',
      phone: 'هاتف',
      date: 'تاريخ',
      days: 'أيام',
      confirm: 'تأكيد',
      success: 'تم استلام الحجز! سنتصل بك قريباً.'
    },
    servicesTitle: 'خدماتنا',
    services: [
      { title: 'إيجار يومي', desc: 'الخيار الأمثل للرحلات قصيرة المدى.', icon: '🚗' },
      { title: 'إيجار أسبوعي', desc: 'إيجار أسبوعي بأسعار مخفضة.', icon: '📆' },
      { title: 'إيجار شهري', desc: 'أفضل خيار للإيجار طويل المدى.', icon: '📅' },
      { title: 'نقل المطار', desc: 'خدمة النقل من المطار.', icon: '✈️' },
      { title: 'خدمة السائق', desc: 'خدمة ممتازة مع سائق محترف.', icon: '🤵' },
      { title: 'موكب زفاف', desc: 'سيارات فاخرة لأيامك الخاصة.', icon: '💍' }
    ],
    termsTitle: 'شروط الإيجار',
    terms: [
      { title: 'حد العمر', desc: 'الحد الأدنى 21 سنة وخبرة في القيادة لمدة سنتين.', icon: '👤' },
      { title: 'المستندات', desc: 'بطاقة الهوية ورخصة القيادة.', icon: '📄' },
      { title: 'التأمين', desc: 'يشمل التأمين الشامل والإلزامي.', icon: '🛡️' },
      { title: 'الدفع', desc: 'الدفع نقداً أو بالبطاقة ممكن.', icon: '💳' }
    ]
  }
};

// ==================== ANIMATED COUNTER ====================
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function App() {
  const [lang, setLang] = useState<Language>('AZ');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [imageInputType, setImageInputType] = useState<'url' | 'upload'>('upload');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  const carsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const termsRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLElement>(null);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'Nihad123') {
      setIsLoggedIn(true);
      setAdminPassword("");
    } else {
      alert(lang === 'AZ' ? 'Yanlış şifrə!' : 'Wrong password!');
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedCar(null);
    }, 3000);
  };

  const stats = [
    { label: t.stats.car, value: '9+', icon: <Car className="w-6 h-6" /> },
    { label: t.stats.clients, value: '1200+', icon: <Users className="w-6 h-6" /> },
    { label: t.stats.happy, value: '98%', icon: <RefreshCcw className="w-6 h-6" /> },
    { label: t.stats.exp, value: '8+', icon: <Trophy className="w-6 h-6" /> },
  ];

  const satStats = [
    { label: lang === 'AZ' ? 'REYTİNQ' : 'RATING', value: '4.9/5', sub: '★★★★☆', icon: <Star className="w-8 h-8 text-yellow-500" /> },
    { label: t.stats.clients, value: '1200+', icon: <Users className="w-8 h-8 text-blue-400" /> },
    { label: lang === 'AZ' ? 'TƏKRAR SİFARİŞ' : 'REORDER', value: '%98', icon: <RefreshCcw className="w-8 h-8 text-green-400" /> },
    { label: lang === 'AZ' ? 'İLLİK TƏCRÜBƏ' : 'YEARS EXP', value: '8', icon: <Trophy className="w-8 h-8 text-yellow-600" /> },
  ];

  const cars = [
    { id: 1, name: 'Mercedes-Benz S-Class', price: '450 AZN', img: 'https://images.unsplash.com/photo-1542362567-b052d007c0f1?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, name: 'Range Rover Vogue', price: '500 AZN', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, name: 'Porsche Cayenne GTS', price: '600 AZN', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Car className="text-black w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter leading-none">Caspian Rent</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">{lang === 'AZ' ? 'Premium Nəqliyyat' : 'Premium Transport'}</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex gap-8 text-sm font-medium">
              {t.nav.map((item, idx) => (
                <button 
                  key={item} 
                  onClick={() => {
                    if (idx === 0) window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (idx === 1) scrollTo(carsRef);
                    if (idx === 2) scrollTo(servicesRef);
                    if (idx === 3) scrollTo(contactRef);
                    if (idx === 4) scrollTo(termsRef);
                  }}
                  className={`hover:text-amber-500 transition-colors uppercase tracking-widest text-[11px] ${idx === 0 && !scrolled ? 'text-amber-500' : 'text-zinc-400'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2 border-l border-zinc-800 pl-8">
              {(['AZ', 'EN', 'RU', 'عربي'] as Language[]).map((l) => (
                <button 
                  key={l} 
                  onClick={() => setLang(l)}
                  className={`text-[10px] px-2 py-1 rounded transition-colors font-bold ${lang === l ? 'bg-amber-500 text-black' : 'text-zinc-500 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <button className="lg:hidden text-zinc-400 hover:text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-black p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <div className="text-amber-500 font-bold">MENU</div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-zinc-400 hover:text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-12 text-3xl font-light">
              {t.nav.map((item, idx) => (
                <button 
                  key={item} 
                  onClick={() => {
                    if (idx === 0) window.scrollTo({ top: 0, behavior: 'smooth' });
                    if (idx === 1) scrollTo(carsRef);
                    if (idx === 2) scrollTo(servicesRef);
                    if (idx === 3) scrollTo(contactRef);
                    if (idx === 4) scrollTo(termsRef);
                    setIsMenuOpen(false);
                  }} 
                  className="text-left hover:text-amber-500 transition-colors border-b border-zinc-900 pb-4"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-4 gap-2 mb-10">
              {(['AZ', 'EN', 'RU', 'عربي'] as Language[]).map((l) => (
                <button 
                  key={l} 
                  onClick={() => { setLang(l); setIsMenuOpen(false); }}
                  className={`py-4 rounded-xl border ${lang === l ? 'bg-amber-500 border-amber-500 text-black' : 'border-zinc-800 text-zinc-400'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={homeRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-black-car-driving-through-a-tunnel-at-night-34588-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-[#0a0a0a]/10 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-500 font-black tracking-[0.5em] mb-4 text-xs uppercase">{lang === 'AZ' ? 'Azərbaycanda Nömrə 1' : 'Number 1 in Azerbaijan'}</p>
            <h2 className="text-6xl md:text-[120px] font-black tracking-tighter mb-8 leading-[0.9] text-glow">
              {t.heroTitle.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? 'text-amber-500 block' : 'block'}>{word} </span>
              ))}
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.heroSub}
            </p>
            <button 
              onClick={() => scrollTo(carsRef)}
              className="bg-amber-500 hover:bg-white text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl shadow-amber-500/20 hover:scale-105"
            >
              {t.viewCars}
            </button>
          </motion.div>
        </div>

        {/* Quick Stats Overlay */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-zinc-800/30 p-8 rounded-3xl text-center group hover:border-amber-500/50 transition-all duration-500"
            >
              <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                <AnimatedCounter end={parseInt(stat.value)} suffix={stat.value.replace(/[0-9]/g, '')} />
              </div>
              <div className="text-[9px] text-zinc-500 uppercase tracking-[0.4em] font-black">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section ref={carsRef} className="py-40 bg-[#0d0d0d] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <p className="text-amber-500 font-black tracking-[0.4em] uppercase text-[10px] mb-4">{t.fleet}</p>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter">{t.latestModels}</h3>
            </div>
            <button className="mt-8 md:mt-0 flex items-center gap-3 text-zinc-400 hover:text-amber-500 transition-all group font-black uppercase tracking-widest text-xs">
              {t.viewAll} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.map((car, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#111111] rounded-[40px] overflow-hidden border border-zinc-900 shadow-2xl"
              >
                <div className="aspect-[16/11] overflow-hidden relative">
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 right-6">
                    <span className="bg-amber-500/90 backdrop-blur-md text-black text-[10px] font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest">
                      {car.price}/Gün
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-black mb-6 tracking-tight">{car.name}</h4>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-3 text-zinc-500">
                      <Settings className="w-4 h-4 text-amber-500/50" />
                      <span className="text-[11px] font-black uppercase tracking-widest">Avtomat</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500">
                      <RefreshCcw className="w-4 h-4 text-amber-500/50" />
                      <span className="text-[11px] font-black uppercase tracking-widest">Benzin</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCar(car)}
                    className="w-full bg-transparent border-2 border-zinc-800 hover:border-amber-500 hover:bg-amber-500 hover:text-black py-5 rounded-2xl font-black transition-all uppercase tracking-[0.2em] text-[10px]"
                  >
                    {t.rentNow}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-40 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{t.servicesTitle}</h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-zinc-900/30 border border-zinc-800/50 rounded-[35px] hover:border-amber-500/50 transition-all group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">{service.title}</h4>
                <p className="text-zinc-500 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Terms Section */}
      <section ref={termsRef} className="py-40 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{t.termsTitle}</h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.terms.map((term, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-black/40 border border-zinc-800/30 rounded-[40px] text-center"
              >
                <div className="text-5xl mb-8">{term.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-amber-500 uppercase tracking-widest">{term.title}</h4>
                <p className="text-zinc-400 text-sm font-medium leading-relaxed">{term.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-40 relative bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <p className="text-amber-500 font-black tracking-[0.4em] uppercase text-[10px] mb-6">Testimonials</p>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase italic">
              {t.satisfaction}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {satStats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-[35%] border border-zinc-900 bg-zinc-900/20 flex items-center justify-center mb-10 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:scale-110 transition-all duration-700 shadow-2xl">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {stat.icon && <span className="group-hover:text-black transition-colors">{stat.icon}</span>}
                  </div>
                </div>
                <div className="text-5xl font-black mb-3 tracking-tighter group-hover:text-amber-500 transition-colors">
                  <AnimatedCounter 
                    end={parseFloat(stat.value.replace(/[^0-9.]/g, ''))} 
                    suffix={stat.value.replace(/[0-9.]/g, '')} 
                  />
                </div>
                {stat.sub && <div className="text-amber-500 mb-3 tracking-[0.4em] text-xs font-black">{stat.sub}</div>}
                <div className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] font-black group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={contactRef} className="bg-[#050505] py-32 border-t border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <Car className="text-black w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black tracking-tighter">Caspian Rent</h2>
            </div>
            <p className="text-zinc-500 text-sm leading-8 mb-10 font-medium">
              Azerbaijan\'s premier luxury car rental service. Since 2018, we provide unmatched elegance and performance for our elite clientele.
            </p>
            <div className="flex gap-5">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl border border-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all group">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-amber-500">{lang === 'AZ' ? 'TEZ KEÇİDLƏR' : 'QUICK LINKS'}</h4>
            <ul className="space-y-6 text-zinc-500 text-[13px] font-bold">
              {['Haqqımızda', 'Xidmətlər', 'Avtopark', 'Tərəfdaşlarımız', 'Əlaqə'].map((item, idx) => (
                <li key={item}><button onClick={() => idx === 4 ? scrollTo(contactRef) : null} className="hover:text-amber-500 transition-colors uppercase tracking-widest">{item}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-amber-500">{lang === 'AZ' ? 'XİDMƏTLƏR' : 'SERVICES'}</h4>
            <ul className="space-y-6 text-zinc-500 text-[13px] font-bold">
              {['Hava limanı transferi', 'Sürücü ilə icarə', 'Toy karvanı', 'Korporativ icarə'].map(item => (
                <li key={item}><button className="hover:text-amber-500 transition-colors uppercase tracking-widest text-left">{item}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-amber-500">{lang === 'AZ' ? 'ƏLAQƏ' : 'CONTACT'}</h4>
            <ul className="space-y-8 text-zinc-500 text-[13px] font-bold">
              <li className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <span className="leading-6">Baku, Azerbaijan,<br />Nizami str. 10</span>
              </li>
              <li>
                <a href="tel:+994501234567" className="flex gap-5 items-center group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-amber-500 transition-all shrink-0">
                    <Phone className="w-5 h-5 text-amber-500 group-hover:text-black transition-colors" />
                  </div>
                  <span className="group-hover:text-white transition-colors">+994 50 123 45 67</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@caspianrent.az" className="flex gap-5 items-center group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-amber-500 transition-all shrink-0">
                    <Mail className="w-5 h-5 text-amber-500 group-hover:text-black transition-colors" />
                  </div>
                  <span className="group-hover:text-white transition-colors">info@caspianrent.az</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Secret Admin Button */}
        <div className="mt-40 pt-16 border-t border-zinc-900 flex flex-col items-center">
          <p className="text-zinc-800 text-[10px] font-black uppercase tracking-[0.5em] mb-12">© 2026 Caspian Rent. All Excellence Reserved.</p>
          
          <button 
            onClick={() => { setIsAdminOpen(true); setIsLoggedIn(false); }}
            className="opacity-[0.03] hover:opacity-100 hover:text-amber-500 transition-all text-[10px] uppercase tracking-[1em] py-4 px-8 border border-white/10 rounded-full"
          >
            ADMIN ACCESS
          </button>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#111111] border border-white/5 rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => { setSelectedCar(null); setBookingSuccess(false); }}
                className="absolute top-8 right-8 text-zinc-500 hover:text-white z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="p-12 border-r border-white/5">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-8">
                    <Calendar className="text-black w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4">{t.booking.title}</h3>
                  <p className="text-zinc-500 text-sm font-medium mb-10">{selectedCar.name}</p>
                  
                  {bookingSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-amber-500 text-sm font-black uppercase tracking-widest leading-relaxed"
                    >
                      <CheckCircle2 className="w-12 h-12 mb-4" />
                      {t.booking.success}
                    </motion.div>
                  ) : (
                    <form onSubmit={handleBooking} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-zinc-500">{t.booking.name}</label>
                        <input required type="text" className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-sm focus:border-amber-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-zinc-500">{t.booking.phone}</label>
                        <input required type="tel" placeholder="+994" className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-sm focus:border-amber-500 outline-none transition-all" />
                      </div>
                      <button className="w-full bg-amber-500 text-black font-black py-5 rounded-2xl uppercase tracking-widest text-[11px] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-amber-500/10 mt-4">
                        {t.booking.confirm}
                      </button>
                    </form>
                  )}
                </div>
                <div className="hidden md:block relative">
                   <img src={selectedCar.img} className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-gradient-to-l from-black/0 to-[#111111]" />
                   <div className="absolute bottom-12 left-12">
                      <div className="text-amber-500 text-xs font-black uppercase tracking-widest mb-2">Price</div>
                      <div className="text-4xl font-black tracking-tighter">{selectedCar.price}</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Panel Overlay */}
      <AnimatePresence>
        {isAdminOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6"
          >
            <div className="bg-[#0d0d0d] border border-white/5 p-12 rounded-[50px] w-full max-w-5xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setIsAdminOpen(false)}
                className="absolute top-10 right-10 text-zinc-500 hover:text-white transition-colors"
                aria-label="Admin panelini bağla"
              >
                <X className="w-8 h-8" />
              </button>
              
              {!isLoggedIn ? (
                <div className="max-w-md mx-auto py-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-[30%] flex items-center justify-center shadow-2xl border border-white/5">
                      <ShieldCheck className="text-amber-500 w-9 h-9" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black tracking-tighter uppercase">{lang === 'AZ' ? 'Giriş' : 'Login'}</h3>
                      <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.2em]">{lang === 'AZ' ? 'SİSTEM İDARƏETMƏSİ' : 'SYSTEM CONTROL'}</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleLogin} className="space-y-10">
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600">Username</label>
                      <input 
                        type="text" 
                        defaultValue="admin"
                        className="w-full bg-black border-2 border-zinc-900 rounded-3xl px-8 py-6 focus:border-amber-500 outline-none transition-all font-bold text-sm tracking-widest"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600">Key Phrase</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="w-full bg-black border-2 border-zinc-900 rounded-3xl px-8 py-6 focus:border-amber-500 outline-none transition-all font-bold text-sm tracking-widest"
                      />
                    </div>
                    <button className="w-full bg-white text-black font-black py-7 rounded-[30px] uppercase tracking-[0.4em] text-[11px] shadow-2xl shadow-white/5 hover:bg-amber-500 transition-all transform hover:-translate-y-1">
                      {lang === 'AZ' ? 'AVTORİZASIYA' : 'AUTHORIZE'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-6">
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center mb-16 border-b border-white/5 pb-10">
                    <h3 className="text-3xl font-black tracking-tight text-amber-500 uppercase">Admin Panel</h3>
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="px-8 py-3 border border-zinc-800 rounded-lg text-zinc-500 hover:text-white hover:border-zinc-500 transition-all font-bold uppercase text-[11px] tracking-widest"
                    >
                      Çıxış
                    </button>
                  </div>

                  {/* Add New Car Form Section */}
                  <div className="mb-20">
                    <div className="flex items-center gap-3 mb-10">
                      <div className="text-amber-500 text-xl">+</div>
                      <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-amber-500">YENİ MAŞIN</h4>
                    </div>

                    <div className="space-y-10">
                      {/* Image Input Tabs */}
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => setImageInputType('url')}
                          className={`py-5 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all border ${imageInputType === 'url' ? 'bg-amber-500 text-black border-amber-500' : 'bg-black text-zinc-600 border-zinc-900 group-hover:border-zinc-700'}`}
                        >
                          URL
                        </button>
                        <button 
                          onClick={() => setImageInputType('upload')}
                          className={`py-5 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all border ${imageInputType === 'upload' ? 'bg-amber-500 text-black border-amber-500' : 'bg-black text-zinc-600 border-zinc-900'}`}
                        >
                          Şəkillər yüklə
                        </button>
                      </div>

                      {/* Upload Area */}
                      <div className="w-full">
                        <div className="w-40 h-40 border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-zinc-600 hover:border-amber-500 hover:text-amber-500 transition-all cursor-pointer group">
                          <div className="text-4xl font-light mb-2">+</div>
                          <span className="text-[10px] font-black uppercase tracking-widest">Şəkil əlavə et</span>
                        </div>
                        <p className="mt-6 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">0 şəkil əlavə edildi (min: 1, tövsiyə: 4-5)</p>
                      </div>

                      {/* Main Inputs Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <input type="text" placeholder="Marka/Model" className="bg-black border border-zinc-900 rounded-xl p-5 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-700 font-medium" />
                        <input type="text" placeholder="Qiymət (₼)" className="bg-black border border-zinc-900 rounded-xl p-5 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-700 font-medium" />
                        <input type="text" placeholder="2023" className="bg-black border border-zinc-900 rounded-xl p-5 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-700 font-medium font-mono" />
                        <input type="text" placeholder="5" className="bg-black border border-zinc-900 rounded-xl p-5 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-700 font-medium font-mono" />
                      </div>

                      {/* Selects Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <select className="bg-black border border-zinc-900 rounded-xl p-5 text-sm focus:border-amber-500 outline-none transition-all text-zinc-300 font-medium appearance-none">
                          <option>Benzin</option>
                          <option>Dizel</option>
                          <option>Hibrid</option>
                        </select>
                        <select className="bg-black border border-zinc-900 rounded-xl p-5 text-sm focus:border-amber-500 outline-none transition-all text-zinc-300 font-medium appearance-none">
                          <option>Avtomat</option>
                          <option>Mexaniki</option>
                        </select>
                        <select className="bg-black border border-zinc-900 rounded-xl p-5 text-sm focus:border-amber-500 outline-none transition-all text-zinc-300 font-medium appearance-none">
                          <option>Ekonom</option>
                          <option>Biznes</option>
                          <option>Premium</option>
                        </select>
                      </div>

                      <textarea placeholder="Açıqlama" className="w-full bg-black border border-zinc-900 rounded-xl p-5 text-sm focus:border-amber-500 outline-none transition-all placeholder:text-zinc-700 font-medium min-h-[150px]"></textarea>
                    </div>
                  </div>

                  {/* Stats & Fleet Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                      { l: 'Revenue', v: '14,200 AZN', i: <CreditCard />, c: 'text-green-500' },
                      { l: 'Bookings', v: '24', i: <Calendar />, c: 'text-blue-500' },
                      { l: 'Visits', v: '4,892', i: <BarChart3 />, c: 'text-purple-500' }
                    ].map((s, idx) => (
                      <div key={idx} className="bg-black/40 border border-white/5 p-10 rounded-[40px] hover:border-amber-500/20 transition-all">
                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${s.c}`}>
                          {s.i}
                        </div>
                        <div className="text-4xl font-black mb-2 tracking-tighter">{s.v}</div>
                        <div className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-500">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-2 gap-10">
                    <div className="bg-black/40 border border-white/5 rounded-[40px] p-10">
                      <h4 className="text-sm font-black uppercase tracking-[0.4em] mb-10 text-zinc-500">Recent Activity</h4>
                      <div className="space-y-8">
                        {[
                          { u: 'Nihad H.', a: 'booked Mercedes S-Class', t: '2 mins ago' },
                          { u: 'Elena V.', a: 'requested support', t: '45 mins ago' },
                          { u: 'Ali M.', a: 'cancelled Range Rover', t: '1 hour ago' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-6 last:border-0 last:pb-0">
                            <div className="flex gap-4 items-center">
                              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 overflow-hidden flex items-center justify-center text-[10px] font-black">
                                {item.u.split(' ')[0][0]}{item.u.split(' ')[1][0]}
                              </div>
                              <div>
                                  <span className="text-sm font-black block">{item.u}</span>
                                  <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest">{item.a}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">{item.t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded-[40px] p-10">
                      <div className="flex justify-between items-center mb-10">
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-500">Fleet Status</h4>
                        <button className="text-amber-500 text-[10px] font-black uppercase tracking-widest border border-amber-500/20 px-4 py-2 rounded-full hover:bg-amber-500 hover:text-black transition-all">Add Car</button>
                      </div>
                      <div className="space-y-6">
                        {cars.map((car) => (
                          <div key={car.id} className="flex items-center justify-between p-4 bg-zinc-900/40 rounded-3xl border border-white/5">
                            <div className="flex items-center gap-4">
                              <img src={car.img} className="w-12 h-12 rounded-xl object-cover" />
                              <div>
                                <div className="text-sm font-black">{car.name}</div>
                                <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{car.price}</div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="p-2 hover:text-amber-500 transition-colors"><Settings className="w-4 h-4" /></button>
                              <div className="w-2 h-2 rounded-full bg-green-500 self-center ml-2 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-center mt-12 text-[10px] text-zinc-800 uppercase tracking-[0.5em] font-black">
                ENCRYPTED ACCESS ONLY • INTERNAL SYSTEM
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
