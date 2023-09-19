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
  Pancake: "🥞",
  Cereal: "🥣",
};

const dairy = {
  Milk: "🥛",
  Butter: "🧈",
  Cheese: "🧀",
  Cream: "🍦",
};

/**
const fruits = {
  Apple: "🍎",
  Pear: "🍐",
  Orange: "🍊",
  Banana: "🍌",
  Watermelon: "🍉",
  Grapes: "🍇",
  Blueberries: "🫐",
  Strawberry: "🍓",
  Lemon: "🍋",
  Cherry: "🍒",
  Peach: "🍑",
  Mango: "🥭",
  Pineapple: "🍍",
  Coconut: "🥥",
  Kiwi: "🥝",
  Avocado: "🥑",
};
*/

const emojis = {
  ...proteins,
  ...vegetables,
  ...grains,
  ...dairy,
};

export { proteins, vegetables, grains, dairy };
export default emojis;
