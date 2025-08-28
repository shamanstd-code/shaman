import React from 'react';
import type { DesignService } from '../types';
import ServiceCard from './HotelCard';

interface ServiceListProps {
  services: DesignService[];
  onSelectService: (service: DesignService) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ services, onSelectService }) => {
  if (services.length === 0) {
    return (
        <div className="text-center mt-12 text-slate-500">
           <p className="text-xl font-semibold">No design services found.</p>
           <p>The admin has not added any services yet. Please check back later.</p>
       </div>
    )
  }
  
  return (
    <div id="services" className="py-12">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {services.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onSelectService={onSelectService}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;