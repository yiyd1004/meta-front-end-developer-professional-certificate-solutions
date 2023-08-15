function DessertsList(props) {
  const filteredList = props.data
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      )
    );

  return (
    <ul>
      {filteredList}
    </ul>
  );
}

export default DessertsList;
