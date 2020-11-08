module.exports = {

    create: (req,res ) => {
        const dbInstance = req.app.get('db');
        const { name, price, img } = req.body;
        dbInstance.create_product( name, price, img)
        .then(() => res.sendStatus(200))
        .catch(err => {res.status(500).send({errorMessage: "Could not create the product"});
      console.log(err)
    });
    },

    getProducts: (req, res) => {

        const dbInstance = req.app.get('db');
        console.log(dbInstance);
        dbInstance.get_inventory()
        .then(products => res.status(200).send( products ))
        .catch(err => {res.status(500).send({errorMessage: "server problems"});
        console.log(err)
    })
        
    }

    


}