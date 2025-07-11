export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce((total, product) => total + product.quantity * product.price, 0);
};

export const CartReducer = (state, action) => {
  const matchId = (item) =>
    item.productId === action.id || item.id === action.id || item._id === action.id;

  switch (action.type) {
    case "SET_CART":
      return [...action.items];

    case "Add":
      return [...state, action.selectedProduct];

    case "Remove":
      return state.filter((p) => !matchId(p));

    case "Increase":
      return state.map((p) => matchId(p)
        ? { ...p, quantity: p.quantity + 1 }
        : p
      );

    case "Decrease":
      return state.map((p) => matchId(p)
        ? { ...p, quantity: p.quantity - 1 }
        : p
      );

    default:
      return state;
  }
};
