import React, { useState, useEffect } from "react";
import "./LoadingPage.css";

const loadingMessages = [
  "Grilling your favorites... 🍔",
  "Stirring the soup... 🍲",
  "Sizzling up some bacon... 🥓",
  "Roasting the perfect chicken... 🍗",
  "Pouring a glass of wine... 🍷",
  "Rolling out the pasta... 🍝",
  "Chopping fresh veggies... 🥕🥦",
  "Frying a crispy snack... 🍟",
  "Blending a fruity drink... 🍹",
  "Baking a batch of cookies... 🍪",
  "Whisking up some pancakes... 🥞",
  "Brewing a cup of tea... 🍵",
  "Whipping up some cream... 🍰",
  "Scooping some ice cream... 🍦",
  "Dressing a salad... 🥗",
  "Tossing some noodles... 🍜",
  "Squeezing fresh juice... 🍊🥤",
  "Spicing things up... 🌶️",
  "Kneading the dough... 🍞",
  "Steaming some dumplings... 🥟",
];

function LoadingPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    changeMessage();
    const interval = setInterval(changeMessage, 2000);
    return () => clearInterval(interval);
  }, []);

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    setMessage(loadingMessages[randomIndex]);
  };

  return <div className="loading-message">{message}</div>;
}

export default LoadingPage;
