// import Sidebar from './components/Sidebar';
import About from '@/components/section/about/About';
import Skills from '@/components/section/skills/Skills';
import ProjectList from '@/components/section/Project/Project';
import Contact from '@/components/section/contact/Contact';
import GradientCursor from '@/components/effects/GradientCursor';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';


export default function HomePage() {

  return (
    <div className='Layout'>
      <GradientCursor />
      <Header />
      <main>
        <div>
          <About />
          <ProjectList />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
