

module.exports = {
    getAllHouses: (req,res) => {
        const db = req.app.get("db");
        db.get_houses().then(dbRes =>{
            res.send(dbRes);
        })
        .catch((error) => console.log("Error on getAllHouses in controller", error));
    },
    addNewHouse: (req,res) => {
        const db = req.app.get("db");
        let {property_name, address, city, state, zip_code} = req.body;
        db.create_house([property_name, address, city, state, zip_code])
        .then( () => {
            res.sendStatus(200);
        })
        .catch((error) => console.log("Error in add house in controller", error));
    },
    deleteHouse: (req, res) => {
        const db = req.app.get("db");
        let {house_id} = req.params;

        db.delete_house(house_id)
        .then( () => {
            res.sendStatus(200);
        })
        .catch((error) => console.log("Error in delete house in controller", error));
    }
}