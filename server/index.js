//back requisições
const cors = require("cors");

const express = require('express');
const { format } = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


(async () => {
    const database = require('./models/db');
    const Item = require('./models/item');
    await database.sync();


    
    app.route('/getItems').get(async(req, res) => {
        const items = await Item.findAll({
        });

        res.send(items);
    });

    


    app.route('/createItem').post( async (req, res) => {
        try {
            const { date, title, category, value } = req.body;

            const newItem = await Item.create({
                date: date,
                title: title,
                category: category,
                value: value,
            });
            res.status(200).json({ newItem })
        } catch (error) {
            res.status(400).json({ error })
        }


    });

})();


app.listen(3000, () => {
    console.log('running on port 3000 http://localhost:3000');

});

