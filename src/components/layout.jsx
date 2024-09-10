import React from "react";
import Header from "./header";
import MainCard from "./mainCard";
import Card from "./card";
import Footer from "./footer";
import "../stylesheets/layout.css";
import {
  FaWhatsapp,
  FaGit,
  FaLaptopCode,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { GiSpartanHelmet } from "react-icons/gi";


const iconSetting = {
  size: 25
}


const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layout-section">
        <Header />
        <div className="about-container">
          <MainCard
            titleMain="Keinner Ross"
            descriptionMain="¡Hola!👋🏻Soy un desarrollador Web/Mobile Fullstack viviendo en Chile, desarrollo herramientas y aplicaciones."
          />
          <Card
            titleCard="Spartan Pomodoro"
            descriptionCard="He desarrollado Spartan Pomodoro, la app para maximizar tu productividad al estilo espartano"
            url="https://www.spartanpomodoro.com/"
          >
            <GiSpartanHelmet size={iconSetting.size} />
          </Card>
          <Card
            titleCard="Portfolio"
            descriptionCard="Conoce los proyectos en los que he trabajado"
            url="https://keinnerross.github.io/portfolioross/"
          >
            <FaLaptopCode size={iconSetting.size} />
          </Card>

        </div>
        <div className="socialmedia-container">
          <h3>Social Media</h3>

          <Card
            titleCard="Lee mis Tweets"
            descriptionCard="En mi cuenta de X hablo sobre programación"
            url="https://x.com/keinnerross"
          >
            <FaTwitter size={iconSetting.size} />
          </Card>

          <Card
            titleCard="Sígueme en Tiktok"
            descriptionCard="Conoce mi contenido en Tiktok."
            url="https://www.tiktok.com/@keinnerross"
          >
            <FaTiktok size={iconSetting.size} />
          </Card>

          <Card
            titleCard="My GitHub Profile"
            descriptionCard="Cuenta personal de GitHub donde subo mis repositorios"
            url="https://github.com/Keinnerross"
          >
            <FaGit size={iconSetting.size} />
          </Card>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
