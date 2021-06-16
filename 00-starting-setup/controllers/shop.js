const Product = require("../models/product");

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};
exports.getProduct = (req, res) =>{
  const prodId = req.params.productId
  Product.findById(prodId, product => {
    res.render('shop/product-detail',{
      product : product,
      pageTitle: product.title,
      path: '/products'
    })
  })
}

exports.getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
}

exports.getCart = (req, res) => {
  res.render('shop/cart',{
    pageTitle: 'Your Cart',
    path: '/cart'
  })
}

exports.postCart = (req, res) =>{
  const prodId = req.body.productId;
  console.log(prodId)
  res.redirect('/cart')
}

exports.getOrders = (req, res) => {
  res.render('shop/orders',{
    pageTitle: 'Your Orders',
    path: '/orders'
  })
}

exports.getCheckout = (req, res) =>{
  res.render('shop/checkout',{
    path: '/checkout',
    pageTitle : 'Checkout'
  })
}