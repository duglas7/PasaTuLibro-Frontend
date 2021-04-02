import "../../styles/styles.css";
import Navbar from "../components/navbar";
import Masthead from "../components/masthead";
import Services from "../components/services";
import Teams from "../components/team";
import Footer from "../components/footer";
import Publicidad from "../components/Publicidad";

function Home() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Services />
      <Publicidad />
      <Teams />
      <Footer />
    </div>
  );
}

export default Home;
