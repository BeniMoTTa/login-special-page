import { images } from "../../../hooks/";

interface iSectionSub {
  title: string;
}

const SubHeading = ({ title }: iSectionSub) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
