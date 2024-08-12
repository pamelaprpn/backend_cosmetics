import mongoose from "mongoose";

async function connectaNaDatabase(){

    mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
};

export default connectaNaDatabase;



