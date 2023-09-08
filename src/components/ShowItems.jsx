function ShowItems(props) {
  const items = ["item 1", "item 2", "item 3", "item 4"];

  return (
    <div className={`item-container ${props.name}`}>
      {items.map((item) => (
        <span
          key={item}
          className={"item-box"}
          onClick={() => props.onSelectItems(item)}
          style={
            props.selectedItems.includes(item)
              ? { backgroundColor: "#9C6644" }
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
