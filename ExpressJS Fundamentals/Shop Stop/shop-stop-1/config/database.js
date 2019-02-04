let products = [];
let count = 1;

module.exports.products = {};

module.exports.products.getAll = () => {
  return products;
}

module.exports.products.add = (product) => {
  product.id = count++;
  products.push(product);
}

//
module.exports.products.findByName = (name) => {
  let product = null;

// TODO: Check if name of product is matching*/
  for(let p of products) {
    if(
    true
  ) {
      return p;
    }
  }

  return product;
}
