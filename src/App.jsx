import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {

  const navLinks = [
    { name: "главная", link: "#" },
    { name: "о нас", link: "#" },
    { name: "товары", link: "#" },
    { name: "корзина", link: "#" },
  ];

  const navLinksArray = navLinks.map((link) => (
    <a href={link.link}>{link.name}</a>
  ));

  return (
    <>
      <Navbar navLinksArray={navLinksArray} />
      <Hero />
    </>
  );
}

export default App;
