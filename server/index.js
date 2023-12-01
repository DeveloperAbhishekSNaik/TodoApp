const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv').config();
const cors = require('cors');

const app = express();
// use express.json to get data in json format
app.use(express.json());
//PORT
const PORT= process.env.PORT || 5500;

// use CORS
app.use(cors());

//lets import routes
const TodoItemRoute = require ('./routes/todoItems');

// lets connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database is connected"))
.catch(err => console.log(err))


app.use('/',TodoItemRoute);



// add port and connect to the server 
app.listen(PORT, () => console.log("server is connected"));