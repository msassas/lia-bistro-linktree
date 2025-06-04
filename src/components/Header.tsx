import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center mb-6 sm:mb-8">
      <div 
        className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden mb-4 
                   shadow-xl border-2 border-[#FF9700] relative shimmer"
      >
        <img 
          src={RESTAURANT_INFO.logo} 
          alt={`${RESTAURANT_INFO.name} logo`} 
          className="w-full h-full object-cover"
          loading="eager"
          width={120}
          height={120}
        />
      </div>
      
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2 text-center">
        {RESTAURANT_INFO.name}
      </h1>
      
      <p className="text-sm sm:text-base text-gray-700 text-center font-medium max-w-[280px] sm:max-w-sm leading-snug">
        {RESTAURANT_INFO.slogan}
      </p>
    </header>
  );
};

export default Header;