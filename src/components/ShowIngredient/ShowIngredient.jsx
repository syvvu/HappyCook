import emojis, { proteins, vegetables, grains, dairy } from "../emojis";
import "./ShowIngredient.css";

const categoriesMap = {
  protein: Object.keys(proteins),
  vegetables: Object.keys(vegetables),
  grains: Object.keys(grains),
  dairy: Object.keys(dairy),
};

function ShowIngredient(props) {
  const items = categoriesMap[props.name] || [];

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
          {emojis[item]} {item}
        </span>
      ))}
    </div>
  );
}

export default ShowIngredient;
