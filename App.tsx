import React, { useState } from 'react';
import type { DesignService } from './types';
import { MOCK_SERVICES } from './services/mockData';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceList from './components/HotelList';
import ServiceDetails from './components/HotelDetails';

const App: React.FC = () => {
  const [services] = useState<DesignService[]>(MOCK_SERVICES);
  const [selectedService, setSelectedService] = useState<DesignService | null>(null);

  const handleSelectService = (service: DesignService) => {
    setSelectedService(service);
    window.scrollTo(0, 0);
  };
  
  const handleBackToList = () => {
    setSelectedService(null);
  };
  
  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <Header onGoHome={handleBackToList} />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {selectedService ? (
           <ServiceDetails service={selectedService} onBack={handleBackToList} />
        ) : (
          <>
            <Hero />
            <ServiceList 
                services={services} 
                onSelectService={handleSelectService}
            />
          </>
        )}
      </main>
      <footer className="text-center py-8 border-t border-slate-200 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Fivr. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;