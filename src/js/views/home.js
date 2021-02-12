
import '../../styles/styles.css';
import Navbar from '../component/navbar';
import Masthead from '../component/masthead';
import Services from '../component/services';
import PortfolioGrid from '../component/portfoliogrid';
import About from '../component/about';
import Teams from '../component/team';
import Clients from '../component/clients';
import Contact from '../component/contact';
import Footer from '../component/footer';
import PortfolioModal from '../component/portfolioModals';

function Home() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Services />
      <PortfolioGrid />
      <About />
      <Teams />
      <Clients /> 
      <Contact />
      <Footer />
      <PortfolioModal />
    </div>
  );
}

export default Home;