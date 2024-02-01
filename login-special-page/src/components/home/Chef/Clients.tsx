import { images } from "../../../hooks";
import "./Clients.css";

const Clients = () => (
  <div className="app__bg-chef  app__wrapper section__padding">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What they say about us</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            JohnRestaurants is a hidden gem for food enthusiasts.
          </p>
        </div>
        <p className="p__opensans">
          The attention to detail in every dish is remarkable. The menu is a
          testament to culinary innovation, offering a blend of exquisite
          flavors that leave you craving for more. The chefs here are true
          artists, turning each meal into a work of art.
        </p>
        <div className="align__clients">
          <img
            src="https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg"
            alt=""
          />
          <p>Julia Hyung</p>
        </div>
      </div>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Dining at JohnRestaurant is an experience.
          </p>
        </div>
        <p className="p__opensans">
          Transcends ordinary meals. The ingredients are fresh, the presentation
          is impeccable, and the taste is extraordinary. Each dish is a
          celebration of flavors, making it a haven for those who appreciate the
          finer aspects of gastronomy.
        </p>
        <div className="align__clients">
          <img
            src="https://img.freepik.com/fotos-premium/jovem-ao-ar-livre-aponta-o-dedo-para-voce-com-uma-expressao-confiante_1368-492508.jpg"
            alt=""
          />
          <p>Cristina Dobre</p>
        </div>
      </div>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            If there's a culinary paradise on Earth, it's at JohnRestaurant.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          From the first bite to the last, each dish is a masterpiece. The
          flavors dance on your palate, creating a symphony of taste that's
          simply divine. Every visit feels like a gastronomic journey you never
          want to end.
        </p>

        <div className="align__clients">
          <img
            src="https://static.vecteezy.com/ti/fotos-gratis/t2/4834925-grupo-multirracial-de-jovens-tirando-selfie-foto.jpg"
            alt=""
          />
          <p>Marco Bizzari and Friends</p>
        </div>
      </div>
    </div>
  </div>
);

export default Clients;
