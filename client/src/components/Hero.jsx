import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { BRAND, THEME } from '../config/theme';

const Hero = () => {
  const { navigate } = useAppContext();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/rooms?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
  }

  return (
    <div 
      className='relative flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-screen overflow-hidden'
      style={{ 
        background: `linear-gradient(135deg, ${THEME.colors.primary} 0%, ${THEME.colors.primaryLight} 50%, ${THEME.colors.primary} 100%)`
      }}
    >

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: `${THEME.colors.accent}20` }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: `${THEME.colors.secondary}20` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl" style={{ backgroundColor: `${THEME.colors.primaryLight}15` }}></div>
      </div>

      {/* Mountain silhouette decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='flex items-center justify-center gap-2 mb-6'
        >
          <span className='backdrop-blur-sm px-4 py-1.5 rounded-full text-sm border' style={{ backgroundColor: `${THEME.colors.accent}30`, borderColor: `${THEME.colors.accent}40` }}>
            ⭐ 9.2/10 Superb Rating
          </span>
          <span className='backdrop-blur-sm px-4 py-1.5 rounded-full text-sm border hidden sm:block' style={{ backgroundColor: `${THEME.colors.accent}30`, borderColor: `${THEME.colors.accent}40` }}>
            🏔️ {BRAND.address.split(',')[0] || 'Ella, Sri Lanka'}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          className='font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight' 
          style={{ fontFamily: THEME.fonts.heading }}
        >
          {BRAND.name}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='text-lg md:text-xl mt-4 max-w-2xl mx-auto' 
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          {BRAND.description}
        </motion.p>

        {/* Key Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className='flex flex-wrap items-center justify-center gap-4 mt-8 text-sm'
        >
          <span className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
            🌅 Sunrise Views from Bed
          </span>
          <span className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
            🍛 Home-Cooked Meals
          </span>
          <span className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
            👨‍🍳 Cooking Classes
          </span>
        </motion.div>
      </motion.div>

      {/* Booking Form */}
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, type: "spring" }}
        onSubmit={onSearch} 
        className='relative z-10 bg-white/95 backdrop-blur-md text-gray-600 rounded-2xl px-6 py-5 flex flex-col md:flex-row items-end gap-4 mt-10 shadow-2xl max-w-4xl w-full mx-4'
      >

        {/* Check-in */}
        <div className='flex-1 w-full'>
          <label htmlFor="checkIn" className='text-sm font-medium text-gray-700 flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="" className='h-4 opacity-60' />
            Check-in
          </label>
          <input
            id="checkIn"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 mt-1.5 text-sm outline-none transition-colors"
            style={{ '--tw-ring-color': THEME.colors.primary }}
            onFocus={(e) => e.target.style.borderColor = THEME.colors.primary}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            required
          />
        </div>

        {/* Check-out */}
        <div className='flex-1 w-full'>
          <label htmlFor="checkOut" className='text-sm font-medium text-gray-700 flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="" className='h-4 opacity-60' />
            Check-out
          </label>
          <input
            id="checkOut"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 mt-1.5 text-sm outline-none transition-colors"
            onFocus={(e) => e.target.style.borderColor = THEME.colors.primary}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            required
          />
        </div>

        {/* Guests */}
        <div className='w-full md:w-32'>
          <label htmlFor="guests" className='text-sm font-medium text-gray-700'>Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 mt-1.5 text-sm outline-none transition-colors"
            onFocus={(e) => e.target.style.borderColor = THEME.colors.primary}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            required
          />
        </div>

        {/* Search Button */}
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='w-full md:w-auto flex items-center justify-center gap-2 rounded-xl py-3 px-8 text-white font-medium transition-all cursor-pointer shadow-lg'
          style={{ 
            backgroundColor: THEME.colors.primary,
            boxShadow: `0 10px 25px -5px ${THEME.colors.primary}50`
          }}
        >
          <span>Check Availability</span>
        </motion.button>
      </motion.form>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'
      >
        <div className='w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2'>
          <div className='w-1 h-2 bg-white/70 rounded-full'></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
