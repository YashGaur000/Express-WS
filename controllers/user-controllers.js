// export const userController = {
//   login(request, response) {
//     const userInfo = request.body;
//     if (userInfo.username==userInfo.password){
//       response.json({ message: 'Welcome' +userInfo.username});  
//     }else{
//       response.json({ message:"Invalid username or password"});
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


