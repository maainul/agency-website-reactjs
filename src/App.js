import './App.css';
import Blog from './components/Blog/Blog';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Header from './components/Header/HeaderSection';
import Number from './components/Number/Number';
import Project from './components/Project/Project';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
   <>
      <Header />
      <Services />
      <Number/>
      <Project/>
      <Testimonials />
      <Blog />
      <CTA/>
      <Footer/>
   </>
  );
}

export default App;
