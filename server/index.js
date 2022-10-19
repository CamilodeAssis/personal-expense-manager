//back requisições
const cors = require("cors");

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


(async () => {
    const database = require('./models/db');
    const Item = require('./models/item');
    await database.sync();

   
    const items = await Item.findAll();


    app.route('/getItems').get((req, res) => {
        res.send(items);
    });

})();


app.listen(3000, () => {
    console.log('running on port 3000 http://localhost:3000');
});

