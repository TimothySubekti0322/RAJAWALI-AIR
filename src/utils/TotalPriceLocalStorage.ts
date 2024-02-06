const addTotalPriceToLocalStorage = (price: number) => {
  const totalPrice = localStorage.getItem("totalPrice");
  if (totalPrice) {
    localStorage.setItem(
      "totalPrice",
      (parseFloat(totalPrice) + price).toString()
    );
  } else {
    localStorage.setItem("totalPrice", price.toString());
  }
};

const substractTotalPriceFromLocalStorage = (price: number) => {
  const totalPrice = localStorage.getItem("totalPrice");
  if (totalPrice) {
    if (price > parseFloat(totalPrice)) {
      localStorage.setItem("totalPrice", "0");
    } else {
      localStorage.setItem(
        "totalPrice",
        (parseFloat(totalPrice) - price).toString()
      );
    }
  }
};

export { addTotalPriceToLocalStorage, substractTotalPriceFromLocalStorage };
