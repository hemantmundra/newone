class Napp.Models.Product extends Backbone.Model
  paramRoot: 'product'

  defaults:
    name: null
    category: null
    price: null
    quantity: null

class Napp.Collections.ProductsCollection extends Backbone.Collection
  model: Napp.Models.Product
  url: '/products'