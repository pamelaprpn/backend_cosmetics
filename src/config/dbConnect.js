import mongoose, {mongo} from "mongoose";

async function connectaNaDatabase(){

    mongoose.connect(process.env.DB_CONNECTION);
    return mongoose.connection;
};

export default connectaNaDatabase;



