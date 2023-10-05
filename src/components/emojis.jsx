const proteins = {
  Chicken: "🍗",
  Beef: "🥩",
  Fish: "🐟",
  Ham: "🍖",
  Pork: "🥓",
  Sausage: "🌭️",
  Shrimp: "🍤",
  Tofu: "🍲",
  Egg: "🥚",
};

const vegetables = {
  Broccoli: "🥦",
  Carrot: "🥕",
  Corn: "🌽",
  Cucumber: "🥒",
  Garlic: "🧄",
  Ginger: "🫚",
  Onion: "🧅",
  Potato: "🥔",
  Tomato: "🍅",
  Mushroom: "🍄",
  Peas: "🫛",
  "Bell Pepper": "🫑",
  "Green Onion": "🌿",
  "Leafy Green": "🥬",
  "Sweet Potato": "🍠",
  "Mung Bean Sprouts": "🌱",
};

const grains = {
  Bread: "🍞",
  Rice: "🍚",
  Spaghetti: "🍝",
  Noodle: "🍜",
  Pasta: "🥣",
  Starch: "🥞",
  Flour: "🥖",
};

const dairy = {
  Milk: "🥛",
  Butter: "🧈",
  Cheese: "🧀",
  Cream: "🍦",
};

const emojis = {
  ...proteins,
  ...vegetables,
  ...grains,
  ...dairy,
};

export { proteins, vegetables, grains, dairy};
export default emojis;