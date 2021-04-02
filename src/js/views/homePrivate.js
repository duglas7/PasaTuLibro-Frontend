import "../../styles/styles.css";
import NavbarLogin from "../components/navbarLogin";
import Masthead from "../components/masthead";
import PortfolioGrid from "../components/portfoliogrid";
import Contact from "../components/contact";
import Footer from "../components/footer";
import PortfolioModal from "../components/portfolioModals";
import Busqueda from "../components/busqueda";
import TablaInformacion from "../components/tablaInfo";

function HomePrivate() {
  return (
    <>
      <NavbarLogin />
      <Masthead />
      <PortfolioGrid />
      <TablaInformacion />
      <Contact />
      <Footer />
      <PortfolioModal />
    </>
  );
}

export default HomePrivate;
