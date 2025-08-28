import React from 'react';
import type { DesignService } from '../types';
import { BackIcon, DesignerIcon, CheckIcon, WhatsAppIcon } from './IconComponents';

interface ServiceDetailsProps {
  service: DesignService;
  onBack: () => void;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onBack }) => {

  const handleContact = () => {
    const message = encodeURIComponent(`Hello, I'm interested in your "${service.title}" design service.`);
    const phoneNumber = service.whatsappNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const whatsIncludedItems = service.longDescription
    .split('\n')
    .map(item => item.trim())
    .filter(item => item.startsWith('- ') || item.length > 0)
    .map(item => item.replace(/^- /, ''));

  return (
    <div className="animate-fade-in-up max-w-6xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-primary mb-8 transition-colors font-semibold group">
        <BackIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span>Back to all services</span>
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Image */}
            <div className="lg:col-span-3">
                <img src={service.previewImage} alt={service.title} className="w-full h-full object-cover min-h-[300px] lg:min-h-[600px]" />
            </div>

            {/* Content */}
            <div className="lg:col-span-2 p-8 md:p-10 flex flex-col">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">{service.title}</h1>
                
                <div className="flex items-center gap-3 mt-4 text-slate-500">
                    <DesignerIcon className="w-6 h-6 text-slate-400" />
                    <p className="font-semibold text-md">{service.designerInfo}</p>
                </div>

                <div className="my-8 border-t border-slate-100"></div>
                
                <section>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">What's Included</h2>
                    <ul className="space-y-3">
                      {whatsIncludedItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                </section>
                
                <div className="flex-grow"></div>

                <div className="mt-10 pt-8 border-t border-slate-100 bg-slate-50 -m-10 p-10 mt-auto">
                     <div className="flex justify-between items-center mb-5">
                        <p className="text-slate-600 text-lg">Total Price</p>
                        <p className="text-4xl font-bold text-slate-900">${service.price}</p>
                    </div>
                     <button
                      onClick={handleContact}
                      className="w-full bg-secondary text-white font-bold py-4 px-6 rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                      <WhatsAppIcon className="h-6 w-6" />
                      Contact via WhatsApp
                    </button>
                    <p className="text-center text-sm text-slate-500 mt-3">Start a conversation to order</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;