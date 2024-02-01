import SubHeading from "../sectionSub/SubHeading";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Infos" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Contact Us
      </h1>
      <div className="app__wrapper-content">
        <p
          className="p__opensans"
          style={{ color: "black", fontWeight: "600", fontSize: "20px" }}
        >
          Long to valley, near of the city Lorem ipsum, Dolar sit met.
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Especial contact
        </p>
        <p
          className="p__opensans"
          style={{ color: "black", fontWeight: "600", fontSize: "20px" }}
        >
          Email: johnrestaurant@thebest.com
        </p>
        <p
          className="p__opensans"
          style={{ color: "black", fontWeight: "600", fontSize: "20px" }}
        >
          instagram: @Johnrestaurant
        </p>
        <p
          className="p__opensans"
          style={{ color: "black", fontWeight: "600", fontSize: "20px" }}
        >
          Customer Feedback Channel: 288-444-1233
        </p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src="https://i.gifer.com/EMQW.gif" alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
