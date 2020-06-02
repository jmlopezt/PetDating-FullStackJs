const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const exist = whiteList.some( domain => domain === origin);
        if (exist) {
            callback(null, true);
        } else{
            callback(new Error('Does not allowed by CORS'));
        }
    }
}


app.use(cors());
//app.use(cors(corsOptions));

mongoose.Promise = global.Promise;
const uri = "mongodb+srv://juan:juan@cluster0-y7cah.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());



app.listen(4000, ()=>{
    console.log("Server listening")
})