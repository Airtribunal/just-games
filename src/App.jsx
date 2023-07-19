import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Advantages from "./components/Advantages";
import stability from "./images/Stability.png";
import fastness from "./images/Fastness.png";
import helpfulness from "./images/Helpfulness.png";
import AdvantageCard from "./components/AdvantageCard";
import Contact from "./components/Contact";

function App() {
  // Navigation Links
  const navLinks = [
    { name: "главная", link: "https://casp.pro" },
    { name: "товары", link: "#" },
    { name: "о нас", link: "#" },
    { name: "корзина", link: "#" },
  ];

  const navLinksArray = navLinks.map((link, id) => (
    <a key={id} href={link.link}>
      {link.name}
    </a>
  ));

  // Advantage Cards
  const advantageData = [
    {
      name: "Надёжность",
      desc: "Мы гарантируем надежность наших услуг.",
      img: stability,
    },
    {
      name: "Поддержка",
      desc: "Мы гарантируем отличную техподдержку.",
      img: helpfulness,
    },
    {
      name: "Скорость",
      desc: "Мы гарантируем скорость доставки.",
      img: fastness,
    },
  ];

  const advantageCards = advantageData.map((card, id) => (
    <AdvantageCard key={id} {...card} />
  ));

  return (
    <>
      <Navbar navLinksArray={navLinksArray} />
      <Hero />
      <Advantages cards={advantageCards} />
      <Contact />
    </>
  );
}

export default App;
