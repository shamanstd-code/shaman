import React from 'react';
import type { DesignService } from '../types';
import { ArrowRightIcon } from './IconComponents';

interface ServiceCardProps {
  service: DesignService;
  onSelectService: (service: DesignService) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  return (
    <div 
      onClick={() => onSelectService(service)}
      className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group flex flex-col cursor-pointer"
    >
      <div className="relative">
        <img 
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
          src={service.previewImage || 'https://picsum.photos/400/300'} 
          alt={`Preview of ${service.title}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-0 right-0 m-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            ${service.price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">{service.title}</h3>
        <p className="text-sm text-slate-500 mt-2 flex-grow">
          {service.shortDescription}
        </p>
        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
          <span className="text-primary font-semibold py-1.5 px-4 rounded-full flex items-center gap-2">
            View Details
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;