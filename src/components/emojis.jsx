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
  "Green Onion": "🌿",
  Onion: "🧅",
  "Bell Pepper": "🫑",
  "Leafy Green": "🥬",
  Potato: "🥔",
  "Sweet Potato": "🍠",
  Tomato: "🍅",
  Mushroom: "🍄",
};

const grains = {
  Bread: "🍞",
  Rice: "🍚",
  Spaghetti: "🍝",
  Noodle: "🍜",
  Pasta: "🥣",
  Starch: "🥞",
};

const dairy = {
  Milk: "🥛",
  Butter: "🧈",
  Cheese: "🧀",
  Cream: "🍦",
  Flour: "🥖",
};

const emojis = {
  ...proteins,
  ...vegetables,
  ...grains,
  ...dairy,
};

module.exports = {
  proteins,
  vegetables,
  grains,
  dairy,
  emojis
};
