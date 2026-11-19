import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Habilidades from "./components/Habilidades";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Contato />
      </main>

      <Footer />
    </>
  );
}

export default App;