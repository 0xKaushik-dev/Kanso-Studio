import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Gear from './components/Gear';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Gear />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Blog />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}