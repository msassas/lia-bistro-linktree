import React, { memo } from 'react';
import { LinkButtonProps } from '../constants';

const LinkButton: React.FC<LinkButtonProps> = memo(({ 
  text, 
  url, 
  icon: Icon, 
  special = false,
  bgColorOnHover
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    button.classList.add('ripple-effect');
    button.addEventListener('animationend', () => {
      button.classList.remove('ripple-effect');
    }, { once: true });
  };
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`
        w-full flex items-center justify-between
        ${special ? 'special-button shimmer h-16 sm:h-20' : 'glass-button'}
        ${!special && bgColorOnHover ? `hover:bg-[${bgColorOnHover}]` : ''}
      `}
      aria-label={`Abrir ${text}`}
    >
      <span className="flex items-center">
        <Icon className={`mr-3 ${special ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-5 h-5 sm:w-6 sm:h-6'}`} aria-hidden="true" />
        <span className={`${special ? 'text-base sm:text-lg font-bold' : 'text-sm sm:text-base font-semibold'}`}>
          {text}
        </span>
      </span>
      <span className={`${special ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`} aria-hidden="true">›</span>
    </a>
  );
});

export default LinkButton