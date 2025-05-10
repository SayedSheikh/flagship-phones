export const getCartFromLocal = () => {
  const cart = localStorage.getItem("cart") || "[]";

  return JSON.parse(cart);
};

export const saveCartToLocal = (item) => {
  const cart = getCartFromLocal();

  const isAdded = cart.find((e) => e.id === item.id);

  if (isAdded) {
    alert("Already added");
    return;
  }
  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const deleteCart = (item) => {
  const cart = getCartFromLocal();

  const newCart = cart.filter((e) => e.id !== item.id);

  localStorage.setItem("cart", JSON.stringify(newCart));
};

export const getFavoritesFromLocal = () => {
  const favorites = localStorage.getItem("favorites") || "[]";

  return JSON.parse(favorites);
};

export const saveFavoritesToLocal = (item) => {
  const favorites = getFavoritesFromLocal();

  const isAdded = favorites.find((e) => e.id === item.id);

  if (isAdded) {
    alert("Already added");
    return;
  }
  favorites.push(item);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const deleteFavirte = (item) => {
  const favorites = getCartFromLocal();

  const newCart = favorites.filter((e) => e.id !== item.id);

  localStorage.setItem("favorites", JSON.stringify(newCart));
};
