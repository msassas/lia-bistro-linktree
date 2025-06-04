import React, { memo } from 'react';
import { RESTAURANT_INFO } from '../constants';

const Footer: React.FC = memo(() => {
  return (
    <footer className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-600 pb-2">
      <p className="mb-1 font-medium">
        © {RESTAURANT_INFO.year} {RESTAURANT_INFO.name}. Todos os direitos reservados.
      </p>
      <address className="font-medium not-italic">
        {RESTAURANT_INFO.address}
      </address>
    </footer>
  );
});

export default Footer