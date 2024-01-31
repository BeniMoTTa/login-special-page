import { data } from "../../../hooks";
import { PiForkKnifeFill } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import "./SpecialMenu.css";

import MenuItem from "../mainItems/MenuItem";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Some Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img
          src={
            "https://i.pinimg.com/564x/6e/ad/f2/6eadf29c90b10fbfd99badc474d61660.jpg"
          }
          alt="menu__img"
        />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Some Dishes</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="space-spoon">
      <PiForkKnifeFill />
      <h6>Promotions every day for you</h6>
      <BiDish />
    </div>
    <div className="line-menu"></div>
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
