import express from "express";
import UserRoutes from "./routes/user-route.js";

const app = express();
// app.listen();
app.use(express.json()); //json data fetching, take data and next it
app.use("/", UserRoutes);
// app.use('/',ideRoutes);
app.use((request, response, next) => {
  response.json({ message: "Invalid URL" });
});
const server = app.listen(1234, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server up", server.address().port);
  }
});
