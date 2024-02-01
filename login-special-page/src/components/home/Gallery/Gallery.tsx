import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    const container = scrollRef.current;

    if (container) {
      container.scrollTo({
        left: container.scrollLeft + (direction === "left" ? -300 : 300),
        behavior: "smooth",
      });
    }
  };
  const images = [
    {
      id: 1,
      image:
        "https://diariodorio.com/wp-content/uploads/2013/11/Fil-a-Oswaldo-Aranha1.jpg",
      name: "Coq au vin",
    },
    {
      id: 2,
      image:
        "https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2019/04/comidas-tipicas-da-espanha.jpg?fit=1360%2C907&ssl=1",
      name: "Paella",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/fotos-gratis/peito-de-frango-e-costeleta-de-porco-com-bife-de-carne-e-vegetais_74190-7663.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais",
      name: "Risotto",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/fotos-gratis/mesa-plana-cheia-de-deliciosos-arranjos-de-comida_23-2149141378.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698537600&semt=ais",
      name: "Dim sum",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/fotos-gratis/vista-superior-deliciosa-comida-brasileira_23-2148739219.jpg",
      name: "Kung pao chicken",
    },
  ];
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {images.map((item) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${item.id}`}
            >
              <img src={item.image} alt="gallery_image" />
              <h5 className="gallery__image-icon">{item.name}</h5>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">BESTSELLERS</h1>
        <p
          className="p__opensans"
          style={{ color: "black", marginTop: "2rem", fontWeight: "bold" }}
        >
          These are the dishes that sell the most in our restaurant. Our
          customers praise them for their flavor and richness in the details we
          provide.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
