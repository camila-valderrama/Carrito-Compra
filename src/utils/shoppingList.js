const shoppingList = () => {
    const url = 'https://fakestoreapi.com/products';
  
    const list = fetch(url)
      .then((response) => response.json())
      .then((data) => data || []); // Asegura que devuelve un array, aunque la API ya lo hace
  
    return list;
  };
  
  export default shoppingList;
  
  