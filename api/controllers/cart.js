function getTotal(cart) {
  let total = 0;
  cart.products.forEach(product => {
    if (product.unit_price.currency === '$') {
      total += product.quantity * product.unit_price.value;
    } else {
      total +=  product.quantity* (product.unit_price.value*0.88).toFixed(2);
    }
  });

  return {
    currency: '$',
    value: total.toFixed(2)
  };
}

module.exports = {
  getTotal,
};
