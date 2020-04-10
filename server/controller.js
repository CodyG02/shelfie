module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        

        db.get_inventory().then(products => {
            // console.log(products)
            res.status(200).send(products)
        }).catch(err => console.log('getctrl',err)) 
    },

    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body

        db.add_product([name, price, img]).then(newProduct => {
            res.status(200).send(newProduct)
        }).catch(err => console.log('addctrl',err)) 

    },

    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        const {id} = req.params

        db.update_product([id, name, price, img]).then(updatedProduct => {
            res.status(200).send(updatedProduct)
        }).catch(err => console.log('updatectrl', err))

    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id).then(() => {
            res.status(200).send('Product Removed')
        }).catch(err => console.log('deletectrl', err))
    }
}