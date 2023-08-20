// export const userController = {
//   login(request, response) {
//     const userInfo = request.body;
//     if (userInfo.username == userInfo.password) {
//       response.json({ message: "Welcome " + userInfo.username });
//     } else {
//       response.json({ message: "Invalid username or password" });
//     }
//     response.json({ message: "Login" });
//   },
//   register(request, response) {
//     response.json({ message: "register" });
//   },
//   profile(request, response) {
//     const username = request.params.username;
//     console.log("All params are: ", username);
//     response.json({ message: username + "profile" });
//   },
//   changePassword(request, response) {
//     response.json({ message: "password changed" });
//   },
// };

import { UserModel } from "../db/models/user-schema.js";
import { Hashing } from "../utils/encryption.js";
const controllers = {
    login(request, response){
        const data=request.body;
        const doc = UserModel.findOne({"email": data.email}).exec();
        if (doc && doc._id){
            const plainpwd = data.password;
            const dbpwd = doc.password;
            if(Hashing.Comparepwd(plainpwd, dbpwd)){
                response.json({message:"Welcome back,"+ doc.name});
            }else{
                response.json({message:"Invalid password or email"});
            }
        }else{
            response.json({message:"Invalid email"});
        }
        // console.log("All info: ",data.username);
        // response.json({ message: data.username+"login" });
    },
    async register(request, response){
        const userData=request.body;
        userData.password=(Hashing.Hashpwd(userData.password));
        const doc = await UserModel.create(userData);
        try{
        if(doc && doc._id){
            response.json({message:"Profile seen successfully"});
        }else{
            response.json({message:"failed to create profile"});
        }}catch(err){
            console.error("Error found is : ",err);
            response.json({message:"profile error"});
        }
        // const username = request.params.username;
        // console.log("All info: ",username);
        // response.json({ message: username + "profile"});
    },
    images(request, response){
        const image=request.params.image;
        console.log("All info: ",image);
        response.json({ message: image + " images"});
    },
};
export default controllers;