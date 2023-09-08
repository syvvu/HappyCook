import "./ShowItems.css";

function ShowItems(props) {
  const items = ["item 1", "item 2", "item 3", "item 4"];

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
