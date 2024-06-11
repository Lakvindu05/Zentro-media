import "./App.css";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Services from "./components/Services";
import Team from "./components/Team";
import CaseStudy from "./components/CaseStudy";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


function App() {
  return (
    <main>
      <NavBar />
      <Container/>
      <Services/>
      <Team/>
      <CaseStudy/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}

export default App;
