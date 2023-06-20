import Navbar from './components/Navbar/Navbar'
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import About from './components/About/About';
import WorkLook from './components/WorkLook/WorkLook';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <About />
      <WorkLook />
      <Contact />
    </div>
  );
}

export default App;
