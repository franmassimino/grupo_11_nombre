const product = require('../models/product');
const color = require('../models/color');
const brand = require('../models/brand');
const category = require('../models/categories');

module.exports = {
    productList: (req, res) => {
        res.render('products/products', {
            style: 'index', 
            title: 'Productos', 
            list: product.allWithExtra()
        })
    },

    productDetail: (req, res) => {
        res.render('products/productDetail', { 
            style: 'productDetail', 
            title: 'Nike Air Force 1', 
            product: product.one(req.params.id) 
        })
    },

    productCart: (req, res) => {
        res.render('products/productCart', { 
            style: 'productCart', 
            title: 'Carrito' 
        })
    },

    createProduct: (req, res) => {
        res.render('products/createProduct', { 
            style: 'createProduct', 
            title: 'Crear producto', 
            colors: color.all(), 
            brands: brand.all(), 
            categories: category.all() 
        })
    },

    editProduct: (req, res) => {
        res.render('products/editProduct', { 
            style: 'editProduct', 
            title: 'Editar producto', 
            product: product.one(req.params.id), 
            colors: color.all(), 
            brands: brand.all(), 
            categories: category.all() 
        })
    },

    saveProduct: (req, res) => {
        let result = product.new(req.body,req.file)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion")   
    },

    updateProduct: (req, res) => {
        let result = product.edit(req.body,req.file,req.params.id)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },

    deleteProduct: (req, res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },

}