import mongoose from 'mongoose';

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://shivam:kholi143anuska@cluster0.qmdo8an.mongodb.net/internship-project').then(()=>console.log("db conn"));
}



//mongodb+srv://shivam:kholi143anuska@cluster0.qmdo8an.mongodb.net/?