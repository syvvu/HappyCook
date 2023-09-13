import "./showItems.css";

function ShowItems(props) {
  let items = [];
  switch (props.name) {
    case "protein":
      items = ["Chicken", "Beef", "Fish", "Tofu"];
      break;
    case "vegetables":
      items = ["Broccoli", "Onion", "Garlic", "Mushroom"];
      break;
    case "grains":
      items = ["Rice", "Wheat", "Oats", "Barley"];
      break;
    case "dairy":
      items = ["Milk", "Cheese", "Cream", "Butter"];
      break;
  }

  return (
    <div className="items">
      {items.map((item) => (
        <span
          key={item}
          className={"item"}
          onClick={() => props.onSelectItems(item)}
          style={
            props.selectedItems.includes(item)
              ? { backgroundColor: "#B08968" }
              : {}
          }
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default ShowItems;
