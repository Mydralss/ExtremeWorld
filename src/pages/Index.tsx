
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BenefitsSection from '@/components/home/BenefitsSection';
import MaintenanceServicesSection from '@/components/home/MaintenanceServicesSection';
import LocationMapSection from '@/components/home/LocationMapSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <MaintenanceServicesSection />
        <BenefitsSection />
        <LocationMapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
