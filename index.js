const express = require('express');
const mongoose = require('mongoose');

const Bird = require('./models/bird.model.js')
const Cat = require('./models/cat.model.js')
const Dog = require('./models/dog.model.js')

const birdRoute = require('./routes/birds.route.js')
const catRoute = require('./routes/cats.route.js')
const dogRoute = require('./routes/dogs.route.js')
const app = express()

//middleware
app.use(express.json())  
app.use(express.urlencoded({extended: false}))  

//routes
app.use("/api/birds", birdRoute);
app.use("/api/cats", catRoute);
app.use("/api/dogs", dogRoute);


app.get('/', (req, res) => {
    res.send("hi from node api");
});

 
//connect to database
// mongoose.connect("mongodb+srv://enoklid:eKPC8XyhSjEnur21@backenddb.1nxympx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
mongoose.connect("mongodb://localhost:27017/")
.then(() => {
    console.log("connected to database!")
    app.listen(3000, () => {
        console.log('server is runnning on port 3000');
    });
})
.catch(() => {
    console.log("connected failed!")
});