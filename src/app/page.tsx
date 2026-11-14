import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Workflow from '@/components/Workflow';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Workflow />
        <Portfolio />
        <Team />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}

