const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri ='mongodb+srv://lakru99:lakru99@cluster0.jyy6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async()=>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }catch(error){
        console.log('MongoDB ERROR');
    }
}

connect();

const server=app.listen(port, host, ()=>{
    console.log(`node server is listning to ${server.address().port}`)
});
app.use('/api', router)