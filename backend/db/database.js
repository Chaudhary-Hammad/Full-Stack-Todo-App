import mongoose from 'mongoose';


const Connection = async () => {
    const URL = `mongodb+srv://chaudharyhammad504:Hammad89@cluster0.zqrmb6d.mongodb.net/`
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('database connected succesfully')
    } catch (error) {
        console.log('error from connection', error.message)
    }
}
export default Connection