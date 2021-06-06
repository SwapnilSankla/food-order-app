export const defaultCart = {
  items: new Map(),
  total: 0,
  numberOfItemsInCart: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addReducer(action, state);
    case "REMOVE":
      return removeReducer(action, state);
    default:
      return defaultCart;
  }
};

function removeReducer(action, state) {
  const updatedItems = new Map(state.items);
  updatedItems.get(action.val).count--;

  const updatedNumberOfItems = updatedItems.get(action.val).count;
  if (updatedNumberOfItems === 0) updatedItems.delete(action.val);

  return {
    items: updatedItems,
    total: computeTotal(updatedItems),
    numberOfItemsInCart: computeNumberOfItemsInCart(updatedItems),
  };
}

function addReducer(action, state) {
  const addedItem = action.val;
  const updatedItems = new Map(state.items);
  const matchingItem = updatedItems.get(addedItem.name);
  if (matchingItem === undefined)
    updatedItems.set(addedItem.name, {
      name: addedItem.name,
      count: addedItem.count,
      price: addedItem.price,
    });
  else {
    updatedItems.set(addedItem.name, {
      name: addedItem.name,
      count: matchingItem.count + addedItem.count,
      price: addedItem.price,
    });
  }
  return {
    items: updatedItems,
    total: computeTotal(updatedItems),
    numberOfItemsInCart: computeNumberOfItemsInCart(updatedItems),
  };
}

const computeNumberOfItemsInCart = (updatedItems) => {
  return Array.from(updatedItems.values()).reduce(
    (acc, item) => acc + item.count,
    0
  );
};

const computeTotal = (updatedItems) => {
  return Array.from(updatedItems.values())
    .reduce((acc, curr) => acc + curr.count * curr.price, 0)
    .toFixed(2);
};

export default cartReducer;
