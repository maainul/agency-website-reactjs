import './App.css';
import Blog from './components/Blog/Blog';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import HeaderComp from './components/HeaderComp/HeaderComp';
import Number from './components/Number/Number';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
   <>
      <HeaderComp/>
      <Services/>
      <Number/>
      <Projects/>
      <Testimonials/>
      <Blog/>
      <CTA/>
      <Footer/>
   </>
  );
}

export default App;
