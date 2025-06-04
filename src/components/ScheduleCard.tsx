import React, { memo } from 'react';
import { SCHEDULE } from '../constants';
import { Clock } from 'lucide-react';

const ScheduleCard: React.FC = memo(() => {
  return (
    <div className="glass-card p-4 sm:p-5">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock size={18} className="text-[#FF9700]" aria-hidden="true" />
        <h2 className="text-base sm:text-lg font-semibold text-center text-[#FF9700]">
          Horário de Funcionamento
        </h2>
      </div>
      
      <div className="space-y-2">
        {SCHEDULE.map((item, index) => (
          <div 
            key={`schedule-${index}`}
            className="flex justify-between items-center py-2 border-b border-[#FF9700]/10 last:border-0"
          >
            <div className="font-medium text-xs sm:text-sm">{item.days}</div>
            <div className="font-semibold text-[#FF9700] text-xs sm:text-sm">{item.hours}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ScheduleCard