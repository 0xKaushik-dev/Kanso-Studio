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
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden fade-appear">
      <Header />
      <main className="flex flex-col w-full">
        <section className="fade-appear"><Hero /></section>
        <section className="fade-appear"><About /></section>
        <section className="fade-appear"><WhyUs /></section>
        <section className="fade-appear"><Services /></section>
        <section className="fade-appear"><Gear /></section>
        <section className="fade-appear"><Process /></section>
        <section className="fade-appear"><Pricing /></section>
        <section className="fade-appear"><Testimonials /></section>
        <section className="fade-appear"><FAQ /></section>
        <section className="fade-appear"><Blog /></section>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}