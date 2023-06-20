import Navbar from './components/Navbar/Navbar'
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import About from './components/About/About';
import WorkLook from './components/WorkLook/WorkLook';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <About />
      <WorkLook />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
