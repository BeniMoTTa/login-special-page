import { FaStar } from "react-icons/fa";
import { data } from "../../../hooks";
import "./Laurels.css";

interface iLaurels {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const AwardCard = ({ awards }: { awards: iLaurels; key: string }) => (
  <div className="app__laurels_awards-card">
    <img src={awards.imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {awards.title}
      </p>
      <p className="p__opensans">{awards.subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const getStarRating = (rating: number) => {
    const roundedRating = Math.round(rating * 1.7) / 2; // Arredonda para o meio mais próximo (0.5)
    const starCount = Math.floor(roundedRating);
    const hasHalfStar = roundedRating - starCount === 0.5;

    return { starCount, hasHalfStar };
  };
  const rating = 4.8;
  return (
    <div className="app__bg-chef app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant">Our Standings</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard awards={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="star__rating">
        <div>
          {[...Array(5)].map((_, index) => {
            const { starCount, hasHalfStar } = getStarRating(rating);

            if (index < starCount) {
              return <FaStar key={index} size={60} color="#ffd700" />;
            } else if (hasHalfStar && index === starCount) {
              return <FaStar key={index} size={60} color="#ffd700" />;
            } else {
              return <FaStar key={index} size={60} color="#ccc" />;
            }
          })}
        </div>
        <p>{rating} in the last 6 months</p>
      </div>

      <div className="app__wrapper_img">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1c/95/4b/0d/photo.jpg"
          alt="laurels_img"
        />
      </div>
    </div>
  );
};
export default Laurels;
