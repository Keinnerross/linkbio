import React from "react";
import Header from "./header";
import MainCard from "./mainCard";
import Card from "./card";
import Footer from "./footer";
import "../stylesheets/layout.css";
import {
  FaArrowUp,
  FaGit,
  FaLaptopCode,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layout-section">
        <Header />
        <div className="about-container">
          <MainCard
            titleMain="Keinner Ross"
            descriptionMain="¡Hola!👋🏻Soy un desarrollador Web/Mobile Fullstack vivendo en Chile, Construyo herramientas y aplicaciones."
          />
          <Card
            titleCard="Portfolio"
            descriptionCard="Conoce los proyectos en los que he trabajado"
            url="https://keinnerross.github.io/portfolioross/"
          >
            <FaLaptopCode size={20} />
          </Card>
          <Card
            titleCard="Hire me on UpWork"
            descriptionCard="También estoy en UpWork, echa un vistazo."
            url="https://www.upwork.com/freelancers/~0125e442c2ca578169"
          >
            <FaArrowUp size={20} />
          </Card>
        </div>
        <div className="socialmedia-container">
          <h3>Social Media</h3>

          <Card
            titleCard="Lee mis Tweets"
            descriptionCard="En mi Twitter hablo sobre programación"
            url="https://twitter.com/keinnerross"
          >
            <FaTwitter size={20} />
          </Card>

          <Card
            titleCard="Sigueme en Tiktok"
            descriptionCard="Conoce mi contenido en Tiktok."
            url="https://www.tiktok.com/@keinnerross"
          >
            <FaTiktok size={20} />
          </Card>

          <Card
            titleCard="My GitHub Profile"
            descriptionCard="Cuenta personal de Github donde subo mis repositorios."
            url="https://github.com/Keinnerross"
          >
            <FaGit size={20} />
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
