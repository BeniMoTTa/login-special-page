import images from "./images";

const wines = [
  {
    title: "Château Margaux",
    price: "$350",
    tags: "FR | Red",
  },
  {
    title: "Domaine Leflaive",
    price: "$180",
    tags: "FR | White",
  },
  {
    title: "Château Haut-Brion",
    price: "$500",
    tags: "FR | Red",
  },
  {
    title: "Veuve Clicquot",
    price: "$90",
    tags: "CA | Sparkling",
  },
  {
    title: "Château d'Yquem",
    price: "$300",
    tags: "FR | White",
  },
];

const cocktails = [
  {
    title: "Coq au Vin",
    price: "$18",
    tags: "Food | Orange liqueur ",
  },
  {
    title: "Paella",
    price: "$16",
    tags: "Food | Slice of lime",
  },
  {
    title: "Sushi",
    price: "$22",
    tags: "Food | Elderflower liqueur | Simple syrup ",
  },
  {
    title: "Spaghetti Bolognese",
    price: "$24",
    tags: " Food | Soda water",
  },
  {
    title: "Fish and Chips",
    price: "$26",
    tags: "Food | Sweet vermouth |",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
