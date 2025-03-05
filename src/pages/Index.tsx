
import { Helmet } from 'react-helmet';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import AboutSection from '@/components/home/About';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Peoria Lawn Care - Premier Landscaping Services in Phoenix</title>
        <meta name="description" content="Professional landscaping services in Phoenix, Arizona. We specialize in landscape design, lawn maintenance, hardscaping, and outdoor living spaces." />
      </Helmet>
      
      <Hero />
      <Services />
      <AboutSection />
      <Portfolio />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
