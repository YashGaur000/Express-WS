// import mongoose from "mongoose";

// const URL="mongodb+srv://Yash-Gaur-0:<password>@cluster0.nhnhdzb.mongodb.net/?retryWrites=true&w=majority"
// const promise = mongoose.connect(URL);
// promise.then(()=>{
//     console.log("connection established");
// }).catch((e)=>{
//     console.log("connection failed");
// })

const URL ="mongodb+srv://Yash0:Yash123@mycluster.lfv0ulc.mongodb.net/userdb?retryWrites=true&w=majority"
import mongoose from "mongoose";
const promise= mongoose.connect(URL);
promise.then(data=>{
    console.log("database connection established");
}).catch((e)=>{
    console.log("error",e);
})
export default mongoose;